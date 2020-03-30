import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { LoginRegisterService } from '../../core/services/login-register.service';
import { ToasterService } from '../../core/services/toaster.service';
// import { AuthenticationService } from '../../core/services/authentication.service';
// import { FingerprintAIO, FingerprintOptions } from '@ionic-native/fingerprint-aio/ngx';
// import { Device } from '@ionic-native/device/ngx';
// import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { LoadingService } from '../../core/services/loading.service';
import { ForgotPasswordModalPage } from './../forgot-password-modal/forgot-password-modal.page';
import { PasswordModalPage } from './../password-modal/password-modal.page';
import { ModalService } from '../../core/services/modal.service';
import { OtpVerificationPage } from './../otp-verification/otp-verification.page';
import { Events } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  //fingerprintOptions: FingerprintOptions;
  form: FormGroup;
  request_data: any;
  passwordType: string = 'password';
  passwordShown: boolean = false;
  net_connection_check: boolean = false;
  constructor(
    private loginRegisterService: LoginRegisterService,
    private router: Router,
    private formBuilder: FormBuilder,
    private toasterService: ToasterService,
    // private authService: AuthenticationService,
    // private fingerAuth: FingerprintAIO,
    // private device: Device,
    // private tts: TextToSpeech,
    private loadingService: LoadingService,
    public modalService: ModalService,
    public login_event: Events,
    private storage: Storage,

  ) { }
  ngOnInit() {
    this.login_event.subscribe('check_net_connection', (data) => {
      if (data == 'connect') this.net_connection_check = false;
      if (data == 'disconnect') this.net_connection_check = true;
    });
    this.form = this.formBuilder.group({
      contact: ['', Validators.required],
      type: [''],
    });
    this.login_event.subscribe('frompasswordmodal', (data) => {
      this.form.reset();
    });
    this.login_event.subscribe('fromOtpmodal', (data) => {
      this.form.reset();
    });
    // this.login_event.subscribe('resendOTPModal', (data) => {
    //   this.otpModal(true)
    // });
  }
  forgotPasswordModal() {
    let data = {}
    this.modalService.openModal(ForgotPasswordModalPage, data, '_c_modal_forgot_pass_css');
  }
  otpModal(resendOtp: boolean = false) {
    this.loadingService.present();
    this.form.value['type'] = 'log_by_otp';
    this.loginRegisterService.loginService(this.form.value).subscribe(
      res => {

        //console.log("res:::" + res.msg);
        let data = { "which_page": "login", "user_details": res.result }
        this.modalService.openModal(OtpVerificationPage, data, '_c_modal_otp_css');
        this.loadingService.dismiss();
      },
      error => {
        //console.log("error::::" + error.error.msg);
        this.loadingService.dismiss();
        this.toasterService.showToast(error.error.msg, 2000)
      }
    );

  }
  passwordModal() {
    let data = { 'mobile': this.form.value.contact }
    this.modalService.openModal(PasswordModalPage, data, '_c_modal_otp_css');
  }


  // loginUserWithPassword(result: any = '', device_id: any = '') {
  //   this.loadingService.present();
  //   if (result) {
  //     if (result.withFingerprint && device_id) {
  //       this.request_data = { 'device_id': device_id }
  //     }
  //   }
  //   else {
  //     this.request_data = this.form.value
  //   }

  //   console.log("form value", this.form.value)
  //   if (this.form.value.mobile == "9038698174" && this.form.value.password == '123456') {
  //     this.loadingService.dismiss();
  //     this.authService.login(this.form.value)
  //     // this.tts.speak("You have successfully authenticated")
  //     //     .then(() => this.authService.login(this.form.value))
  //     //     .catch((reason: any) => console.log(reason));

  //   } else {
  //     this.loadingService.dismiss();
  //     this.toasterService.showToast("Please enter valid username and password", 2000);
  //     this.tts.speak("Please enter valid username and password")
  //       .then(() => console.log('success'))
  //       .catch((reason: any) => console.log(reason));

  //   }
  //   // this.loginRegisterService.loginService(this.request_data).subscribe(
  //   //   res => {
  //   //     console.log("res:::" + res.msg);
  //   //     this.loadingService.dismiss();
  //   //     //this.authService.login(res.result)
  //   //     this.tts.speak(res.msg)
  //   //       .then(() => this.authService.login(res.result))
  //   //       .catch((reason: any) => console.log(reason));
  //   //   },
  //   //   error => {
  //   //     console.log("error::::" + error.error.msg);
  //   //     this.loadingService.dismiss();
  //   //     this.toasterService.showToast(error.error.msg, 2000)
  //   //     this.tts.speak(error.error.msg)
  //   //       .then(() => console.log('success'))
  //   //       .catch((reason: any) => console.log(reason));
  //   //   }
  //   // );

  // }

  // public showFingerprintAuthDlg() {
  //   console.log('check')
  //   this.fingerprintOptions = {
  //     clientId: this.device.uuid,
  //     clientSecret: this.device.uuid, //Only necessary for Android
  //     disableBackup: true,  //Only for Android(optional)
  //     localizedFallbackTitle: 'Use Pin', //Only for iOS
  //     localizedReason: 'Please authenticate' //Only for iOS
  //   }
  //   this.fingerAuth.isAvailable().then(result => {
  //     //console.log('result', result)
  //     if (result === 'finger' || result === 'face') {
  //       //console.log('fingerAuth')
  //       this.fingerAuth.show(this.fingerprintOptions)
  //         .then((result1: any) => this.loginUser(result1, this.device.uuid))
  //         .catch((error1: any) => console.log('error1', error1));
  //     }
  //   });
  // }

  goToPage(whichPage: string) {
    this.router.navigateByUrl('common-page/' + whichPage)
  }

}
