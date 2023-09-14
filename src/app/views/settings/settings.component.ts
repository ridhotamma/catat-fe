import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { logout } from 'src/app/store/actions/auth.action';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  items: number[] = Array.from({ length: 30 }, (_, index) => index + 1);

  constructor(private router: Router, private store: Store) {}

  logout() {
    this.store.dispatch(logout())
    this.router.navigate(['/login'])
  }
}
