import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NumbersComponent } from './numbers/numbers.component';
import { TestButtonComponent } from './test-button/test-button.component';
import { SignalNumbersComponent } from './signal-numbers/signal-numbers.component';
import { DirectivesOldComponent } from './directives-old/directives-old.component';
import { NewDirectivesComponent } from './new-directives/new-directives.component';
import { LifecyclesContainerComponent } from './lifecycles-container/lifecycles-container.component';
import { DetectionTestComponent } from './detection-test/detection-test.component';
import { DetectionContainerComponent } from './detection-container/detection-container.component';
import { PageWrapperComponent } from './page-wrapper/page-wrapper.component';
import { LifecyclesComponent } from './lifecycles/lifecycles.component';
import { ConditionalProjectionComponent } from './conditional-projection/conditional-projection.component';
import { TemplateVariableParentComponent } from './template-variable-parent/template-variable-parent.component';
import { PipesTestComponent } from './pipes-test/pipes-test.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NumbersComponent,
    TestButtonComponent,
    SignalNumbersComponent,
    DirectivesOldComponent,
    NewDirectivesComponent,
    LifecyclesContainerComponent,
    DetectionTestComponent,
    DetectionContainerComponent,
    PageWrapperComponent,
    LifecyclesComponent,
    ConditionalProjectionComponent,
    TemplateVariableParentComponent,
    PipesTestComponent,
    TemplateDrivenFormComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  values = [1, 2, 8, 10];

  multipleValues: number[] = [];
  singleValue = 0;

  getRandomNumber() {
    return Math.round(Math.random() * 1000);
  }

  handleButtonClick() {
    this.values.push(Math.round(Math.random() * 1000))
  }

  handleNewValue(val: number) {
    this.values.push(val);
  }

  addNewValue() {
    this.multipleValues = [...this.multipleValues, Math.round(Math.random() * 1000)];
  }

  setNewValue() {
    this.singleValue = Math.round(Math.random() * 1000);
  }
}
