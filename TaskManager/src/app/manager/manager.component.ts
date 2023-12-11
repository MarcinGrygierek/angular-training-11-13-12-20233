import { Component } from '@angular/core';
import { ActionsComponent } from '../actions/actions.component';
import { TasksListComponent } from '../tasks-list/tasks-list.component';
import { SummaryComponent } from '../summary/summary.component';
import { Task } from '../types';

@Component({
  selector: 'app-manager',
  standalone: true,
  imports: [ActionsComponent, TasksListComponent, SummaryComponent],
  templateUrl: './manager.component.html',
  styleUrl: './manager.component.scss'
})
export class ManagerComponent {
  tasks: Task[] = [];

  addNewTask(taskName: string) {
    this.tasks.push(taskName);
  }

  deleteTask(indexToDelete: number) {
    this.tasks = this.tasks.filter((task, index) => index !== indexToDelete);
  }
}
