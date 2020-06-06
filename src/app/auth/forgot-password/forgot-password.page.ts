import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { LoginRegisterService } from '../../core/services/login-register.service';
import { ToasterService } from '../../core/services/toaster.service';
import { LoadingService } from '../../core/services/loading.service';
import { ModalService } from '../../core/services/modal.service';
import { Storage } from '@ionic/storage';
import { Events } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { AuthenticationService } from '../../core/services/authentication.service';




@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  OTP: string = '';
  form: FormGroup;
  passwordShown: boolean = false;
  request_data: any;
  contact: any;
  otp_res: any;
  resend: boolean;
  from_which_page: string;
  otp1: any = "";
  otp2: any = "";
  otp3: any = "";
  otp4: any = "";
  potp1: any = "";
  potp2: any = "";
  potp3: any = "";
  potp4: any = "";
  net_connection_check: boolean = false;
  otp_pass: any;
  showPasswordDiv: boolean = false;
  constructor(
    private loginRegisterService: LoginRegisterService,
    private router: Router,
    private formBuilder: FormBuilder,
    private toasterService: ToasterService,
    private loadingService: LoadingService,
    public modalService: ModalService,
    private storage: Storage,
    public pass_event: Events,
    private authenticationService: AuthenticationService,
    private menuCtrl: MenuController,
    public forget_password: Events,

  ) { }
  ngOnInit() {
    this.forget_password.subscribe('check_net_connection', (data) => {
      if (data == 'connect') this.net_connection_check = false;
      if (data == 'disconnect') this.net_connection_check = true;
    });
    this.form = this.formBuilder.group({
      potp1: ['', Validators.required],
      potp2: ['', Validators.required],
      potp3: ['', Validators.required],
      potp4: ['', Validators.required]
    });
    this.storage.get("user_details").then((val) => {
      console.log('val', val)
      if (val) {
        this.contact = val.contact_no;
        this.otp_pass = val.otp_pass;
      }
      else {
        this.storage.get("USER_INFO").then((val1) => {
          this.contact = val1.mobile;
          this.from_which_page = 'myaccount';
        });
      }
    });
  }
  public saveNewPassword() {
    this.loadingService.present();
    this.request_data = {
      "pass": (this.form.value.potp1 + this.form.value.potp2 + this.form.value.potp3 + this.form.value.potp4),
      "contact": this.contact,
      "type": "reset"
    }
    console.log('this.request_data', this.request_data)
    this.loginRegisterService.resetPasswordService(this.request_data).subscribe(
      res => {
        this.loadingService.dismiss();
        //console.log("res:::" + res.msg);
        if (this.from_which_page == 'myaccount') {
          this.menuCtrl.enable(false);
          this.authenticationService.logout();
        }
        else
          this.router.navigateByUrl('/login');
        this.toasterService.showToast(res.msg, 2000)
      },
      error => {
        //console.log("error::::" + error.error.msg);
        this.loadingService.dismiss();
        this.toasterService.showToast(error.error.msg, 2000, true, false, '', '', 'my-error-toast');
      }
    );
  }
  public togglePassword() {
    if (this.passwordShown) {
      this.passwordShown = false;
    }
    else {
      this.passwordShown = true;
    }
  }
  closeForgotPasswordModal() {
    this.modalService.closeModal();
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
  cancel() {
    this.router.navigateByUrl('/login');
  }
  otpVerify() {
    let otp = this.otp1 + this.otp2 + this.otp3 + this.otp4;
    console.log('userdetails', this.otp_pass)
    if (otp == this.otp_pass) {
      this.showPasswordDiv = true
    } else {
      this.toasterService.showToast("OTP is invalid", 2000, true, false, '', '', 'my-error-toast');
    }
  }
}
