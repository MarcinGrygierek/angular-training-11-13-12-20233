import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetectionTestObjectComponent } from './detection-test-object.component';

describe('DetectionTestObjectComponent', () => {
  let component: DetectionTestObjectComponent;
  let fixture: ComponentFixture<DetectionTestObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetectionTestObjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetectionTestObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
