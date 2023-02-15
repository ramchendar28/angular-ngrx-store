import { Action } from '@ngrx/store'

//types of actions

export enum ActionTypes {
  isLoading = 'isLoading',
  login = 'login',
  loginSuccess = 'loginSuccess'
}

//Action creators

export class IsLoadingAction implements Action {
  readonly type: string = ActionTypes.isLoading
  constructor(public payload: boolean) { }
}

export class loginAction implements Action {
  readonly type: string = ActionTypes.login
  constructor(public payload?: any) { }
}

export class loginActionSuccess implements Action {
  readonly type: string = ActionTypes.loginSuccess
  constructor(public payload: string) { }
}

//Feature Action type

export type actionType = IsLoadingAction | loginAction | loginActionSuccess;
