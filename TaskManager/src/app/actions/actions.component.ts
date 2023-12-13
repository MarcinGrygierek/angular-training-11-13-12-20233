import { Component, EventEmitter, Output } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-actions',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './actions.component.html',
  styleUrl: './actions.component.scss'
})
export class ActionsComponent {
  @Output()
  onCallback = new EventEmitter<string>();

  constructor(private fb: FormBuilder) {}

  form = this.fb.group({
    name: ['', Validators.required]
  })

  addNewTask() {
    if(!this.form.value.name) return;
    this.onCallback.emit(this.form.value.name);
    this.form.reset();
  }
}
