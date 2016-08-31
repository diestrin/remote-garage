// lib imports
import {Injectable} from '@angular/core';
import {ReplaySubject} from 'rxjs/ReplaySubject';
import {User} from 'nativescript-plugin-firebase';
// src imports
import {FirebaseService} from '../network/firebase.service';
import {Reducer, IReducerAction, IReduceCases} from '../reducer/reducer';

export enum UserActions {
  LOGIN,
  LOGOUT
};

export interface IUserAction extends IReducerAction {
  type: UserActions;
  payload?: any;
}

export interface IUserState {
  auth: boolean;
  user: User;
}

export const INITIAL_USER_STATE: IUserState = {
  auth: false,
  user: null
};

@Injectable()
export class UserService extends Reducer<IUserState> {
  public dispatcher: ReplaySubject<IUserAction>;

  protected cases: IReduceCases<IUserState> = {
    [UserActions.LOGIN]: UserService.login,
    [UserActions.LOGOUT]: UserService.logout
  };

  private static login(state: IUserState, action: IUserAction): IUserState {
    return Object.assign({}, state, {auth: true, user: action.payload});
  }

  private static logout(state: IUserState): IUserState {
    return Object.assign({}, state, {auth: false, user: null});
  }

  constructor(private firebase: FirebaseService) {
    super(INITIAL_USER_STATE);
  }

  public doLogin(): void {
    this.firebase.login()
    .then(user => {
      console.log('firebase.login success');
      this.dispatcher.next({
        type: UserActions.LOGIN,
        payload: user
      });
    }, () => {
      console.log('firebase.login error');
      this.dispatcher.next({
        type: UserActions.LOGOUT
      });
    });
  }
}
