import {Component, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
  standalone: false
})

export class UserCard{
  @Input() username = 'Guest';
  @Input() isOnline = false;
  @Output() greted = new EventEmitter<string>();

  sayHi(){
    this.greted.emit(this.username);
  }

}
