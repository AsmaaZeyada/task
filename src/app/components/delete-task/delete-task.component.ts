import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-delete-task',
  templateUrl: './delete-task.component.html',
  styleUrls: ['./delete-task.component.scss']
})
export class DeleteTaskComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(id: any) {
    this.httpClient.delete('https://task.ecmpp.com/api/task/remove/' + id).subscribe((res) => { console.log(res) });
  }

}
