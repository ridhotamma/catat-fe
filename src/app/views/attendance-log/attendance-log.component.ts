import { Component, OnInit } from '@angular/core';
import { AttendanceLogService } from 'src/app/services/attendance-log.service';

@Component({
  selector: 'app-attendance-log',
  templateUrl: './attendance-log.component.html',
  styleUrls: ['./attendance-log.component.scss']
})
export class AttendanceLogComponent implements OnInit {
  items: number[] = Array.from({ length: 30 }, (_, index) => index + 1);
  menuItems: { name: string; route: string }[] = [
    { name: 'Request', route: '/attendance-log/request' },
    { name: 'Clock in/Clock out', route: '/attendance-log/clock-time' }
  ];

  constructor(private attendanceLogService: AttendanceLogService) { }

  ngOnInit(): void {
    this.getMyAttendancesLog()
  }

  getMyAttendancesLog() {
    this.attendanceLogService.myAttendances({}).subscribe({
      next: (v) => console.log({ v }),
      error: (e) => console.log({ e }),
      complete: () => console.info('complete')
    })
  }
}

