import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalNumbersComponent } from './signal-numbers.component';

describe('SignalNumbersComponent', () => {
  let component: SignalNumbersComponent;
  let fixture: ComponentFixture<SignalNumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalNumbersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignalNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
