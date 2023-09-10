import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  items: number[] = Array.from({ length: 30 }, (_, index) => index + 1);

  constructor(private router: Router) {}

  logout() {
    this.router.navigate(['/login'])
  }
}
