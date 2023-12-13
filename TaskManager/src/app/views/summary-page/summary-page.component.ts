import { Component } from '@angular/core';
import { PageContainerComponent } from '../../components/page-container/page-container.component';
import { SummaryComponent } from '../../components/summary/summary.component';

@Component({
  selector: 'app-summary-page',
  standalone: true,
  imports: [PageContainerComponent, SummaryComponent],
  templateUrl: './summary-page.component.html',
  styleUrl: './summary-page.component.scss'
})
export default class SummaryPageComponent {

}
