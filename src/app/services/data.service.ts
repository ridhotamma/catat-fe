import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

type BinaryFile = ArrayBuffer | string | null;

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private capturedImageSubject = new BehaviorSubject<string | null>(null);
  private binaryImageSubject = new BehaviorSubject<BinaryFile>(null);
  private fileImageSubject = new BehaviorSubject<File | null>(null);

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

  setBinaryImage(binaryFile: BinaryFile): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      try {
        this.binaryImageSubject.next(binaryFile);
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  }

  setFileImage(file: File): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      try {
        this.fileImageSubject.next(file);
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  }

  getFileImage(): Observable<File | null> {
    return this.fileImageSubject.asObservable();
  }

  getBinaryImage(): Observable<BinaryFile> {
    return this.binaryImageSubject.asObservable();
  }

  getCapturedImage(): Observable<string | null> {
    return this.capturedImageSubject.asObservable();
  }

  destroyCapturedImage(): void {
    this.capturedImageSubject = new BehaviorSubject<string | null>(null);
  }
}
