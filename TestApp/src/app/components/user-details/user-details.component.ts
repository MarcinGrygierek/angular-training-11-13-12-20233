import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss',
  providers: [UserService]
})
export class UserDetailsComponent {
  userName: string;
  constructor(private userService: UserService) {
    this.userName = this.userService.getUserName();
  }
}
