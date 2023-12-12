import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators, FormBuilder, ValidationErrors } from '@angular/forms';
import { InputErrorsComponent } from '../input-errors/input-errors.component';
import { InputComponent } from '../input/input.component';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    InputComponent
  ],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent {
  constructor(private fb: FormBuilder) {}

  form = this.fb.group({
    login: ['', [Validators.required, Validators.email, Validators.minLength(3)]],
    password: ['', [Validators.required, Validators.minLength(3)]],
  })

  onSubmit() {
    console.log(this.form.value);
  }
}
