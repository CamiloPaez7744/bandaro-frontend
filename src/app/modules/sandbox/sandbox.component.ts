import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sandbox',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.scss'],
})
export class SandboxComponent {
  verticalDivisions = 8;
  horizontalDivisions = 4;
  balls = [
    { color: 'white', top: 48, left: 38 },
    { color: 'yellow', top: 20, left: 20 },
    { color: 'red', top: 40, left: 75 }
  ];

  draggingIndex: number | null = null;

  startDrag(index: number) {
    this.draggingIndex = index;
  }

  onMouseMove(event: MouseEvent) {
    if (this.draggingIndex === null) return;

    const container = (event.currentTarget as HTMLElement).getBoundingClientRect();
    const ball = this.balls[this.draggingIndex];

    const radiusX = (24 / container.width) * 50; // radio de la bola en %
    const radiusY = (24 / container.height) * 50;

    const percentX = ((event.clientX - container.left) / container.width) * 100;
    const percentY = ((event.clientY - container.top) / container.height) * 100;

    ball.left = Math.min(100 - radiusX, Math.max(radiusX, percentX));
    ball.top = Math.min(100 - radiusY, Math.max(radiusY, percentY));
  }

  stopDrag() {
    this.draggingIndex = null;
  }
}
