import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NumbersComponent } from './numbers/numbers.component';
import { TestButtonComponent } from './test-button/test-button.component';
import { SignalNumbersComponent } from './signal-numbers/signal-numbers.component';
import { DirectivesOldComponent } from './directives-old/directives-old.component';
import { NewDirectivesComponent } from './new-directives/new-directives.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NumbersComponent,
    TestButtonComponent,
    SignalNumbersComponent,
    DirectivesOldComponent,
    NewDirectivesComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  values = [1, 2, 8, 10];

  getRandomNumber() {
    return Math.round(Math.random() * 1000);
  }

  handleButtonClick() {
    this.values.push(Math.round(Math.random() * 1000))
  }

  handleNewValue(val: number) {
    this.values.push(val);
  }
}
