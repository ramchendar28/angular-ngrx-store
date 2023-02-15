import { Injectable } from '@angular/core'
import { Actions, Effect, ofType } from '@ngrx/effects'
import { AppService } from '../app.service'
import * as appActions from '../ngrx-store/app.actions'
import { mergeMap, map } from 'rxjs/operators'

@Injectable()
export class AppEffect {

  constructor(private _appService: AppService, private _actions: Actions) { }

  @Effect()
  watchLoginAction = this._actions.pipe(
    ofType(appActions.ActionTypes.login),
    mergeMap(action => this._appService.Login().pipe(
      map(username => new appActions.loginActionSuccess(username))
    ))
  )
}