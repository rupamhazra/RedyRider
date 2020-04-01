import { Component, OnInit } from '@angular/core';
import { Events } from '@ionic/angular';
import { Router } from "@angular/router";
import { Storage } from '@ionic/storage';
import { OfficePoolCarService } from '../../../core/services/office-pool-car.service';
import { LoadingService } from '../../../core/services/loading.service';
import { ToasterService } from '../../../core/services/toaster.service';

declare var RazorpayCheckout: any;
@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.page.html',
  styleUrls: ['./payment-details.page.scss'],
})
export class PaymentDetailsPage implements OnInit {
  net_connection_check: boolean = false;
  userId: string;
  payableFare: string;
  payId: string;
  journy_date: string;
  journy_time: string;
  route_master_id: string;
  car_id: string;
  seats_no = [];
  refer_code: string = '';
  generate_link: string;
  referral_balance: string;
  wallet_balance: string;
  booking_details: any;
  progress_bar: boolean = false;
  userName: string;
  userPhone: string;
  userEmail: string;
  constructor(
    public payment_details_event: Events,
    private router: Router,
    private toasterService: ToasterService,
    private officePoolCarService: OfficePoolCarService,
    private loadingService: LoadingService,
    public storage: Storage,
  ) {
    this.progress_bar = true;
    this.storage.get('USER_INFO').then((val) => {

      this.userId = val['id'];
      this.userName = val['name'];
      this.userEmail = val['email'];
      this.userPhone = val['mobile'];
      this.refer_code = val.referral_no;
      this.generate_link = 'https://google.com/' + this.refer_code;
      this.getBalance('wallet_balance');
      this.getBalance('referral_balance');
    });
    this.storage.get('bookingDetails').then((val) => {
      this.payableFare = val['total_fare_details']['payable_fare'];
      //this.payId = val['total_fare_details']['pay_id'];
      //this.seats_no = val['seat_details']['seats'];
      this.booking_details = val;
    });
  }
  ngOnInit() {
    this.payment_details_event.subscribe('check_net_connection', (data) => {
      if (data == 'connect') this.net_connection_check = false;
      if (data == 'disconnect') this.net_connection_check = true;
    });
  }
  buyCreditPoints() {
    this.router.navigateByUrl('myaccount/wallet')
  }
  referFriends() {
    this.router.navigateByUrl('myaccount/refer-earn')
  }
  getBalance(type: string) {

    let request_data = {
      "type": type,
      "user_id": this.userId,
    }
    this.officePoolCarService.payThroughWalletService(request_data).subscribe(
      res => {
        if (type == 'wallet_balance') {
          this.wallet_balance = res.result.current_wallet_balance;
          this.progress_bar = false;
        }
        if (type == 'referral_balance') {
          this.referral_balance = res.result.referral_balance;
          this.progress_bar = false;
        }
      },
      error => {
        this.progress_bar = false;
        this.toasterService.showToast(error.error.msg, 2000)
      }
    );
  }
  payThroughWallet() {
    this.loadingService.present();
    let request_data = {
      "type": "wallet_pay",
      "user_id": this.userId,
      "booking_details": this.booking_details,
      "status": 2
    }
    //console.log('request_data', request_data);
    this.officePoolCarService.payThroughWalletService(request_data).subscribe(
      res => {
        //.log('result', res.result);
        this.storage.set('transactionDetails', res.result);
        this.storage.remove('bookingDetails');
        this.storage.remove('route_search_parameters');
        this.loadingService.dismiss();
        this.router.navigateByUrl('booking-thankyou')
      },
      error => {
        console.log("error::::" + error.error);
        //this.openOtpModal();
        this.loadingService.dismiss();
        this.toasterService.showToast(error.error.msg, 3000)
        //this.router.navigateByUrl('booking-thankyou')
      }
    );

  }
  payDirect() {
    console.log('sdsdsd')
    var options = {
      description: 'Credits towards consultation',
      // image: 'https://i.imgur.com/3g7nmJC.png',
      currency: 'INR',
      key: 'rzp_test_5oKpHg5DYNOtKG',
      amount: parseFloat(this.payableFare) * 100,
      name: this.userName,
      prefill: {
        email: this.userEmail,
        contact: this.userPhone,
        name: this.userName
      },
      theme: {
        color: '#F37254'
      },
      modal: {
        ondismiss: function () {
          console.log('dismissed')
        }
      }
    };
    var successCallback = (payment_id) => {
      //alert('payment_id: ' + payment_id);
      let request_data = {
        "type": "direct_pay",
        "user_id": this.userId,
        "booking_details": this.booking_details,
        "status": 2,
        "rz_status": "success",
        "rz_txn_no": payment_id,
      };
      //console.log('request_data' + payment_id)
      this.savePaymentData(request_data);
    };
    var cancelCallback = (error) => {
      console.log(error.description + ' (Error ' + error.code + ')');
      let request_data = {
        "type": "direct_pay",
        "user_id": this.userId,
        "amount": 0.00,
        "rz_txn_no": 'CANCEL',
        "booking_details": this.booking_details,
        "rz_status": "failure"
      };
      //alert('request_data' + request_data)
      this.savePaymentData(request_data, '3');
    };
    RazorpayCheckout.open(options, successCallback, cancelCallback);
  }
  savePaymentData(request_data: any, status = '') {
    this.loadingService.present();
    this.officePoolCarService.payThroughWalletService(request_data).subscribe(
      res => {
        //alert('result' + res.result);
        if (status == '3')
          this.toasterService.showToast('Your transaction has been cancelled', 2000);
        else {
          this.storage.set('transactionDetails', res.result);
          this.storage.remove('bookingDetails');
          this.storage.remove('route_search_parameters');
          console.log('check')
          this.router.navigateByUrl('booking-thankyou');
        }


      },
      error => {
        //console.log("error::::" + error.error.msg);
        this.loadingService.dismiss();
        this.toasterService.showToast(error.error.msg, 2000)
      }
    );
  }


}
