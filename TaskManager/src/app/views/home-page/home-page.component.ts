import { Component } from '@angular/core';
import { PageContainerComponent } from '../../components/page-container/page-container.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [PageContainerComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
