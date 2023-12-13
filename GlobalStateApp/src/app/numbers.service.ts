import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NumbersService {
  private _values = new BehaviorSubject<number[]>([]);
  values = this._values.asObservable();

  addRandomNumber() {
    const currentValues = this._values.getValue();
    const newNumber = Math.round(Math.random() * 1000);
    this._values.next([...currentValues, newNumber]);
  }

  constructor() { }
}
