import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Events } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Network } from '@ionic-native/network/ngx';
import { AlertService } from '../../services/alert.service';
import { OfficePoolCarService } from '../../../core/services/office-pool-car.service';
import { ToasterService } from '../../../core/services/toaster.service';
import { FirebaseX } from "@ionic-native/firebase-x/ngx";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  product_count_on_cart: number;
  menu_button_visible: boolean;
  cart_button_visible: boolean;
  title_section_visible: boolean;
  back_button_visible: boolean = false;
  logout_visible: boolean = true;
  title: any = 'REDY RIDER';
  network_msg: string = '';
  network_check_class: string = '';
  network_check_class_show: boolean = false;
  referral_balance: string;
  referral_bal_show: boolean = false;
  notification_show: boolean = false;
  notification_count = 0;
  sos_button: boolean = false;
  constructor(
    private router: Router,
    public header_event: Events,
    private storage: Storage,
    private alertService: AlertService,
    private network: Network,
    private officePoolCarService: OfficePoolCarService,
    private toasterService: ToasterService,
    private fcm: FirebaseX,

  ) {

  }

  ngOnInit() {
    /**
     * 
     */

    this.header_event.subscribe('notification_count', (data) => {
      this.notification_count = 1;
    });
    /**
     * Network connection check
    */

    this.network.onDisconnect().subscribe(() => {
      this.network_check_class_show = true;
      this.storage.set('network_connection', "disconnected");
      console.log('onDisconnect val')
      this.network_msg = 'Network was disconnected :-(';
      this.network_check_class = 'disconnect';
      this.header_event.publish('check_net_connection', 'disconnect');
    });

    this.network.onConnect().subscribe(() => {
      this.storage.get('network_connection').then((val) => {
        if (val == 'disconnected') {
          this.network_check_class_show = true
          this.network_check_class = 'connect';
          //console.log('onConnect val', val)
          this.header_event.publish('check_net_connection', 'connect');
          this.network_msg = 'Yaa whooo, We got a connection';
          setTimeout(() => {
            this.network_check_class_show = false
            //console.log('checking....', this.network_check_class_show)
          }, 1000)
          this.storage.set('network_connection', "connected");
        }
      });
    });
    //console.log("current Link", this.router.url);
    if (this.router.url.includes('register')) {
      this.menu_button_visible = false;
      this.title_section_visible = true;
      this.cart_button_visible = false;
      // this.back_button_visible = true;
      //this.logout_visible = false;
    }
    if (this.router.url.includes('login')) {
      this.menu_button_visible = false;
      this.title_section_visible = true;
      this.cart_button_visible = false;
      //this.title = "Saha Tour and Travel";
      this.back_button_visible = false;
      //this.logout_visible = false;
    }
    if (this.router.url.includes('forgot-password')) {
      this.menu_button_visible = false;
      this.title_section_visible = true;
      this.cart_button_visible = false;
      this.title = "Retrieve Password";
      this.back_button_visible = true;
    }
    if (this.router.url.includes('home')) {
      this.menu_button_visible = true;
      this.title_section_visible = true;
      this.cart_button_visible = true;
      this.notification_show = true;
    }
    if (this.router.url.includes('office-pool-car-service')) {
      this.back_button_visible = true;
      this.title_section_visible = true;
    }
    if (this.router.url.includes('date-time')) {
      this.back_button_visible = true;
      this.title_section_visible = true;
      //this.title = "School Pull Car";
    }
    if (this.router.url.includes('bus-route-details')) {
      this.back_button_visible = true;
      this.title_section_visible = true;
      this.title = "Bus-Route List";
    }
    if (this.router.url.includes('seat-layout-details')) {
      this.back_button_visible = true;
      this.title_section_visible = true;
      this.title = "Seat Layout";
    }
    if (this.router.url.includes('booked-details')) {
      this.back_button_visible = true;
      this.title_section_visible = true;
      this.title = "Confirm Booking Details";
    }
    if (this.router.url.includes('payment-details')) {
      this.back_button_visible = true;
      this.title_section_visible = true;
      this.title = "Payment Options";
    }
    if (this.router.url.includes('booking-thankyou')) {
      this.back_button_visible = true;
      this.title_section_visible = true;
      this.title = "Confirm Booking";
    }
    if (this.router.url.includes('common-page/contact-us')) {
      this.back_button_visible = true;
      this.title_section_visible = true;
      this.title = "Contact Us";
    }
    if (this.router.url.includes('common-page/privacy-policy')) {
      this.back_button_visible = true;
      this.title_section_visible = true;
      this.title = "Privacy Policy";
    }
    if (this.router.url.includes('common-page/terms-condition')) {
      this.back_button_visible = true;
      this.title_section_visible = true;
      this.title = "Terms and Conditions";
    }
    if (this.router.url.includes('myaccount')) {
      this.back_button_visible = true;
      this.title_section_visible = true;
      this.title = "My Account";
    }
    if (this.router.url.includes('wallet')) {
      this.back_button_visible = true;
      this.title_section_visible = true;
      this.title = "My Wallet";
    }
    if (this.router.url.includes('myaccount/myaccount-common-page/refer-earn')) {
      this.back_button_visible = true;
      this.title_section_visible = true;
      this.title = "Refer & Earn";
      this.referral_bal_show = true;
      this.storage.get('USER_INFO').then((val) => {
        this.getBalance(val['id']);
      });
    }
    if (this.router.url.includes('myaccount/myaccount-common-page/notifications')) {
      this.back_button_visible = true;
      this.title_section_visible = true;
      this.title = "Notifications";
    }
    if (this.router.url.includes('booking-history')) {
      this.back_button_visible = true;
      this.title_section_visible = true;
      this.title = "My Rides";
    }
    if (this.router.url.includes('booking-history-details')) {
      this.back_button_visible = true;
      this.title_section_visible = true;
      this.title = "My Ride";
    }
    if (this.router.url.includes('location-tracking')) {
      this.back_button_visible = true;
      this.title_section_visible = true;
      this.title = "Tracking";
    }
    if (this.router.url.includes('today-rides')) {
      this.back_button_visible = true;
      this.title_section_visible = true;
      this.title = "Today's Rides";
    }
    if (this.router.url.includes('tour-travels')) {
      this.menu_button_visible = false;
      this.title_section_visible = true;
      this.title = "Tour and Travels";
    }
    if (this.router.url.includes('tour-details')) {
      //this.cart_button_visible = false;
      this.menu_button_visible = false;
      this.title_section_visible = true;
      this.title = "Tour Details";
    }
    if (this.router.url.includes('tour-details-package-form')) {
      //this.cart_button_visible = false;
      //this.menu_button_visible = false;
      this.title_section_visible = true;
      this.title = "";
    }
    if (this.router.url.includes('school-pool-car')) {
      //this.cart_button_visible = false;
      //this.menu_button_visible = false;
      this.title_section_visible = true;
      this.title = "School Pull Car";
    }
  }
  getBalance(userId) {
    let request_data = { "type": 'referral_balance', "user_id": userId, }
    this.officePoolCarService.payThroughWalletService(request_data).subscribe(
      res => {
        this.referral_balance = res.result.referral_balance;
      },
      error => {
        this.toasterService.showToast(error.error.msg, 2000);
      }
    );
  }
  logoutUser() {
    this.alertService.presentAlertConfirm("Are you sure you want to end this session?", "logout");
  }
  goToPage(page) {
    if (page == 'notifications')
      this.router.navigateByUrl('myaccount/myaccount-common-page/notifications')
  }

}
