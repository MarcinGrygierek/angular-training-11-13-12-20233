import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MoneyPipe } from '../money.pipe';

@Component({
  selector: 'app-pipes-test',
  standalone: true,
  imports: [CommonModule, MoneyPipe],
  templateUrl: './pipes-test.component.html',
  styleUrl: './pipes-test.component.scss'
})
export class PipesTestComponent {
  user = {
    name: 'Marcin',
    lastName: 'Grygierek',
    age: 18,
    height: 290
  }

  testDate = new Date();
  amount = 1232342.23423412;
}
