import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-rx-test',
  standalone: true,
  imports: [],
  templateUrl: './rx-test.component.html',
  styleUrl: './rx-test.component.scss'
})
export class RxTestComponent implements OnInit {
  ngOnInit(): void {
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve('Sukces!')
      }, 1000)
    })

    promise.then(res => console.log('Promise', res));

    const observable = new Observable(observer => {
      let counter = 0;
      const interval = setInterval(() => {
        observer.next(`Sukces ${counter++}!`)
      }, 1000)

      return {
        unsubscribe() {
          clearInterval(interval);
        }
      }
    })

    let sub1: Subscription;
    let sub2: Subscription;

    sub1 = observable.subscribe(res => console.log('Observable1', res));

    setTimeout(() => {
      sub2 = observable.subscribe(res => console.log('Observable2', res));
    }, 5000)

    setTimeout(() => {
      sub1.unsubscribe();
      sub2.unsubscribe();
    }, 10000)
  }
}
