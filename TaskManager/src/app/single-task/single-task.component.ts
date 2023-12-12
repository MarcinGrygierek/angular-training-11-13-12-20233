import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { Task } from '../types';

@Component({
  selector: 'app-single-task',
  standalone: true,
  imports: [],
  templateUrl: './single-task.component.html',
  styleUrl: './single-task.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingleTaskComponent {
  @Input()
  task!: Task;

  @Output()
  onDelete = new EventEmitter<number>();

  @Output()
  onDone = new EventEmitter<number>();

  deleteTask(idToDelete: number) {
    this.onDelete.emit(idToDelete);
  }

  toggleTaskDone(idToChange: number) {
    this.onDone.emit(idToChange);
  }
}
