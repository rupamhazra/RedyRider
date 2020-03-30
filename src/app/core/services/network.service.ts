import { Injectable } from '@angular/core';
import { AlertService } from './alert.service';
import { LoadingService } from '../../core/services/loading.service';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {
  public onlineOffline: boolean = navigator.onLine;
  constructor(
    private alertService: AlertService,
    private loadingService: LoadingService,
  ) { }

  // watch network for a disconnection
  checkNetworkDisconnect() {
    if (!navigator.onLine) {
      this.alertService.presentAlert("Please check your internet connection!!");
      this.loadingService.dismiss();
      return true;
    } else {
      return false;
    }

  }
}
