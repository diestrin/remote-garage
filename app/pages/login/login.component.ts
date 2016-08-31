// lib imports
import {Component, ChangeDetectionStrategy, OnInit} from '@angular/core';
import {AsyncPipe} from '@angular/common';
import {RouterExtensions} from 'nativescript-angular/router';
import {Page} from 'ui/page';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/take';
// src imports
import {UserService} from '../../shared/user/user.service';

@Component({
  selector: 'rg-login',
  templateUrl: 'pages/login/login.html',
  styleUrls: ['pages/login/login-common.css', 'pages/login/login.css'],
  pipes: [AsyncPipe],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPageComponent implements OnInit {
  constructor(private routerExtensions: RouterExtensions,
              private page: Page,
              private userService: UserService) {

    this.userService.state.filter(state => state.auth)
    .take(1)
    .subscribe(() => {
      this.routerExtensions.navigate(['/home'], {
        transition: {name: 'slideTop'}
      });
    });
  }

  public ngOnInit(): void {
    this.page.actionBarHidden = true;
  }

  public login(): void {
    this.userService.doLogin();
  }
}
