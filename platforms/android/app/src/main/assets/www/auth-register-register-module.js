(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-register-register-module"],{

/***/ "./src/app/auth/register/register.module.ts":
/*!**************************************************!*\
  !*** ./src/app/auth/register/register.module.ts ***!
  \**************************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/auth/register/register.page.ts");
/* harmony import */ var _core_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/components/components.module */ "./src/app/core/components/components.module.ts");








var routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]
    }
];
var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _core_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
            ],
            declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());



/***/ }),

/***/ "./src/app/auth/register/register.page.html":
/*!**************************************************!*\
  !*** ./src/app/auth/register/register.page.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<ion-content>\n    <div class=\"inner_div\">\n      <div class=\"personal-fields\">\n        <h5>Personal Details :: </h5>\n        <p>Help us to know your better</p>\n        <hr class=\"hr-border\">\n      </div>\n      \n      <form  [formGroup]=\"form\" novalidate>\n        <ion-grid>\n          <ion-row class=\"ion-justify-content-center\">\n            <ion-col class=\"ion-align-self-center\">\n              <ion-item>\n                <ion-label class=\"label_cs\" position=\"floating\">10 digit mobile number</ion-label>\n                <ion-input autofocus=\"on\" formControlName=\"mobile\" maxlength=\"10\" clearInput=\"true\" inputmode=\"tel\" type=\"tel\" pattern=\"[0-9]{10}\" required=\"true\" ngModel></ion-input>\n                <ion-icon name=\"phone-portrait\" slot=\"start\"></ion-icon>\n              </ion-item>\n              <ion-item>\n                <ion-label position=\"floating\">Enter your Name</ion-label>\n                <ion-input  autofocus=\"on\" formControlName=\"name\" type=\"text\" minlength=\"2\" clearInput=\"true\" inputmode=\"text\" required=\"true\" ngModel></ion-input>\n                <ion-icon name=\"person\" slot=\"start\"></ion-icon>\n              </ion-item>\n              <ion-item>\n                  <ion-label position=\"floating\">Enter your email</ion-label>\n                  <ion-input autofocus=\"on\" formControlName=\"email\" pattern=\"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$\" clearInput=\"true\"  type=\"email\" inputmode=\"email\" required=\"true\" ngModel ></ion-input>\n                  <ion-icon name=\"mail\" slot=\"start\"></ion-icon>\n              </ion-item>\n\n              \n              <p style=\"text-align: center;margin-bottom:0px;margin-right: 30px;font-size: 15px;\">Set 4 digit password</p>\n              <ion-item class=\"ion-margin-bottom\" lines=\"none\" style=\"margin-bottom: 0px;\">\n                <div class=\"otp-input2\">\n                  <ion-input #pField1 autofocus=\"true\" [style.-webkit-text-security]=\"passwordShown === false ? 'disc':''\" formControlName=\"otp1\" type=\"tel\" [(ngModel)]=\"otp1\" maxlength=\"1\" tabindex=\"1\"   (keyup)=\"moveFocus(pField2,$event,pField1)\"   class=\"otp-margin-right cs-input\"></ion-input>\n        \n                  <ion-input #pField2 autofocus=\"true\" formControlName=\"otp2\" [style.-webkit-text-security]=\"passwordShown === false ? 'disc':''\" type=\"tel\" [(ngModel)]=\"otp2\" tabindex=\"2\"  maxlength=\"1\" (keyup)=\"moveFocus(pField3,$event,pField1)\" class=\"otp-margin-right cs-input\"></ion-input>\n        \n                  <ion-input #pField3 autofocus=\"true\" formControlName=\"otp3\" [style.-webkit-text-security]=\"passwordShown === false ? 'disc':''\"  type=\"tel\" [(ngModel)]=\"otp3\" tabindex=\"3\"  maxlength=\"1\" (keyup)=\"moveFocus(pField4,$event,pField2)\" class=\"otp-margin-right cs-input\"></ion-input>\n        \n                  <ion-input #pField4 autofocus=\"true\" formControlName=\"otp4\" [style.-webkit-text-security]=\"passwordShown === false ? 'disc':''\" type=\"tel\" tabindex=\"4\"  [(ngModel)]=\"otp4\" maxlength=\"1\" (keyup)=\"moveFocus(pField4,$event,pField3)\" class=\"cs-input\"></ion-input>\n                </div>\n                <ion-icon name=\"lock\" slot=\"start\" style=\" margin-right: 30px;\"></ion-icon>\n                <ion-text style=\"    margin-left: 0px;\" *ngIf=\"!passwordShown\" slot=\"end\" (click)=\"togglePassword()\">Show</ion-text>\n                <ion-text style=\"    margin-left: 0px;\"  *ngIf=\"passwordShown\" slot=\"end\" (click)=\"togglePassword()\">Hide</ion-text>\n              </ion-item>\n              <ion-item-divider></ion-item-divider>\n              <div class=\"radio-button-personal\">\n                <p>Gender</p>\n                <ion-radio-group formControlName=\"gender\">\n                  <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\n                    <ion-item lines=\"none\" class=\"rstar-ion-item\">\n                      <ion-label class=\"rstar-label-bg rstar-label\">\n                        <ion-icon ios=\"ios-woman\" md=\"md-woman\"></ion-icon><br>\n                        <ion-radio slot=\"start\" value=\"F\"  checked class=\"rstar-radio\"></ion-radio>Female\n                      </ion-label>\n                    </ion-item>\n                    <ion-item lines=\"none\" class=\"rstar-ion-item\">\n                      <ion-label class=\"rstar-label-bg rstar-label\">\n                        <ion-icon ios=\"ios-transgender\" md=\"md-transgender\"></ion-icon><br>\n                        <ion-radio slot=\"start\" value=\"T\" class=\"rstar-radio\"></ion-radio>Transgender\n                      </ion-label>\n                    </ion-item>\n                    <ion-item lines=\"none\" class=\"rstar-ion-item\">\n                      <ion-label class=\"rstar-label-bg rstar-label\">\n                        <ion-icon ios=\"ios-man\" md=\"md-man\"></ion-icon><br>\n                        <ion-radio slot=\"start\" value=\"M\" class=\"rstar-radio\"></ion-radio>Male\n                      </ion-label>\n                    </ion-item>\n                  </div>\n                </ion-radio-group>\n              </div>\n              <ion-item lines=\"none\">\n                <ion-label> I have Referral code</ion-label>\n                <ion-toggle [(ngModel)]=\"showReferralCode\" slot=\"start\" formControlName=\"ref_applied_no_checkbox\"></ion-toggle>\n              </ion-item>\n              <ion-item *ngIf=\"showReferralCode\">\n                <ion-label position=\"floating\">Referral code if any</ion-label>\n                <ion-input autofocus=\"on\" formControlName=\"ref_applied_no\" minlength=\"5\"  clearInput=\"true\" ngModel inputmode=\"text\" type=\"text\"></ion-input>\n                <ion-icon name=\"heart\" slot=\"start\"></ion-icon>\n              </ion-item>\n              <ion-text text-center>\n                <p>By clicking save & continue you are accepting to our <a (click)=\"goToPage('terms-conditions')\">Terms & Conditions</a></p>\n              </ion-text>\n              <ion-button class=\"ion-margin-top\"  size=\"large\" [disabled]=\"form.invalid || net_connection_check\"  type=\"button\" expand=\"full\" (click)=\"registerUser()\">\n                SAVE & CONTINUE \n                <ion-icon name=\"arrow-round-forward\"></ion-icon>\n              </ion-button>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n              <div text-center padding>\n                Already have an account, please <a routerLink='/login'>Sign In</a>\n              </div>\n          </ion-row>\n        </ion-grid>\n      </form>\n    </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/auth/register/register.page.scss":
/*!**************************************************!*\
  !*** ./src/app/auth/register/register.page.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-heading h1 {\n  text-transform: uppercase;\n  letter-spacing: 1px; }\n\n.small-content {\n  color: #616161;\n  letter-spacing: 0.5px; }\n\n.inner_div {\n  margin-left: 15px;\n  margin-right: 15px;\n  margin-top: 15px; }\n\n.cs-title-padding {\n  margin-left: 0px; }\n\n.radio-button-personal {\n  padding-bottom: 10px;\n  padding-left: 20px; }\n\n.radio-button-personal p {\n  font-size: 17px;\n  color: #757575;\n  margin-top: 10px;\n  margin-bottom: 0px; }\n\n.btn-group, .btn-group-vertical {\n  position: relative;\n  display: inline-flex;\n  vertical-align: middle; }\n\n.rstar-label {\n  display: inline-block;\n  font-weight: 400;\n  text-align: center;\n  vertical-align: middle;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  background-color: initial;\n  border: 1px solid;\n  border-bottom-color: initial;\n  padding: .375rem .75rem;\n  font-size: 0.8rem;\n  line-height: 1.5;\n  border-radius: .25rem;\n  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out; }\n\n.rstar-radio {\n  opacity: 0;\n  height: 0;\n  margin: 0; }\n\nion-icon {\n  font-size: 26px; }\n\n.item-radio-checked ion-label {\n  color: #fff;\n  background-color: #0A5999;\n  border-color: #0A5999; }\n\n.rstar-ion-item {\n  --padding-end: 0px;\n  --padding-bottom: 0px;\n  --padding-start: 0px;\n  --padding-top: 0px;\n  --inner-padding-bottom:0px;\n  --inner-padding-top:0px;\n  --inner-padding-start:0px;\n  --inner-padding-end:2px; }\n\n.pass-icon-active {\n  opacity: 1; }\n\n.pass-icon {\n  opacity: 0.5; }\n\n.otp-input2 ion-input {\n  display: inline-block;\n  text-align: center;\n  line-height: 16px;\n  font-size: 14px;\n  border-bottom: 2px solid #86888f;\n  width: 16%; }\n\n.otp-input2 input {\n  text-align: center; }\n\n.otp-input2 button {\n  margin-top: 5%; }\n\n.item-md.item-input:not(.input-has-focus):not(.item-input-has-focus) .item-inner,\n.item-md.item-input.ng-invalid.ng-touched:not(.input-has-focus):not(.item-input-has-focus) .item-inner,\n.item-md.item-input.item-input-has-focus .item-inner,\n.item-md.item-input.input-has-focus .item-inner,\n.item-md.item-input:not(.input-has-focus):not(.item-input-has-focus) .item-inner,\n.item-md.item-input.ng-invalid.ng-touched:not(.input-has-focus):not(.item-input-has-focus) .item-inner {\n  border-bottom-color: transparent;\n  box-shadow: none; }\n\n.otp-margin-right {\n  margin-right: 10px; }\n\n.cs-input {\n  --padding-top:0px; }\n\nion-item-divider {\n  min-height: 5px; }\n\n.ion-margin-top {\n  margin-top: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ByaXlhbS9Eb2N1bWVudHMvUmVkeVJpZGVyL3NyYy9hcHAvYXV0aC9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFBZ0IseUJBQXlCO0VBQUUsbUJBQW1CLEVBQUE7O0FBQzlEO0VBQWdCLGNBQWM7RUFBRSxxQkFBcUIsRUFBQTs7QUFDckQ7RUFDSSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLG9CQUFvQjtFQUNwQixrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxrQkFBa0I7RUFFbEIsb0JBQW9CO0VBQ3BCLHNCQUFzQixFQUFBOztBQUkxQjtFQUNJLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFFaEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsNEJBQTRCO0VBQzVCLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQiw4SEFBOEgsRUFBQTs7QUFFbEk7RUFDSSxVQUFVO0VBQ1YsU0FBUztFQUNULFNBQVMsRUFBQTs7QUFFYjtFQUNJLGVBQWMsRUFBQTs7QUFFbEI7RUFDSSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLHFCQUFxQixFQUFBOztBQUV6QjtFQUNJLGtCQUFjO0VBQ2QscUJBQWlCO0VBQ2pCLG9CQUFnQjtFQUNoQixrQkFBYztFQUNkLDBCQUF1QjtFQUN2Qix1QkFBb0I7RUFDcEIseUJBQXNCO0VBQ3RCLHVCQUFvQixFQUFBOztBQUd4QjtFQUNJLFVBQVUsRUFBQTs7QUFFZDtFQUNJLFlBQVksRUFBQTs7QUFFaEI7RUFFUSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZ0NBQWdDO0VBQ2hDLFVBQVUsRUFBQTs7QUFQbEI7RUFXTSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDRSxjQUFjLEVBQUE7O0FBR2hCOzs7Ozs7RUFNRSxnQ0FBZ0M7RUFDaEMsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0Usa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0UsaUJBQWMsRUFBQTs7QUFFaEI7RUFDRSxlQUFlLEVBQUE7O0FBRWpCO0VBQ0ksZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hdXRoL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4uYXBwLWhlYWRpbmcgaDF7dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgbGV0dGVyLXNwYWNpbmc6IDFweDt9XG4uc21hbGwtY29udGVudCB7Y29sb3I6ICM2MTYxNjE7IGxldHRlci1zcGFjaW5nOiAwLjVweDt9XG4uaW5uZXJfZGl2e1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuLmNzLXRpdGxlLXBhZGRpbmd7XG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgICAvL2ZvbnQtc2l6ZTogMjBweDtcbn1cbi5yYWRpby1idXR0b24tcGVyc29uYWx7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuLnJhZGlvLWJ1dHRvbi1wZXJzb25hbCBwIHtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgY29sb3I6ICM3NTc1NzU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG4uYnRuLWdyb3VwLCAuYnRuLWdyb3VwLXZlcnRpY2FsIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogLW1zLWlubGluZS1mbGV4Ym94O1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cblxuLnJzdGFyLWxhYmVsIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAvL2NvbG9yOiAjZmZmO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGluaXRpYWw7XG4gICAgYm9yZGVyOiAxcHggc29saWQ7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogaW5pdGlhbDtcbiAgICBwYWRkaW5nOiAuMzc1cmVtIC43NXJlbTtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAuMTVzIGVhc2UtaW4tb3V0LGJhY2tncm91bmQtY29sb3IgLjE1cyBlYXNlLWluLW91dCxib3JkZXItY29sb3IgLjE1cyBlYXNlLWluLW91dCxib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXQ7XG59XG4ucnN0YXItcmFkaW97XG4gICAgb3BhY2l0eTogMDtcbiAgICBoZWlnaHQ6IDA7XG4gICAgbWFyZ2luOiAwO1xufVxuaW9uLWljb257XG4gICAgZm9udC1zaXplOjI2cHg7XG59XG4uaXRlbS1yYWRpby1jaGVja2VkIGlvbi1sYWJlbCB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBBNTk5OTtcbiAgICBib3JkZXItY29sb3I6ICMwQTU5OTk7XG59XG4ucnN0YXItaW9uLWl0ZW17XG4gICAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAgIC0tcGFkZGluZy1ib3R0b206IDBweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAtLXBhZGRpbmctdG9wOiAwcHg7XG4gICAgLS1pbm5lci1wYWRkaW5nLWJvdHRvbTowcHg7XG4gICAgLS1pbm5lci1wYWRkaW5nLXRvcDowcHg7XG4gICAgLS1pbm5lci1wYWRkaW5nLXN0YXJ0OjBweDtcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOjJweDtcblxufVxuLnBhc3MtaWNvbi1hY3RpdmV7XG4gICAgb3BhY2l0eTogMTtcbn1cbi5wYXNzLWljb257XG4gICAgb3BhY2l0eTogMC41O1xufVxuLm90cC1pbnB1dDIge1xuICAgIGlvbi1pbnB1dCB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzg2ODg4ZjtcbiAgICAgICAgd2lkdGg6IDE2JTtcbiAgICAgIFxuICAgIH1cbiAgICBpbnB1dCB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICB9XG4gIC5vdHAtaW5wdXQyIGJ1dHRvbiB7XG4gICAgbWFyZ2luLXRvcDogNSU7XG4gICAgXG4gIH1cbiAgLml0ZW0tbWQuaXRlbS1pbnB1dDpub3QoLmlucHV0LWhhcy1mb2N1cyk6bm90KC5pdGVtLWlucHV0LWhhcy1mb2N1cykgLml0ZW0taW5uZXIsXG4gIC5pdGVtLW1kLml0ZW0taW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVkOm5vdCguaW5wdXQtaGFzLWZvY3VzKTpub3QoLml0ZW0taW5wdXQtaGFzLWZvY3VzKSAuaXRlbS1pbm5lcixcbiAgLml0ZW0tbWQuaXRlbS1pbnB1dC5pdGVtLWlucHV0LWhhcy1mb2N1cyAuaXRlbS1pbm5lcixcbiAgLml0ZW0tbWQuaXRlbS1pbnB1dC5pbnB1dC1oYXMtZm9jdXMgLml0ZW0taW5uZXIsXG4gIC5pdGVtLW1kLml0ZW0taW5wdXQ6bm90KC5pbnB1dC1oYXMtZm9jdXMpOm5vdCguaXRlbS1pbnB1dC1oYXMtZm9jdXMpIC5pdGVtLWlubmVyLFxuICAuaXRlbS1tZC5pdGVtLWlucHV0Lm5nLWludmFsaWQubmctdG91Y2hlZDpub3QoLmlucHV0LWhhcy1mb2N1cyk6bm90KC5pdGVtLWlucHV0LWhhcy1mb2N1cykgLml0ZW0taW5uZXIge1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cbiAgLm90cC1tYXJnaW4tcmlnaHR7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG4gIC5jcy1pbnB1dHtcbiAgICAtLXBhZGRpbmctdG9wOjBweDtcbiAgfVxuICBpb24taXRlbS1kaXZpZGVye1xuICAgIG1pbi1oZWlnaHQ6IDVweDtcbiAgfVxuICAuaW9uLW1hcmdpbi10b3B7XG4gICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICB9XG5cbiAgIl19 */"

/***/ }),

/***/ "./src/app/auth/register/register.page.ts":
/*!************************************************!*\
  !*** ./src/app/auth/register/register.page.ts ***!
  \************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_login_register_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/login-register.service */ "./src/app/core/services/login-register.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_services_toaster_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/services/toaster.service */ "./src/app/core/services/toaster.service.ts");
/* harmony import */ var _otp_verification_otp_verification_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../otp-verification/otp-verification.page */ "./src/app/auth/otp-verification/otp-verification.page.ts");
/* harmony import */ var _core_services_modal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/services/modal.service */ "./src/app/core/services/modal.service.ts");
/* harmony import */ var _core_services_loading_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/services/loading.service */ "./src/app/core/services/loading.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






//import { Device } from '@ionic-native/device/ngx';






var RegisterPage = /** @class */ (function () {
    function RegisterPage(loginRegisterService, router, formBuilder, toasterService, 
    //private device: Device,
    modalService, loadingService, authService, storage, reg_event) {
        this.loginRegisterService = loginRegisterService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.toasterService = toasterService;
        this.modalService = modalService;
        this.loadingService = loadingService;
        this.authService = authService;
        this.storage = storage;
        this.reg_event = reg_event;
        this.passwordType = 'password';
        this.passwordShown = false;
        this.otp1 = "";
        this.otp2 = "";
        this.otp3 = "";
        this.otp4 = "";
        this.otp_verification_div = false;
        this.net_connection_check = false;
        this.showReferralCode = false;
        //this.showReferralCode = false;
    }
    RegisterPage.prototype.ngOnInit = function () {
        var _this = this;
        this.reg_event.subscribe('check_net_connection', function (data) {
            if (data == 'connect')
                _this.net_connection_check = false;
            if (data == 'disconnect')
                _this.net_connection_check = true;
        });
        this.form = this.formBuilder.group({
            ref_applied_no: [''],
            ref_applied_no_checkbox: [''],
            name: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            email: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            mobile: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            otp1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            otp2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            otp3: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            otp4: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            type: [''],
            gender: ['']
        });
        console.log('dfffdfff');
        this.reg_event.subscribe('resendOTPRegisterModal', function (data) {
            _this.registerUser(true);
        });
        console.log('showReferralCode', this.showReferralCode);
    };
    RegisterPage.prototype.send = function () {
        var number = '+1 ' + this.form.controls['mobile'].value;
        console.log(number);
        var timeOutDuration = 60;
        var fakeVerificationCode = '123456';
        // (window as any).FirebasePlugin.verifyPhoneNumber(
        //   function (credential) {
        //     console.log('credential', credential)
        //     this.verificationId = credential.verificationId;
        //     if (credential.instantVerification) {
        //       this.signInWithCredential(credential.code, this.verificationId);
        //     } else {
        //       console.log('else part')
        //     }
        //   },
        //   function (error) {
        //     console.error("Failed to verify phone number: " + JSON.stringify(error));
        //   }, number, timeOutDuration, fakeVerificationCode)
    };
    // signInWithCredential(code, vid) {
    //   console.log('code', code);
    //   console.log('verificationId', vid);
    //   (window as any).FirebasePlugin.signInWithCredential(vid, code, function () {
    //     console.log("Successfully signed in");
    //   }, function (error) {
    //     console.error("Failed to sign in", error);
    //   });
    // }
    RegisterPage.prototype.verify = function () {
    };
    RegisterPage.prototype.registerUser = function (resendOtp) {
        var _this = this;
        if (resendOtp === void 0) { resendOtp = false; }
        //let data = {};
        //this.modalService.openModal(OtpVerificationPage, data, '_c_modal_otp_css');
        this.loadingService.present();
        this.request_data = {
            "mobile": this.form.controls['mobile'].value,
            "type": "reg_otp"
        };
        this.loginRegisterService.registerOTPService(this.request_data).subscribe(function (res) {
            //console.log('res', res)
            if (res.status.toLowerCase() == 'success') {
                var data = {
                    "which_page": "register",
                    "user_details": {
                        "ref_applied_no": _this.form.controls['ref_applied_no'].value,
                        "name": _this.form.controls['name'].value,
                        "email": _this.form.controls['email'].value,
                        "mobile": _this.form.controls['mobile'].value,
                        "password": (_this.form.controls['otp1'].value + _this.form.controls['otp2'].value + _this.form.controls['otp3'].value + _this.form.controls['otp4'].value),
                        "gender": _this.form.controls['gender'].value,
                        "type": "reg",
                        "otp_pass": res.result.otp_pass
                    },
                };
                _this.loadingService.dismiss();
                // if (resendOtp) {
                //   this.modalService.closeModal();
                // }
                _this.modalService.openModal(_otp_verification_otp_verification_page__WEBPACK_IMPORTED_MODULE_6__["OtpVerificationPage"], data, '_c_modal_otp_css');
            }
        }, function (error) {
            console.log("error::::" + error.error);
            //this.openOtpModal();
            _this.loadingService.dismiss();
            _this.toasterService.showToast(error.error.msg, 2000);
        });
    };
    RegisterPage.prototype.togglePassword = function () {
        if (this.passwordShown) {
            this.passwordShown = false;
            this.passwordType = 'password';
        }
        else {
            this.passwordShown = true;
            this.passwordType = 'text';
        }
    };
    RegisterPage.prototype.moveFocus = function (nextElement, $e, prevElement) {
        //console.log('key details', $e);
        if (nextElement) {
            nextElement.setFocus();
        }
        if (($e.key == 'Backspace' && $e.keyCode == 8) || ($e.key == 'Delete' && $e.keyCode == 46)) {
            prevElement.setFocus();
        }
    };
    RegisterPage.prototype.goToPage = function (whichPage) {
        if (whichPage === 'terms-conditions')
            this.router.navigateByUrl('terms-condition');
    };
    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.page.html */ "./src/app/auth/register/register.page.html"),
            styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/auth/register/register.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_login_register_service__WEBPACK_IMPORTED_MODULE_3__["LoginRegisterService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _core_services_toaster_service__WEBPACK_IMPORTED_MODULE_5__["ToasterService"],
            _core_services_modal_service__WEBPACK_IMPORTED_MODULE_7__["ModalService"],
            _core_services_loading_service__WEBPACK_IMPORTED_MODULE_8__["LoadingService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_9__["AuthenticationService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_10__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["Events"]])
    ], RegisterPage);
    return RegisterPage;
}());



/***/ })

}]);
//# sourceMappingURL=auth-register-register-module.js.map