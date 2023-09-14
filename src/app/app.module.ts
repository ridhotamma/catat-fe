import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { SvgIconComponent } from './components/svg-icon/svg-icon.component';
import { SwitchMenuComponent } from './components/switch-menu/switch-menu.component';
import { ClockTimeComponent } from './views/attendance-log/clock-time/clock-time.component';
import { RequestComponent } from './views/attendance-log/request/request.component';
import { ActionReducer, ActionReducerMap, MetaReducer, StoreModule} from '@ngrx/store';
import { AuthState, authReducer } from './store/reducers/auth.reducer';
import { localStorageSync } from 'ngrx-store-localstorage';
import { AttendanceRequestComponent } from './views/attendance-request/attendance-request.component';
import { CameraCaptureComponent } from './components/camera-capture/camera-capture.component';
import { NotFoundComponent } from './views/not-found/not-found.component';

interface IState {
  auth: AuthState;
}

const reducers: ActionReducerMap<IState> = {
  auth: authReducer,
};

const localStorageConfig = {
  keys: ['auth'],
  rehydrate: true,
};

export function localStorageSyncReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return localStorageSync(localStorageConfig)(reducer);
}

const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

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
    AttendanceRequestComponent,
    CameraCaptureComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastrModule.forRoot(),
    StoreModule.forRoot(reducers, { metaReducers }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
