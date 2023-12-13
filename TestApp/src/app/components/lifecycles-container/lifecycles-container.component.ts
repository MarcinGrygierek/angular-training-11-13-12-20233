import { Component } from '@angular/core';
import { LifecyclesComponent } from '../lifecycles/lifecycles.component';

@Component({
  selector: 'app-lifecycles-container',
  standalone: true,
  imports: [
    LifecyclesComponent
  ],
  templateUrl: './lifecycles-container.component.html',
  styleUrl: './lifecycles-container.component.scss'
})
export class LifecyclesContainerComponent {
  values: number[] = [];
  isVisible = false;

  toggle() {
    this.isVisible = !this.isVisible;
  }

  addValueByMutation() {
    this.values.push(Math.round(Math.random() * 100));
  }

  addValueByCopy() {
    this.values = [...this.values, Math.round(Math.random() * 100)];
  }
}
