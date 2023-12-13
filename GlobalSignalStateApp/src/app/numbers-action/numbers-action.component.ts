import { Component } from '@angular/core';
import { NumbersService } from '../numbers.service';

@Component({
  selector: 'app-numbers-action',
  standalone: true,
  imports: [],
  templateUrl: './numbers-action.component.html',
  styleUrl: './numbers-action.component.scss'
})
export class NumbersActionComponent {
  constructor(private numbersService: NumbersService) {}

  generateValue() {
    this.numbersService.addRandomNumber();
  }
}
