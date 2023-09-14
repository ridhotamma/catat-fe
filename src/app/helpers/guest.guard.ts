import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { selectAccessToken } from '../store/selectors/auth.selector';
import { Store } from '@ngrx/store';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GuestGuard implements CanActivate {
  constructor(
    private router: Router,
    private store: Store
  ) {}

  canActivate() {
    return this.store.select(selectAccessToken).pipe(
      take(1),
      map((accessToken) => {
        if (accessToken) {
          this.router.navigate(['/']);
          return false;
        }
        return true;
      })
    );
  }
}
