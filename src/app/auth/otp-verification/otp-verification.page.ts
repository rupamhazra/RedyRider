import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../core/services/modal.service';
import { NavParams } from '@ionic/angular';
import { FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { AuthenticationService } from '../../core/services/authentication.service';
import { LoginRegisterService } from '../../core/services/login-register.service';
import { LoadingService } from '../../core/services/loading.service';
import { ToasterService } from '../../core/services/toaster.service';
import { Events } from '@ionic/angular';
declare var SMSReceive: any;

@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.page.html',
  styleUrls: ['./otp-verification.page.scss'],
})
export class OtpVerificationPage implements OnInit {
  form1: FormGroup;
  mobileNo: any;
  otp1: any = "";
  otp2: any = "";
  otp3: any = "";
  otp4: any = "";
  which_page: string;
  userDetails: any;
  request_data: any;
  form: FormGroup;
  register_otp: string;
  OTP: string = '';
  constructor(
    public modalService: ModalService,
    private navParams: NavParams,
    private authService: AuthenticationService,
    private loginRegisterService: LoginRegisterService,
    private loadingService: LoadingService,
    private toasterService: ToasterService,
    private otpModal: Events
  ) { }

  ngOnInit() {
    this.loadingService.present();
    this.start();
    this.userDetails = this.navParams.get('user_details');
    this.which_page = this.navParams.get('which_page');
    this.register_otp = this.navParams.get('register_otp');
  }
  /**
   * For SMS read autometically
   */
  start() {
    console.log('start..')
    SMSReceive.startWatch(
      () => {
        document.addEventListener('onSMSArrive', (e: any) => {
          var IncomingSMS = e.data;
          console.log('IncomingSMS', IncomingSMS)
          this.processSMS(IncomingSMS);
        });
      },
      () => { this.loadingService.dismiss(); console.log('watch start failed') }
    )
  }
  stop() {
    SMSReceive.stopWatch(
      () => { console.log('watch stopped') },
      () => { console.log('watch stop failed') }
    )
  }
  processSMS(data) {
    this.loadingService.dismiss();
    console.log('data', data);
    const message = data.body;
    if (message) {
      this.OTP = data.body.slice(0, 4);
      this.otp1 = this.OTP[0]
      this.otp2 = this.OTP[1]
      this.otp3 = this.OTP[2]
      this.otp4 = this.OTP[3]
      this.stop();
    }
  }
  /**
   * End
   */
  closePackegeModal() {
    this.otpModal.publish('fromOtpmodal', 1);
    this.modalService.closeModal();
  }
  otpVerify() {
    this.loadingService.present()
    this.modalService.closeModal();
    if (this.which_page == 'login') {
      this.loadingService.dismiss();
      this.authService.login(this.userDetails)
    } else if (this.which_page == 'register') {
      this.registerService(this.userDetails)
    }
  }
  registerService(userRegisterDetails) {
    this.loginRegisterService.registerService(userRegisterDetails).subscribe(
      res => {
        //console.log('res_details', res)
        if (res.status.toLowerCase() == 'success') {
          this.authService.login(res.result);
          this.loadingService.dismiss();
        }
      },
      error => {
        this.loadingService.dismiss();
        this.toasterService.showToast(error.error.msg, 2000)
      }
    );
  }
  sendRequestForm(package_id: BigInteger) {
    this.modalService.closeModal();
  }
  closeOtpModal() {
    this.otpModal.publish('fromOtpmodal', 1);
    this.modalService.closeModal();
  }

}
