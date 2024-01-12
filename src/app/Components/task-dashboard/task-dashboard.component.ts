import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-task-dashboard',
  templateUrl: './task-dashboard.component.html',
  styleUrls: ['./task-dashboard.component.scss']
})
export class TaskDashboardComponent {

  columns = ["open", "in progress", "completed"]
  data: any
  currentItem: any;

  constructor(
    private dataService: DataService
  ) { }
  modelView: any;
  modelOpen = false;
  priorityLevel=""
  ngOnInit() {
    if(this.priorityLevel.length==0){
      this.data = this.dataService.Data();
    }
    else{
      let taskdata = this.dataService.Data();
      this.data = this.filterTasksByPriority(taskdata,this.priorityLevel);
    }
    console.log(this.data);
    console.log(this.filterTasksByPriority(this.data,"high"));
  }
  openTask(e: any) {
    this.modelOpen = true
    this.modelView = e
  }
  receiveData(data: any) {
    if (data) {
      this.modelOpen = false
      this.ngOnInit()
    }
  }
  filterTickets(status: string) {
    return this.data.filter((m: any) => m.status == status);
  }
  onDragStart(item: any) {
    this.currentItem = item;
  }
  onDrop(event: any, status: string) {
    console.log('onDrop');
    event.preventDefault();
    const record = this.data.find((m: any) => m.id == this.currentItem.id);
    if (record != undefined) {
      record.status = status;
    }
    let submission = this.dataService.addTask(this.currentItem)
    if (submission) {
      this.currentItem = null;
      this.ngOnInit()
    }

  }
  onDragOver(event: any) {
    event.preventDefault();
  }
  onOptionSelected(e:any){
    this.priorityLevel=e.target.value
    this.ngOnInit()

  }
  filterTasksByPriority(tasks:any, priority:any) {
    return tasks.filter((task:any) => task.priority === priority);
  }

  // Function to sort tasks based on due date
  // sortTasksByDueDate(tasks:any) {
  //   return tasks.sort((a, b) => new Date(a.due_date) - new Date(b.due_date));
  // }
}
