import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateVariableParentComponent } from './template-variable-parent.component';

describe('TemplateVariableParentComponent', () => {
  let component: TemplateVariableParentComponent;
  let fixture: ComponentFixture<TemplateVariableParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateVariableParentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TemplateVariableParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
