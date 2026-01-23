import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-shell-context',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './context.html',
  styleUrl: './context.scss',
})
export class ContextComponent {
  user = 'Shariar';

  constructor(private router: Router) {}

  sendToRemote() {
    window.dispatchEvent(
      new CustomEvent('shell-context', { detail: { user: this.user } })
    );
  }

  openTodo() {
    this.router.navigate(['/todo'], { queryParams: { user: this.user } });
  }
}
