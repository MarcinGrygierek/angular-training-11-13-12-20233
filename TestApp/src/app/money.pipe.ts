import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'money',
  standalone: true
})
export class MoneyPipe implements PipeTransform {

  transform(value: number, currency = 'PLN'): string {
    return `${value.toFixed(2)} ${currency}`
  }

}
