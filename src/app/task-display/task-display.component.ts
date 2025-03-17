import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-display',
  standalone: true,
  imports: [],
  templateUrl: './task-display.component.html',
  styleUrl: './task-display.component.css',
})
export class TaskDisplayComponent {
  @Input() name?: string;
}
