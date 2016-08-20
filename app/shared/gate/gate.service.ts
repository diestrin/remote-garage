// lib imports
import 'core-js/fn/object/assign';
import {ReplaySubject} from 'rxjs/ReplaySubject';
// src imports
import {Reducer, IReducerAction, IReduceCases} from '../reducer/reducer';

export enum GateActions {
  OPEN = <any>(() => true),
  CLOSE = <any>(() => false),
  TOGGLE = <any>(state => !state)
};

export interface IGateAction extends IReducerAction {
  type: GateActions;
}

export interface IGateState {
  status: boolean;
}

export const INITIAL_GATE_STATE: IGateState = {
  status: false
};

export class GateService extends Reducer<IGateState> {
  public dispatcher: ReplaySubject<IGateAction>;

  protected cases: IReduceCases<IGateState> = {
    [GateActions.OPEN]: GateService.open,
    [GateActions.CLOSE]: GateService.close,
    [GateActions.TOGGLE]: GateService.toggle
  };

  private static open(state: IGateState): IGateState {
    return Object.assign({}, state, {status: true});
  }

  private static close(state: IGateState): IGateState {
    return Object.assign({}, state, {status: false});
  }

  private static toggle(state: IGateState): IGateState {
    return Object.assign({}, state, {status: !state.status});
  }

  constructor() {
    super(INITIAL_GATE_STATE);
  }
}
