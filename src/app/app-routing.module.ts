import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskDashboardComponent } from './Components/task-dashboard/task-dashboard.component';
import { AddTaskComponent } from './Components/add-task/add-task.component';

const routes: Routes = [
  { path: '', component: TaskDashboardComponent },
  { path: 'Dashboard', component: TaskDashboardComponent },
  { path: 'Add-Task/:id', component: AddTaskComponent },
  { path: 'Edit-Task/:id', component: AddTaskComponent },
  // { path: '', redirectTo: '/Dashboard', pathMatch: 'full' } // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
