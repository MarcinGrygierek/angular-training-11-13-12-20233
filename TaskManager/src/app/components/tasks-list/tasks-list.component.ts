import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleTaskComponent } from '../single-task/single-task.component';
import { TaskService } from '../../services/task.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  imports: [SingleTaskComponent, CommonModule],
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksListComponent {
  tasks = this.taskService.tasks.pipe(
    tap(tasks => console.log(`Aktualizacja elementów tablicy, nowa ilość - ${tasks.length}`))
  );

  constructor(private taskService: TaskService) {}
}
