import { Component } from '@angular/core';
import { PageContainerComponent } from '../../components/page-container/page-container.component';
import { ManagerComponent } from '../../components/manager/manager.component';

@Component({
  selector: 'app-manager-page',
  standalone: true,
  imports: [PageContainerComponent, ManagerComponent],
  templateUrl: './manager-page.component.html',
  styleUrl: './manager-page.component.scss'
})
export default class ManagerPageComponent {

}
