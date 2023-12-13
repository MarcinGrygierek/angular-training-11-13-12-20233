import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../detection-container/detection-container.component';
import { DetectionTestSingleComponent } from '../detection-test-single/detection-test-single.component';

@Component({
  selector: 'app-detection-test-object',
  standalone: true,
  imports: [DetectionTestSingleComponent],
  templateUrl: './detection-test-object.component.html',
  styleUrl: './detection-test-object.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetectionTestObjectComponent {
  @Input()
  items: Item[] = [];

  @Output()
  onChange = new EventEmitter<number>();

  changeItemName(idToChange: number) {
    this.onChange.emit(idToChange);
  }
}
