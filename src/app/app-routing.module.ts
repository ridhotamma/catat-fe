import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './views/welcome-page/welcome-page.component';
import { SettingsComponent } from './views/settings/settings.component';
import { LoginComponent } from './views/login/login.component';
import { ClockTimeComponent } from './views/clock-time/clock-time.component';
import { RequestComponent } from './views/request/request.component';
import { AttendanceLogComponent } from './views/attendance-log/attendance-log.component';

const routes: Routes = [
  { path: '', component: WelcomePageComponent, title: 'Welcome Back' },
  {
    path: 'attendance-log',
    title: 'Attendance Log',
    component: AttendanceLogComponent,
    children: [
      { path: '', redirectTo: 'request', pathMatch: 'full' }, 
      { path: 'request', component: RequestComponent },
      { path: 'clock-time', component: ClockTimeComponent },
    ]
  },
  { path: 'settings', component: SettingsComponent, title: 'Settings' },
  { path: 'login', component: LoginComponent, title: 'Login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
