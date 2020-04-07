import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthenticationService } from './core/services/authentication.service';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { environment } from '../environments/environment';
import { ToasterService } from './core/services/toaster.service';
import { Network } from '@ionic-native/network/ngx';
import { AlertService } from './core/services/alert.service';
import { FirebaseX } from "@ionic-native/firebase-x/ngx";
import { Events } from '@ionic/angular';

declare var window;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  arr: any;
  pushes: any;
  token: any;
  result_fcm_add: any;
  public onlineOffline: boolean = navigator.onLine;
  logout_visible: boolean = false
  login_visible: boolean = false
  public name: any;
  number: string;
  public profile_img: any
  medie_url: any = environment.imageURL
  visibility: any
  public appPages = [];
  connection: any;
  userType: string;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authenticationService: AuthenticationService,
    private router: Router,
    private menuCtrl: MenuController,
    private storage: Storage,
    private toasterService: ToasterService,
    private network: Network,
    private alertService: AlertService,
    public app_component_event: Events,
    //private navCtrl: NavController,
    private fcm: FirebaseX,
    //public fcmService: FcmService,
    //private device: Device,
  ) {
    this.arr = [];
    this.initializeApp();
    this.getNotification();
  }
  getNotification() {

  }
  initializeApp() {

    //console.log('this.platform', this.platform.is("android"))
    this.platform.ready().then(() => {
      if (this.platform.is("cordova")) {
        this.statusBar.backgroundColorByHexString('#0A5999');
        this.statusBar.styleLightContent();
        this.splashScreen.hide();


        /**
         * For Back Button prevent
         */
        this.platform.backButton.subscribeWithPriority(9999, () => {
          document.addEventListener('backbutton', function (event) {
            event.preventDefault();
            event.stopPropagation();
            //console.log('hello');
            navigator['app'].exitApp();
          }, false);

        });

        this.fcm.onMessageReceived().subscribe(data => {
          if (data.wasTapped) {
            this.router.navigateByUrl('myaccount/myaccount-common-page/notifications');
          } else {
            this.toasterService.showToast('Received in foreground', 3000);
          };
        });
      }

      /**
       * For authentication User
       */
      //this.getMenu('2');
      this.authenticationService.authState.subscribe(state => {
        if (state) {
          this.router.navigate(['home']);
          this.menuCtrl.enable(true);
          this.storage.get('USER_INFO').then((val) => {
            if (val) {
              this.name = val.name;
              this.number = val.mobile
              this.logout_visible = true;
              this.userType = val.user_type_id
              this.profile_img = val.photo;
              this.getMenu(this.userType);
            }
            else
              this.name = ''
          });
        } else {
          this.router.navigate(['login']);

        }
      });

      this.app_component_event.subscribe("update_profile_image", (data) => {
        //console.log('data', data)
        this.storage.get('USER_INFO').then((val) => {
          if (val) {
            this.name = val.name;
            this.number = val.mobile
            this.profile_img = val.photo;
            //console.log('this.profile_img', this.profile_img)
          }
        });
      });

    });
  }
  getMenu(userType) {
    if (userType == '2') {
      this.appPages = [
        {
          title: 'Home',
          url: '/home',
          icon: './assets/svg/home.svg',
          chileMenu: []
        },
        {
          title: 'My Account',
          url: '/myaccount',
          icon: './assets/svg/user1.svg',
          chileMenu: []
        },
        {
          title: 'My Notifications',
          url: '/myaccount/myaccount-common-page/notifications',
          icon: './assets/svg/alert.svg',
          chileMenu: []
        },
        {
          title: "Today's Rides",
          url: '/myaccount/today-rides',
          icon: './assets/svg/my_ride.svg',
          chileMenu: []
        },
      ];
    } else {
      this.appPages = [
        {
          title: 'Home',
          url: '/home',
          icon: './assets/svg/home.svg',
          chileMenu: []
        },
        {
          title: 'My Account',
          url: '/myaccount',
          icon: './assets/svg/user1.svg',
          chileMenu: []
        },
        {
          title: 'My Wallet',
          url: '/myaccount/wallet',
          icon: './assets/svg/my_wallet.svg',
          chileMenu: []
        },
        {
          title: 'Refer & Earn',
          url: '/myaccount/myaccount-common-page/refer-earn',
          icon: './assets/svg/referal.svg',
          chileMenu: []
        },
        {
          title: 'My Notifications',
          url: '/myaccount/myaccount-common-page/notifications',
          icon: './assets/svg/alert.svg',
          chileMenu: []
        },
        {
          title: 'My Rides',
          url: '/myaccount/booking-history',
          icon: './assets/svg/my_ride.svg',
          chileMenu: []
        },
      ];
    }
  }
  logIn() {
    //this.menuCtrl.enable(false);
    this.router.navigateByUrl('/login');
  }
  goHome() {
    this.router.navigateByUrl('/home');
  }
  goToPage(whichPage: string) {
    if (whichPage === 'myaccount')
      this.router.navigateByUrl('myaccount')
  }
}
