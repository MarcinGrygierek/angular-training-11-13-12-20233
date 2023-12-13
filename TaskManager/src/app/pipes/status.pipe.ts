import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../types';

@Pipe({
  name: 'status',
  standalone: true
})
export class StatusPipe implements PipeTransform {

  transform(value: Task): string {
    switch(value.done) {
      case true: return 'Zakończone';
      case false: return 'W trakcie'
    }
  }

}
