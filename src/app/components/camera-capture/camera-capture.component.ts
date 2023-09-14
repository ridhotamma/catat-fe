import { Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-camera-capture',
  templateUrl: './camera-capture.component.html',
  styleUrls: ['./camera-capture.component.scss'],
})
export class CameraCaptureComponent implements OnDestroy {
  @ViewChild('videoElement') videoElement!: ElementRef;
  capturedImage: string | null = null;
  isCapturing: boolean = false;
  isRetaking: boolean = false;
  isHidingAllBtn: boolean = false;
  mediaStream: MediaStream | null = null;
  isCameraBlocked: boolean = false;

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private dataService: DataService
  ) {}

  ngOnDestroy() {
    this.stopCamera();
  }

  async checkCameraPermission() {
    try {
      const devices = await navigator.mediaDevices.enumerateDevices();
      const cameras = devices.filter((device) => device.kind === 'videoinput');
      this.isCameraBlocked = cameras.length === 0 || cameras[0].deviceId === '';
    } catch (error) {
      this.isCameraBlocked = true;
    }
  }

  async startCamera() {
    await this.checkCameraPermission();

    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        this.isHidingAllBtn = true;

        this.mediaStream = stream;
        this.videoElement.nativeElement.srcObject = stream;
        this.videoElement.nativeElement.play();

        // prevent taking picture when media stream is not ready
        setTimeout(() => {
          this.isCapturing = true;
          this.isHidingAllBtn = false;
        }, 1000);
      })
      .catch((error) => {
        if (error.name === 'NotAllowedError') {
          this.toastr.error('camera permission is blocked');
        }
        this.isCapturing = false;
      });
  }

  captureImage() {
    if (this.mediaStream) {
      const video = this.videoElement.nativeElement;
      const canvas = document.createElement('canvas');
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext('2d');
      ctx?.drawImage(video, 0, 0, canvas.width, canvas.height);
      const dataUrl = canvas.toDataURL('image/png');

      const byteString = atob(dataUrl.split(',')[1]);
      const mimeString = dataUrl.split(',')[0].split(':')[1].split(';')[0];
      const ab = new ArrayBuffer(byteString.length);
      const ia = new Uint8Array(ab);
      for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
      }
      const blob = new Blob([ab], { type: mimeString });

      const fileName = 'selfie_image.png';
      const imageFile = new File([blob], fileName, { type: mimeString });

      this.dataService.setFileImage(imageFile)
      
      this.capturedImage = dataUrl;
      this.stopCamera();
    }
  }

  retakeImage() {
    this.startCamera();
    this.capturedImage = null;
    this.isRetaking = true;
  }

  stopCamera() {
    if (this.mediaStream) {
      this.mediaStream.getTracks().forEach((track) => track.stop());
      this.isCapturing = false;
      this.isRetaking = false;
    }
  }

  closeCamera() {
    this.router.navigate(['/attendance-request']);
  }

  saveImage() {
    this.dataService.setCapturedImage(this.capturedImage);
    this.closeCamera();
  }
}
