import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './views/welcome-page/welcome-page.component';
import { AttendanceLogComponent } from './views/attendance-log/attendance-log.component';
import { SettingsComponent } from './views/settings/settings.component';
import { LoginComponent } from './views/login/login.component';

const routes: Routes = [
  { path: '', component: WelcomePageComponent },
  { path: 'attendance-log', component: AttendanceLogComponent, title: 'Attendance Log' },
  { path: 'settings', component: SettingsComponent, title: 'Settings' },
  { path: 'login', component: LoginComponent, title: 'Login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
