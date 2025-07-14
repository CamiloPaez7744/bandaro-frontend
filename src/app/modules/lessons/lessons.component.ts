import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-lessons',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './lessons.component.html',
})
export class LessonsComponent {
  lessons = [
    {
      icon: '🎯',
      title: 'Sistema Diamante',
      description: 'Aprende cómo usar los diamantes de la banda para calcular trayectorias exactas.',
    },
    {
      icon: '🌀',
      title: 'Efectos y giros',
      description: 'Domina el uso del retroceso, corrido y giros para controlar la blanca.',
    },
    {
      icon: '📐',
      title: 'Ángulos básicos',
      description: 'Fundamentos de ángulos, rebotes y contacto entre bolas.',
    },
    {
      icon: '🛡️',
      title: 'Técnicas de defensa',
      description: 'Cómo dejar al oponente en mala posición con inteligencia táctica.',
    },
    {
      icon: '🚀',
      title: 'Juegos de ataque',
      description: 'Jugadas de alto impacto con control de tres bandas y bola final.',
    },
  ];
}
