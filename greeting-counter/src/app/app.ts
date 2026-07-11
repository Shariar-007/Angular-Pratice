import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('greeting-counter');
  userName = "Ada";
  latestCount = 0;
  lastWaved = '';

  onCountChanged(value: number){
    this.latestCount = value;
  }

  onGreeted(value: string){
    this.lastWaved = value;
  }
}
