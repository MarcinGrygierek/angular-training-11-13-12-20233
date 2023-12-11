import { Component } from '@angular/core';

enum UserRole {
  Admin = 'admin',
  User = 'user',
  Moderator = 'mod'
}

@Component({
  selector: 'app-new-directives',
  standalone: true,
  imports: [],
  templateUrl: './new-directives.component.html',
  styleUrl: './new-directives.component.scss'
})
export class NewDirectivesComponent {
  isVisible = true;

  values = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  userRole = UserRole.Moderator;

  toggle() {
    this.isVisible = !this.isVisible;
  }
}
