import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { Router } from "@angular/router";
import { ToastController, Platform } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage';
import { CanActivate } from '@angular/router';


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
            this.storage.clear();
            this.authState.next(false);
        });
    }
    isAuthenticated() {
        return this.authState.value;
    }
}

@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
    constructor(
        public authenticationService: AuthenticationService
    ) { }

    canActivate(): boolean {
        return this.authenticationService.isAuthenticated();
    }

}

@Injectable({
    providedIn: 'root'
})
export class ToasterService {
    constructor(private toastController: ToastController) { }
    showToast(msg = '', duration = 0, animated = true, showCloseButton = false, closeButtonText = 'OK', for_which: string = '', cssClass: string = 'my-toast') {
        if (for_which == 'ok_cancel_btn') {

            this.toastController.create({
                message: msg,
                duration: duration,
                animated: animated,
                // showCloseButton: showCloseButton,
                // closeButtonText: closeButtonText,
                cssClass: "my-toast",
                position: "top",
                buttons: [
                    {
                        side: 'end',
                        //icon: 'star',
                        text: 'OK',
                        handler: () => {
                            console.log('OK clicked');
                        }
                    }, {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    }
                ]

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
                cssClass: cssClass,
                position: "top"
            }).then((obj) => {
                obj.present();
            });
        }
    }
}

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

@Injectable({
    providedIn: 'root'
})
export class ModalService {
    dataReturned: any;
    constructor(
        public modalController: ModalController
    ) { }

    async openModal(page_name, modalData, cssClass = '') {
        //console.log('modalData',modalData)
        const modal = await this.modalController.create({
            component: page_name,
            componentProps: modalData,
            animated: true,
            cssClass: cssClass,
            backdropDismiss: false
        });

        modal.onDidDismiss().then((dataReturned) => {
            if (dataReturned !== null) {
                this.dataReturned = dataReturned.data;
                //alert('Modal Sent Data :'+ dataReturned.data);
            }
        });

        return await modal.present();
    }

    async closeModal() {
        const onClosedData: string = "Wrapped Up!";
        await this.modalController.dismiss(onClosedData);
    }
}

@Injectable({
    providedIn: 'root'
})
export class AlertService {

    constructor(
        public alertController: AlertController,
        private authenticationService: AuthenticationService,
        private menuCtrl: MenuController,
        private router: Router,
    ) { }

    async presentAlert(message, header = 'Info', subHeader = '', button_text = 'Retry') {
        const alert = await this.alertController.create({
            header: header,
            subHeader: subHeader,
            message: message,
            buttons: [button_text],
            backdropDismiss: false,
            animated: true,


        });

        await alert.present();
    }



    async presentAlertConfirm(message, type: any = '') {
        const alert = await this.alertController.create({
            //header: 'Confirm!',
            message: message,
            buttons: [
                {
                    text: 'No',
                    role: 'cancel',
                    cssClass: 'alert-cancel-button',
                    handler: (blah) => {
                        if (type == 'logout')
                            this.alertResponseForLogout(false);

                    }
                }, {
                    text: 'Yes',
                    cssClass: 'alert-ok-button',
                    handler: () => {
                        if (type == 'logout')
                            this.alertResponseForLogout(true);
                        // if (type = "exit")
                        //   navigator['app'].exitApp();
                        if (type == 'gohome')
                            this.router.navigateByUrl('/home');
                    }
                }
            ]
        });
        await alert.present();
    }
    alertResponseForLogout(response) {
        if (response) {
            this.menuCtrl.enable(false);
            this.authenticationService.logout();
        }

    }




}

@Injectable({
    providedIn: 'root'
})
export class NetworkService {
    public onlineOffline: boolean;
    constructor(
        private toasterService: ToasterService,
        private router: Router,
    ) { }
    // watch network for a disconnection
    checkNetworkDisconnect(page_flag: boolean = true) {
        console.log('calling..')
        if (!navigator.onLine) {
            if (page_flag) {
                this.router.navigateByUrl('common-page/check-internet-connection');
            } else {
                //this.toasterService.showToast('Check your internet connection', 2000, true, false, '', '', 'my-error-toast')
            }
            return true;
        } else {
            return false;
        }
    }
}

@Injectable({
    providedIn: 'root'
})
export class GetRouteMap {
    constructor() { }

}


