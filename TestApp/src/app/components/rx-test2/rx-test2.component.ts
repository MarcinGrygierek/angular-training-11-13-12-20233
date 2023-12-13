import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { filter, interval, of, from, map, take, tap, firstValueFrom, Observable } from 'rxjs';

@Component({
  selector: 'app-rx-test2',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './rx-test2.component.html',
  styleUrl: './rx-test2.component.scss'
})
export class RxTest2Component implements OnInit {
  constructor() { }

  ngOnInit(): void {
    // interval(1000)
    // of(1, 2, 3, 4, 5, 6)
    // from([1, 2, 3, 4, 5, 6])
    // from(new Promise<number>(resolve => {
    //   setTimeout(() => {
    //     resolve(10)
    //   }, 1000)
    // }
    // ))
    //   .pipe(
    //     tap(el => console.log('TAP', el)),
    //     filter(el => el % 2 === 0),
    //     map(el => el ** 2),
    //     take(3)
    //   )
    //   .subscribe(val => {
    //     console.log(val);
    //   });

    const obs = new Observable<number>(observer => {
        observer.next(10000)
    })

    const value = firstValueFrom(obs).then(val => console.log(val));
  }
}
