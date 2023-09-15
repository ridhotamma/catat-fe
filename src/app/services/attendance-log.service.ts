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

export interface AttendanceLog {
  id: number;
  status: Status;
  requested_datetime: RequestedDatetime;
  requested_by: RequestedBy;
  approved_by: ApprovedBy | null;
  notes: string;
  location: Location | null;
  selfie_image_url: string;
}

export interface Status {
  status_name: string;
  status_code: string;
  is_rejected: boolean;
  is_pending: boolean;
  is_approved: boolean;
  is_cancelled: boolean;
}

export interface RequestedDatetime {
  clock_in_datetime: string;
  clock_in_datetime_formatted: string;
  clock_out_datetime: string;
  clock_out_datetime_formatted: string;
}

export interface RequestedBy {
  email: string;
  first_name: string;
  last_name: string;
  user_id: number;
  role: string;
}

export interface ApprovedBy {
  email: string | null;
  first_name: string | null;
  last_name: string | null;
  user_id: number | null;
  role: string | null;
}

export interface Location {
  latitude: number | null;
  longitude: number | null;
}


@Injectable({
  providedIn: 'root',
})
export class AttendanceLogService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  private createHttpParams(params: AttendanceLogParams): HttpParams {
    let httpParams = new HttpParams();

    for (const [key, value] of Object.entries(params)) {
      if (value !== undefined) {
        httpParams = httpParams.set(key, value.toString());
      }
    }

    return httpParams;
  }

  myAttendances(params: AttendanceLogParams): Observable<any> {
    const url = `${this.apiUrl}/attendance_requests`;
    const httpParams = this.createHttpParams(params);
    return this.http.get(url, { params: httpParams });
  }

  allAttendances(params: AttendanceLogParams): Observable<any> {
    const url = `${this.apiUrl}/attendance_request/all`;
    const httpParams = this.createHttpParams(params);
    return this.http.get(url, { params: httpParams });
  }
}
