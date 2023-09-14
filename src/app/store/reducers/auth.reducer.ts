// auth.reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as AuthActions from '../actions/auth.action';

export interface AuthState {
  userDetail: { email: string; fullname: string };
  accessToken: string | null;
  error?: string | null
}

export const initialState: AuthState = {
  userDetail: { email: '', fullname: '' },
  accessToken: null,
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.loginSuccess, (state, { userDetail, accessToken }) => ({
    ...state,
    userDetail,
    accessToken,
    error: null,
  })),
  on(AuthActions.loginFailure, (state, { error }) => ({
    ...state,
    error: error,
  })),
  on(AuthActions.logout, () => initialState)
);
