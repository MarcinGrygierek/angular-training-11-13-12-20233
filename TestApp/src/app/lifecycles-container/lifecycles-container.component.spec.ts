import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecyclesContainerComponent } from './lifecycles-container.component';

describe('LifecyclesContainerComponent', () => {
  let component: LifecyclesContainerComponent;
  let fixture: ComponentFixture<LifecyclesContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifecyclesContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LifecyclesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
