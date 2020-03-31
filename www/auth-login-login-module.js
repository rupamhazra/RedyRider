(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-login-login-module"],{

/***/ "./src/app/auth/login/login.module.ts":
/*!********************************************!*\
  !*** ./src/app/auth/login/login.module.ts ***!
  \********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/auth/login/login.page.ts");
/* harmony import */ var _core_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/components/components.module */ "./src/app/core/components/components.module.ts");








var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _core_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/auth/login/login.page.html":
/*!********************************************!*\
  !*** ./src/app/auth/login/login.page.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<ion-content>\n    <div class=\"inner_div\">\n      <form [formGroup]=\"form\"  novalidate>\n        <ion-grid>\n          <ion-row justify-content-center>\n            <ion-col align-self-center>\n                \n              <div style=\"padding-top: 10px;\">\n                <ion-item>\n                    <ion-label position=\"floating\">10 digit mobile number</ion-label>\n                    <ion-input autofocus=\"on\" formControlName=\"contact\" maxlength=\"10\" clearInput=\"true\" inputmode=\"tel\" pattern=\"[0-9]{10}\" required=\"true\"></ion-input>\n                    <ion-icon name=\"phone-portrait\" slot=\"start\"></ion-icon>\n                </ion-item>\n            </div>\n            <div text-center margin>\n              <!-- <ion-icon name=\"ios-finger-print\" class=\"_cs_icon_class\" (click)=\"showFingerprintAuthDlg()\"></ion-icon> -->\n              <ion-button size=\"default\"  type=\"button\" [disabled]=\"form.invalid || net_connection_check\" (click)=\"otpModal()\">Login with OTP</ion-button>\n              <ion-text><p>OR</p></ion-text>\n              <ion-button  size=\"default\"  type=\"button\" [disabled]=\"form.invalid || net_connection_check\" (click)=\"passwordModal()\">Login with Password</ion-button>\n             \n            </div>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-text text-center>\n                <p class=\"no_text_decoration\">\n                  <a routerLink='/register'>New User</a> | <a (click)=\"forgotPasswordModal()\">Forgot Password</a>\n                </p>\n              </ion-text>\n              </ion-col>\n          </ion-row>\n          \n        </ion-grid>\n      </form>\n    </div>\n    <div class=\"background-gif\">\n      <ion-img src=\"/assets/images/car_home.png\"></ion-img>\n    </div>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-text text-center>\n            <p>\n              <a style=\"display: inline-block;\" (click)=\"goToPage('contact-us')\">Contact Us</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;\n              <a (click)=\"goToPage('terms-conditions')\">Terms</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; \n              <a (click)=\"goToPage('privacy-policy')\">Privacy Policy</a>\n            </p>\n            <p class=\"no_text_decoration\" style=\"margin-top: 22px;\">\n              Copyright &copy; 2020 Redy Rider.\n            </p>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    \n    \n</ion-content>\n"

/***/ }),

/***/ "./src/app/auth/login/login.page.scss":
/*!********************************************!*\
  !*** ./src/app/auth/login/login.page.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-button {\n  font-size: 11px; }\n\n.app-heading h1 {\n  text-transform: uppercase;\n  letter-spacing: 1px; }\n\n._cs_icon_class {\n  zoom: 4.0; }\n\n.inner_div {\n  margin-left: 15px;\n  margin-right: 15px; }\n\n.no_text_decoration a {\n  text-decoration: none; }\n\n.grid_border_top {\n  border-top: 1px solid #ddd; }\n\na {\n  color: initial !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ByaXlhbS9Eb2N1bWVudHMvUmVkeVJpZGVyL3NyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxlQUFlLEVBQUE7O0FBRW5CO0VBQWdCLHlCQUF5QjtFQUFFLG1CQUFtQixFQUFBOztBQUM5RDtFQUNJLFNBQVEsRUFBQTs7QUFFWjtFQUNJLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxxQkFBcUIsRUFBQTs7QUFFekI7RUFDSSwwQkFBMEIsRUFBQTs7QUFFOUI7RUFDSSx5QkFBeUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pb24tYnV0dG9ue1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbn1cbi5hcHAtaGVhZGluZyBoMXt0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyBsZXR0ZXItc3BhY2luZzogMXB4O31cbi5fY3NfaWNvbl9jbGFzc3tcbiAgICB6b29tOjQuMDtcbn1cbi5pbm5lcl9kaXZ7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuLm5vX3RleHRfZGVjb3JhdGlvbiBhe1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5ncmlkX2JvcmRlcl90b3B7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZGQ7XG59XG5he1xuICAgIGNvbG9yOiBpbml0aWFsICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/auth/login/login.page.ts":
/*!******************************************!*\
  !*** ./src/app/auth/login/login.page.ts ***!
  \******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_services_login_register_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/services/login-register.service */ "./src/app/core/services/login-register.service.ts");
/* harmony import */ var _core_services_toaster_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/services/toaster.service */ "./src/app/core/services/toaster.service.ts");
/* harmony import */ var _core_services_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/services/loading.service */ "./src/app/core/services/loading.service.ts");
/* harmony import */ var _forgot_password_modal_forgot_password_modal_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../forgot-password-modal/forgot-password-modal.page */ "./src/app/auth/forgot-password-modal/forgot-password-modal.page.ts");
/* harmony import */ var _password_modal_password_modal_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../password-modal/password-modal.page */ "./src/app/auth/password-modal/password-modal.page.ts");
/* harmony import */ var _core_services_modal_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/services/modal.service */ "./src/app/core/services/modal.service.ts");
/* harmony import */ var _otp_verification_otp_verification_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../otp-verification/otp-verification.page */ "./src/app/auth/otp-verification/otp-verification.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");






// import { AuthenticationService } from '../../core/services/authentication.service';
// import { FingerprintAIO, FingerprintOptions } from '@ionic-native/fingerprint-aio/ngx';
// import { Device } from '@ionic-native/device/ngx';
// import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';







var LoginPage = /** @class */ (function () {
    function LoginPage(loginRegisterService, router, formBuilder, toasterService, 
    // private authService: AuthenticationService,
    // private fingerAuth: FingerprintAIO,
    // private device: Device,
    // private tts: TextToSpeech,
    loadingService, modalService, login_event, storage) {
        this.loginRegisterService = loginRegisterService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.toasterService = toasterService;
        this.loadingService = loadingService;
        this.modalService = modalService;
        this.login_event = login_event;
        this.storage = storage;
        this.passwordType = 'password';
        this.passwordShown = false;
        this.net_connection_check = false;
    }
    LoginPage.prototype.ngOnInit = function () {
        var _this = this;
        this.login_event.subscribe('check_net_connection', function (data) {
            if (data == 'connect')
                _this.net_connection_check = false;
            if (data == 'disconnect')
                _this.net_connection_check = true;
        });
        this.form = this.formBuilder.group({
            contact: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            type: [''],
        });
        this.login_event.subscribe('frompasswordmodal', function (data) {
            _this.form.reset();
        });
        this.login_event.subscribe('fromOtpmodal', function (data) {
            _this.form.reset();
        });
        // this.login_event.subscribe('resendOTPModal', (data) => {
        //   this.otpModal(true)
        // });
    };
    LoginPage.prototype.forgotPasswordModal = function () {
        var data = {};
        this.modalService.openModal(_forgot_password_modal_forgot_password_modal_page__WEBPACK_IMPORTED_MODULE_7__["ForgotPasswordModalPage"], data, '_c_modal_forgot_pass_css');
    };
    LoginPage.prototype.otpModal = function (resendOtp) {
        var _this = this;
        if (resendOtp === void 0) { resendOtp = false; }
        this.loadingService.present();
        this.form.value['type'] = 'log_by_otp';
        this.loginRegisterService.loginService(this.form.value).subscribe(function (res) {
            //console.log("res:::" + res.msg);
            var data = { "which_page": "login", "user_details": res.result };
            _this.modalService.openModal(_otp_verification_otp_verification_page__WEBPACK_IMPORTED_MODULE_10__["OtpVerificationPage"], data, '_c_modal_otp_css');
            _this.loadingService.dismiss();
        }, function (error) {
            //console.log("error::::" + error.error.msg);
            _this.loadingService.dismiss();
            _this.toasterService.showToast(error.error.msg, 2000);
        });
    };
    LoginPage.prototype.passwordModal = function () {
        var data = { 'mobile': this.form.value.contact };
        this.modalService.openModal(_password_modal_password_modal_page__WEBPACK_IMPORTED_MODULE_8__["PasswordModalPage"], data, '_c_modal_otp_css');
    };
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
    LoginPage.prototype.goToPage = function (whichPage) {
        this.router.navigateByUrl('common-page/' + whichPage);
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/auth/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/auth/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_login_register_service__WEBPACK_IMPORTED_MODULE_4__["LoginRegisterService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _core_services_toaster_service__WEBPACK_IMPORTED_MODULE_5__["ToasterService"],
            _core_services_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"],
            _core_services_modal_service__WEBPACK_IMPORTED_MODULE_9__["ModalService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["Events"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_12__["Storage"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=auth-login-login-module.js.map