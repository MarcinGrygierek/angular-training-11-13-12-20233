import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { map } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SummaryComponent {
  count = this.taskService.tasks.pipe(
    map(tasks => tasks.length)
  )

  constructor(private taskService: TaskService) {}
}
