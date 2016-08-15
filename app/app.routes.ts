// lib imports
import {RouterConfig} from '@angular/router';
import {nsProvideRouter} from 'nativescript-angular/router';
// src imports
import {HomePageComponent} from './pages/home/home.component';

export const routes: RouterConfig = [
  {path: '', component: HomePageComponent}
];

export const APP_ROUTER_PROVIDERS = [
  nsProvideRouter(routes, {enableTracing: false})
];
