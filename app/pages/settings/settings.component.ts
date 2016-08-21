// lib imports
import {Component, ChangeDetectionStrategy, OnInit} from '@angular/core';
import {AsyncPipe} from '@angular/common';
import {RouterExtensions} from 'nativescript-angular/router';
import {SwipeGestureEventData, SwipeDirection} from 'ui/gestures';
import {Page} from 'ui/page';
// src imports
import {
  GateService
} from '../../shared/gate/gate.service';

@Component({
  selector: 'rg-settings',
  templateUrl: 'pages/settings/settings.html',
  pipes: [AsyncPipe],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsPageComponent implements OnInit {
  constructor(private gateService: GateService,
              private routerExtensions: RouterExtensions,
              private page: Page) {
  }

  public ngOnInit(): void {
    this.page.actionBarHidden = true;
  }

  public goToHome(args: SwipeGestureEventData): void {
    if (args.direction === SwipeDirection.up) {
      this.routerExtensions.navigate(['/home'], {
        transition: {name: 'slideTop'}
      });
    }
  }
}
