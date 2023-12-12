import { Component, Input } from '@angular/core';
import { ReactiveFormsModule, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-input-errors',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './input-errors.component.html',
  styleUrl: './input-errors.component.scss'
})
export class InputErrorsComponent {
  @Input()
  control!: AbstractControl | null;

  hasErrors() {
    if (!this.control) return false;
    return this.control.touched && this.control.errors;
  }

  getErrors(): ValidationErrors {
    if (!this.control || !this.control.errors) return {};

    return this.control.errors;
  }
}
