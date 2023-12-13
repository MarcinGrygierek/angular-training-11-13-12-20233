import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetectionTestSingleComponent } from './detection-test-single.component';

describe('DetectionTestSingleComponent', () => {
  let component: DetectionTestSingleComponent;
  let fixture: ComponentFixture<DetectionTestSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetectionTestSingleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetectionTestSingleComponent);
    component = fixture.componentInstance;
    component.item = { id: 12, name: 'test' };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
