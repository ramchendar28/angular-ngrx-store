import { createFeatureSelector, createSelector } from '@ngrx/store'

// strongly typing states

export interface IAppState {
  isLoading: boolean;
  username: string;
}

//default state

export const defaultAppState: IAppState = {
  isLoading: false,
  username: ''
}

//state selectors

const appStateSelector = createFeatureSelector<IAppState>('app');
export const isLoadingStateSelector = createSelector(appStateSelector, state => state.isLoading);
export const usernameSelector = createSelector(appStateSelector, state => state.username);