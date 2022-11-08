import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-testing-with-jasmine-and-karma';

  showMessage(msg: string) {
    return msg;
  }
}
