import { Component } from '@angular/core';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet],
  template: `
    <app-navbar />
    <main class="max-w-7xl mx-auto px-4 py-6">
      <router-outlet />
    </main>
  `,
})
export class AppComponent { }
