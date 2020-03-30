import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor(private toastController: ToastController) { }
  showToast(msg = '', duration = 0, animated = true, showCloseButton = false, closeButtonText = 'OK', for_which: string = '') {
    if (for_which == 'network') {
      this.toastController.create({
        message: msg,
        duration: duration,
        animated: animated,
        showCloseButton: showCloseButton,
        closeButtonText: closeButtonText,
        cssClass: "toaster-network",
        position: "bottom"
      }).then((obj) => {
        obj.present();
      });
    }
    else {
      this.toastController.create({
        message: msg,
        duration: duration,
        animated: animated,
        showCloseButton: showCloseButton,
        closeButtonText: closeButtonText,
        cssClass: "my-toast",
        position: "top"
      }).then((obj) => {
        obj.present();
      });
    }

  }

}