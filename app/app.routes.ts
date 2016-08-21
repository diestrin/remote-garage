// lib imports
import {RouterConfig} from '@angular/router';
import {nsProvideRouter} from 'nativescript-angular/router';
// src imports
import {HomePageComponent} from './pages/home/home.component';
import {SettingsPageComponent} from './pages/settings/settings.component';

export const routes: RouterConfig = [
  {path: '', redirectTo: '/home', terminal: true},
  {path: 'home', component: HomePageComponent},
  {path: 'settings', component: SettingsPageComponent}
];

export const APP_ROUTER_PROVIDERS = [
  nsProvideRouter(routes, {enableTracing: false})
];
