import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent {

  @Output() dataEvent = new EventEmitter<any>();
  @Input() taskData: any;
  errorMessage: any;

  constructor(
    private dataService: DataService
  ) { }

  sendData() {
    this.dataEvent.emit(open);
  }
  delete() {
    let status = this.dataService.deleteTask(this.taskData)
    if (status) {
      this.errorMessage = "Task Deleted"
      setTimeout(() => {
        this.sendData();
      }, 2000);
    }
  }
}
