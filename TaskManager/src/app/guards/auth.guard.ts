import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { TaskService } from '../services/task.service';

export const authGuard: CanActivateFn = (route, state) => {
  const taskService = inject(TaskService);

  return taskService.tasks().length > 0;
};
