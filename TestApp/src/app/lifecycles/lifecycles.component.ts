import { Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycles',
  standalone: true,
  imports: [],
  templateUrl: './lifecycles.component.html',
  styleUrl: './lifecycles.component.scss',
})
export class LifecyclesComponent implements OnInit, OnChanges, OnDestroy, DoCheck {
  @Input()
  values: number[] = [];

  private interval!: unknown;

  ngOnInit(): void {
    console.log('INIT');
    this.interval = setInterval(() => {
      // console.log('TICK')
    }, 1000)
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('CHANGES', changes)
  }

  ngOnDestroy(): void {
    console.log('DESTROY')
    clearInterval(this.interval as number);
  }

  ngDoCheck(): void {
    // console.log('CHECKING FOR CHANGES')
  }

}
