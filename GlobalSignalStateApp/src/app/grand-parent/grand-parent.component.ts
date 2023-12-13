import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from '../parent/parent.component';
import { NumbersService } from '../numbers.service';

@Component({
  selector: 'app-grand-parent',
  standalone: true,
  imports: [ParentComponent, CommonModule],
  templateUrl: './grand-parent.component.html',
  styleUrl: './grand-parent.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GrandParentComponent {
  numbers = this.numbersService.values;

  constructor(private numbersService: NumbersService) { }
}
