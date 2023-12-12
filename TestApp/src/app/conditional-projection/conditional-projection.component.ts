import { Component } from '@angular/core';

@Component({
  selector: 'app-conditional-projection',
  standalone: true,
  imports: [],
  templateUrl: './conditional-projection.component.html',
  styleUrl: './conditional-projection.component.scss'
})
export class ConditionalProjectionComponent {
  isVisible = false;

  toggle() {
    this.isVisible = !this.isVisible;
  }
}
