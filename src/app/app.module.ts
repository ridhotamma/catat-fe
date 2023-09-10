import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }  from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RealtimeClockComponent } from './components/realtime-clock/realtime-clock.component';
import { AttendanceButtonComponent } from './components/attendance-button/attendance-button.component';
import { WelcomePageComponent } from './views/welcome-page/welcome-page.component';
import { AttendanceLogComponent } from './views/attendance-log/attendance-log.component';
import { UserManagementComponent } from './views/user-management/user-management.component';
import { SettingsComponent } from './views/settings/settings.component';
import { LoginComponent } from './views/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    RealtimeClockComponent,
    AttendanceButtonComponent,
    WelcomePageComponent,
    AttendanceLogComponent,
    UserManagementComponent,
    SettingsComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
