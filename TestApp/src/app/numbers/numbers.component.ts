import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-numbers',
  standalone: true,
  imports: [],
  templateUrl: './numbers.component.html',
  styleUrl: './numbers.component.scss'
})
export class NumbersComponent {
  values: number[] = [10, 20, 30];
  value: number = 10;

  @Input()
  first: number = 0;

  @Input()
  second!: number;

  @Input()
  third: string = "";

  @Input()
  secondArray: number[] = [];

}
