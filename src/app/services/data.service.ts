import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SafeUrl } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})

export class DataService {
  private capturedImageSubject = new BehaviorSubject<string | null>(null);

  setCapturedImage(image: string | null): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      try {
        this.capturedImageSubject.next(image);
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  }

  getCapturedImage(): Observable<SafeUrl | null> {
    return this.capturedImageSubject.asObservable();
  }

  destroyCapturedImage(): void {
    this.capturedImageSubject = new BehaviorSubject<string | null>(null)
  }
}
