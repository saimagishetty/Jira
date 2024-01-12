import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { getTaskDetails } from 'src/app/models/addTask';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {
  addTaskForm: any;
  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.params['id']) 
    const task =  getTaskDetails(id)
    console.log(task);
    if(task){
      this.addTaskForm = this.fb.group({
        title: [task.title, [Validators.required, Validators.maxLength(50)]],
        priority: [task.priority, [Validators.required]],
        status: [task.status, [Validators.required]],
        due_date: [task.due_date, [Validators.required]],
        id: [task.id],
        description: [task.description, [Validators.required, Validators.maxLength(100)]],
      });
    }
  }
  onSubmit() {
    if (this.addTaskForm.valid) {
      let submission = this.dataService.addTask(this.addTaskForm.value)
      if (submission) {
        this.router.navigate(['/Dashboard']);
      }
    } else {
      this.markFormGroupTouched(this.addTaskForm);
    }
  }
  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

}
