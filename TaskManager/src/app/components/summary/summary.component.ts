import { Component, ChangeDetectionStrategy, computed } from '@angular/core';
import { TaskService } from '../../services/task.service';
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
  count = computed(() => this.taskService.tasks().length);

  constructor(private taskService: TaskService) {}
}
