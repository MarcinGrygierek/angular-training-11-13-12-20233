import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../types';

@Component({
  selector: 'app-single-task',
  standalone: true,
  imports: [],
  templateUrl: './single-task.component.html',
  styleUrl: './single-task.component.scss'
})
export class SingleTaskComponent {
  @Input()
  task!: Task;

  @Input()
  index!: number;

  @Output()
  onDelete = new EventEmitter<number>();

  deleteTask(indexToDelete: number) {
    this.onDelete.emit(indexToDelete);
  }
}
