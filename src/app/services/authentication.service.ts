import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    const credentials = { username, password };
    return this.http.post(this.apiUrl + '/auth/login', credentials);
  }
}
