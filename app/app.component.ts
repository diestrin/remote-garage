// lib imports
import {Component, OnInit, OnDestroy} from '@angular/core';
import {NS_ROUTER_DIRECTIVES} from 'nativescript-angular/router';
import {RouterConnector} from 'ngrx-store-router';

@Component({
  selector: 'rg-main',
  directives: [NS_ROUTER_DIRECTIVES],
  template: '<page-router-outlet></page-router-outlet>'
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(private rc: RouterConnector) {}

  public ngOnInit(): void {
    this.rc.connect();
  }

  public ngOnDestroy(): void {
    this.rc.disconnect();
  }
}
