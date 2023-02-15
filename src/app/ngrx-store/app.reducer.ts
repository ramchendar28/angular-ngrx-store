import * as appActions from '../ngrx-store/app.actions'
import * as appStates from '../ngrx-store/app.state'

export function AppReducer(state: appStates.IAppState = appStates.defaultAppState, action: appActions.actionType): appStates.IAppState {
  switch (action.type) {
    case appActions.ActionTypes.isLoading:
      return {
        ...state,
        isLoading: <boolean>action.payload
      }

    case appActions.ActionTypes.loginSuccess:
      return {
        ...state,
        username: <string>action.payload
      }

    default:
      return {
        ...state
      }
  }
}
