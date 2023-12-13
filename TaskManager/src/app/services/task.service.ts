import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task, TaskNameChangeReq } from '../types';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private _tasks = new BehaviorSubject<Task[]>([]);
  tasks = this._tasks.asObservable();

  addNewTask(taskName: string) {
    const newTask: Task = {
      id: new Date().getTime(),
      done: false,
      name: taskName
    }
    const currentTasks = this._tasks.getValue();
    this._tasks.next([...currentTasks, newTask]);
  }

  deleteTask(idToDelete: number) {
    const currentTasks = this._tasks.getValue();
    this._tasks.next(currentTasks.filter((task) => task.id !== idToDelete));
  }

  toggleTaskDone(idToChange: number) {
    const currentTasks = this._tasks.getValue();
    this._tasks.next(currentTasks.map(task => {
      if(idToChange === task.id) return {
        ...task,
        done: !task.done
      }
      return task
    }))
  }

  changeTaskName({ id, newName}: TaskNameChangeReq) {
    const currentTasks = this._tasks.getValue();
    this._tasks.next(currentTasks.map(task => {
      if(id === task.id) return {
        ...task,
        name: newName
      }
      return task
    }))
  }
}
