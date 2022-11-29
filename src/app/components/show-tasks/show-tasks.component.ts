import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-show-tasks',
  templateUrl: './show-tasks.component.html',
  styleUrls: ['./show-tasks.component.scss']
})
export class ShowTasksComponent implements OnInit {

  username: string = 'asmaTask';
  tasks: any;

  constructor(private httpClient: HttpClient, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.httpClient.get('https://task.ecmpp.com/api/task/all/' + this.username).subscribe((res: any) => {
      this.tasks = res;
      console.log(this.tasks);
    });
  }

  update(id: any) {
    this.router.navigate(['/tasks/update/' + id]);
  }

}
