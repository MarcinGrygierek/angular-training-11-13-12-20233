import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetectionTestComponent } from './detection-test.component';

describe('DetectionTestComponent', () => {
  let component: DetectionTestComponent;
  let fixture: ComponentFixture<DetectionTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetectionTestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetectionTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
