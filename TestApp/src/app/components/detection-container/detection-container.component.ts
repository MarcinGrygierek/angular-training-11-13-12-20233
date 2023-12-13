import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DetectionTestObjectComponent } from '../detection-test-object/detection-test-object.component';

export interface Item {
  id: number;
  name: string;
}

@Component({
  selector: 'app-detection-container',
  standalone: true,
  imports: [DetectionTestObjectComponent],
  templateUrl: './detection-container.component.html',
  styleUrl: './detection-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetectionContainerComponent {
  items: Item[] = [];

  addNewItem() {
    const newItem: Item = {
      id: new Date().getTime(),
      name: `Lorem Ipsum ${Math.round(Math.random() * 100)}`
    }
    this.items = [...this.items, newItem];
  }

  changeItemName(idToChange: number) {
    this.items = this.items.map(el => {
      if(el.id === idToChange) return {
        ...el,
        name: `Lorem Ipsum ${Math.round(Math.random() * 100)}`
      }
      return el;
    })
  }
}
