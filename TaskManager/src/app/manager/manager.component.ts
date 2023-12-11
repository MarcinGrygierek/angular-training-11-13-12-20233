import { Component, WritableSignal, effect, signal } from '@angular/core';
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
  tasks: WritableSignal<Task[]> = signal([]);

  constructor() {
    effect(() => {
      console.log(`Aktualizacja tablicy zadań, nowa ilość elementów: ${this.tasks().length}`);
    })
  }

  addNewTask(taskName: string) {
    this.tasks.update(prevTasks => [...prevTasks, taskName]);
  }

  deleteTask(indexToDelete: number) {
    this.tasks.update(prevTasks => prevTasks.filter((task, index) => index !== indexToDelete));
  }
}
