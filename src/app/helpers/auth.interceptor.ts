import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { Store } from '@ngrx/store';
import { selectAccessToken } from '../store/selectors/auth.selector';
import { map, take } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService, private store: Store) {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    console.log('INTERCEPTOR IS RUNNING...')
    this.store
      .select(selectAccessToken)
      .pipe(take(1))
      .subscribe((v) => {
        const authToken = v;
        console.log('GETTING AUTH TOKEN', { authToken })
        if (authToken) {
          request = request.clone({
            setHeaders: {
              Authorization: `Bearer ${authToken}`,
            },
          });
        }
      });

    return next.handle(request);
  }
}
