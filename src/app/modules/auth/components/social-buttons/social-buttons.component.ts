import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-social-buttons',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex justify-center space-x-2 mb-4">
      <button class="bg-white border px-4 py-2 rounded shadow inline-flex items-center">
        <img src="assets/img/google.svg" class="w-5 mr-2" /> Google
      </button>
      <button class="bg-white border px-4 py-2 rounded shadow inline-flex items-center">
        <img src="assets/img/microsoft.svg" class="w-5 mr-2" /> Outlook
      </button>
    </div>
  `,
})
export class SocialButtonsComponent {}
