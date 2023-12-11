import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesOldComponent } from './directives-old.component';

describe('DirectivesOldComponent', () => {
  let component: DirectivesOldComponent;
  let fixture: ComponentFixture<DirectivesOldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectivesOldComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DirectivesOldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
