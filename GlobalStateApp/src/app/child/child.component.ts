import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GrandChildComponent } from '../grand-child/grand-child.component';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [GrandChildComponent],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent {

}
