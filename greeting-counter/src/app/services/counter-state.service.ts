
import {Injectable, signal, computed} from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})

export class CounterStateService{
  // private count = 0;
  private countSignal = signal(0); // the reactive container
  readonly count = this.countSignal.asReadonly();
  readonly isEven = computed(() => this.countSignal() % 2 === 0);

  constructor(private logger: LoggerService) {}   // ← injecting a service into a service

  // getCount(): number {
  //   return this.count;
  // }

  // increment() {
  //   this.count++;
  //   this.logger.log(`Count incremented to ${this.count}`);
  // }

  // reset() {
  //   this.count = 0;
  //   this.logger.log('Count reset');
  // }

  increment() {
    this.countSignal.update(c => c + 1);
    this.logger.log(`Count incremented to ${this.countSignal()}`);
  }

  reset() {
    this.countSignal.set(0);
    this.logger.log('Count reset');
  }

}
