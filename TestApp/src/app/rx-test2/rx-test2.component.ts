import { Component, OnInit } from '@angular/core';
import { filter, interval, map, take, tap } from 'rxjs';

@Component({
  selector: 'app-rx-test2',
  standalone: true,
  imports: [],
  templateUrl: './rx-test2.component.html',
  styleUrl: './rx-test2.component.scss'
})
export class RxTest2Component implements OnInit {
  ngOnInit(): void {
    interval(1000)
    .pipe(
      tap(el => console.log('TAP', el)),
      filter(el => el % 2 === 0),
      map(el => el ** 2),
      take(3)
    )
    .subscribe(val => {
      console.log(val);
    });
  }
}
