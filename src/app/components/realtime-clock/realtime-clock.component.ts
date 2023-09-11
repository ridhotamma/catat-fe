import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-realtime-clock',
  templateUrl: './realtime-clock.component.html',
  styleUrls: ['./realtime-clock.component.scss']
})
export class RealtimeClockComponent implements OnInit {
  currentTime: Date = new Date();

  constructor() { }

  
  getDaySuffix(day: number): string {
    if (day >= 11 && day <= 13) {
      return 'th';
    }
    switch (day % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  }
  
  ngOnInit(): void {
    interval(1000).subscribe(() => {
      this.currentTime = new Date();
    });
  }
}
