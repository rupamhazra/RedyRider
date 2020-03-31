(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-forgot-password-forgot-password-module"],{

/***/ "./src/app/auth/forgot-password/forgot-password.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/auth/forgot-password/forgot-password.module.ts ***!
  \****************************************************************/
/*! exports provided: ForgotPasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageModule", function() { return ForgotPasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _forgot_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgot-password.page */ "./src/app/auth/forgot-password/forgot-password.page.ts");
/* harmony import */ var _core_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/components/components.module */ "./src/app/core/components/components.module.ts");








var routes = [
    {
        path: '',
        component: _forgot_password_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordPage"]
    }
];
var ForgotPasswordPageModule = /** @class */ (function () {
    function ForgotPasswordPageModule() {
    }
    ForgotPasswordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _core_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
            ],
            declarations: [_forgot_password_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordPage"]]
        })
    ], ForgotPasswordPageModule);
    return ForgotPasswordPageModule;
}());



/***/ }),

/***/ "./src/app/auth/forgot-password/forgot-password.page.html":
/*!****************************************************************!*\
  !*** ./src/app/auth/forgot-password/forgot-password.page.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<ion-content>\n    <div class=\"inner_div\">\n      <div class=\"ion-text-center ion-padding\">\n        <ion-text>\n          <h3>Reset Password</h3>\n          <p>4 digit OTP code</p>\n        </ion-text>\n        <ion-item class=\"ion-text-center ion-margin-bottom\" lines=\"none\">\n          <div class=\"otp-input2\">\n            <ion-input #Field1 type=\"tel\" [(ngModel)]=\"otp1\" maxlength=\"1\" class=\"otp-margin-right\" readonly></ion-input>\n            <ion-input #Field2 type=\"tel\" [(ngModel)]=\"otp2\" maxlength=\"1\" class=\"otp-margin-right\" readonly></ion-input>\n            <ion-input #Field3 [(ngModel)]=\"otp3\" maxlength=\"1\" class=\"otp-margin-right\" readonly></ion-input>\n            <ion-input #Field4 [(ngModel)]=\"otp4\" maxlength=\"1\" readonly></ion-input>\n          </div>\n          <ion-icon name=\"chatbubbles\"  slot=\"start\" style=\" margin-right: 0px;\"></ion-icon>\n        </ion-item>\n        <form [formGroup]=\"form\"  novalidate>\n        <ion-grid>\n          <ion-row class=\"ion-justify-content-center\">\n            <ion-col class=\"ion-align-self-center\">\n              <div style=\"padding-top: 10px;\">\n                <ion-text>\n                  <p>Set new 4 digit password</p>\n                </ion-text>\n                <ion-item class=\"ion-text-center ion-margin-bottom\" lines=\"none\">\n                  <div class=\"otp-input2\">\n                    <ion-input #pField1 autofocus=\"true\" [style.-webkit-text-security]=\"passwordShown === false ? 'disc':''\" formControlName=\"potp1\" type=\"tel\" [(ngModel)]=\"potp1\" maxlength=\"1\" tabindex=\"1\"   (keyup)=\"moveFocus(pField2,$event,pField1)\"   class=\"otp-margin-right\"></ion-input>\n          \n                    <ion-input #pField2 autofocus=\"true\" formControlName=\"potp2\" [style.-webkit-text-security]=\"passwordShown === false ? 'disc':''\" type=\"tel\" [(ngModel)]=\"potp2\" tabindex=\"2\"  maxlength=\"1\" (keyup)=\"moveFocus(pField3,$event,pField1)\" class=\"otp-margin-right\"></ion-input>\n          \n                    <ion-input #pField3 autofocus=\"true\" formControlName=\"potp3\" [style.-webkit-text-security]=\"passwordShown === false ? 'disc':''\"  type=\"tel\" [(ngModel)]=\"potp3\" tabindex=\"3\"  maxlength=\"1\" (keyup)=\"moveFocus(pField4,$event,pField2)\" class=\"otp-margin-right\"></ion-input>\n          \n                    <ion-input #pField4 autofocus=\"true\" formControlName=\"potp4\" [style.-webkit-text-security]=\"passwordShown === false ? 'disc':''\" type=\"tel\" tabindex=\"4\"  [(ngModel)]=\"potp4\" maxlength=\"1\" (keyup)=\"moveFocus(pField4,$event,pField3)\"></ion-input>\n                  </div>\n                  <ion-icon name=\"lock\" slot=\"start\" style=\" margin-right: 0px;\"></ion-icon>\n                  <ion-text name=\"eye\" style=\"    margin-left: 0px;\" *ngIf=\"!passwordShown\" slot=\"end\" (click)=\"togglePassword()\">Show</ion-text>\n                  <ion-text name=\"eye\" style=\"    margin-left: 0px;\"  *ngIf=\"passwordShown\" slot=\"end\" (click)=\"togglePassword()\">HIde</ion-text>\n                </ion-item>\n                <div style=\"margin-top: 15px;\">\n                  <!-- <ion-button size=\"small\"  type=\"button\" color=\"danger\" (click)=\"closeForgotPasswordModal()\">Cancel</ion-button> -->\n                  <ion-button size=\"default\"  type=\"button\" (click)=\"saveNewPassword()\" [disabled]=\"form.invalid\">Save</ion-button>\n                </div>\n            </div>\n            </ion-col>\n          </ion-row>\n          <!-- <ion-row margin-bottom>\n            <ion-col>\n              \n              <div class=\"ion-margin-top\">\n                <ion-text>Not received your code? </ion-text><ion-text color=\"primary\" (click)=\"openResendOtp()\">Resend Code</ion-text>\n              </div>\n             \n              </ion-col>\n          </ion-row> -->\n          \n        </ion-grid>\n      </form>\n    </div>\n    <ion-grid class=\"grid_border_top\">\n      <ion-row margin-bottom>\n        <ion-col>\n          <ion-text text-center>\n            <p class=\"no_text_decoration\">\n              Copyright &copy; 2020 Saha Tour & Travels.\n            </p>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/auth/forgot-password/forgot-password.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/auth/forgot-password/forgot-password.page.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".otp-input2 ion-input {\n  display: inline-block;\n  text-align: center;\n  line-height: 30px;\n  font-size: 30px;\n  border-bottom: 2px solid #86888f;\n  width: 20%; }\n\n.otp-input2 input {\n  text-align: center; }\n\n.rotp {\n  font-size: 20px;\n  margin-top: 12px; }\n\n.otp-input2 ion-input {\n  cursor: none !important; }\n\n.otp-input2 button {\n  margin-top: 5%; }\n\n.item-md.item-input:not(.input-has-focus):not(.item-input-has-focus) .item-inner,\n.item-md.item-input.ng-invalid.ng-touched:not(.input-has-focus):not(.item-input-has-focus) .item-inner,\n.item-md.item-input.item-input-has-focus .item-inner,\n.item-md.item-input.input-has-focus .item-inner,\n.item-md.item-input:not(.input-has-focus):not(.item-input-has-focus) .item-inner,\n.item-md.item-input.ng-invalid.ng-touched:not(.input-has-focus):not(.item-input-has-focus) .item-inner {\n  border-bottom-color: transparent;\n  box-shadow: none; }\n\n.phone-no {\n  background: transparent;\n  height: 100%; }\n\n.item-ios.item-block .item-inner {\n  border: none; }\n\n.otp-margin-right {\n  margin-right: 10px; }\n\n.grid_border_top {\n  border-top: 1px solid #ddd; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ByaXlhbS9Eb2N1bWVudHMvUmVkeVJpZGVyL3NyYy9hcHAvYXV0aC9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVNLHFCQUFxQjtFQUNuQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixnQ0FBZ0M7RUFDaEMsVUFBVSxFQUFBOztBQVBsQjtFQVVNLGtCQUFrQixFQUFBOztBQUl0QjtFQUVFLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSx1QkFBdUIsRUFBQTs7QUFFekI7RUFDRSxjQUFjLEVBQUE7O0FBRWhCOzs7Ozs7RUFNRSxnQ0FBZ0M7RUFDaEMsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVksRUFBQTs7QUFFZDtFQUNFLFlBQVksRUFBQTs7QUFHZDtFQUNFLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLDBCQUEwQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vdHAtaW5wdXQyIHtcbiAgICBpb24taW5wdXQge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjODY4ODhmO1xuICAgICAgICB3aWR0aDogMjAlO1xuICAgIH1cbiAgICBpbnB1dCB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICB9XG4gIFxuICAucm90cCB7XG4gICAgLy8gYmFja2dyb3VuZDogbm9uZTtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbiAgfVxuICBcbiAgLm90cC1pbnB1dDIgaW9uLWlucHV0IHtcbiAgICBjdXJzb3I6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuICAub3RwLWlucHV0MiBidXR0b24ge1xuICAgIG1hcmdpbi10b3A6IDUlO1xuICB9XG4gIC5pdGVtLW1kLml0ZW0taW5wdXQ6bm90KC5pbnB1dC1oYXMtZm9jdXMpOm5vdCguaXRlbS1pbnB1dC1oYXMtZm9jdXMpIC5pdGVtLWlubmVyLFxuICAuaXRlbS1tZC5pdGVtLWlucHV0Lm5nLWludmFsaWQubmctdG91Y2hlZDpub3QoLmlucHV0LWhhcy1mb2N1cyk6bm90KC5pdGVtLWlucHV0LWhhcy1mb2N1cykgLml0ZW0taW5uZXIsXG4gIC5pdGVtLW1kLml0ZW0taW5wdXQuaXRlbS1pbnB1dC1oYXMtZm9jdXMgLml0ZW0taW5uZXIsXG4gIC5pdGVtLW1kLml0ZW0taW5wdXQuaW5wdXQtaGFzLWZvY3VzIC5pdGVtLWlubmVyLFxuICAuaXRlbS1tZC5pdGVtLWlucHV0Om5vdCguaW5wdXQtaGFzLWZvY3VzKTpub3QoLml0ZW0taW5wdXQtaGFzLWZvY3VzKSAuaXRlbS1pbm5lcixcbiAgLml0ZW0tbWQuaXRlbS1pbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQ6bm90KC5pbnB1dC1oYXMtZm9jdXMpOm5vdCguaXRlbS1pbnB1dC1oYXMtZm9jdXMpIC5pdGVtLWlubmVyIHtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICB9XG4gIC5waG9uZS1ubyB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gIC5pdGVtLWlvcy5pdGVtLWJsb2NrIC5pdGVtLWlubmVyIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cbiAgXG4gIC5vdHAtbWFyZ2luLXJpZ2h0e1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxuICAuZ3JpZF9ib3JkZXJfdG9we1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkO1xufVxuXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/auth/forgot-password/forgot-password.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/auth/forgot-password/forgot-password.page.ts ***!
  \**************************************************************/
/*! exports provided: ForgotPasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPage", function() { return ForgotPasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_services_login_register_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/services/login-register.service */ "./src/app/core/services/login-register.service.ts");
/* harmony import */ var _core_services_toaster_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/services/toaster.service */ "./src/app/core/services/toaster.service.ts");
/* harmony import */ var _core_services_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/services/loading.service */ "./src/app/core/services/loading.service.ts");
/* harmony import */ var _core_services_modal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/services/modal.service */ "./src/app/core/services/modal.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");







// import { ForgotPasswordModalPage } from './../forgot-password-modal/forgot-password-modal.page';





var ForgotPasswordPage = /** @class */ (function () {
    function ForgotPasswordPage(loginRegisterService, router, formBuilder, toasterService, loadingService, modalService, storage, pass_event, authenticationService, menuCtrl) {
        this.loginRegisterService = loginRegisterService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.toasterService = toasterService;
        this.loadingService = loadingService;
        this.modalService = modalService;
        this.storage = storage;
        this.pass_event = pass_event;
        this.authenticationService = authenticationService;
        this.menuCtrl = menuCtrl;
        this.OTP = '';
        this.passwordShown = false;
        this.otp1 = "";
        this.otp2 = "";
        this.otp3 = "";
        this.otp4 = "";
        this.potp1 = "";
        this.potp2 = "";
        this.potp3 = "";
        this.potp4 = "";
    }
    ForgotPasswordPage.prototype.ngOnInit = function () {
        var _this = this;
        //this.loadingService.present();
        this.form = this.formBuilder.group({
            potp1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            potp2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            potp3: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            potp4: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.start();
        this.storage.get("user_details").then(function (val) {
            console.log('val', val);
            if (val)
                _this.contact = val.contact;
            else {
                _this.storage.get("USER_INFO").then(function (val1) {
                    _this.contact = val1.mobile;
                    _this.from_which_page = 'myaccount';
                });
            }
            //this.otp_res = val.otp
        });
    };
    /**
     * For SMS read autometically
     */
    ForgotPasswordPage.prototype.start = function () {
        var _this = this;
        SMSReceive.startWatch(function () {
            document.addEventListener('onSMSArrive', function (e) {
                var IncomingSMS = e.data;
                _this.processSMS(IncomingSMS);
            });
        }, function () { console.log('watch start failed'); });
    };
    ForgotPasswordPage.prototype.stop = function () {
        SMSReceive.stopWatch(function () { console.log('watch stopped'); }, function () { console.log('watch stop failed'); });
    };
    ForgotPasswordPage.prototype.processSMS = function (data) {
        this.loadingService.dismiss();
        //console.log('data', data);
        var message = data.body;
        if (message) {
            this.OTP = data.body.slice(0, 4);
            this.otp1 = this.OTP[0];
            this.otp2 = this.OTP[1];
            this.otp3 = this.OTP[2];
            this.otp4 = this.OTP[3];
            //console.log('this.OTP', this.otp1);
            this.stop();
        }
    };
    /**
     * End
     */
    ForgotPasswordPage.prototype.saveNewPassword = function () {
        var _this = this;
        this.loadingService.present();
        this.request_data = {
            "pass": (this.form.value.potp1 + this.form.value.potp2 + this.form.value.potp3 + this.form.value.potp4),
            "contact": this.contact,
            "type": "reset"
        };
        console.log('this.request_data', this.request_data);
        this.loginRegisterService.resetPasswordService(this.request_data).subscribe(function (res) {
            _this.loadingService.dismiss();
            //console.log("res:::" + res.msg);
            if (_this.from_which_page == 'myaccount') {
                _this.menuCtrl.enable(false);
                _this.authenticationService.logout();
            }
            else
                _this.router.navigateByUrl('/login');
            _this.toasterService.showToast(res.msg, 2000);
        }, function (error) {
            //console.log("error::::" + error.error.msg);
            _this.loadingService.dismiss();
            _this.toasterService.showToast(error.error.msg, 2000);
        });
    };
    ForgotPasswordPage.prototype.togglePassword = function () {
        if (this.passwordShown) {
            this.passwordShown = false;
        }
        else {
            this.passwordShown = true;
        }
    };
    ForgotPasswordPage.prototype.closeForgotPasswordModal = function () {
        this.modalService.closeModal();
    };
    ForgotPasswordPage.prototype.moveFocus = function (nextElement, $e, prevElement) {
        //console.log('key details', $e);
        if (nextElement) {
            nextElement.setFocus();
        }
        if (($e.key == 'Backspace' && $e.keyCode == 8) || ($e.key == 'Delete' && $e.keyCode == 46)) {
            prevElement.setFocus();
        }
    };
    ForgotPasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__(/*! ./forgot-password.page.html */ "./src/app/auth/forgot-password/forgot-password.page.html"),
            styles: [__webpack_require__(/*! ./forgot-password.page.scss */ "./src/app/auth/forgot-password/forgot-password.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_login_register_service__WEBPACK_IMPORTED_MODULE_4__["LoginRegisterService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _core_services_toaster_service__WEBPACK_IMPORTED_MODULE_5__["ToasterService"],
            _core_services_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"],
            _core_services_modal_service__WEBPACK_IMPORTED_MODULE_7__["ModalService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["Events"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_10__["AuthenticationService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["MenuController"]])
    ], ForgotPasswordPage);
    return ForgotPasswordPage;
}());



/***/ })

}]);
//# sourceMappingURL=auth-forgot-password-forgot-password-module.js.map