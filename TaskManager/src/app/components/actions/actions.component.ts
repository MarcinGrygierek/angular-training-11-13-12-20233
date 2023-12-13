import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-actions',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './actions.component.html',
  styleUrl: './actions.component.scss'
})
export class ActionsComponent {
  constructor(private fb: FormBuilder, private taskService: TaskService) { }

  form = this.fb.group({
    name: ['', Validators.required]
  })

  addNewTask() {
    if (!this.form.value.name) return;
    this.taskService.addNewTask(this.form.value.name);
    this.form.reset();
  }
}
