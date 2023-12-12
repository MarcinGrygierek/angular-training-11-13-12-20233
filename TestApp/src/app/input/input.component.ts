import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InputErrorsComponent } from '../input-errors/input-errors.component';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputErrorsComponent
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  @Input()
  name!: string;

  @Input()
  type!: 'email' | 'text' | 'password';

  @Input()
  group!: FormGroup;
}
