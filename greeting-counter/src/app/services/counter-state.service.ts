
import {Injectable} from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})

export class CounterStateService{
  private count = 0;

  constructor(private logger: LoggerService) {}   // ← injecting a service into a service

  getCount(): number {
    return this.count;
  }

  increment() {
    this.count++;
    this.logger.log(`Count incremented to ${this.count}`);
  }

  reset() {
    this.count = 0;
    this.logger.log('Count reset');
  }
}
