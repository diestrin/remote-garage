import {Observable} from 'rxjs/Observable';
import {ReplaySubject} from 'rxjs/ReplaySubject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/share';

export interface IReducerAction {
  type: any;
}

export interface IReduceCases<State> {
  [key: number]: (state: State, action: IReducerAction) => State;
}

export abstract class Reducer<State> {
  public dispatcher: ReplaySubject<IReducerAction> =
    new ReplaySubject<IReducerAction>();
  public state: BehaviorSubject<State> = this
    .wrapIntoBehaviorSubject(this.intialState, this.dispatcher
      .scan(this.scan.bind(this), this.intialState).share());

  // TO OVERRIDE
  protected cases: IReduceCases<State>;

  constructor(private intialState: State) {}

  private scan(state: State = this.intialState,
    action: IReducerAction
  ): State {
    if (action.type in this.cases) {
      return this.cases[action.type](state, action);
    } else {
      return state;
    }
  }

  private wrapIntoBehaviorSubject(init: State,
    obs: Observable<State>
  ): BehaviorSubject<State> {
    const res: BehaviorSubject<State> = new BehaviorSubject<State>(init);

    obs.subscribe((s: State) => {
      return res.next(s);
    });

    return res;
  }
}
