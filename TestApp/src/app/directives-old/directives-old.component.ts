import { Component } from '@angular/core';

@Component({
  selector: 'app-directives-old',
  standalone: true,
  imports: [],
  templateUrl: './directives-old.component.html',
  styleUrl: './directives-old.component.scss'
})
export class DirectivesOldComponent {
  isVisible = true;

  toggle() {
    this.isVisible = !this.isVisible;
  }
}
