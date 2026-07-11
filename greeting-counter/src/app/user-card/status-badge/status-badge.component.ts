
import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-status-badge',
  templateUrl: './status-badge.component.html',
  styleUrls: ['./status-badge.component.css'],
  standalone: false
})

export class StatusBadge {
  @Input() online = false;
}
