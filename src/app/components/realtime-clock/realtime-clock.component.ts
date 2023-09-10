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

  ngOnInit(): void {
    interval(1000).subscribe(() => {
      this.currentTime = new Date();
    });
  }
}
