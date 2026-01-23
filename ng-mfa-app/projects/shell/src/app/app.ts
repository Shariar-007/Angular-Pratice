import { Component, signal } from '@angular/core';
import {RouterModule, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-shell-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('shell');
}
