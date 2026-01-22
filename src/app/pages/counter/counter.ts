import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'counter-component',
  template: `
    <h1>Contador</h1>

    <h3>{{ counter() }}</h3>

    <div class="buttons-wrapper">
      <button class="btn btn-increment" (click)="increment(1)">Increment</button>
      <button class="btn btn-decrement" (click)="decrement(1)">Decrement</button>
      @if( counter() >= 5 ){
      <button class="btn btn-reset" (click)="reset()">Reset</button>

      }
    </div>
  `,
  styleUrl: './counter.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent {
  counter = signal(0);

  increment(value: number) {
    this.counter.update((currentValue) => currentValue + value);
  }

  decrement(value: number) {
    if (this.counter() <= 0) return;

    this.counter.update((currentValue) => currentValue - value);
  }

  reset() {
    this.counter.set(0);
  }
}
