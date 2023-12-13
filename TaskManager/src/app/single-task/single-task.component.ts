import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Task, TaskNameChangeReq } from '../types';
import { StatusPipe } from '../status.pipe';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

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

  @Output()
  onDelete = new EventEmitter<number>();

  @Output()
  onDone = new EventEmitter<number>();

  @Output()
  onChange = new EventEmitter<TaskNameChangeReq>();

  isEdit = false;

  constructor(private fb: FormBuilder) {}

  form!: FormGroup;

  ngOnInit(): void {
   this.form = this.fb.group({
     name: [this.task.name, Validators.required]
   }) 
  }

  deleteTask(idToDelete: number) {
    this.onDelete.emit(idToDelete);
  }

  toggleTaskDone(idToChange: number) {
    this.onDone.emit(idToChange);
  }

  toggleEdit() {
    this.isEdit = true;
    // this.form.setValue({
    //   name: this.task.name
    // })
  }

  saveChange() {
    if(!this.form.value.name) return;
    this.onChange.emit({ id: this.task.id, newName: this.form.value.name });
    this.isEdit = false;
  }
}
