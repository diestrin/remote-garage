// lib imports
import {RouterConfig} from '@angular/router';
import {nsProvideRouter} from 'nativescript-angular/router';
// src imports
import {LoginPageComponent} from './pages/login/login.component';
import {HomePageComponent} from './pages/home/home.component';
import {SettingsPageComponent} from './pages/settings/settings.component';
import {CanActivateUser} from './shared/user/user.activate';

export const routes: RouterConfig = [
  {path: '', redirectTo: '/home', terminal: true},
  {path: 'login', component: LoginPageComponent},
  {path: 'home', component: HomePageComponent, canActivate: [CanActivateUser]},
  {path: 'settings', component: SettingsPageComponent,
    canActivate: [CanActivateUser]}
];

export const APP_ROUTER_PROVIDERS = [
  nsProvideRouter(routes, {enableTracing: false})
];
