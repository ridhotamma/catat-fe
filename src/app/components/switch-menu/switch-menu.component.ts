import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-switch-menu',
  templateUrl: './switch-menu.component.html',
  styleUrls: ['./switch-menu.component.scss']
})
export class SwitchMenuComponent {
  @Input() menus: { name: string; route: string }[] = [];
  constructor(private router: Router) {}

  activeMenuIndex: number = 0;

  setActiveMenu(index: number): void {
    this.activeMenuIndex = index;
    const selectedMenu = this.menus[index];
    this.router.navigate([selectedMenu.route]);
  }
}
