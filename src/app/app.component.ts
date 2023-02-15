import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as globalState from './global.state';
import * as appState from './ngrx-store/app.state';
import * as appActions from './ngrx-store/app.actions';
import { HttpClient } from '@angular/common/http';
import { AppService } from './app.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isLoggedIn: boolean;
  isLoading: boolean;
  username: string;
  userList: any = [];

  constructor(
    private _store: Store<globalState.IGlobalState>,
    private appService: AppService
  ) {}
  ngOnInit() {
    this._store.select(appState.usernameSelector).subscribe((payload) => {
      if (payload.length > 0) {
        this.username = payload;
        this.isLoggedIn = true;
        this._store.dispatch(new appActions.IsLoadingAction(false));
      }
    });
    this._store.select(appState.isLoadingStateSelector).subscribe((payload) => {
      this.isLoading = payload;
    });
  }

  Login() {
    this._store.dispatch(new appActions.loginAction());
    this._store.dispatch(new appActions.IsLoadingAction(true));
  }
  getusers() {
    this.appService.getdata().subscribe((res: any) => {
      this.userList = res;
    });
  }
}
