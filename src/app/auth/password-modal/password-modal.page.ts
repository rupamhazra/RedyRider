import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { LoginRegisterService } from '../../core/services/login-register.service';
import { ToasterService } from '../../core/services/toaster.service';
import { AuthenticationService } from '../../core/services/authentication.service';
// import { FingerprintAIO, FingerprintOptions } from '@ionic-native/fingerprint-aio/ngx';
// import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { LoadingService } from '../../core/services/loading.service';
// import { ForgotPasswordModalPage } from './../forgot-password-modal/forgot-password-modal.page';
// import { OtpVerificationPage } from './../otp-verification/otp-verification.page';
import { ModalService } from '../../core/services/modal.service';
import { Events } from '@ionic/angular';

@Component({
  selector: 'app-password-modal',
  templateUrl: './password-modal.page.html',
  styleUrls: ['./password-modal.page.scss'],
})
export class PasswordModalPage implements OnInit {
  form: FormGroup;
  request_data: any;
  passwordShown: boolean = false;
  mobile: any;

  otp1: any = "";
  otp2: any = "";
  otp3: any = "";
  otp4: any = "";

  constructor(
    private loginRegisterService: LoginRegisterService,
    private router: Router,
    private formBuilder: FormBuilder,
    private toasterService: ToasterService,
    private authService: AuthenticationService,
    //private fingerAuth: FingerprintAIO,
    // private tts: TextToSpeech,
    private loadingService: LoadingService,
    public modalService: ModalService,
    private navParams: NavParams,
    public password_modal_event: Events
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      otp1: ['', Validators.required],
      otp2: ['', Validators.required],
      otp3: ['', Validators.required],
      otp4: ['', Validators.required]
    });
    this.mobile = this.navParams.get('mobile');
  }
  public togglePassword() {
    if (this.passwordShown) {
      this.passwordShown = false;
    }
    else {
      this.passwordShown = true;
    }
  }
  closePasswordModal() {
    this.password_modal_event.publish('frompasswordmodal', 1);
    //console.log('check');
    this.modalService.closeModal();
  }
  public signIn() {
    //this.authService.login();
    this.loadingService.present();
    this.request_data = {
      'type': 'log',
      'contact': this.mobile,
      'pass': this.form.value.otp1 + this.form.value.otp2 + this.form.value.otp3 + this.form.value.otp4
    }
    this.loginRegisterService.loginService(this.request_data).subscribe(
      res => {
        //console.log("res:::" + res.msg);
        if (res.status.toLowerCase() == 'success') {
          this.form.reset();
          this.loadingService.dismiss();
          this.modalService.closeModal();
          this.authService.login(res.result);
        }
      },
      error => {
        //console.log("error::::" + error.error.msg);
        this.loadingService.dismiss();
        this.toasterService.showToast(error.error.msg, 2000)
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

}
