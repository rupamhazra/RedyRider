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
declare var SMSReceive: any;

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

  ) { }
  ngOnInit() {
    this.form = this.formBuilder.group({
      potp1: ['', Validators.required],
      potp2: ['', Validators.required],
      potp3: ['', Validators.required],
      potp4: ['', Validators.required]
    });
    this.start();
    this.storage.get("user_details").then((val) => {
      console.log('val', val)
      if (val)
        this.contact = val.contact;
      else {
        this.storage.get("USER_INFO").then((val1) => {
          this.contact = val1.mobile;
          this.from_which_page = 'myaccount';
        });
      }
    });
  }
  /**
   * For SMS read autometically
   */
  start() {
    SMSReceive.startWatch(
      () => {
        document.addEventListener('onSMSArrive', (e: any) => {
          var IncomingSMS = e.data;
          this.processSMS(IncomingSMS);
        });
      },
      () => { console.log('watch start failed') }
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
    //console.log('data', data);
    const message = data.body;
    if (message) {
      this.OTP = data.body.slice(0, 4);
      this.otp1 = this.OTP[0]
      this.otp2 = this.OTP[1]
      this.otp3 = this.OTP[2]
      this.otp4 = this.OTP[3]
      //console.log('this.OTP', this.otp1);
      this.stop();
    }
  }
  /**
   * End
   */
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
        this.toasterService.showToast(error.error.msg, 2000)
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
}
