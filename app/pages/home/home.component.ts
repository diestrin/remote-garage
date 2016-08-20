// lib imports
import {Component, ChangeDetectionStrategy} from '@angular/core';
import {AsyncPipe} from '@angular/common';
import {Observable} from 'rxjs/Observable';
import 'core-js/fn/object/assign';
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
export class HomePageComponent {
  public garageStatus$: Observable<IGateState & {label: string}>;

  constructor(private gateService: GateService) {
    this.garageStatus$ = this.gateService.state.map((state: IGateState) => {
      return Object.assign({
        label: state.status ? 'Close It' : 'Open It'
      }, state);
    });
  }

  public toggleGarageState(): void {
    this.gateService.dispatcher.next({type: GateActions.TOGGLE});
  }
}
