import { Component, Signal, WritableSignal, computed, effect, signal, untracked } from '@angular/core';

@Component({
  selector: 'app-signal-numbers',
  standalone: true,
  imports: [],
  templateUrl: './signal-numbers.component.html',
  styleUrl: './signal-numbers.component.scss'
})
export class SignalNumbersComponent {
  values: WritableSignal<number[]> = signal([]);
  valuesLength: Signal<number> = computed(() => this.values().length);
  userName: WritableSignal<string> = signal('Lorem ipsum');

  singleValue: WritableSignal<number> = signal(3);
  doubleValue: Signal<number> = computed(() => this.singleValue() * 2);

  constructor() {
    effect(() => {
      console.log(`Ilość elementów to ${this.valuesLength()}, a user to ${untracked(this.userName)}`);
    });
  }

  addNewValue() {
    this.singleValue.set(Math.round(Math.random() * 10));
    this.values.update(prevValues => [...prevValues, Math.round(Math.random() * 10)]);
  }

}
