import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { ToastController, Platform } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authState = new BehaviorSubject(false);
  constructor(
    private router: Router,
    private storage: Storage,
    private platform: Platform,
    public toastController: ToastController
  ) {
    this.platform.ready().then(() => {
      this.ifLoggedIn();
    });
  }
  ifLoggedIn() {
    this.storage.get('USER_INFO').then((response) => {
      if (response) {
        this.authState.next(true);
      }
    });
  }
  login(loginDetails: any = '') {
    return this.storage.set('USER_INFO', loginDetails).then(() => {
      this.authState.next(true);
    });
  }
  logout() {
    return this.storage.remove('USER_INFO').then(() => {
      this.authState.next(false);
    });
  }
  isAuthenticated() {
    return this.authState.value;
  }
}
