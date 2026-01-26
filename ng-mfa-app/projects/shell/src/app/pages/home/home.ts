import { Component } from '@angular/core';
import { AppContextService } from './../../../../../shared-lib/src/lib/services/app-context.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shell-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent {
  user = '...';
  constructor(private ctx: AppContextService) {
    this.ctx.user$.subscribe((u: any) => (this.user = u));
    console.log(this.user);
  }
}
