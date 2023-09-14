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
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ToastrModule } from 'ngx-toastr';
import { SvgIconComponent } from './components/svg-icon/svg-icon.component';
import { SwitchMenuComponent } from './components/switch-menu/switch-menu.component';
import { ClockTimeComponent } from './views/attendance-log/clock-time/clock-time.component';
import { RequestComponent } from './views/attendance-log/request/request.component';
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
    SvgIconComponent,
    SwitchMenuComponent,
    ClockTimeComponent,
    RequestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
