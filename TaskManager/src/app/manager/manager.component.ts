import { ChangeDetectionStrategy, Component, WritableSignal, effect, signal } from '@angular/core';
import { ActionsComponent } from '../actions/actions.component';
import { TasksListComponent } from '../tasks-list/tasks-list.component';
import { SummaryComponent } from '../summary/summary.component';
import { Task } from '../types';

@Component({
  selector: 'app-manager',
  standalone: true,
  imports: [ActionsComponent, TasksListComponent, SummaryComponent],
  templateUrl: './manager.component.html',
  styleUrl: './manager.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ManagerComponent {
  tasks: WritableSignal<Task[]> = signal([]);

  constructor() {
    effect(() => {
      console.log(`Aktualizacja tablicy zadań, nowa ilość elementów: ${this.tasks().length}`);
    })
  }

  addNewTask(taskName: string) {
    const newTask: Task = {
      id: new Date().getTime(),
      done: false,
      name: taskName
    }
    this.tasks.update(prevTasks => [...prevTasks, newTask]);
  }

  deleteTask(idToDelete: number) {
    this.tasks.update(prevTasks => prevTasks.filter((task) => task.id !== idToDelete));
  }

  toggleTaskDone(idToChange: number) {
    this.tasks.update(prevTasks => prevTasks.map(task => {
      if(idToChange === task.id) return {
        ...task,
        done: !task.done
      }
      return task
    }))
  }
}
