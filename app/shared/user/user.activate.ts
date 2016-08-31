// lib imports
import {Injectable} from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/take';
// src imports
import {UserService} from './user.service';

@Injectable()
export class CanActivateUser implements CanActivate {
  constructor(private router: Router,
    private userService: UserService) {}

  public canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean>|boolean {
    return this.userService.state.map(user => user.auth)
    .take(1)
    .do(auth => {
      if (!auth) {
        this.router.navigate(['/login']);
      }
    });
  }
}
