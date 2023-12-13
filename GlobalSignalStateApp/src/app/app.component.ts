import { Component } from '@angular/core';
import { GrandParentComponent } from './grand-parent/grand-parent.component';
import { NumbersActionComponent } from './numbers-action/numbers-action.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GrandParentComponent, NumbersActionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
