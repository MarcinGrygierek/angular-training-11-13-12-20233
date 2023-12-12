import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Item } from '../detection-container/detection-container.component';

@Component({
  selector: 'app-detection-test-single',
  standalone: true,
  imports: [],
  templateUrl: './detection-test-single.component.html',
  styleUrl: './detection-test-single.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetectionTestSingleComponent {
  @Input()
  item!: Item;
}
