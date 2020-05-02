import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AuthenticationService } from './authentication.service';
import { MenuController } from '@ionic/angular';
import { Router } from "@angular/router";

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

  async presentAlertMultipleButtons() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['Cancel', 'Open Modal', 'Delete']
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
  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: 'Prompt!',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Placeholder 1'
        },
        {
          name: 'name2',
          type: 'text',
          id: 'name2-id',
          value: 'hello',
          placeholder: 'Placeholder 2'
        },
        {
          name: 'name3',
          value: 'http://ionicframework.com',
          type: 'url',
          placeholder: 'Favorite site ever'
        },
        // input date with min & max
        {
          name: 'name4',
          type: 'date',
          min: '2017-03-01',
          max: '2018-01-12'
        },
        // input date without min nor max
        {
          name: 'name5',
          type: 'date'
        },
        {
          name: 'name6',
          type: 'number',
          min: -5,
          max: 10
        },
        {
          name: 'name7',
          type: 'number'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertRadio() {
    const alert = await this.alertController.create({
      header: 'Radio',
      inputs: [
        {
          name: 'radio1',
          type: 'radio',
          label: 'Radio 1',
          value: 'value1',
          checked: true
        },
        {
          name: 'radio2',
          type: 'radio',
          label: 'Radio 2',
          value: 'value2'
        },
        {
          name: 'radio3',
          type: 'radio',
          label: 'Radio 3',
          value: 'value3'
        },
        {
          name: 'radio4',
          type: 'radio',
          label: 'Radio 4',
          value: 'value4'
        },
        {
          name: 'radio5',
          type: 'radio',
          label: 'Radio 5',
          value: 'value5'
        },
        {
          name: 'radio6',
          type: 'radio',
          label: 'Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 ',
          value: 'value6'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }

}
