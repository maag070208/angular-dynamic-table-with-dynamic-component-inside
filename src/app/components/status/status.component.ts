import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { STATUS_INPUT } from 'src/app/input/status-input';

@Component({
  selector: 'app-status',
  standalone: true,
  imports: [CommonModule, MatChipsModule, MatIconModule],
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss'],
})
export class StatusComponent {
  // here we inject the STATUS_INPUT token
  public STATUS_INPUT = inject(STATUS_INPUT);

  public get statusColor(): string {
    switch (this.STATUS_INPUT.status) {
      case 'active':
        return 'primary';
      case 'inactive':
        return 'warn';
      case 'pending':
        return 'accent';
      default:
        return 'basic';
    }
  }

  public get statusIcon(): string {
    switch (this.STATUS_INPUT.status) {
      case 'active':
        return 'check_circle';
      case 'inactive':
        return 'cancel';
      case 'pending':
        return 'schedule';
      default:
        return 'help';
    }
  }
}
