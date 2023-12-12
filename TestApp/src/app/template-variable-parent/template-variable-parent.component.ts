import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TemplateVariableChildComponent } from '../template-variable-child/template-variable-child.component';

@Component({
  selector: 'app-template-variable-parent',
  standalone: true,
  imports: [TemplateVariableChildComponent],
  templateUrl: './template-variable-parent.component.html',
  styleUrl: './template-variable-parent.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TemplateVariableParentComponent {

}
