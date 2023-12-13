import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subject-test',
  standalone: true,
  imports: [],
  templateUrl: './subject-test.component.html',
  styleUrl: './subject-test.component.scss'
})
export class SubjectTestComponent implements OnInit {
  ngOnInit(): void {
    // const subject = new Subject<number>();
    const subject = new BehaviorSubject<number>(0);
    // const subject = new ReplaySubject<number>(1);
    // const subject = new AsyncSubject<number>();

    subject.next(1);

    const sub1 = subject.subscribe(val => console.log('SUBJECT1', val));

    subject.next(2);

    const sub2 = subject.subscribe(val => console.log('SUBJECT2', val));

    subject.next(3);

    // subject.complete(); // niezbędne dla AsyncSubject

    sub1.unsubscribe();
    sub2.unsubscribe();
  }
}
