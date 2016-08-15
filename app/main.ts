// lib imports
import {nativeScriptBootstrap} from 'nativescript-angular/application';
// src imports
import {AppComponent} from './app.component';
import {setStatusBarColors} from './utils/status-bar-util';
import {APP_ROUTER_PROVIDERS} from ' ./app.routes';

setStatusBarColors();
nativeScriptBootstrap(AppComponent, [
  APP_ROUTER_PROVIDERS
]);
