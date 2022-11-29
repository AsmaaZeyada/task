import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, timer } from 'rxjs';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

  image: File | any = "";
  message: string | any = null;
  username:string = 'asmaTask'
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {

    let body = new FormData();
    body.append('image', this.image, this.image.name);
    body.append('content', f.value.content);
    body.append('title', f.value.title);
    body.append('username', this.username);

    this.httpClient.post('https://task.ecmpp.com/api/task/add',
      body
    ).subscribe((res: any) => {
      if (res.success) {
        f.reset();
        this.message = "new task has been added";
        const t = timer(5000);
        t.subscribe((d) => {
          this.message = null;
        });
      } else {
        //error
        this.message = res;
        const t = timer(5000);
        t.subscribe((d) => {
          this.message = null;
        });
      }
    });
  }

  upload(event: any) {
    if (event.target.files.length > 0) {
      this.image = event.target.files[0];
    }
  }

}
