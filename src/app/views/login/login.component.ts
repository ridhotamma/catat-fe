import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Store } from '@ngrx/store';
import { loginFailure, loginSuccess } from 'src/app/store/actions/auth.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private toastr: ToastrService,
    private store: Store
  ) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;

    this.authService.login(email, password).subscribe({
      next: (v) => {
        const userDetail = {
          fullname: `${v.user.first_name} ${v.user.last_name}`,
          email: v.user.email
        }

        const accessToken = v.token

        this.store.dispatch(loginSuccess({ userDetail, accessToken}))

        this.toastr.success(v.message)
        this.router.navigate(['/'])
      },

      error: (e) => {
        this.toastr.error(e.error.error)
        this.store.dispatch(loginFailure({ error: e.error.error }))
      },

      complete: () => console.info('complete'),
    });
  }
}
