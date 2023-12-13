import { Component, Input, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Task } from '../../types';
import { StatusPipe } from '../../pipes/status.pipe';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-single-task',
  standalone: true,
  imports: [StatusPipe, ReactiveFormsModule],
  templateUrl: './single-task.component.html',
  styleUrl: './single-task.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingleTaskComponent implements OnInit {
  @Input()
  task!: Task;

  isEdit = false;

  constructor(private fb: FormBuilder, private taskService: TaskService) {}

  form!: FormGroup;

  ngOnInit(): void {
   this.form = this.fb.group({
     name: [this.task.name, Validators.required]
   }) 
  }

  deleteTask(idToDelete: number) {
    this.taskService.deleteTask(idToDelete);
  }

  toggleTaskDone(idToChange: number) {
    this.taskService.toggleTaskDone(idToChange);
  }

  toggleEdit() {
    this.isEdit = true;
  }

  saveChange() {
    if(!this.form.value.name) return;
    this.taskService.changeTaskName({ id: this.task.id, newName: this.form.value.name });
    this.isEdit = false;
  }
}
