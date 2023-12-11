import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-actions',
  standalone: true,
  imports: [],
  templateUrl: './actions.component.html',
  styleUrl: './actions.component.scss'
})
export class ActionsComponent {
  @Output()
  onCallback = new EventEmitter<string>();

  addNewTask() {
    const taskName = `Lorem ipsum ${Math.round(Math.random() * 100)}`;
    this.onCallback.emit(taskName);
  }
}
