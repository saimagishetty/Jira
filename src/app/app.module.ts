import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskDashboardComponent } from './Components/task-dashboard/task-dashboard.component';
import { AddTaskComponent } from './Components/add-task/add-task.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskViewComponent } from './Components/task-view/task-view.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskDashboardComponent,
    AddTaskComponent,
    NavBarComponent,
    TaskViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
