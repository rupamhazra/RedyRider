import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { LoginRegisterService } from '../../core/services/login-register.service';
import { ToasterService } from '../../core/services/toaster.service';
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
        let data = { "which_page": "login", "user_details": res.result }
        this.modalService.openModal(OtpVerificationPage, data, '_c_modal_otp_css');
        this.loadingService.dismiss();
      },
      error => {
        this.loadingService.dismiss();
        this.toasterService.showToast(error.error.msg, 2000)
      }
    );
  }
  passwordModal() {
    let data = { 'mobile': this.form.value.contact }
    this.modalService.openModal(PasswordModalPage, data, '_c_modal_otp_css');
  }
  goToPage(whichPage: string) {
    this.router.navigateByUrl('common-page/' + whichPage)
  }

}
