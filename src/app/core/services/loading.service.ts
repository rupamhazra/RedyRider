import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  isLoading = false;
  constructor(public loadingController: LoadingController) { }
  present(duration: any = '', showBackdrop: boolean = true) {
    this.isLoading = true;
    return this.loadingController.create({
      // message: '<ion-img src="/assets/svg/loader-cs.svg" alt="loading..." no-padding></ion-img>Please wait..',
      message: 'Please wait..',
      translucent: true,
      cssClass: 'cs-custom-loading',
      showBackdrop: true,
      spinner: 'crescent',
      duration: duration,
      backdropDismiss: false
    }).then(a => {
      a.present().then(() => {
        //console.log('presented');
        if (!this.isLoading) {
          a.dismiss().then(() => console.log('abort presenting'));
        }
      });
    });

  }

  dismiss() {
    this.isLoading = false;
    return this.loadingController.dismiss();
  }

}