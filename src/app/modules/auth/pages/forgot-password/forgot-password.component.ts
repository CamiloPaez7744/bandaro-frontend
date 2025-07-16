import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {
  email: string = '';

  onRecover() {
    console.log('Send recovery link to:', this.email);
    // Aquí llamas a tu API para enviar el enlace de recuperación
  }
}
