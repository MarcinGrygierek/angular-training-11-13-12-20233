import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { TemplateVariableChildComponent } from '../template-variable-child/template-variable-child.component';

@Component({
  selector: 'app-template-variable-parent',
  standalone: true,
  imports: [TemplateVariableChildComponent],
  templateUrl: './template-variable-parent.component.html',
  styleUrl: './template-variable-parent.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TemplateVariableParentComponent implements OnInit, AfterViewInit {
  @ViewChild('child')
  childRef!: TemplateVariableChildComponent;

  @ViewChildren(TemplateVariableChildComponent)
  childrenRefs!: QueryList<TemplateVariableChildComponent>

  ngOnInit(): void {
    // zawartość widoków zagnieżdżonych nie jest dostępna w ngOnInit
    // console.log(this.childRef.value());
  }

  ngAfterViewInit(): void {
    console.log(this.childRef.value());
  }

  randomize() {
   this.childRef.randomize();
  }

  randomizeAll() {
    this.childrenRefs.forEach(el => el.randomize())
  }
}
