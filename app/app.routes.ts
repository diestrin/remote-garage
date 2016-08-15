// lib imports
import {RouterConfig} from '@angular/router';
import {nsProvideRouter} from 'nativescript-angular/router';
// src imports

export const routes: RouterConfig = [
  // {path: 'login', component: LoginPageComponent}
];

export const APP_ROUTER_PROVIDERS = [
  nsProvideRouter(routes, {enableTracing: false})
];
