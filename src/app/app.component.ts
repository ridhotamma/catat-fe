import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'attendance-system-fe';

  isBottomBarVisible = true;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/login') {
          this.isBottomBarVisible = false;
        } else {
          this.isBottomBarVisible = true;
        }
      }
    });
  }
}
