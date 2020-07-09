import { Component, OnInit } from '@angular/core';
import { OfficePoolCarService } from '../../../core/services/office-pool-car.service';
import { NavParams } from '@ionic/angular';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { Events } from '@ionic/angular';
import { IonicSelectableComponent } from 'ionic-selectable';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { AuthenticationService, ToasterService, LoadingService, ModalService, NetworkService } from '../../../core/globalMethods/global-methods';

@Component({
  selector: 'app-route-stoppage-modal',
  templateUrl: './route-stoppage-modal.page.html',
  styleUrls: ['./route-stoppage-modal.page.scss'],
})
export class RouteStoppageModalPage implements OnInit {
  items: any;
  calling_page: string;
  form_personal: FormGroup;
  form_add: FormGroup;
  form_booking: FormGroup;
  result_data: any = {};
  net_connection_check: boolean = false;
  countries: any;
  states: any;
  cities: any;
  country_selected = {};
  state_selected = {};
  city_selected = {};
  qr_image;
  stoppage_list;
  otp1: any;
  otp2: any;
  otp3: any;
  otp4: any;
  request_data: any;
  passwordShown: boolean = false;
  mobile;
  form_password: FormGroup;
  form_forget_password: FormGroup;
  userDetails: any;
  OTP: string = '';
  register_otp: string;
  constructor(
    public modalService: ModalService,
    private officePoolCarService: OfficePoolCarService,
    private navParams: NavParams,
    private loadingService: LoadingService,
    private toasterService: ToasterService,
    private networkService: NetworkService,
    private formBuilder: FormBuilder,
    public route_stoppage_details_event: Events,
    private router: Router,
    private storage: Storage,
    private authService: AuthenticationService,
  ) { }
  ngOnInit() {
    this.route_stoppage_details_event.subscribe('check_net_connection', (data) => {
      if (data == 'connect') this.net_connection_check = false;
      if (data == 'disconnect') this.net_connection_check = true;
    });
    this.calling_page = this.navParams.get('from_which_page');
    let route_id = this.navParams.get('route_id');
    let end_point = this.navParams.get('end_point');
    let start_point = this.navParams.get('start_point');
    let route_timing_id = this.navParams.get('route_timing_id');
    this.qr_image = this.navParams.get('qr_image');

    if (!this.networkService.checkNetworkDisconnect()) {

      if (this.calling_page == 'bus-route-details-page') {
        this.loadingService.present();
        let request_data = { "type": "stoppage_details", "route_id": route_id, 'start_loc': start_point, 'end_loc': end_point, 'route_timing_id': route_timing_id };
        this.officePoolCarService.commonSearchService(request_data).subscribe(
          res => {
            //console.log("res:::" + res.msg);
            this.items = res.result;
            this.loadingService.dismiss();
          },
          error => {
            //console.log("error::::" + error.error.msg);
            this.loadingService.dismiss();
            this.toasterService.showToast(error.error.msg, 2000, true, false, '', '', 'my-error-toast');
          }
        );
      }
      else if (this.calling_page == 'myaccount-personal') {
        console.log('myaccount-personal')
        this.getData(this.calling_page, this.navParams.get('userId'));
        this.form_personal = this.formBuilder.group({
          name: [Validators.required],
          email: [Validators.required],
          gender: [''],
          type: ['update'],
          user_id: [this.navParams.get('userId')]
        });
      }
      else if (this.calling_page == 'myaccount-address') {
        console.log('myaccount-address')
        this.countryList();
        this.getData(this.calling_page, this.navParams.get('userId'));
        this.form_add = this.formBuilder.group({
          address: [Validators.required],
          country_id: [Validators.required],
          state_id: [Validators.required],
          city_id: [Validators.required],
          pin_code: [Validators.required],
          type: ['update'],
          user_id: [this.navParams.get('userId')]
        });
      }
      if (this.calling_page == 'location-tracking-page') {
        this.stoppage_list = this.navParams.get('stoppage_list');
      }
      if (this.calling_page == 'login-password-page') {
        this.mobile = this.navParams.get('mobile');
        this.form_password = this.formBuilder.group({
          otp1: ['', Validators.required],
          otp2: ['', Validators.required],
          otp3: ['', Validators.required],
          otp4: ['', Validators.required]
        });
      }
      if (this.calling_page == 'login-forget-password-page') {
        this.form_forget_password = this.formBuilder.group({
          contact: [Validators.required],
        });
      }
      if (this.calling_page == 'login-otp-page' || this.calling_page == 'register') {
        this.register_otp = this.navParams.get('register_otp');
        this.userDetails = this.navParams.get('user_details');
      }
      if (this.calling_page == 'refer-earn-page-terms') {
        this.loadingService.present();
        let request_data = {
          "content_type": this.calling_page,
          "type": "site_content"
        };
        this.officePoolCarService.commonPageContentService(request_data).subscribe(
          res => {
            //console.log('res', res)
            this.loadingService.dismiss();
            this.items = res.result
          },
          error => {
            console.log("error::::" + error.error);
            this.loadingService.dismiss();
            this.toasterService.showToast(error.error.msg, 2000, true, false, '', '', 'my-error-toast');
          }
        );
      }
      if (this.calling_page == 'global-popup') {
        //this.loadingService.present();
        this.storage.set('popup_msg', 'yes');
        let request_data = {
          "type": "popup_msg"
        };
        this.officePoolCarService.commonPageContentService(request_data).subscribe(
          res => {
            //console.log('res', res)
            //this.loadingService.dismiss();
            this.result_data = res.result
          },
          error => {

            //console.log('error', error)
            this.toasterService.showToast(error.error.msg, 2000, true, false, '', '', 'my-error-toast');
          }
        );
      }

    }

  }
  closeModal() {
    this.modalService.closeModal();
  }
  getData(which, user_id, booking_id = '') {
    if (which == 'myaccount-personal') {
      console.log('getData myaccount-personal')
      this.loadingService.present();
      let request_data = { "user_id": user_id };
      this.officePoolCarService.personalService(request_data).subscribe(
        res => {
          //console.log("res:::" + res.msg);
          this.result_data = res.result;
          this.loadingService.dismiss();
        },
        error => {
          //console.log("error::::" + error.error.msg);
          this.loadingService.dismiss();
          this.toasterService.showToast(error.error.msg, 2000, true, false, '', '', 'my-error-toast');
        }
      );
    }
    else if (which == 'myaccount-address') {
      console.log('getData myaccount-address')
      this.loadingService.present();
      let request_data = { "user_id": user_id };
      this.officePoolCarService.addressService(request_data).subscribe(
        res => {
          //console.log("res:::" + res.msg);
          this.country_selected = { 'id': res.result.country_id, 'name': res.result.country_name }
          this.state_selected = { 'id': res.result.state_id, 'name': res.result.state_name }
          this.city_selected = { 'id': res.result.city_id, 'name': res.result.city_name }
          this.result_data = res.result;
          this.loadingService.dismiss();
        },
        error => {
          //console.log("error::::" + error.error.msg);
          this.loadingService.dismiss();
          this.toasterService.showToast(error.error.msg, 2000, true, false, '', '', 'my-error-toast');
        }
      );
    }
    else if (which == 'my-booking-history') {
      // this.loadingService.present();
      // let request_data = { "booking_id": booking_id };
      // this.officePoolCarService.addressService(request_data).subscribe(
      //   res => {
      //     //console.log("res:::" + res.msg);
      //     this.country_selected = { 'id': res.result.country_id, 'name': res.result.country_name }
      //     this.state_selected = { 'id': res.result.state_id, 'name': res.result.state_name }
      //     this.city_selected = { 'id': res.result.city_id, 'name': res.result.city_name }
      //     this.result_data = res.result;
      //     this.loadingService.dismiss();
      //   },
      //   error => {
      //     //console.log("error::::" + error.error.msg);
      //     this.loadingService.dismiss();
      //     this.toasterService.showToast(error.error.msg, 2000, true, false, '', '', 'my-error-toast');
      //   }
      // );
    }
  }
  saveProfile() {
    this.officePoolCarService.profileService(this.form_personal.value).subscribe(
      res => {
        //console.log("res:::" + res.msg);
        this.result_data = res.result;
        this.route_stoppage_details_event.publish('profile_update', { "which": 'personal', "user_id": this.form_personal.value.user_id });
        this.storage.set('personal', res.result);
        this.modalService.closeModal();
        this.router.navigateByUrl('myaccount');
        this.loadingService.dismiss();
        this.toasterService.showToast(res.msg, 2000);
      },
      error => {
        //console.log("error::::" + error.error.msg);
        this.loadingService.dismiss();
        this.toasterService.showToast(error.error.msg, 2000, true, false, '', '', 'my-error-toast');
      }
    );
  }
  countryList() {
    let request_data = { "type": 'country' };
    this.officePoolCarService.profileService(request_data).subscribe(
      res => {
        //console.log("res:::" + res.msg);
        this.countries = res.result;
        this.loadingService.dismiss();
      },
      error => {
        //console.log("error::::" + error.error.msg);
        this.loadingService.dismiss();
        this.toasterService.showToast(error.error.msg, 2000, true, false, '', '', 'my-error-toast');
      }
    );
  }
  countryChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    let request_data = { "type": 'states', "which_id": event.value.id };
    this.officePoolCarService.profileService(request_data).subscribe(
      res => {
        //console.log("res:::" + res.msg);
        this.states = res.result;
        this.loadingService.dismiss();
      },
      error => {
        //console.log("error::::" + error.error.msg);
        this.loadingService.dismiss();
        this.toasterService.showToast(error.error.msg, 2000, true, false, '', '', 'my-error-toast');
      }
    );
    console.log('port:', event.value);
  }
  stateChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    let request_data = { "type": 'cities', "which_id": event.value.id };
    this.officePoolCarService.profileService(request_data).subscribe(
      res => {
        //console.log("res:::" + res.msg);
        this.cities = res.result;
        this.loadingService.dismiss();
      },
      error => {
        //console.log("error::::" + error.error.msg);
        this.loadingService.dismiss();
        this.toasterService.showToast(error.error.msg, 2000, true, false, '', '', 'my-error-toast');
      }
    );
    console.log('port:', event.value);
  }
  saveAddress() {
    console.log('this.form', this.form_add.value)
    let request_data = {
      "type": "update",
      "user_id": this.form_add.value.user_id,
      "address": this.form_add.value.address,
      "country_id": this.form_add.value.country_id.id,
      "state_id": this.form_add.value.state_id.id,
      "city_id": this.form_add.value.city_id.id,
      "pin_code": this.form_add.value.pin_code
    }
    this.officePoolCarService.profileService(request_data).subscribe(
      res => {
        //console.log("res:::" + res.msg);
        this.result_data = res.result;
        this.route_stoppage_details_event.publish('profile_update', { "which": 'address', "user_id": this.form_add.value.user_id });
        //this.storage.set('personal', res.result);
        this.modalService.closeModal();
        this.router.navigateByUrl('myaccount');
        this.loadingService.dismiss();
        this.toasterService.showToast(res.msg, 2000);
      },
      error => {
        //console.log("error::::" + error.error.msg);
        this.loadingService.dismiss();
        this.toasterService.showToast(error.error.msg, 2000, true, false, '', '', 'my-error-toast');
      }
    );

  }
  signIn() {
    //this.authService.login();
    this.loadingService.present();
    this.request_data = {
      'type': 'log',
      'contact': this.mobile,
      'user_type': '3',
      'pass': this.form_password.value.otp1 + this.form_password.value.otp2 + this.form_password.value.otp3 + this.form_password.value.otp4
    }
    this.officePoolCarService.loginService(this.request_data).subscribe(
      res => {
        //console.log("res:::" + res.msg);
        if (res.status.toLowerCase() == 'success') {
          this.form_password.reset();
          this.loadingService.dismiss();
          this.modalService.closeModal();
          this.authService.login(res.result);
        }
      },
      error => {
        //console.log("error::::" + error.error.msg);
        this.loadingService.dismiss();
        this.toasterService.showToast(error.error.msg, 2000, true, false, '', '', 'my-error-toast');
      }
    );
  }
  moveFocus(nextElement, $e, prevElement) {
    //console.log('key details', $e);
    if (nextElement) {
      nextElement.setFocus();
    }
    if (($e.key == 'Backspace' && $e.keyCode == 8) || ($e.key == 'Delete' && $e.keyCode == 46)) {
      prevElement.setFocus();
    }

  }
  togglePassword() {
    if (this.passwordShown) {
      this.passwordShown = false;
    }
    else {
      this.passwordShown = true;
    }
  }
  sendOTP(resendOtp: boolean = false) {
    //this.router.navigateByUrl('/forgot-password')
    //this.modalService.closeModal();
    this.loadingService.present();
    this.form_forget_password.value['type'] = 'log_by_otp';
    this.officePoolCarService.loginService(this.form_forget_password.value).subscribe(
      res => {
        //console.log("res:::" + res.msg);
        this.storage.set('user_details', res.result);
        this.modalService.closeModal();
        this.loadingService.dismiss();
        this.router.navigateByUrl('/forgot-password')
      },
      error => {
        this.loadingService.dismiss();
        this.toasterService.showToast(error.error.msg, 2000, true, false, '', '', 'my-error-toast');
      }
    );
  }
  otpVerify() {
    this.loadingService.present()
    console.log('userdetails', this.userDetails)
    if (this.calling_page == 'login-otp-page') {
      let otp = this.otp1 + this.otp2 + this.otp3 + this.otp4
      //console.log('otp', otp)
      if (otp == this.userDetails.otp_pass) {
        //console.log('successs')
        this.modalService.closeModal();
        this.authService.login(this.userDetails)
      } else {
        this.toasterService.showToast("OTP is invalid", 2000, true, false, '', '', 'my-error-toast');
      }

      this.loadingService.dismiss();
      //this.authService.login(this.userDetails)
    } else if (this.calling_page == 'register') {
      this.modalService.closeModal();
      this.registerService(this.userDetails)
    }
  }
  registerService(userRegisterDetails) {
    this.officePoolCarService.registerService(userRegisterDetails).subscribe(
      res => {
        //console.log('res_details', res)
        if (res.status.toLowerCase() == 'success') {

          this.authService.login(res.result);
          this.toasterService.showToast('Congrats you got your first seat free of cost.', 3000);
          this.loadingService.dismiss();
        }
      },
      error => {
        this.loadingService.dismiss();
        this.toasterService.showToast(error.error.msg, 2000, true, false, '', '', 'my-error-toast');
      }
    );
  }
  popupDetails() {
    this.modalService.closeModal();
    this.router.navigateByUrl('/common-page/popup-details');
  }
}
