import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { NumbersService } from '../numbers.service';
import { CommonModule } from '@angular/common';
import { map } from 'rxjs';

@Component({
  selector: 'app-grand-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grand-child.component.html',
  styleUrl: './grand-child.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GrandChildComponent {
  lastNumber = this.numbersService.values.pipe(
    map(values => values[values.length - 1])
  );

  constructor(private numbersService: NumbersService) { }
}
