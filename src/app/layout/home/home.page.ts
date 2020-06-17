import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { FirebaseX } from '@ionic-native/firebase-x/ngx';
import { Device } from '@ionic-native/device/ngx';
import { Events } from '@ionic/angular';
import { OfficePoolCarService } from '../../core/services/office-pool-car.service';
import { MenuController } from '@ionic/angular';
import { AppRate } from '@ionic-native/app-rate/ngx';
import { RouteStoppageModalPage } from '../office-pool-car-service/route-stoppage-modal/route-stoppage-modal.page';
import { ModalService, LoadingService } from '../../core/globalMethods/global-methods';


import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss', '../layout.page.scss'],
  animations: [
    trigger('fadein', [
      state('void', style({ opacity: 0 })),
      transition('void => *', [
        style({ opacity: 0 }),
        animate('900ms ease-out', style({ opacity: 1 }))
      ])
    ]),
    trigger('slidelefttitle', [
      transition('void => *', [
        style({ opacity: 0, transform: 'translateX(150%)' }),
        animate('900ms 300ms ease-out', style({ transform: 'translateX(0%)', opacity: 1 }))
      ])
    ]),

  ]
})
export class HomePage implements OnInit {
  count: any = 0;
  notificationAlreadyReceived = false;
  background_gif = '';
  name: any;
  title: any;

  visibleKey: boolean = false;
  result: [];
  userId: any;
  userType: string;
  request_data: any;
  device_token: any;
  net_connection_check: boolean = false;
  progress_bar: boolean = false;
  constructor(
    private storage: Storage,
    private router: Router,
    public loadingService: LoadingService,
    private device: Device,
    public platform: Platform,
    private fcm: FirebaseX,
    public home_page_event: Events,
    public officePoolCarService: OfficePoolCarService,
    private menuCtrl: MenuController,
    private appRate: AppRate,
    public modalService: ModalService,
  ) {
    this.menuCtrl.enable(true);
    platform.ready().then(() => {
      if (this.platform.is("cordova")) { }
      this.fcm.getToken()
        .then(token => this.device_token = token)
        .catch(error => console.error('Error getting token', error));

    })
    this.storage.get('USER_INFO').then((val) => {
      if (val) {
        this.userId = val.id;
        this.name = val.name;
        this.userType = val.user_type_id;
      }
    });
  }
  giveRating() {
    /**
       * App Rating
       */
    // this.appRate.preferences = {
    //   inAppReview: true,
    //   displayAppName: 'RedyRider',
    //   usesUntilPrompt: 3,
    //   promptAgainForEachNewVersion: true,
    //   storeAppURL: {
    //     android: 'market://details?id=com.redyrider.app',
    //   },
    //   customLocale: {
    //     title: 'Do you enjoy %@?',
    //     message: 'If you enjoy %@. would you mind talking to rate it?',
    //     cancelButtonLabel: 'No, Thanks',
    //     laterButtonLabel: 'Remind Me Later',
    //     rateButtonLabel: 'Rate It Now'
    //   },
    //   callbacks: {
    //     onRateDialogShow: function (callback) {
    //       console.log('User Prompt for Rating');
    //     },
    //     onButtonClicked: function (buttonIndex) {
    //       console.log('Selected Button Index', buttonIndex);
    //     }
    //   }
    // }
    // this.appRate.promptForRating(true);
  }
  ngOnInit() {
    this.storage.get('popup_msg').then((val) => {
      this.openPopup();
      // if (val !== 'yes') {
      //   this.openPopup();
      // }
    });

    this.home_page_event.subscribe('check_net_connection', (data) => {
      if (data == 'connect') this.net_connection_check = false;
      if (data == 'disconnect') this.net_connection_check = true;
    });
    this.title = this.router.url;
    if (this.platform.is("cordova"))
      setTimeout(() => {
        let device_details = {
          "uuid": this.device.uuid,
          "model": this.device.model,
          "platform": this.device.platform,
          "serial": this.device.serial,
          "version": this.device.version,
          "manufacturer": this.device.manufacturer
        }
        this.request_data = {
          'userid': this.userId,
          'device_details': JSON.stringify(device_details),
          'device_uuid': this.device.uuid,
          'device_token': this.device_token,
          'type': 'user_device'
        }
        this.insertDeviceDetails(this.request_data);
      }, 3000);
  }
  public insertDeviceDetails(request_data) {
    console.log('request_data', request_data)
    this.officePoolCarService.insertDeviceDetailsService(request_data).subscribe(
      res => {
        if (res.status.toLowerCase() == 'success') {
        }
      },
      error => {
      }
    );
  }
  goTourPage() {
    //this.router.navigateByUrl('/tour-travels');
  }
  goSchoolPullCarPage() {
    this.router.navigateByUrl('/school-pool-car');
  }
  goToPage(name) {
    this.router.navigateByUrl('/' + name);
  }
  openPopup() {
    let data = { 'from_which_page': 'global-popup' }
    this.modalService.openModal(RouteStoppageModalPage, data, 'pop_up_stoppage_modal_css');
  }

}
