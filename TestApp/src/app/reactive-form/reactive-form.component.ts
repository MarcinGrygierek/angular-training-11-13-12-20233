import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators, FormBuilder, ValidationErrors } from '@angular/forms';
import { InputErrorsComponent } from '../input-errors/input-errors.component';
import { InputComponent } from '../input/input.component';
import { Subscription } from 'rxjs';

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
export class ReactiveFormComponent implements OnInit, OnDestroy {
  constructor(private fb: FormBuilder) {}
  
  form = this.fb.group({
    login: ['', [Validators.required, Validators.email, Validators.minLength(3)]],
    password: ['', [Validators.required, Validators.minLength(3)]],
  })

  sub!: Subscription;

  ngOnInit(): void {
    this.sub = this.form.controls.login.valueChanges.subscribe(values => {
      console.log(values);
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
