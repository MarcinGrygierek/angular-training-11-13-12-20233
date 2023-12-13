import { Injectable, WritableSignal, signal } from '@angular/core';
import { Task, TaskNameChangeReq } from '../types';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private _tasks: WritableSignal<Task[]> = signal([]);
  tasks = this._tasks.asReadonly();

  addNewTask(taskName: string) {
    const newTask: Task = {
      id: new Date().getTime(),
      done: false,
      name: taskName
    }
    this._tasks.update(currentTasks => [...currentTasks, newTask]);
  }

  deleteTask(idToDelete: number) {
    this._tasks.update(currentTasks => currentTasks.filter((task) => task.id !== idToDelete));
  }

  toggleTaskDone(idToChange: number) {
    this._tasks.update(currentTasks => currentTasks.map(task => {
      if(idToChange === task.id) return {
        ...task,
        done: !task.done
      }
      return task
    }))
  }

  changeTaskName({ id, newName}: TaskNameChangeReq) {
    this._tasks.update(currentTasks => currentTasks.map(task => {
      if(id === task.id) return {
        ...task,
        name: newName
      }
      return task
    }))
  }
}
