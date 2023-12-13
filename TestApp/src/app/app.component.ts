import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NumbersComponent } from './components/numbers/numbers.component';
import { TestButtonComponent } from './components/test-button/test-button.component';
import { SignalNumbersComponent } from './components/signal-numbers/signal-numbers.component';
import { DirectivesOldComponent } from './components/directives-old/directives-old.component';
import { NewDirectivesComponent } from './components/new-directives/new-directives.component';
import { LifecyclesContainerComponent } from './components/lifecycles-container/lifecycles-container.component';
import { DetectionTestComponent } from './components/detection-test/detection-test.component';
import { DetectionContainerComponent } from './components/detection-container/detection-container.component';
import { PageWrapperComponent } from './components/page-wrapper/page-wrapper.component';
import { LifecyclesComponent } from './components/lifecycles/lifecycles.component';
import { ConditionalProjectionComponent } from './components/conditional-projection/conditional-projection.component';
import { TemplateVariableParentComponent } from './components/template-variable-parent/template-variable-parent.component';
import { PipesTestComponent } from './components/pipes-test/pipes-test.component';
import { TemplateDrivenFormComponent } from './components/template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { RxTestComponent } from './components/rx-test/rx-test.component';
import { RxTest2Component } from './components/rx-test2/rx-test2.component';
import { UserDataComponent } from './components/user-data/user-data.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { SubjectTestComponent } from './components/subject-test/subject-test.component';

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
    ReactiveFormComponent,
    RxTestComponent,
    RxTest2Component,
    UserDataComponent, 
    UserDetailsComponent,
    SubjectTestComponent
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
