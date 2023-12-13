import { ChangeDetectionStrategy, Component  } from '@angular/core';
import { ActionsComponent } from '../actions/actions.component';
import { TasksListComponent } from '../tasks-list/tasks-list.component';
import { SummaryComponent } from '../summary/summary.component';
import { PageContainerComponent } from '../page-container/page-container.component';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-manager',
  standalone: true,
  imports: [ActionsComponent, TasksListComponent, SummaryComponent, PageContainerComponent],
  templateUrl: './manager.component.html',
  styleUrl: './manager.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ManagerComponent {
  constructor(private taskService: TaskService) {}

}
