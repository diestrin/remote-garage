import {Injectable} from '@angular/core';
import {
  init,
  login,
  logout,
  User,
  LoginType
} from 'nativescript-plugin-firebase';

@Injectable()
export class FirebaseService {
  constructor() {
    init({
      // iOSEmulatorFlush: true
    })
    .then(instance => {
      console.log('firebase.init done');
    }, error => {
      console.log('firebase.init error: ' + error);
    });
  }

  public login(): Promise<User> {
    return login({
      type: LoginType.GOOGLE
    });
  }

  public logout(): Promise<any> {
    return logout();
  }
}
