import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateVariableChildComponent } from './template-variable-child.component';

describe('TemplateVariableChildComponent', () => {
  let component: TemplateVariableChildComponent;
  let fixture: ComponentFixture<TemplateVariableChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateVariableChildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TemplateVariableChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
