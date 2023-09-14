import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environment';

export interface AttendanceRequestPayload {
    selfie_image?: Blob | ArrayBuffer | string | null
    latitude?: number
    longitude?: number
    notes: string
}

@Injectable({
    providedIn: 'root'
})

export class AttendanceRequestService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  clockIn(payload: AttendanceRequestPayload | FormData): Observable<any> {
    return this.http.post(this.apiUrl + '/attendance_requests/clock_in', payload);
  }

  clockOut(): Observable<any> {
    return this.http.post(this.apiUrl + '/attendance_request/clock_out', {});
  }

}
