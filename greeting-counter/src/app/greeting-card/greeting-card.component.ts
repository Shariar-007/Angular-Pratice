
import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-greeting-card',
  templateUrl: './greeting-card.component.html',
  styleUrls: ['./greeting-card.component.css'],
  standalone: false
})

export class GreetingCardComponent{

  @Input() name = 'Angular';
  count = 0;
  @Output() countChange =  new EventEmitter<number>();


  increment(){
    this.count++;
    this.countChange.emit(this.count);
  }

}
