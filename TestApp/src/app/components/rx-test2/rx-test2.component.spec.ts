import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxTest2Component } from './rx-test2.component';

describe('RxTest2Component', () => {
  let component: RxTest2Component;
  let fixture: ComponentFixture<RxTest2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxTest2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RxTest2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
