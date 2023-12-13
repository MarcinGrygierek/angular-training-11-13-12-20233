import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumbersActionComponent } from './numbers-action.component';

describe('NumbersActionComponent', () => {
  let component: NumbersActionComponent;
  let fixture: ComponentFixture<NumbersActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumbersActionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NumbersActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
