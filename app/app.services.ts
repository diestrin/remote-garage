import {UserService} from './shared/user/user.service';
import {CanActivateUser} from './shared/user/user.activate';
import {GateService} from './shared/gate/gate.service';
import {FirebaseService} from './shared/network/firebase.service';

export const APP_SERVICE_PROVIDERS = [
  GateService,
  UserService,
  CanActivateUser,
  FirebaseService
];
