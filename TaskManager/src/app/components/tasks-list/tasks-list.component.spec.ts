import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksListComponent } from './tasks-list.component';
import { TaskService } from '../../services/task.service';
import { signal } from '@angular/core';
import { Task } from '../../types';

const TASK_TEST: Task = {
  id: 1,
  name: 'Test',
  done: false
}

const taskServiceStub: Partial<TaskService> = {
  tasks: signal([TASK_TEST])
}

describe('TasksListComponent', () => {
  let component: TasksListComponent;
  let fixture: ComponentFixture<TasksListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasksListComponent],
      providers: [{
        provide: TaskService,
        useValue: taskServiceStub
      }]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TasksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render single task from service', () => {
    const nativeElement = fixture.nativeElement;
    const liElements = nativeElement.querySelectorAll('li');
    expect(liElements).toHaveSize(1);
  });

  it('should render single task with correct status and name', () => {
    const nativeElement = fixture.nativeElement;
    const liElement = nativeElement.querySelector('li');
    expect(liElement).toBeDefined();
    
    const name = liElement.querySelector('[data-test="task-name"]');
    const status = liElement.querySelector('[data-test="status"]');

    expect(name.innerText).toEqual(TASK_TEST.name);
    expect(status.innerText).toEqual('[W trakcie]');
  });
});
