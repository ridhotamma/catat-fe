import { Component, OnDestroy, OnInit } from '@angular/core';
import { AttendanceRequestPayload, AttendanceRequestService } from 'src/app/services/attendance-request.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-attendance-request',
  templateUrl: './attendance-request.component.html',
  styleUrls: ['./attendance-request.component.scss'],
})
export class AttendanceRequestComponent implements OnInit, OnDestroy {
  notes: string = '';
  selfieImage: string | null = '';
  fileImage: File | null = null;

  constructor(
    private dataService: DataService,
    private attendanceRequestService: AttendanceRequestService
  ) {}

  ngOnInit(): void {
    this.dataService.getCapturedImage().subscribe((image) => {
      this.selfieImage = image;
    });
    this.dataService.getFileImage().subscribe((file) => {
      this.fileImage = file
    })
  }

  ngOnDestroy(): void {
    this.dataService.destroyCapturedImage();
  }

  isRequestButtonDisabled(): boolean {
    return this.notes === '' || !this.selfieImage;
  }

  submitRequest(): void {
    const formData: any = new FormData()

    formData.set('notes', this.notes)
    formData.set('latitude', 37.7749)
    formData.set('longitude', -122.4194)
    formData.set('selfie_image', this.fileImage)

    this.attendanceRequestService.clockIn(formData).subscribe({
      next: (v) => console.log({ v }),
      error: (e) => console.log({ e }),
      complete: () => console.info('complete')
    })
  }
}
