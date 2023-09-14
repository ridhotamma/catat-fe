import { Component } from '@angular/core';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent {
  items: number[] = Array.from({ length: 30 }, (_, index) => index + 1);
  constructor() {}
}
