(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~auth-forgot-password-forgot-password-module~auth-login-login-module~auth-register-register-m~74e50786"],{

/***/ "./src/app/core/components/components.module.ts":
/*!******************************************************!*\
  !*** ./src/app/core/components/components.module.ts ***!
  \******************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "./src/app/core/components/header/header.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");






var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"]
            ],
            exports: [
                _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/core/components/header/header.component.html":
/*!**************************************************************!*\
  !*** ./src/app/core/components/header/header.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"header-menu\">\n    <ion-buttons slot=\"start\" *ngIf=\"menu_button_visible\" class=\"border_button\">\n      <ion-menu-button class=\"rstar-menu\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title *ngIf=\"title_section_visible && !back_button_visible && !menu_button_visible\" class=\"ion-text-center\">\n        {{title}}\n    </ion-title>\n    <ion-title *ngIf=\"title_section_visible && (back_button_visible || menu_button_visible)\" >\n      {{title}}\n    </ion-title>\n    \n    <ion-title *ngIf=\"notification_show\" slot=\"end\" (click)=\"goToPage('notifications')\"><ion-badge color=\"danger\" style=\"position: absolute;\n      bottom: 18px;\n      right: 17px;\n      z-index: 99999;\n      border-radius: 12px;\" *ngIf=\"notification_count!=0\">{{notification_count}}</ion-badge>\n      <ion-icon ios=\"ios-notifications\" md=\"md-notifications\" style=\"font-size: 26px;margin-top: 5px;\" ></ion-icon></ion-title>\n    <ion-title *ngIf=\"referral_bal_show\" slot=\"end\">Earn : <fa-icon [icon]=\"['fas','rupee-sign']\" size=\"1x\" class=\"rstar-icon\"></fa-icon> {{referral_balance}}</ion-title>\n    <ion-buttons slot=\"start\" *ngIf=\"back_button_visible\" class=\"border_button\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <div class=\"{{network_check_class}}\" *ngIf=\"network_check_class_show\" [style.background]=\"network_check_class=='disconnect'?'red':'#4CAF50'\">{{network_msg}}</div>\n</ion-header>\n\n\n"

/***/ }),

/***/ "./src/app/core/components/header/header.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/core/components/header/header.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#cart-badge {\n  position: absolute;\n  top: 5px;\n  right: 10px; }\n\n.cs-icon-size {\n  font-size: 20px !important; }\n\nion-title {\n  font-weight: 600;\n  font-size: 17px;\n  padding-left: 0px; }\n\n.rstar-menu {\n  height: 44px; }\n\n.connect {\n  color: #ffffff;\n  padding: 20px;\n  box-shadow: none; }\n\n.disconnect {\n  color: #ffffff;\n  padding: 20px;\n  box-shadow: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ByaXlhbS9Eb2N1bWVudHMvUmVkeVJpZGVyL3NyYy9hcHAvY29yZS9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFdBQVcsRUFBQTs7QUFFZjtFQUNJLDBCQUEwQixFQUFBOztBQUU5QjtFQUNJLGdCQUFlO0VBQ2YsZUFBZTtFQUNmLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxjQUFjO0VBQ2QsYUFBYTtFQUNiLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLGNBQWM7RUFDZCxhQUFhO0VBQ2IsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuI2NhcnQtYmFkZ2Uge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDVweDtcbiAgICByaWdodDogMTBweDtcbiB9XG4uY3MtaWNvbi1zaXplIHtcbiAgICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDsgLy9QcmVmZXJyZWQgc2l6ZSBoZXJlXG59XG5pb24tdGl0bGV7XG4gICAgZm9udC13ZWlnaHQ6NjAwO1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbn1cbi5yc3Rhci1tZW51e1xuICAgIGhlaWdodDogNDRweDtcbn1cblxuLmNvbm5lY3R7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3gtc2hhZG93OiBub25lO1xufVxuLmRpc2Nvbm5lY3R7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3gtc2hhZG93OiBub25lO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/core/components/header/header.component.ts":
/*!************************************************************!*\
  !*** ./src/app/core/components/header/header.component.ts ***!
  \************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/alert.service */ "./src/app/core/services/alert.service.ts");
/* harmony import */ var _core_services_office_pool_car_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/services/office-pool-car.service */ "./src/app/core/services/office-pool-car.service.ts");
/* harmony import */ var _core_services_toaster_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/services/toaster.service */ "./src/app/core/services/toaster.service.ts");
/* harmony import */ var _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/firebase-x/ngx */ "./node_modules/@ionic-native/firebase-x/ngx/index.js");










var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router, header_event, storage, alertService, network, officePoolCarService, toasterService, fcm) {
        this.router = router;
        this.header_event = header_event;
        this.storage = storage;
        this.alertService = alertService;
        this.network = network;
        this.officePoolCarService = officePoolCarService;
        this.toasterService = toasterService;
        this.fcm = fcm;
        this.back_button_visible = false;
        this.logout_visible = true;
        this.title = 'REDY RIDER';
        this.network_msg = '';
        this.network_check_class = '';
        this.network_check_class_show = false;
        this.referral_bal_show = false;
        this.notification_show = false;
        this.notification_count = 0;
        this.sos_button = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        /**
         *
         */
        var _this = this;
        this.header_event.subscribe('notification_count', function (data) {
            _this.notification_count = 1;
        });
        /**
         * Network connection check
        */
        this.network.onDisconnect().subscribe(function () {
            _this.network_check_class_show = true;
            _this.storage.set('network_connection', "disconnected");
            console.log('onDisconnect val');
            _this.network_msg = 'Network was disconnected :-(';
            _this.network_check_class = 'disconnect';
            _this.header_event.publish('check_net_connection', 'disconnect');
        });
        this.network.onConnect().subscribe(function () {
            _this.storage.get('network_connection').then(function (val) {
                if (val == 'disconnected') {
                    _this.network_check_class_show = true;
                    _this.network_check_class = 'connect';
                    //console.log('onConnect val', val)
                    _this.header_event.publish('check_net_connection', 'connect');
                    _this.network_msg = 'Yaa whooo, We got a connection';
                    setTimeout(function () {
                        _this.network_check_class_show = false;
                        //console.log('checking....', this.network_check_class_show)
                    }, 1000);
                    _this.storage.set('network_connection', "connected");
                }
            });
        });
        //console.log("current Link", this.router.url);
        if (this.router.url.includes('register')) {
            this.menu_button_visible = false;
            this.title_section_visible = true;
            this.cart_button_visible = false;
            // this.back_button_visible = true;
            //this.logout_visible = false;
        }
        if (this.router.url.includes('login')) {
            this.menu_button_visible = false;
            this.title_section_visible = true;
            this.cart_button_visible = false;
            //this.title = "Saha Tour and Travel";
            this.back_button_visible = false;
            //this.logout_visible = false;
        }
        if (this.router.url.includes('forgot-password')) {
            this.menu_button_visible = false;
            this.title_section_visible = true;
            this.cart_button_visible = false;
            this.title = "Retrieve Password";
            this.back_button_visible = true;
        }
        if (this.router.url.includes('home')) {
            this.menu_button_visible = true;
            this.title_section_visible = true;
            this.cart_button_visible = true;
            this.notification_show = true;
        }
        if (this.router.url.includes('office-pool-car-service')) {
            this.back_button_visible = true;
            this.title_section_visible = true;
        }
        if (this.router.url.includes('date-time')) {
            this.back_button_visible = true;
            this.title_section_visible = true;
            //this.title = "School Pull Car";
        }
        if (this.router.url.includes('bus-route-details')) {
            this.back_button_visible = true;
            this.title_section_visible = true;
            this.title = "Bus-Route List";
        }
        if (this.router.url.includes('seat-layout-details')) {
            this.back_button_visible = true;
            this.title_section_visible = true;
            this.title = "Seat Layout";
        }
        if (this.router.url.includes('booked-details')) {
            this.back_button_visible = true;
            this.title_section_visible = true;
            this.title = "Confirm Booking Details";
        }
        if (this.router.url.includes('payment-details')) {
            this.back_button_visible = true;
            this.title_section_visible = true;
            this.title = "Payment Options";
        }
        if (this.router.url.includes('booking-thankyou')) {
            this.back_button_visible = true;
            this.title_section_visible = true;
            this.title = "Confirm Booking";
        }
        if (this.router.url.includes('common-page/contact-us')) {
            this.back_button_visible = true;
            this.title_section_visible = true;
            this.title = "Contact Us";
        }
        if (this.router.url.includes('common-page/privacy-policy')) {
            this.back_button_visible = true;
            this.title_section_visible = true;
            this.title = "Privacy Policy";
        }
        if (this.router.url.includes('common-page/terms-condition')) {
            this.back_button_visible = true;
            this.title_section_visible = true;
            this.title = "Terms and Conditions";
        }
        if (this.router.url.includes('myaccount')) {
            this.back_button_visible = true;
            this.title_section_visible = true;
            this.title = "My Account";
        }
        if (this.router.url.includes('wallet')) {
            this.back_button_visible = true;
            this.title_section_visible = true;
            this.title = "My Wallet";
        }
        if (this.router.url.includes('myaccount/myaccount-common-page/refer-earn')) {
            this.back_button_visible = true;
            this.title_section_visible = true;
            this.title = "Refer & Earn";
            this.referral_bal_show = true;
            this.storage.get('USER_INFO').then(function (val) {
                _this.getBalance(val['id']);
            });
        }
        if (this.router.url.includes('myaccount/myaccount-common-page/notifications')) {
            this.back_button_visible = true;
            this.title_section_visible = true;
            this.title = "Notifications";
        }
        if (this.router.url.includes('booking-history')) {
            this.back_button_visible = true;
            this.title_section_visible = true;
            this.title = "My Rides";
        }
        if (this.router.url.includes('booking-history-details')) {
            this.back_button_visible = true;
            this.title_section_visible = true;
            this.title = "My Ride";
        }
        if (this.router.url.includes('location-tracking')) {
            this.back_button_visible = true;
            this.title_section_visible = true;
            this.title = "Tracking";
        }
        if (this.router.url.includes('today-rides')) {
            this.back_button_visible = true;
            this.title_section_visible = true;
            this.title = "Today's Rides";
        }
        if (this.router.url.includes('tour-travels')) {
            this.menu_button_visible = false;
            this.title_section_visible = true;
            this.title = "Tour and Travels";
        }
        if (this.router.url.includes('tour-details')) {
            //this.cart_button_visible = false;
            this.menu_button_visible = false;
            this.title_section_visible = true;
            this.title = "Tour Details";
        }
        if (this.router.url.includes('tour-details-package-form')) {
            //this.cart_button_visible = false;
            //this.menu_button_visible = false;
            this.title_section_visible = true;
            this.title = "";
        }
        if (this.router.url.includes('school-pool-car')) {
            //this.cart_button_visible = false;
            //this.menu_button_visible = false;
            this.title_section_visible = true;
            this.title = "School Pull Car";
        }
    };
    HeaderComponent.prototype.getBalance = function (userId) {
        var _this = this;
        var request_data = { "type": 'referral_balance', "user_id": userId, };
        this.officePoolCarService.payThroughWalletService(request_data).subscribe(function (res) {
            _this.referral_balance = res.result.referral_balance;
        }, function (error) {
            _this.toasterService.showToast(error.error.msg, 2000);
        });
    };
    HeaderComponent.prototype.logoutUser = function () {
        this.alertService.presentAlertConfirm("Are you sure you want to end this session?", "logout");
    };
    HeaderComponent.prototype.goToPage = function (page) {
        if (page == 'notifications')
            this.router.navigateByUrl('myaccount/myaccount-common-page/notifications');
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/core/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/core/components/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__["Network"],
            _core_services_office_pool_car_service__WEBPACK_IMPORTED_MODULE_7__["OfficePoolCarService"],
            _core_services_toaster_service__WEBPACK_IMPORTED_MODULE_8__["ToasterService"],
            _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_9__["FirebaseX"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ })

}]);
//# sourceMappingURL=default~auth-forgot-password-forgot-password-module~auth-login-login-module~auth-register-register-m~74e50786.js.map