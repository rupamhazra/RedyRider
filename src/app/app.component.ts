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
//import { NavController } from '@ionic/angular';
import { FirebaseX } from "@ionic-native/firebase-x/ngx";
import { Events } from '@ionic/angular';
//import { NavigationExtras } from '@angular/router';
//import { Device } from '@ionic-native/device/ngx';
import { BackgroundMode } from '@ionic-native/background-mode/ngx';
import { BackgroundGeolocation, BackgroundGeolocationConfig, BackgroundGeolocationEvents, BackgroundGeolocationResponse } from '@ionic-native/background-geolocation/ngx';

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
    private backgroundMode: BackgroundMode,
    private backgroundGeolocation: BackgroundGeolocation
  ) {
    this.arr = [];
    this.initializeApp();


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
      }

      /**
       * For authentication User
       */
      this.getMenu('2');
      // this.authenticationService.authState.subscribe(state => {
      //   if (state) {
      //     this.router.navigate(['home']);
      //     this.menuCtrl.enable(true);
      //     this.storage.get('USER_INFO').then((val) => {
      //       if (val) {
      //         this.name = val.name;
      //         this.number = val.mobile
      //         this.logout_visible = true;
      //         this.userType = val.user_type_id
      //         this.profile_img = val.photo;
      //         this.getMenu(this.userType);
      //       }
      //       else
      //         this.name = ''
      //     });
      //   } else {
      //     this.router.navigate(['login']);

      //   }
      // });

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




      /**
       * Firebase used
       */



      // this.fcm.onTokenRefresh().subscribe(token => {
      //   // Register your new token in your back-end if you want
      //   // backend.registerToken(token);
      // });




      // this.networkService.checkNetworkDisconnect();
      // window.addEventListener('offline', () => {
      //   this.networkService.checkNetworkDisconnect();
      // });



      /**
       * Background Mode Scetion
      */
      // this.backgroundMode.enable();
      // console.log('backgroundMode activate');
      // this.backgroundMode.on("activate").subscribe(()=>{
      //   this.storage.clear();
      // });


      // this.fcmService.addDemoData(data).subscribe(
      //   res => {
      //     console.log("result_devive_token", res);
      //   },
      //   error => {
      //     console.log("error::::" + error);
      //   });







      // const config: BackgroundGeolocationConfig = {
      //   desiredAccuracy: 10,
      //   stationaryRadius: 20,
      //   interval: 60000,
      //   distanceFilter: 30,
      //   debug: true, //  enable this hear sounds for background-geolocation life-cycle.
      //   stopOnTerminate: false, // enable this to clear background location settings when the app terminates
      // };
      // this.backgroundGeolocation.configure(config).then(() => {

      //   this.backgroundGeolocation.on(BackgroundGeolocationEvents.location).subscribe(
      //     (location: BackgroundGeolocationResponse) => {
      //       console.log(location);
      //       var locationstr = localStorage.getItem("location");
      //       if (locationstr == null) {
      //         this.arr.push(location);
      //       } else {
      //         var locationarr = JSON.parse(locationstr);
      //         this.arr = locationstr
      //       }
      //       localStorage.setItem("location", JSON.stringify(this.arr));
      //       // IMPORTANT:  You must execute the finish method here to inform the native plugin that you're finished,
      //       // and the background-task may be completed.  You must do this regardless if your operations are successful or not.
      //       // IF YOU DON'T, ios will CRASH YOUR APP for spending too much time in the background.
      //       //this.backgroundGeolocation.finish(); // FOR IOS ONLY
      //     });

      // });
      // window.app = this
      //console.log('USER_INFO', this.storage.get('USER_INFO'))

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
