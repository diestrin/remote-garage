// lib imports
import {Component, OnInit} from '@angular/core';
import {NS_ROUTER_DIRECTIVES} from 'nativescript-angular/router';
import {Page} from 'ui/page';
// src imports

@Component({
  selector: 'rg-main',
  directives: [NS_ROUTER_DIRECTIVES],
  template: '<page-router-outlet></page-router-outlet>'
})
export class AppComponent implements OnInit {
  constructor(private page: Page) {

  }

  public ngOnInit(): void {
    this.page.actionBarHidden = true;
  }
}
