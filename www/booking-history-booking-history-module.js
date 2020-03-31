(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["booking-history-booking-history-module"],{

/***/ "./src/app/layout/myaccount/booking-history/booking-history.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/layout/myaccount/booking-history/booking-history.module.ts ***!
  \****************************************************************************/
/*! exports provided: BookingHistoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingHistoryPageModule", function() { return BookingHistoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _booking_history_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./booking-history.page */ "./src/app/layout/myaccount/booking-history/booking-history.page.ts");
/* harmony import */ var _core_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/components/components.module */ "./src/app/core/components/components.module.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");









var routes = [
    {
        path: '',
        component: _booking_history_page__WEBPACK_IMPORTED_MODULE_6__["BookingHistoryPage"]
    }
];
var BookingHistoryPageModule = /** @class */ (function () {
    function BookingHistoryPageModule() {
    }
    BookingHistoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _core_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"]
            ],
            declarations: [_booking_history_page__WEBPACK_IMPORTED_MODULE_6__["BookingHistoryPage"]]
        })
    ], BookingHistoryPageModule);
    return BookingHistoryPageModule;
}());



/***/ }),

/***/ "./src/app/layout/myaccount/booking-history/booking-history.page.html":
/*!****************************************************************************!*\
  !*** ./src/app/layout/myaccount/booking-history/booking-history.page.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<ion-progress-bar type=\"indeterminate\" class=\"progress_bar\" *ngIf=\"progress_bar\"></ion-progress-bar>\n<ion-content>\n  <!-- <div slot=\"fixed\">\n    <ion-card style=\"margin: 0px;border-radius: 0px;\">\n      \n      <ion-item lines=\"none\">\n        <p class=\"no_margin_p\" slot=\"start\">Recent Bookings</p>\n        <ion-chip slot=\"end\" color=\"tertiary\" outline=\"true\" (click)=\"filterTransactions()\">Filter<ion-icon name=\"ios-options\" ></ion-icon></ion-chip>\n      </ion-item>\n    </ion-card>\n  </div> -->\n  <!-- <div style=\"margin-top: 60px;\"> -->\n    <div>\n      <ion-virtual-scroll [items]=\"transactionList\">\n        <ion-card style=\"margin:0px 0px 5px 0;border-radius: 0px;\" *virtualItem=\"let item\" (click)=\"openBooking(item.booking_id)\">\n          <ion-item lines=\"none\">\n            <ion-label>\n              <div>\n              <ion-img src=\"./assets/svg/my_ride.svg\" style=\"width: 35px;float: left;margin-right: 10px;\"></ion-img>\n              <h2 style=\"font-size: 14px;float: left;\">{{item.booking_date}}&nbsp;,&nbsp;{{item.booking_time}}</h2>\n              <h2 style=\"font-size: 14px;float: right;\">\n              <fa-icon [icon]=\"['fas','rupee-sign']\" style=\"opacity: 0.6;font-size: 13px;\n                margin-right: 2px;\"></fa-icon>{{item.paid_amount}}</h2>\n              </div>\n              <h6 style=\"clear: both;margin-left: 46px;font-size: 12px;\">{{item.car_name}} &nbsp; {{item.car_no}}</h6>\n              <div>\n                <div style=\"margin-left: 44px;float: left;width: 70%;\">\n                  <div class=\"div_elipse_class\" style=\"margin-top: 10px;\">\n                    <ion-icon name=\"locate\" style=\"font-size: 16px;float: left;\"color=\"success\"></ion-icon>\n                    <p style=\"margin:0px;opacity: 0.7;font-size: 13px;\">&nbsp;{{item.stoppage_start}}</p>\n                  </div>\n                  <ion-icon name=\"more\" style=\"opacity: 0.5;\"></ion-icon>\n                  <div class=\"div_elipse_class\">\n                    <ion-icon name=\"locate\" style=\"font-size: 16px;float: left;\" color=\"danger\"></ion-icon>\n                    <p style=\"margin:0px;opacity: 0.7;font-size: 13px;\">&nbsp;{{item.stoppage_end}}</p>\n                  </div>\n                </div>\n                <div style=\"float: right;\">\n                  <ion-avatar slot=\"start\" style=\"height: 50px;width: 50px;margin-top: 10px;\">\n                    <img src = \"{{item.driver_photo}}\" alt=\"\" />\n                  </ion-avatar> \n                </div>\n              </div>\n            </ion-label>\n          </ion-item>\n          </ion-card>\n      </ion-virtual-scroll>\n      <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\" position=\"top\">\n        <ion-infinite-scroll-content\n          loadingSpinner=\"bubbles\"\n          loadingText=\"Loading more data...\">\n        </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n    </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/layout/myaccount/booking-history/booking-history.page.scss":
/*!****************************************************************************!*\
  !*** ./src/app/layout/myaccount/booking-history/booking-history.page.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item {\n  --background:#ffffff; }\n\n.card-class {\n  margin: 5px 0 0 0 !important; }\n\n.inner_div_history {\n  margin-top: 60px !important; }\n\n.div_elipse_class {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis; }\n\n.p_location {\n  margin: 0 0 0 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ByaXlhbS9Eb2N1bWVudHMvUmVkeVJpZGVyL3NyYy9hcHAvbGF5b3V0L215YWNjb3VudC9ib29raW5nLWhpc3RvcnkvYm9va2luZy1oaXN0b3J5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFhLEVBQUE7O0FBRWpCO0VBQ0ksNEJBQTRCLEVBQUE7O0FBRWhDO0VBQ0ksMkJBQTBCLEVBQUE7O0FBRTdCO0VBQ0csbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQix1QkFBdUIsRUFBQTs7QUFFMUI7RUFFRyxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9teWFjY291bnQvYm9va2luZy1oaXN0b3J5L2Jvb2tpbmctaGlzdG9yeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbXtcbiAgICAtLWJhY2tncm91bmQ6I2ZmZmZmZjtcbn1cbi5jYXJkLWNsYXNze1xuICAgIG1hcmdpbjogNXB4IDAgMCAwICFpbXBvcnRhbnQ7XG59XG4uaW5uZXJfZGl2X2hpc3Rvcnl7XG4gICAgbWFyZ2luLXRvcDo2MHB4ICFpbXBvcnRhbnQ7XG4gfVxuIC5kaXZfZWxpcHNlX2NsYXNze1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiB9XG4gLnBfbG9jYXRpb257XG4gICAgLy8gdGV4dC1hbGlnbjogbGVmdDtcbiAgICBtYXJnaW46IDAgMCAwIDBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/layout/myaccount/booking-history/booking-history.page.ts":
/*!**************************************************************************!*\
  !*** ./src/app/layout/myaccount/booking-history/booking-history.page.ts ***!
  \**************************************************************************/
/*! exports provided: BookingHistoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingHistoryPage", function() { return BookingHistoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _core_services_modal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/modal.service */ "./src/app/core/services/modal.service.ts");
/* harmony import */ var _core_services_toaster_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/toaster.service */ "./src/app/core/services/toaster.service.ts");
/* harmony import */ var _core_services_office_pool_car_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/services/office-pool-car.service */ "./src/app/core/services/office-pool-car.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _core_services_loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/services/loading.service */ "./src/app/core/services/loading.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");









var BookingHistoryPage = /** @class */ (function () {
    function BookingHistoryPage(storage, modalService, toasterService, officePoolCarService, actionSheetController, loadingService, router) {
        this.storage = storage;
        this.modalService = modalService;
        this.toasterService = toasterService;
        this.officePoolCarService = officePoolCarService;
        this.actionSheetController = actionSheetController;
        this.loadingService = loadingService;
        this.router = router;
        this.page = 1;
        this.maximumPages = 10;
        this.transactionList = [];
        this.progress_bar = false;
    }
    BookingHistoryPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('USER_INFO').then(function (val) {
            //console.log('USER_INFO', val);
            _this.userId = val['id'];
            _this.getTransactionHistory();
        });
    };
    BookingHistoryPage.prototype.filterTransactions = function () {
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
    BookingHistoryPage.prototype.getTransactionHistory = function (event) {
        var _this = this;
        this.progress_bar = true;
        var request_data = {
            "type": "booking_list",
            "user_id": this.userId,
            "filter_by": this.filter,
            "page": this.page,
            "count": 6,
        };
        this.officePoolCarService.applyCouponService(request_data).subscribe(function (res) {
            //console.log('this.transactionList', res.result['payment_history'].length);
            if (res.result.length == 0) {
                event.target.complete();
            }
            else {
                _this.transactionList = _this.transactionList.concat(res.result);
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
    BookingHistoryPage.prototype.loadData = function (event) {
        this.page++;
        this.getTransactionHistory(event);
        if (this.page === this.maximumPages) {
            event.target.disabled = true;
        }
    };
    BookingHistoryPage.prototype.openBooking = function (booking_id) {
        //let data = { 'from_which_page': 'my-booking-history', 'userId': this.userId, 'booking_id': booking_id }
        this.router.navigateByUrl('myaccount/booking-history-details/' + booking_id);
    };
    BookingHistoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-booking-history',
            template: __webpack_require__(/*! ./booking-history.page.html */ "./src/app/layout/myaccount/booking-history/booking-history.page.html"),
            styles: [__webpack_require__(/*! ./booking-history.page.scss */ "./src/app/layout/myaccount/booking-history/booking-history.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"],
            _core_services_modal_service__WEBPACK_IMPORTED_MODULE_3__["ModalService"],
            _core_services_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"],
            _core_services_office_pool_car_service__WEBPACK_IMPORTED_MODULE_5__["OfficePoolCarService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ActionSheetController"],
            _core_services_loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
    ], BookingHistoryPage);
    return BookingHistoryPage;
}());



/***/ })

}]);
//# sourceMappingURL=booking-history-booking-history-module.js.map