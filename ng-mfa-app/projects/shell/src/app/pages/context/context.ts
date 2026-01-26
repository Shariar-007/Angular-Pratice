import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AppContextService} from '../../../../../shared-lib/src/lib/services/app-context.service';

@Component({
  selector: 'app-shell-context',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './context.html',
  styleUrl: './context.scss',
})
export class ContextComponent {
  user = 'Shariar';

  constructor(private router: Router, private ctx: AppContextService) {}

  sendToRemote() {
    window.dispatchEvent(
      new CustomEvent('shell-context', { detail: { user: this.user } })
    );
  }

  openTodo() {
    this.router.navigate(['/todo'], { queryParams: { user: this.user } });
  }

  apply() {
    this.ctx.setUser(this.user);
  }
}
