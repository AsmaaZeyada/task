import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteTaskComponent } from './components/delete-task/delete-task.component';
import { NewTaskComponent } from './components/new-task/new-task.component';
import { ShowTasksComponent } from './components/show-tasks/show-tasks.component';
import { SingleTaskComponent } from './components/single-task/single-task.component';
import { UpdateTaskComponent } from './components/update-task/update-task.component';

const routes: Routes = [
  { path: 'task', component: SingleTaskComponent },
  { path: 'tasks/show/all/:userName', component: ShowTasksComponent },
  { path: 'tasks/add', component: NewTaskComponent },
  { path: 'tasks/delete', component: DeleteTaskComponent },
  { path: 'tasks/update/:id', component: UpdateTaskComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
