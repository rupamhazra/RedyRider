import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { LoadingService } from '../../core/services/loading.service';
import { Platform } from '@ionic/angular';
import { FirebaseX } from '@ionic-native/firebase-x/ngx';
import { Device } from '@ionic-native/device/ngx';
import { HomeService } from '../../core/services/home.service';
import { Events } from '@ionic/angular';
import { OfficePoolCarService } from '../../core/services/office-pool-car.service';
import { MenuController } from '@ionic/angular';
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
    public homeService: HomeService,
    public home_page_event: Events,
    public officePoolCarService: OfficePoolCarService,
    private menuCtrl: MenuController,
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

  ngOnInit() {
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
    this.homeService.insertDeviceDetailsService(request_data).subscribe(
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
}
