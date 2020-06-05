import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Events } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { OfficePoolCarService } from '../../../core/services/office-pool-car.service';
import { LoadingService } from '../../../core/services/loading.service';
import { ToasterService } from '../../../core/services/toaster.service';
import { FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-booked-details',
  templateUrl: './booked-details.page.html',
  styleUrls: ['./booked-details.page.scss'],
})
export class BookedDetailsPage implements OnInit {
  net_connection_check: boolean = false;
  userId: string;
  form: FormGroup;
  coupan_div: boolean;
  total_seat_fare_details: any = {};
  bookedDetails_res: any;
  payId = [];
  pickup_location: any;
  drop_location: any;
  progress_bar: boolean = false;
  freeMode: boolean;
  constructor(
    private router: Router,
    public booked_details_event: Events,
    private toasterService: ToasterService,
    private officePoolCarService: OfficePoolCarService,
    private loadingService: LoadingService,
    public storage: Storage,
    private formBuilder: FormBuilder,
  ) {
    this.progress_bar = true;
    this.storage.get('select_location').then((val) => {
      console.log('select_location',val);
      this.bookedDetails_res = val.booking_details;
      this.pickup_location = val.pickup_location;
      this.drop_location = val.drop_location;

    });
    this.storage.get('bookingDetails').then((val) => {
      this.bookedDetails_res = val.booking_details;
      this.total_seat_fare_details = val.total_fare_details;
      for (var i = 0; i < val.booking_details.length; i++) {
        this.payId.push(val.booking_details[i].fare_details.pay_id)
      }
    });
    this.progress_bar = false;
    this.storage.get('USER_INFO').then((val) => {
      this.userId = val['id'];
      this.freeMode = val['free_mode'];
    });
  }
  ngOnInit() {
    this.booked_details_event.subscribe('check_net_connection', (data) => {
      if (data == 'connect') this.net_connection_check = false;
      if (data == 'disconnect') this.net_connection_check = true;
    });
    this.form = this.formBuilder.group({
      coupon_code: ['', Validators.required],
    });
  }
  goPaymentPage() {
    if (this.freeMode) {
      this.confirmBookingForFreeRide();
    }
    else this.router.navigateByUrl('payment-details');
  }
  confirmBookingForFreeRide() {
    this.loadingService.present();
    let request_data = {
      "type": "free_pay",
      "user_id": this.userId,
      "booking_details": this.bookedDetails_res,
      "status": 4
    }
    //console.log('request_data', request_data);
    this.officePoolCarService.payThroughWalletService(request_data).subscribe(
      res => {
        //.log('result', res.result);
        this.storage.set('transactionDetails', res.result);
        this.storage.remove('bookingDetails');
        this.storage.remove('route_search_parameters');
        this.storage.get('USER_INFO').then((val) => {
          let val1 = val
          val1['free_mode'] = false;
          this.storage.set('USER_INFO', val1);
        });
        this.loadingService.dismiss();
        this.router.navigateByUrl('booking-thankyou')
      },
      error => {
        console.log("error::::" + error.error);
        //this.openOtpModal();
        this.loadingService.dismiss();
        this.toasterService.showToast(error.error.msg, 3000, true, false, '', '', 'my-error-toast');
        //this.router.navigateByUrl('booking-thankyou')
      }
    );
  }
  applyCoupon() {
    this.loadingService.present();
    let request_data = {
      "type": "coupan",
      "pay_id": this.payId,
      "user_id": this.userId,
      "coupan_id": this.form.value.coupon_code
    };
    this.officePoolCarService.applyCouponService(request_data).subscribe(
      res => {
        //console.log('res.result', res)
        this.total_seat_fare_details = res.result.total_fare_details;
        this.bookedDetails_res = res.result.booking_details;
        this.storage.remove('bookingDetails');
        this.storage.set('bookingDetails', res.result);
        this.coupan_div = true;
        this.form.reset();
        this.loadingService.dismiss();
        this.toasterService.showToast("Your coupon code applied successfully", 2000)
      },
      error => {
        //console.log("error::::" + error.error.msg);
        this.loadingService.dismiss();
        this.toasterService.showToast(error.error.msg, 2000, true, false, '', '', 'my-error-toast');
      }
    );
  }
}
