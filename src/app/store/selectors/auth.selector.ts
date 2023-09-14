// auth.selectors.ts
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from '../reducers/auth.reducer'

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectUserDetail = createSelector(
  selectAuthState,
  (state) => state.userDetail
);

export const selectAccessToken = createSelector(
  selectAuthState,
  (state) => state.accessToken
);
