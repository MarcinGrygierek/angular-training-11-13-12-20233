import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-detection-test',
  standalone: true,
  imports: [],
  templateUrl: './detection-test.component.html',
  styleUrl: './detection-test.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetectionTestComponent {
  @Input()
  value!: number;

  @Input()
  values: number[] = [];

  @Output()
  onNewValue = new EventEmitter();

  randomValue = Math.round(Math.random() * 100);

  getRandomValue() {
    this.randomValue = Math.round(Math.random() * 100);
  }

  addValueFromParent() {
    this.onNewValue.emit();
  }
}
