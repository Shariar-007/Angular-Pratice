import { Component } from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-todo-todo-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './todo-home.html',
  styleUrl: './todo-home.scss',
})
export class TodoHome {
  user: string | null = null;

  private sub = new Subscription();

  constructor(private route: ActivatedRoute) {
    // 1) Query param (initial load)
    this.sub.add(
      this.route.queryParamMap.subscribe((q) => {
        this.user = q.get('user');
      })
    );

    // 2) Live event (no reload)
    window.addEventListener('shell-context', this.onShellContext as EventListener);
  }

  onShellContext = (e: Event) => {
    const detail = (e as CustomEvent<{ user?: string }>).detail;
    if (detail?.user !== undefined) this.user = detail.user;
  };

  ngOnDestroy() {
    window.removeEventListener('shell-context', this.onShellContext as EventListener);
    this.sub.unsubscribe();
  }
}
