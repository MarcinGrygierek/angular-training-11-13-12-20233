import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumbersService } from '../numbers.service';

@Component({
  selector: 'app-grand-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grand-child.component.html',
  styleUrl: './grand-child.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GrandChildComponent {
  lastNumber = computed(() => {
    const values = this.numbersService.values();
    return values[values.length - 1]
  })

  constructor(private numbersService: NumbersService) { }
}
