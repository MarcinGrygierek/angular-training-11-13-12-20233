import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../types';
import { SingleTaskComponent } from '../single-task/single-task.component';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  imports: [SingleTaskComponent],
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksListComponent {
  @Input()
  tasks: Task[] = [];

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
