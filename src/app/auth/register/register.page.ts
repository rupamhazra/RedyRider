import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { LoginRegisterService } from '../../core/services/login-register.service';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { ToasterService } from '../../core/services/toaster.service';
import { ModalService } from '../../core/services/modal.service';
import { LoadingService } from '../../core/services/loading.service';
import { Events } from '@ionic/angular';
import { RouteStoppageModalPage } from '../../layout/office-pool-car-service/route-stoppage-modal/route-stoppage-modal.page';
import { Device } from '@ionic-native/device/ngx';
import { Platform } from '@ionic/angular';
import { FirebaseX } from '@ionic-native/firebase-x/ngx';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  request_data: any;
  form: FormGroup;
  passwordType: string = 'password';
  passwordShown: boolean = false;
  otp1: any = "";
  otp2: any = "";
  otp3: any = "";
  otp4: any = "";
  verificationId: any;
  otp_verification_div: boolean = false;
  net_connection_check: boolean = false;
  showReferralCode: boolean = false;
  device_details: any;
  device_token: string;
  ref_div = true;
  constructor(
    private loginRegisterService: LoginRegisterService,
    private router: Router,
    private formBuilder: FormBuilder,
    private toasterService: ToasterService,
    public modalService: ModalService,
    private loadingService: LoadingService,
    public reg_event: Events,
    private device: Device,
    public platform: Platform,
    private fcm: FirebaseX,
  ) {
    platform.ready().then(() => {
      if (this.platform.is("cordova")) { }
      this.fcm.getToken()
        .then(token => this.device_token = token)
        .catch(error => console.error('Error getting token', error));

    })
  }
  ngOnInit() {
    if (this.platform.is("cordova")) {
      this.device_details = {
        "uuid": this.device.uuid,
        "model": this.device.model,
        "platform": this.device.platform,
        "serial": this.device.serial,
        "version": this.device.version,
        "manufacturer": this.device.manufacturer
      }
    }
    this.reg_event.subscribe('check_net_connection', (data) => {
      if (data == 'connect') this.net_connection_check = false;
      if (data == 'disconnect') this.net_connection_check = true;
    });
    this.form = this.formBuilder.group({
      ref_applied_no: [''],
      ref_applied_no_checkbox: [''],
      name: ['', Validators.required],
      email: ['', Validators.required],
      mobile: ['', Validators.required],
      otp1: ['', Validators.required],
      otp2: ['', Validators.required],
      otp3: ['', Validators.required],
      otp4: ['', Validators.required],
      type: [''],
      gender: ['']
    });
    this.reg_event.subscribe('resendOTPRegisterModal', (data) => {
      this.registerUser(true);
    });
  }
  registerUser(resendOtp: boolean = false) {
    //let data = {};
    //this.modalService.openModal(OtpVerificationPage, data, '_c_modal_otp_css');
    if (this.showReferralCode && this.form.controls['ref_applied_no'].value == '') {
      this.toasterService.showToast("Please enter referral no.", 2000, true, false, '', '', 'my-error-toast');
      return false;
    }
    this.loadingService.present();
    this.request_data = {
      "mobile": this.form.controls['mobile'].value,
      "type": "reg_otp"
    }
    this.loginRegisterService.registerOTPService(this.request_data).subscribe(
      res => {
        //console.log('res', res)
        if (res.status.toLowerCase() == 'success') {
          let data = {
            "from_which_page": "register",
            "user_details": {
              "ref_applied_no": this.form.controls['ref_applied_no'].value,
              "name": this.form.controls['name'].value,
              "email": this.form.controls['email'].value,
              "mobile": this.form.controls['mobile'].value,
              "password": (this.form.controls['otp1'].value + this.form.controls['otp2'].value + this.form.controls['otp3'].value + this.form.controls['otp4'].value),
              "gender": this.form.controls['gender'].value,
              "type": "reg",
              "otp_pass": res.result.otp_pass,
              'device_details': JSON.stringify(this.device_details),
              'device_uuid': this.device.uuid,
              'device_token': this.device_token
            },
          }
          this.loadingService.dismiss();
          this.modalService.openModal(RouteStoppageModalPage, data, '_c_modal_otp_css');
        }
      },
      error => {
        console.log("error::::" + error.error);
        this.loadingService.dismiss();
        this.toasterService.showToast(error.error.msg, 2000, true, false, '', '', 'my-error-toast');
      }
    );
  }
  public togglePassword() {
    if (this.passwordShown) {
      this.passwordShown = false;
      this.passwordType = 'password';
    }
    else {
      this.passwordShown = true;
      this.passwordType = 'text';
    }
  }
  moveFocus(nextElement, $e, prevElement) {
    if (nextElement) {
      nextElement.setFocus();
    }
    if (($e.key == 'Backspace' && $e.keyCode == 8) || ($e.key == 'Delete' && $e.keyCode == 46)) {
      prevElement.setFocus();
    }
  }
  goToPage(whichPage: string) {
    if (whichPage === 'terms-conditions')
      this.router.navigateByUrl('common-page/terms-condition')
  }
}
