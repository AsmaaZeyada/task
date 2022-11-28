import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.scss']
})
export class UpdateTaskComponent implements OnInit {

  image: File | any = "";
  taskId: string | any;

  constructor(private httpClient: HttpClient, private route: ActivatedRoute, private router: Router) {
    this.taskId = route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    let body = new FormData();
    body.append('image', this.image, this.image.name);
    body.append('content', f.value.content);
    body.append('title', f.value.title);
    body.append('id', this.taskId);

    this.httpClient.post('https://task.ecmpp.com/api/task/edit',
      body
    ).subscribe((res: any) => {
      if (res.success) {
        this.router.navigate(['/tasks/show/all/userName']);
      } else {
        //error
      }
    });
  }

  upload(event: any) {
    if (event.target.files.length > 0) {
      this.image = event.target.files[0];
    }
  }

}
