import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'task-management-app';
  defaultData = [
    {
      "title": "Make UI Screems",
      "description": "Complete this task by the end of the day.",
      "priority": "high",
      "status": "open",
      "id": "1",
      "due_date": "2024-01-10"
    },
    {
      "title": "Make Integerations",
      "description": "Research new marketing strategies.",
      "priority": "medium",
      "status": "in progress",
      "id": "2",
      "due_date": "2024-01-15"
    },
    {
      "title": "complete backend",
      "description": "Prepare for the upcoming meeting.",
      "priority": "low",
      "status": "completed",
      "id": "3",
      "due_date": "2024-01-09"
    },
    {
      "title": "Install packages",
      "description": "Send an email to the client.",
      "priority": "high",
      "status": "open",
      "id": "4",
      "due_date": "2024-01-12"
    },
    {
      "title": "Attend the meeting",
      "description": "Update the project documentation.",
      "priority": "medium",
      "status": "in progress",
      "id": "5",
      "due_date": "2024-01-17"
    }
  ]
  ngOnInit() {
    const storedData = localStorage.getItem("task-data");
    if (storedData) {
      // nothing happens
    }
    else {
      const jsonData = JSON.stringify(this.defaultData);
      localStorage.setItem("task-data", jsonData);
    }
  }
}
