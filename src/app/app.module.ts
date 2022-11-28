import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewTaskComponent } from './components/new-task/new-task.component';
import { UpdateTaskComponent } from './components/update-task/update-task.component';
import { DeleteTaskComponent } from './components/delete-task/delete-task.component';
import { ShowTasksComponent } from './components/show-tasks/show-tasks.component';
import { SingleTaskComponent } from './components/single-task/single-task.component';


@NgModule({
  declarations: [
    AppComponent,
    NewTaskComponent,
    UpdateTaskComponent,
    DeleteTaskComponent,
    ShowTasksComponent,
    SingleTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
