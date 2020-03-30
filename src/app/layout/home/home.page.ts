import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { LoadingService } from '../../core/services/loading.service';
import { ToasterService } from '../../core/services/toaster.service';
import { Platform } from '@ionic/angular';
import { BackgroundMode } from '@ionic-native/background-mode/ngx';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { FirebaseX } from '@ionic-native/firebase-x/ngx';
import { Device } from '@ionic-native/device/ngx';
import { HomeService } from '../../core/services/home.service';
import { Events } from '@ionic/angular';
import { OfficePoolCarService } from '../../core/services/office-pool-car.service';
import { RouteStoppageModalPage } from '../office-pool-car-service/route-stoppage-modal/route-stoppage-modal.page';
import { ModalService } from '../../core/services/modal.service';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
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
  medie_url: any = environment.imageURL
  visibleKey: boolean = false;
  result: [];
  result_cat: [];
  result_slide: [];
  sos_number: string;
  sos_email: string;
  userId: any;
  userType: string;
  request_data: any;
  device_token: any;
  net_connection_check: boolean = false;
  car_details_d;
  clock: any = '';
  stoppage_list = [];
  start_location = '';
  end_location = '';
  progress_bar: boolean = false;
  constructor(
    private storage: Storage,
    private router: Router,
    public loadingService: LoadingService,
    private toasterService: ToasterService,
    private device: Device,
    public backgroundMode: BackgroundMode,
    public platform: Platform,
    public localNotifications: LocalNotifications,
    private fcm: FirebaseX,
    private firebaseX: FirebaseX,
    public homeService: HomeService,
    public home_page_event: Events,
    public officePoolCarService: OfficePoolCarService,
    public modalService: ModalService,
    private barcodeScanner: BarcodeScanner,
  ) {
    platform.ready().then(() => {
      /**
       * Firebase Token
       */
      if (this.platform.is("cordova"))
        this.firebaseX.getToken()
          .then(token => this.device_token = token)
          .catch(error => console.error('Error getting token', error));
    })
    this.storage.get('USER_INFO').then((val) => {
      //console.log('user_details_val_val', val)
      if (val) {
        this.userId = val.id;
        this.name = val.name;
        this.userType = val.user_type_id;
        //console.log('userType', this.userType)
        if (val.user_type_id == 2)
          this.getTodayRides();

      }
    });
  }
  getNotification() {
    this.fcm.onMessageReceived().subscribe(data => {

      //console.log('data', this.fcm.getBadgeNumber)
      //this.home_page_event.publish('notification_count', this.fcm.getBadgeNumber);
      if (data.wasTapped) {
        //console.log("Received in background");

        //console.log(JSON.parse(this.pushes))
        //this.home_page_event.publish('notification_count', this.fcm.getBadgeNumber);
        //this.app_component_event.publish('notification_count_e', 1);
        // this.storage.get('noti_count').then((val) => {
        //   if (val) {
        //     this.storage.set('noti_count', val + 1)
        //   }
        //   else {
        //     this.storage.set('noti_count', 1)
        //   }
        // });
        //this.storage.set('noti_count', 1)
        this.router.navigate(['myaccount/notification', { pushes: JSON.stringify(data) }]);

      } else {
        //console.log("Received in foreground");
        this.toasterService.showToast('Received in foreground', 3000);
        //this.home_page_event.publish('notification_count', this.fcm.getBadgeNumber);

      };
    });
  }
  ngOnInit() {
    this.home_page_event.subscribe('check_net_connection', (data) => {
      if (data == 'connect') this.net_connection_check = false;
      if (data == 'disconnect') this.net_connection_check = true;
    });
    //console.log('this.disabled_check', this.disabled_check);

    //this.loadingService.present();
    this.title = this.router.url;

    if (this.platform.is("cordova"))
      setTimeout(() => {
        /**
         * Device Details
         */
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
    //console.log('request_data111', request_data)
    this.homeService.insertDeviceDetailsService(request_data).subscribe(
      res => {
        //console.log('res', res)
        if (res.status.toLowerCase() == 'success') {
        }
      },
      error => {
        //console.log("error::::" + error.error);
      }
    );
  }
  getTodayRides() {
    //console.log('userId', this.userId)
    this.progress_bar = true;
    let request_data = { "type": "driver", "user_id": this.userId };
    this.officePoolCarService.todayRidesService(request_data).subscribe(
      res => {
        //console.log('res', res)
        this.car_details_d = res.result[0];
        this.storage.set('car_details', res.result);
        this.progress_bar = false;
      },
      error => {
        //console.log("error::::" + error.error);
        this.progress_bar = false;
        this.toasterService.showToast(error.error.msg);
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
  viewRoute(route_id: string, start_point, end_point) {
    let data = { 'route_id': route_id, 'from_which_page': 'bus-route-details-page', 'start_point': start_point, 'end_point': end_point }
    this.modalService.openModal(RouteStoppageModalPage, data, 'stoppage_modal_css');
  }
  startRide(car_id) {
    this.router.navigateByUrl('myaccount/location-tracking/' + car_id + '/' + this.userId);
  }
  scanQrCode(car_id = '') {
    this.barcodeScanner.scan().then(barcodeData => {
      //console.log('Barcode data', barcodeData);
      this.progress_bar = true;
      let request_data = { "type": "qr_code_val", "car_id": car_id, 'qr_code': barcodeData.text };
      this.officePoolCarService.todayRidesService(request_data).subscribe(
        res => {
          //console.log('res', res)
          this.toasterService.showToast(res.result, 2000);
          this.progress_bar = false;
        },
        error => {
          //console.log("error::::" + error.error);
          this.progress_bar = false;
          this.toasterService.showToast(error.error.msg, 2000);
        }
      );

      // this.toasterService.showToast('Your seats has been confirmed, have a safe journey', 6000)

      // this.toasterService.showToast('Qr code does not match! please contact to Redy Rider Help Line', 6000)

    }).catch(err => {
      console.log('Error', err);
    });

  }
}
