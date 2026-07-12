
import {Component } from '@angular/core';
import {CounterStateService} from './../services/counter-state.service';
import {InstanceIdService} from './../services/Instance-id.service';

@Component({
  selector: 'app-counter-display',
  templateUrl: './counter-display.component.html',
  styleUrls: ['./counter-display.component.css'],
  standalone: false,
  providers: [InstanceIdService]
})

export class CounterDisplayComponent{
  constructor(public counterStateService: CounterStateService, public idService: InstanceIdService) {}
}
