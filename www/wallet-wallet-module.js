(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["wallet-wallet-module"],{

/***/ "./src/app/layout/myaccount/wallet/wallet.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/layout/myaccount/wallet/wallet.module.ts ***!
  \**********************************************************/
/*! exports provided: WalletPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletPageModule", function() { return WalletPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/components/components.module */ "./src/app/core/components/components.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _wallet_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./wallet.page */ "./src/app/layout/myaccount/wallet/wallet.page.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");









var routes = [
    {
        path: '',
        component: _wallet_page__WEBPACK_IMPORTED_MODULE_7__["WalletPage"]
    }
];
var WalletPageModule = /** @class */ (function () {
    function WalletPageModule() {
    }
    WalletPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _core_components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            declarations: [_wallet_page__WEBPACK_IMPORTED_MODULE_7__["WalletPage"]]
        })
    ], WalletPageModule);
    return WalletPageModule;
}());



/***/ }),

/***/ "./src/app/layout/myaccount/wallet/wallet.page.html":
/*!**********************************************************!*\
  !*** ./src/app/layout/myaccount/wallet/wallet.page.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div slot=\"fixed\">\n    <ion-progress-bar type=\"indeterminate\" class=\"progress_bar\" *ngIf=\"progress_bar\"></ion-progress-bar>\n    <div class=\"inner_div\">\n    <p class=\"no_margin_p\">Add Money To</p>\n    <ion-toolbar>\n        <h3>Your Wallet</h3>\n        <ion-img src=\"./assets/svg/my_wallet.svg\" style=\"width: 40px;\" slot=\"end\"></ion-img>\n        \n    </ion-toolbar>\n    <p class=\"no_margin_p\">Available Balance &nbsp;&nbsp;<fa-icon [icon]=\"['fas','rupee-sign']\" size=\"1x\" class=\"rstar-icon\"></fa-icon> {{walletAmount ? walletAmount: '0.00'}}</p>\n    <form [formGroup]=\"form\"  novalidate>\n        <ion-item lines=\"full\">\n            <ion-input autofocus=\"on\" type=\"number\" formControlName=\"amount\" maxlength=\"10\" clearInput=\"true\" inputmode=\"number\" required=\"true\" style=\"font-size: 30px;\" placeholder=\"Amount\"></ion-input>\n            <fa-icon [icon]=\"['fas','rupee-sign']\" size=\"2x\" slot=\"start\" class=\"rupee_sign\"></fa-icon> \n        </ion-item>\n        <ion-button class=\"ion-margin-top\"  size=\"large\" type=\"button\" [disabled]=\"form.invalid || net_connection_check\" expand=\"full\" (click)=\"addMoneyToWallet()\">\n            Proceed To Add Money \n            <ion-icon name=\"arrow-round-forward\"></ion-icon>\n        </ion-button>\n    </form>\n    </div>\n<hr class=\"hr_1\"> \n<hr class=\"hr_2\">   \n</div>\n<ion-content>\n    <div class=\" inner_div_1\">\n        <ion-toolbar>\n            <p class=\"no_margin_p\" slot=\"start\">Recent Transactions</p>\n            <ion-chip slot=\"end\" color=\"tertiary\" outline=\"true\" (click)=\"filterTransactions()\">Filter<ion-icon name=\"ios-options\" ></ion-icon></ion-chip>\n        </ion-toolbar>\n    </div>\n    <ion-text>\n            <p *ngIf=\"transactionList.length==0\" padding>No Transaction History Found</p>\n    </ion-text>\n    <ion-virtual-scroll [items]=\"transactionList\">\n        \n        <div *virtualItem=\"let item\">\n            <p style=\"margin: 15px 0px 15px 15px;\">{{item.trans_date}}</p>\n            <ion-card no-padding no-margin>\n                <ion-grid no-margin no-padding>\n                    <ion-row no-margin>\n                      <ion-col>\n                        <ion-toolbar>\n                            <ion-img src=\"./assets/svg/my_wallet_blue.svg\" slot=\"start\"  class=\"icon-payment\" *ngIf=\"item.pay_for_no == '2'\" style=\"width: 48px;\"></ion-img>\n                        \n                        <fa-icon [icon]=\"['fas','bus']\" slot=\"start\" class=\"icon-payment\" *ngIf=\"item.pay_for_no == '1'\"></fa-icon>\n\n                        <ion-img src=\"./assets/svg/referal_blue.svg\" slot=\"start\"  class=\"\" *ngIf=\"item.pay_for_no == '3'\" style=\"width: 48px;\"></ion-img>\n\n                       \n                        <p slot=\"start\" style=\"font-size:16px;margin:0px 0px 0px 10px;\">\n                            {{item.pay_for}}\n                            <span style=\"display: block;\n                            opacity: 0.6;\n                            font-size: 12px;\">\n                                {{item.transaction_id}}\n                            </span>\n                        </p>\n                        <p slot=\"end\" style=\"color: red;\" *ngIf=\"item.transaction_type=='Debit'\"> - <fa-icon [icon]=\"['fas','rupee-sign']\" size=\"1x\" class=\"\"></fa-icon> {{item.amount}}</p>\n                        <p slot=\"end\" *ngIf=\"item.transaction_type=='Credit'\" style=\"color:green;\"> + <fa-icon [icon]=\"['fas','rupee-sign']\" size=\"1x\" class=\"\"></fa-icon> {{item.amount}}</p>\n                    </ion-toolbar>\n                    <ion-toolbar style=\"--min-height:45px;\">\n                        <p slot=\"start\" style=\"margin: 0 0 0 60px;\n                        opacity: 0.6;\">{{item.trans_time}}</p>\n                        <p slot=\"end\" style=\"opacity: 0.6;\">Closing Balance : <fa-icon [icon]=\"['fas','rupee-sign']\" size=\"1x\" class=\"\"></fa-icon> {{item.closing_balance ? item.closing_balance : 0.00}}</p>\n                    </ion-toolbar>\n                </ion-col>\n                </ion-row>\n            </ion-grid>\n            </ion-card>\n        </div>\n    </ion-virtual-scroll> \n    <ion-infinite-scroll threshold=\"300px\" (ionInfinite)=\"loadData($event)\" position=\"bottom\">\n        <ion-infinite-scroll-content\n          loadingSpinner=\"bubbles\"\n          loadingText=\"Loading more data...\">\n        </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/layout/myaccount/wallet/wallet.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/layout/myaccount/wallet/wallet.page.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item {\n  --background: transparent; }\n\n.inner_div {\n  margin-top: 15px;\n  margin-bottom: 10px; }\n\n.inner_div_1 {\n  margin-bottom: 0px;\n  background-color: white;\n  padding: 0 15px 0 15px; }\n\n.rupee_sign {\n  margin-right: 10px;\n  opacity: 0.2;\n  margin-left: -13px; }\n\nion-input {\n  --placeholder-opacity:0.3; }\n\nhr {\n  border-width: 0px;\n  margin: 0px; }\n\n.hr_1 {\n  border-top: 4px solid #0d47a1; }\n\n.hr_2 {\n  border-top: 2px solid #045ff6; }\n\nion-card {\n  box-shadow: none !important; }\n\nion-toolbar {\n  --background:transparent; }\n\n.icon-payment {\n  font-size: 24px;\n  display: block;\n  border: 1px solid gray;\n  border-radius: 35px;\n  padding: 8px;\n  color: #0d47a1;\n  margin-top: 10px; }\n\nion-col {\n  padding: 0 15px 0px 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ByaXlhbS9Eb2N1bWVudHMvUmVkeVJpZGVyL3NyYy9hcHAvbGF5b3V0L215YWNjb3VudC93YWxsZXQvd2FsbGV0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFhLEVBQUE7O0FBRWpCO0VBQ0ksZ0JBQWU7RUFDZixtQkFBa0IsRUFBQTs7QUFFckI7RUFDRyxrQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLHNCQUFzQixFQUFBOztBQUV6QjtFQUNHLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osa0JBQWtCLEVBQUE7O0FBRXJCO0VBQ0cseUJBQXNCLEVBQUE7O0FBRXpCO0VBQ0csaUJBQWlCO0VBQ2pCLFdBQVcsRUFBQTs7QUFFZjtFQUNJLDZCQUE2QixFQUFBOztBQUVqQztFQUNJLDZCQUE2QixFQUFBOztBQUVqQztFQUNJLDJCQUEyQixFQUFBOztBQUUvQjtFQUNJLHdCQUFhLEVBQUE7O0FBR2pCO0VBQ0ksZUFBZTtFQUNmLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixjQUFhO0VBQ2IsZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksd0JBQXdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvbXlhY2NvdW50L3dhbGxldC93YWxsZXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW17XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5pbm5lcl9kaXZ7XG4gICAgbWFyZ2luLXRvcDoxNXB4O1xuICAgIG1hcmdpbi1ib3R0b206MTBweDtcbiB9XG4gLmlubmVyX2Rpdl8xe1xuICAgIG1hcmdpbi1ib3R0b206MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDAgMTVweCAwIDE1cHg7XG4gfVxuIC5ydXBlZV9zaWdue1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBvcGFjaXR5OiAwLjI7XG4gICAgbWFyZ2luLWxlZnQ6IC0xM3B4O1xuIH1cbiBpb24taW5wdXR7XG4gICAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OjAuMztcbiB9XG4gaHIgeyBcbiAgICBib3JkZXItd2lkdGg6IDBweDtcbiAgICBtYXJnaW46IDBweDtcbn1cbi5ocl8xe1xuICAgIGJvcmRlci10b3A6IDRweCBzb2xpZCAjMGQ0N2ExO1xufVxuLmhyXzJ7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICMwNDVmZjY7XG59XG5pb24tY2FyZHtcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5pb24tdG9vbGJhcntcbiAgICAtLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XG5cbn1cbi5pY29uLXBheW1lbnR7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gICAgYm9yZGVyLXJhZGl1czogMzVweDtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgY29sb3I6IzBkNDdhMTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuaW9uLWNvbHtcbiAgICBwYWRkaW5nOiAwIDE1cHggMHB4IDE1cHg7XG59XG5cbiBcbiAiXX0= */"

/***/ }),

/***/ "./src/app/layout/myaccount/wallet/wallet.page.ts":
/*!********************************************************!*\
  !*** ./src/app/layout/myaccount/wallet/wallet.page.ts ***!
  \********************************************************/
/*! exports provided: WalletPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletPage", function() { return WalletPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _core_services_office_pool_car_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/services/office-pool-car.service */ "./src/app/core/services/office-pool-car.service.ts");
/* harmony import */ var _core_services_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/services/loading.service */ "./src/app/core/services/loading.service.ts");
/* harmony import */ var _core_services_toaster_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/services/toaster.service */ "./src/app/core/services/toaster.service.ts");









var WalletPage = /** @class */ (function () {
    function WalletPage(formBuilder, wallet_event, toasterService, officePoolCarService, loadingService, storage, actionSheetController) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.wallet_event = wallet_event;
        this.toasterService = toasterService;
        this.officePoolCarService = officePoolCarService;
        this.loadingService = loadingService;
        this.storage = storage;
        this.actionSheetController = actionSheetController;
        this.net_connection_check = false;
        this.page = 1;
        this.maximumPages = 10;
        this.transactionList = [];
        this.progress_bar = false;
        this.storage.get('USER_INFO').then(function (val) {
            //console.log('USER_INFO', val);
            _this.userId = val['id'];
            _this.userName = val['name'];
            _this.userEmail = val['email'];
            _this.userPhone = val['mobile'];
            _this.getTransactionHistory();
        });
    }
    WalletPage.prototype.ngOnInit = function () {
        var _this = this;
        this.wallet_event.subscribe('check_net_connection', function (data) {
            if (data == 'connect')
                _this.net_connection_check = false;
            if (data == 'disconnect')
                _this.net_connection_check = true;
        });
        this.form = this.formBuilder.group({
            amount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    WalletPage.prototype.getTransactionHistory = function (event) {
        var _this = this;
        this.progress_bar = true;
        var request_data = {
            "type": "wallet",
            "user_id": this.userId,
            "filter_by": this.filter,
            "page": this.page,
            "count": 3,
        };
        this.officePoolCarService.payThroughWalletService(request_data).subscribe(function (res) {
            _this.walletAmount = res.result['current_wallet_balance'];
            console.log('this.transactionList', res.result['payment_history'].length);
            if (res.result['payment_history'].length == 0) {
                _this.transactionList = res.result['payment_history'];
            }
            else {
                _this.transactionList = _this.transactionList.concat(res.result['payment_history']);
            }
            _this.progress_bar = false;
            if (event) {
                event.target.complete();
            }
        }, function (error) {
            //console.log("error::::" + error.error.msg);
            _this.progress_bar = false;
            _this.toasterService.showToast(error.error.msg, 2000);
        });
    };
    WalletPage.prototype.loadData = function (event) {
        this.page++;
        this.getTransactionHistory(event);
        if (this.page === this.maximumPages) {
            event.target.disabled = true;
        }
    };
    WalletPage.prototype.addMoneyToWallet = function () {
        var _this = this;
        var options = {
            description: 'Credits towards consultation',
            // image: 'https://i.imgur.com/3g7nmJC.png',
            currency: 'INR',
            key: 'rzp_test_5oKpHg5DYNOtKG',
            amount: this.form.value.amount,
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
                "type": "add_to_wallet",
                "user_id": _this.userId,
                "amount": options.amount,
                "transaction_no": payment_id,
                "referal_coupon_code_id": "0",
                "recharge_by": "razorpay",
                "status": '1'
            };
            //alert('request_data' + request_data)
            _this.addToWallet(request_data);
        };
        var cancelCallback = function (error) {
            console.log(error.description + ' (Error ' + error.code + ')');
            var request_data = {
                "type": "add_to_wallet",
                "user_id": _this.userId,
                "amount": 0.00,
                "transaction_no": 'CANCEL',
                "referal_coupon_code_id": "0",
                "recharge_by": "razorpay",
                "status": '3'
            };
            //alert('request_data' + request_data)
            _this.addToWallet(request_data, '3');
        };
        RazorpayCheckout.open(options, successCallback, cancelCallback);
    };
    WalletPage.prototype.addToWallet = function (request_data, status) {
        var _this = this;
        if (status === void 0) { status = ''; }
        this.officePoolCarService.payThroughWalletService(request_data).subscribe(function (res) {
            //alert('result' + res.result);
            _this.getTransactionHistory();
            if (status == '3')
                _this.toasterService.showToast('Your transaction has been cancelled', 2000);
            else
                _this.toasterService.showToast('Your amound has been added to your wallet', 2000);
            _this.loadingService.dismiss();
        }, function (error) {
            //console.log("error::::" + error.error.msg);
            _this.loadingService.dismiss();
            _this.toasterService.showToast(error.error.msg, 2000);
        });
    };
    WalletPage.prototype.filterTransactions = function () {
        var _this = this;
        this.actionSheet = this.actionSheetController.create({
            header: 'Filter Transactions',
            buttons: [
                {
                    text: 'All',
                    handler: function () {
                        _this.filter = '';
                        _this.getTransactionHistory();
                    }
                },
                {
                    text: 'Paid',
                    handler: function () {
                        _this.filter = '2';
                        _this.getTransactionHistory();
                    }
                }, {
                    text: 'Add',
                    handler: function () {
                        _this.filter = '1';
                        _this.getTransactionHistory();
                    }
                }, {
                    text: 'Cancelled',
                    handler: function () {
                        _this.filter = '3';
                        _this.getTransactionHistory();
                    }
                }
            ]
        }).then(function (actionsheet) {
            actionsheet.present();
        });
    };
    WalletPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-wallet',
            template: __webpack_require__(/*! ./wallet.page.html */ "./src/app/layout/myaccount/wallet/wallet.page.html"),
            styles: [__webpack_require__(/*! ./wallet.page.scss */ "./src/app/layout/myaccount/wallet/wallet.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"],
            _core_services_toaster_service__WEBPACK_IMPORTED_MODULE_7__["ToasterService"],
            _core_services_office_pool_car_service__WEBPACK_IMPORTED_MODULE_5__["OfficePoolCarService"],
            _core_services_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"]])
    ], WalletPage);
    return WalletPage;
}());



/***/ })

}]);
//# sourceMappingURL=wallet-wallet-module.js.map