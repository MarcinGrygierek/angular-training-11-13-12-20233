import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputComponent } from './input.component';
import { FormControl, FormGroup } from '@angular/forms';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    component.name = 'test';
    component.type = 'text';
    component.group = new FormGroup({ test: new FormControl() });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
