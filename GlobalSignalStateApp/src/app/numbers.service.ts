import { Injectable, WritableSignal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumbersService {
  private _values: WritableSignal<number[]> = signal([]);
  values = this._values.asReadonly();

  addRandomNumber() {
    const newNumber = Math.round(Math.random() * 1000);
    this._values.update(currentValues => [...currentValues, newNumber]);
  }

  constructor() { }
}
