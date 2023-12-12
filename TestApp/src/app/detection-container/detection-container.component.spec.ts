import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetectionContainerComponent } from './detection-container.component';

describe('DetectionContainerComponent', () => {
  let component: DetectionContainerComponent;
  let fixture: ComponentFixture<DetectionContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetectionContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetectionContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
