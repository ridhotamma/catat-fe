import { Component } from '@angular/core';

@Component({
  selector: 'app-attendance-log',
  templateUrl: './attendance-log.component.html',
  styleUrls: ['./attendance-log.component.scss']
})
export class AttendanceLogComponent {
  items: number[] = Array.from({ length: 30 }, (_, index) => index + 1);
  menuItems: { name: string; route: string }[] = [
    { name: 'Request', route: '/attendance-log/request' },
    { name: 'Clock in/Clock out', route: '/attendance-log/clock-time' }
  ];

  constructor() {}
}

