import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAccessToken, selectUserDetail } from 'src/app/store/selectors/auth.selector';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss'],
})

export class WelcomePageComponent {
  userDetail$ = this.store.select(selectUserDetail)
  
  constructor(private store: Store) {}
}
