import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environment';
import { Store } from '@ngrx/store';
import { logout } from '../store/actions/auth.action';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private store: Store) {}

  login(email: string, password: string): Observable<any> {
    const credentials = { email, password };
    return this.http.post(this.apiUrl + '/auth/login', credentials);
  }

  logout(): void {
    this.store.dispatch(logout())
  }
}
