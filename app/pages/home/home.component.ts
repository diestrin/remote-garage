// lib imports
import {Component, ChangeDetectionStrategy, OnInit} from '@angular/core';
import {AsyncPipe} from '@angular/common';
import {Observable} from 'rxjs/Observable';
import {RouterExtensions} from 'nativescript-angular/router';
import {SwipeGestureEventData, SwipeDirection} from 'ui/gestures';
import {Page} from 'ui/page';
// src imports
import {
  GateService,
  IGateState,
  GateActions
} from '../../shared/gate/gate.service';

@Component({
  selector: 'rg-home',
  templateUrl: 'pages/home/home.html',
  styleUrls: ['pages/home/home-common.css', 'pages/home/home.css'],
  pipes: [AsyncPipe],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent implements OnInit {
  public garageStatus$: Observable<IGateState & {label: string}>;

  constructor(private gateService: GateService,
              private routerExtensions: RouterExtensions,
              private page: Page) {
    this.garageStatus$ = this.gateService.state.map((state: IGateState) => {
      return Object.assign({
        label: state.status ? 'Close It' : 'Open It'
      }, state);
    });
  }

  public ngOnInit(): void {
    this.page.actionBarHidden = true;
  }

  public toggleGarageState(): void {
    this.gateService.dispatcher.next({type: GateActions.TOGGLE});
  }

  public goToSettings(args: SwipeGestureEventData): void {
    if (args.direction === SwipeDirection.down) {
      this.routerExtensions.navigate(['/settings'], {
        transition: {name: 'slideBottom'}
      });
    }
  }
}
