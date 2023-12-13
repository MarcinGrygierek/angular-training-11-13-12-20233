import { ChangeDetectionStrategy, Component, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleTaskComponent } from '../single-task/single-task.component';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  imports: [SingleTaskComponent, CommonModule],
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksListComponent {
  tasks = this.taskService.tasks;
  
  constructor(private taskService: TaskService) {
    effect(() => {
      console.log(`Aktualizacja elementów tablicy, nowa ilość - ${this.tasks.length}`)
    })
  }
}
