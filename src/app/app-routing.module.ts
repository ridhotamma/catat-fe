import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './views/welcome-page/welcome-page.component';
import { SettingsComponent } from './views/settings/settings.component';
import { LoginComponent } from './views/login/login.component';
import { AttendanceLogComponent } from './views/attendance-log/attendance-log.component';
import { RequestComponent } from './views/attendance-log/request/request.component';
import { ClockTimeComponent } from './views/attendance-log/clock-time/clock-time.component';
import { AuthGuard } from './helpers/auth.guard';
import { GuestGuard } from './helpers/guest.guard';
import { AttendanceRequestComponent } from './views/attendance-request/attendance-request.component';
import { CameraCaptureComponent } from './components/camera-capture/camera-capture.component';
import { NotFoundComponent } from './views/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomePageComponent,
    title: 'Welcome Back',
    canActivate: [() => inject(AuthGuard).canActivate()],
  },
  {
    path: 'attendance-request',
    component: AttendanceRequestComponent,
    title: 'Attendance Request',
    canActivate: [() => inject(AuthGuard).canActivate()],
    children: [
      {
        title: 'Camera Capture',
        path: 'camera-capture',
        component: CameraCaptureComponent,
      },
    ],
  },

  {
    path: 'attendance-log',
    title: 'Attendance Log',
    component: AttendanceLogComponent,
    canActivate: [() => inject(AuthGuard).canActivate()],
    children: [
      { path: '', redirectTo: 'request', pathMatch: 'full' },
      { path: 'request', title: 'Request List', component: RequestComponent },
      {
        path: 'clock-time',
        title: 'List Clock In and Clock out',
        component: ClockTimeComponent,
      },
    ],
  },
  {
    path: 'settings',
    component: SettingsComponent,
    title: 'Settings',
    canActivate: [() => inject(AuthGuard).canActivate()],
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login',
    canActivate: [() => inject(GuestGuard).canActivate()],
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
