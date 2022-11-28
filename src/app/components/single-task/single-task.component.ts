import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-task',
  templateUrl: './single-task.component.html',
  styleUrls: ['./single-task.component.scss']
})
export class SingleTaskComponent implements OnInit {

  id: string = "123";

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.delete('https://task.ecmpp.com/api/task/Show/' + this.id).subscribe((res) => { console.log(res) });
  }

}
