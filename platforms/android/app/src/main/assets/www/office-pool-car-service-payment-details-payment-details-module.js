(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["office-pool-car-service-payment-details-payment-details-module"],{

/***/ "./src/app/layout/office-pool-car-service/payment-details/payment-details.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/layout/office-pool-car-service/payment-details/payment-details.module.ts ***!
  \******************************************************************************************/
/*! exports provided: PaymentDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentDetailsPageModule", function() { return PaymentDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _payment_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./payment-details.page */ "./src/app/layout/office-pool-car-service/payment-details/payment-details.page.ts");
/* harmony import */ var _core_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/components/components.module */ "./src/app/core/components/components.module.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");









var routes = [
    {
        path: '',
        component: _payment_details_page__WEBPACK_IMPORTED_MODULE_6__["PaymentDetailsPage"]
    }
];
var PaymentDetailsPageModule = /** @class */ (function () {
    function PaymentDetailsPageModule() {
    }
    PaymentDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _core_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"]
            ],
            declarations: [_payment_details_page__WEBPACK_IMPORTED_MODULE_6__["PaymentDetailsPage"]]
        })
    ], PaymentDetailsPageModule);
    return PaymentDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/layout/office-pool-car-service/payment-details/payment-details.page.html":
/*!******************************************************************************************!*\
  !*** ./src/app/layout/office-pool-car-service/payment-details/payment-details.page.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<ion-progress-bar type=\"indeterminate\" class=\"progress_bar\" *ngIf=\"progress_bar\"></ion-progress-bar>\n<ion-content>\n    <div class=\"inner_div\">\n        <ion-toolbar class=\"toolbar-class\">\n            <ion-title slot=\"start\" class=\"toolbar-class\">\n                <p>Credit Point Balance</p>\n                <p><fa-icon [icon]=\"['fas','rupee-sign']\" size=\"1x\" class=\"rstar-icon\"></fa-icon> {{wallet_balance}}</p>\n            </ion-title>\n            <ion-button class=\"ion-margin-top\" size=\"default\" \n            style=\"margin-top: 0px;border-radius:0px;font-size: 12px;padding: 0px;\"   \n            type=\"button\" [disabled]=\"net_connection_check\" color=\"danger\" (click)=\"buyCreditPoints()\">\n                Buy Credit Points\n            </ion-button>\n        </ion-toolbar>\n        <ion-item-divider></ion-item-divider>\n        <ion-toolbar class=\"toolbar-class\" style=\"margin-top: 20px;\">\n            <ion-title slot=\"start\" class=\"toolbar-class\">\n                <p>Referral Point Balance</p>\n                <p><fa-icon [icon]=\"['fas','rupee-sign']\" size=\"1x\" class=\"rstar-icon\"></fa-icon> {{referral_balance}}</p>\n            </ion-title>\n            <ion-button class=\"ion-margin-top\" size=\"default\" \n            style=\"margin-top: 0px;border-radius:0px;font-size: 12px;width:150px;padding: 0px;\"   type=\"button\" [disabled]=\"net_connection_check\" color=\"tertiary\" (click)=\"referFriends()\">\n                Refer Friends\n            </ion-button>\n        </ion-toolbar>\n        <ion-item-divider></ion-item-divider>\n        <div style=\"text-align: center;margin-top: 30px;\">\n            <p>Total Amount</p>\n            <span>\n                <fa-icon [icon]=\"['fas','rupee-sign']\" size=\"1x\" class=\"rstar-icon\"></fa-icon>&nbsp;\n            </span>\n            <p class=\"amount_cs\">{{payableFare}}/-</p>\n            <ion-grid no-margin no-padding>\n                <ion-row no-margin no-padding>\n                    <ion-col size=\"4\">\n                        <ion-button size=\"default\" style=\"margin-top: 0px;border-radius:0px;font-size: 12px;padding: 0px;--background: linear-gradient(45deg, #02A1EB 0%, #0A5999 100%);\"   type=\"button\"[disabled]=\" net_connection_check\" (click)=\"payDirect()\">\n                            <fa-icon [icon]=\"['fas','money-bill-alt']\" size=\"1x\" class=\"rstar-icon\"></fa-icon>&nbsp;\n                            PAY DIRECT\n                        </ion-button>\n                    </ion-col>\n                    <ion-col size=\"1\">&nbsp;</ion-col>\n                    <ion-col size=\"6\">\n                        <ion-button size=\"default\" style=\"margin-top: 0px;border-radius:0px;font-size: 12px;padding: 0px;--background: linear-gradient(45deg, #0A5999 0%, #02A1EB 100%);\"   type=\"button\"[disabled]=\" net_connection_check\" (click)=\"payThroughWallet()\">\n                            <ion-icon name=\"ios-wallet\"></ion-icon>\n                            &nbsp;PAY THROUGH WALLET\n                            \n                        </ion-button>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </div>\n    </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/layout/office-pool-car-service/payment-details/payment-details.page.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/layout/office-pool-car-service/payment-details/payment-details.page.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-title {\n  font-size: 14px;\n  font-weight: normal;\n  padding-left: 0px; }\n\n.inner_div {\n  margin-left: 15px;\n  margin-right: 15px;\n  margin-top: 30px; }\n\n.amount_cs {\n  display: inline-block;\n  font-size: 40px;\n  position: relative;\n  top: 8px;\n  margin: 0px 0px 30px 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ByaXlhbS9Eb2N1bWVudHMvUmVkeVJpZGVyL3NyYy9hcHAvbGF5b3V0L29mZmljZS1wb29sLWNhci1zZXJ2aWNlL3BheW1lbnQtZGV0YWlscy9wYXltZW50LWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUix3QkFBd0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9vZmZpY2UtcG9vbC1jYXItc2VydmljZS9wYXltZW50LWRldGFpbHMvcGF5bWVudC1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZXtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbn1cbi5pbm5lcl9kaXZ7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG59XG4uYW1vdW50X2Nze1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogOHB4O1xuICAgIG1hcmdpbjogMHB4IDBweCAzMHB4IDBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/layout/office-pool-car-service/payment-details/payment-details.page.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/layout/office-pool-car-service/payment-details/payment-details.page.ts ***!
  \****************************************************************************************/
/*! exports provided: PaymentDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentDetailsPage", function() { return PaymentDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _core_services_office_pool_car_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/services/office-pool-car.service */ "./src/app/core/services/office-pool-car.service.ts");
/* harmony import */ var _core_services_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/services/loading.service */ "./src/app/core/services/loading.service.ts");
/* harmony import */ var _core_services_toaster_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/services/toaster.service */ "./src/app/core/services/toaster.service.ts");








var PaymentDetailsPage = /** @class */ (function () {
    function PaymentDetailsPage(payment_details_event, router, toasterService, officePoolCarService, loadingService, storage) {
        var _this = this;
        this.payment_details_event = payment_details_event;
        this.router = router;
        this.toasterService = toasterService;
        this.officePoolCarService = officePoolCarService;
        this.loadingService = loadingService;
        this.storage = storage;
        this.net_connection_check = false;
        this.seats_no = [];
        this.refer_code = '';
        this.progress_bar = false;
        this.progress_bar = true;
        this.storage.get('USER_INFO').then(function (val) {
            _this.userId = val['id'];
            _this.userName = val['name'];
            _this.userEmail = val['email'];
            _this.userPhone = val['mobile'];
            _this.refer_code = val.referral_no;
            _this.generate_link = 'https://google.com/' + _this.refer_code;
            _this.getBalance('wallet_balance');
            _this.getBalance('referral_balance');
        });
        this.storage.get('bookingDetails').then(function (val) {
            _this.payableFare = val['total_fare_details']['payable_fare'];
            //this.payId = val['total_fare_details']['pay_id'];
            //this.seats_no = val['seat_details']['seats'];
            _this.booking_details = val;
        });
    }
    PaymentDetailsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.payment_details_event.subscribe('check_net_connection', function (data) {
            if (data == 'connect')
                _this.net_connection_check = false;
            if (data == 'disconnect')
                _this.net_connection_check = true;
        });
    };
    PaymentDetailsPage.prototype.buyCreditPoints = function () {
        this.router.navigateByUrl('myaccount/wallet');
    };
    PaymentDetailsPage.prototype.referFriends = function () {
        this.router.navigateByUrl('myaccount/refer-earn');
    };
    PaymentDetailsPage.prototype.getBalance = function (type) {
        var _this = this;
        var request_data = {
            "type": type,
            "user_id": this.userId,
        };
        this.officePoolCarService.payThroughWalletService(request_data).subscribe(function (res) {
            if (type == 'wallet_balance') {
                _this.wallet_balance = res.result.current_wallet_balance;
                _this.progress_bar = false;
            }
            if (type == 'referral_balance') {
                _this.referral_balance = res.result.referral_balance;
                _this.progress_bar = false;
            }
        }, function (error) {
            _this.progress_bar = false;
            _this.toasterService.showToast(error.error.msg, 2000);
        });
    };
    PaymentDetailsPage.prototype.payThroughWallet = function () {
        var _this = this;
        this.loadingService.present();
        var request_data = {
            "type": "wallet_pay",
            "user_id": this.userId,
            "booking_details": this.booking_details,
            "status": 2
        };
        //console.log('request_data', request_data);
        this.officePoolCarService.payThroughWalletService(request_data).subscribe(function (res) {
            //.log('result', res.result);
            _this.storage.set('transactionDetails', res.result);
            _this.storage.remove('bookingDetails');
            _this.storage.remove('route_search_parameters');
            _this.loadingService.dismiss();
            _this.router.navigateByUrl('booking-thankyou');
        }, function (error) {
            console.log("error::::" + error.error);
            //this.openOtpModal();
            _this.loadingService.dismiss();
            _this.toasterService.showToast(error.error.msg, 3000);
            //this.router.navigateByUrl('booking-thankyou')
        });
    };
    PaymentDetailsPage.prototype.payDirect = function () {
        var _this = this;
        console.log('sdsdsd');
        var options = {
            description: 'Credits towards consultation',
            // image: 'https://i.imgur.com/3g7nmJC.png',
            currency: 'INR',
            key: 'rzp_test_5oKpHg5DYNOtKG',
            amount: parseFloat(this.payableFare) * 100,
            name: this.userName,
            prefill: {
                email: this.userEmail,
                contact: this.userPhone,
                name: this.userName
            },
            theme: {
                color: '#F37254'
            },
            modal: {
                ondismiss: function () {
                    console.log('dismissed');
                }
            }
        };
        var successCallback = function (payment_id) {
            //alert('payment_id: ' + payment_id);
            var request_data = {
                "type": "direct_pay",
                "user_id": _this.userId,
                "booking_details": _this.booking_details,
                "status": 2,
                "rz_status": "success",
                "rz_txn_no": payment_id,
            };
            //console.log('request_data' + payment_id)
            _this.savePaymentData(request_data);
        };
        var cancelCallback = function (error) {
            console.log(error.description + ' (Error ' + error.code + ')');
            var request_data = {
                "type": "direct_pay",
                "user_id": _this.userId,
                "amount": 0.00,
                "rz_txn_no": 'CANCEL',
                "booking_details": _this.booking_details,
                "rz_status": "failure"
            };
            //alert('request_data' + request_data)
            _this.savePaymentData(request_data, '3');
        };
        RazorpayCheckout.open(options, successCallback, cancelCallback);
    };
    PaymentDetailsPage.prototype.savePaymentData = function (request_data, status) {
        var _this = this;
        if (status === void 0) { status = ''; }
        this.loadingService.present();
        this.officePoolCarService.payThroughWalletService(request_data).subscribe(function (res) {
            //alert('result' + res.result);
            if (status == '3')
                _this.toasterService.showToast('Your transaction has been cancelled', 2000);
            else {
                _this.storage.set('transactionDetails', res.result);
                _this.storage.remove('bookingDetails');
                _this.storage.remove('route_search_parameters');
                setTimeout(function () { this.loadingService.dismiss(); this.router.navigateByUrl('booking-thankyou'); }, 1000);
                //this.router.navigateByUrl('booking-thankyou');
            }
        }, function (error) {
            //console.log("error::::" + error.error.msg);
            _this.loadingService.dismiss();
            _this.toasterService.showToast(error.error.msg, 2000);
        });
    };
    PaymentDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-payment-details',
            template: __webpack_require__(/*! ./payment-details.page.html */ "./src/app/layout/office-pool-car-service/payment-details/payment-details.page.html"),
            styles: [__webpack_require__(/*! ./payment-details.page.scss */ "./src/app/layout/office-pool-car-service/payment-details/payment-details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _core_services_toaster_service__WEBPACK_IMPORTED_MODULE_7__["ToasterService"],
            _core_services_office_pool_car_service__WEBPACK_IMPORTED_MODULE_5__["OfficePoolCarService"],
            _core_services_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]])
    ], PaymentDetailsPage);
    return PaymentDetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=office-pool-car-service-payment-details-payment-details-module.js.map