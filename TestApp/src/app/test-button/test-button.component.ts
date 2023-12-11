import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-test-button',
  standalone: true,
  imports: [],
  templateUrl: './test-button.component.html',
  styleUrl: './test-button.component.scss'
})
export class TestButtonComponent {
  @Output() onClick = new EventEmitter();
  @Output() onNewValue = new EventEmitter<number>();

  handleButtonClick() {
    this.onClick.emit();
  }

  handleNewValue() {
    this.onNewValue.emit(Math.round(Math.random() * 1000));
  }
}
