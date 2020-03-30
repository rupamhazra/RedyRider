import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { LoginRegisterService } from '../../core/services/login-register.service';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { ToasterService } from '../../core/services/toaster.service';
import { ModalService } from '../../core/services/modal.service';
import { LoadingService } from '../../core/services/loading.service';
import { Storage } from '@ionic/storage';
import { Events } from '@ionic/angular';

@Component({
  selector: 'app-forgot-password-modal',
  templateUrl: './forgot-password-modal.page.html',
  styleUrls: ['./forgot-password-modal.page.scss'],
})
export class ForgotPasswordModalPage implements OnInit {
  form: FormGroup;
  net_connection_check: boolean = false
  constructor(
    private loginRegisterService: LoginRegisterService,
    private router: Router,
    private formBuilder: FormBuilder,
    private toasterService: ToasterService,
    public modalService: ModalService,
    private storage: Storage,
    private loadingService: LoadingService,
    public forgot_pass_event: Events,

  ) { }

  ngOnInit() {
    this.forgot_pass_event.subscribe('check_net_connection', (data) => {
      if (data == 'connect') this.net_connection_check = false;
      if (data == 'disconnect') this.net_connection_check = true;
    });
    this.form = this.formBuilder.group({
      contact: [Validators.required],
    });
    this.forgot_pass_event.subscribe('resendForgotOTPModal', (data) => {
      this.sendOTP(true);
    });

  }
  sendOTP(resendOtp: boolean = false) {
    //this.router.navigateByUrl('/forgot-password')
    //this.modalService.closeModal();

    this.loadingService.present();
    this.form.value['type'] = 'log_by_otp';
    this.loginRegisterService.loginService(this.form.value).subscribe(
      res => {


        //console.log("res:::" + res.msg);
        this.storage.set('user_details', {
          //"otp": res.result.otp_pass,
          "contact": res.result.mobile, 'resend': resendOtp
        })
        //this.storage.set('contact', res.result.mobile)
        this.modalService.closeModal();
        this.loadingService.dismiss();
        this.router.navigateByUrl('/forgot-password')

      },
      error => {
        //console.log("error::::" + error.error.msg);
        this.loadingService.dismiss();
        this.toasterService.showToast(error.error.msg, 2000)
      }
    );


  }
  openForgotPasswordModal() {
    let data = {}
    this.modalService.openModal(ForgotPasswordModalPage, data, '_c_modal_forgot_pass_css');
  }
  closeForgotPasswordModal() {
    this.modalService.closeModal();
  }

}
