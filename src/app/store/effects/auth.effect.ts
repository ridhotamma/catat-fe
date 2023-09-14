// auth.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap, switchMap, catchError } from 'rxjs/operators';
import { loginSuccess, login, loginFailure } from '../actions/auth.action';
import { of } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      switchMap(({ email, password }) =>
        this.authService.login(email, password).pipe(
          switchMap(({ userDetail, accessToken }) => [
            loginSuccess({ userDetail, accessToken }),
          ]),
          catchError((error) => of(loginFailure({ error: 'Authentication failed' })))
        )
      )
    )
  );
}
