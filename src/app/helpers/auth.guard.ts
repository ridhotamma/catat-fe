import { Injectable, OnDestroy } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { selectAccessToken } from '../store/selectors/auth.selector';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})

export class AuthGuard implements CanActivate, OnDestroy {
  private accessTokenSubscription: Subscription | null = null;

  constructor(
    private authService: AuthService,
    private router: Router,
    private store: Store
  ) {}

  canActivate(): boolean {
    return this.checkAccessTokenValidity();
  }

  private checkAccessTokenValidity(): boolean {
    const accessToken$ = this.store.select(selectAccessToken);

    this.accessTokenSubscription = accessToken$.pipe(
      tap((accessToken) => {
        if (!this.isValidAccessToken(accessToken)) {
          this.authService.logout();
          this.router.navigate(['/login']);
        }
      })
    ).subscribe();

    return true;
  }

  private isValidAccessToken(accessToken: string | null): boolean {
    if (accessToken) {
      const tokenParts = accessToken.split('.');
      const payload = JSON.parse(atob(tokenParts[1]));

      if (payload && payload.exp) {
        const expirationTimestamp = payload.exp * 1000;
        const currentTimestamp = new Date().getTime();

        return currentTimestamp < expirationTimestamp;
      }
    }

    return false;
  }

  ngOnDestroy(): void {
    if (this.accessTokenSubscription) {
      this.accessTokenSubscription.unsubscribe();
    }
  }
}
