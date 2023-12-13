import { ChangeDetectionStrategy, Component, WritableSignal, signal } from '@angular/core';

@Component({
  selector: 'app-template-variable-child',
  standalone: true,
  imports: [],
  templateUrl: './template-variable-child.component.html',
  styleUrl: './template-variable-child.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TemplateVariableChildComponent {
  value: WritableSignal<number> = signal(0);

  public randomize() {
    this.value.set(Math.round(Math.random() * 100));
  }
}
