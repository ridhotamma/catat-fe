import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environment';

export interface AttendanceLogParams {
  month?: number;
  year?: number;
  page?: number;
  per_page?: number;
}

@Injectable({
  providedIn: 'root',
})
export class AttendanceLogService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  myAttendances(params: AttendanceLogParams): Observable<any> {
     let httpParams = new HttpParams();

     Object.entries(params).forEach(([key, value]) => {
       if (value !== undefined) {
         httpParams = httpParams.set(key, value.toString());
       }
     });
 
     const url = this.apiUrl + '/attendance_requests';
 
     return this.http.get(url, { params: httpParams });
  }

  allAttendances(params: AttendanceLogParams): Observable<any> {
    let httpParams = new HttpParams();
     
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined) {
        httpParams = httpParams.set(key, value.toString());
      }
    });

    return this.http.get(this.apiUrl + '/attendance_request/all');
  }
}
