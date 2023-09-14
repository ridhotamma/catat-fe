import { Component, OnDestroy, OnInit } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-attendance-request',
  templateUrl: './attendance-request.component.html',
  styleUrls: ['./attendance-request.component.scss']
})

export class AttendanceRequestComponent implements OnInit, OnDestroy {
  notes: string = '';
  selfieImage: SafeUrl | null = ''
  
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getCapturedImage().subscribe((image) => {
      this.selfieImage = image;
    });
  }

  ngOnDestroy(): void {
    this.dataService.destroyCapturedImage()
  }
  
  isRequestButtonDisabled(): boolean {
    return this.notes === '' || !this.selfieImage;
  }

  submitRequest(): void {
    console.log('Notes:', this.notes);
    console.log('Selfie Image:', this.selfieImage);
  }
}
