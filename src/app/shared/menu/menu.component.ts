import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import * as M from 'materialize-css';
import { Subscription } from 'rxjs';
import { LoginService } from '../../services/login.service';
import { WebStorageUtil } from '../../util/web-storage-util';
import { Constants } from '../../util/constants';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, AfterViewInit {

  loggedIn = false;
  subscription!: Subscription;

  @ViewChild('mobile') sideNav?: ElementRef;

  constructor(private loginService: LoginService) {
    this.subscription = loginService.asObservable().subscribe((data) => {
      this.loggedIn = data;
      console.log('observer - menu');
    });
  }

  ngOnInit(): void {
    this.loggedIn = WebStorageUtil.get(Constants.LOGGED_IN_KEY) as boolean;
    console.log('init - menu');
  }

  ngAfterViewInit(): void {
    M.Sidenav.init(this.sideNav?.nativeElement);
  }

  onLogout() {
    this.loginService.logout();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
