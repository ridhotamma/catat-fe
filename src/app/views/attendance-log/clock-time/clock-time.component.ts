import { Component } from '@angular/core';

@Component({
  selector: 'app-clock-time',
  templateUrl: './clock-time.component.html',
  styleUrls: ['./clock-time.component.scss']
})
export class ClockTimeComponent {
  items: number[] = Array.from({ length: 30 }, (_, index) => index + 1);
}
