(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["office-pool-car-service-booked-details-booked-details-module"],{

/***/ "./src/app/layout/office-pool-car-service/booked-details/booked-details.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/layout/office-pool-car-service/booked-details/booked-details.module.ts ***!
  \****************************************************************************************/
/*! exports provided: BookedDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookedDetailsPageModule", function() { return BookedDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _booked_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./booked-details.page */ "./src/app/layout/office-pool-car-service/booked-details/booked-details.page.ts");
/* harmony import */ var _core_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/components/components.module */ "./src/app/core/components/components.module.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");









var routes = [
    {
        path: '',
        component: _booked_details_page__WEBPACK_IMPORTED_MODULE_6__["BookedDetailsPage"]
    }
];
var BookedDetailsPageModule = /** @class */ (function () {
    function BookedDetailsPageModule() {
    }
    BookedDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _core_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"]
            ],
            declarations: [_booked_details_page__WEBPACK_IMPORTED_MODULE_6__["BookedDetailsPage"]]
        })
    ], BookedDetailsPageModule);
    return BookedDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/layout/office-pool-car-service/booked-details/booked-details.page.html":
/*!****************************************************************************************!*\
  !*** ./src/app/layout/office-pool-car-service/booked-details/booked-details.page.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<ion-progress-bar type=\"indeterminate\" class=\"progress_bar\" *ngIf=\"progress_bar\"></ion-progress-bar>\n<ion-content>\n  <div class=\"inner_div\">\n    <div *ngFor=\"let bookedDetails of bookedDetails_res\">\n      <ion-card class=\"card_class\">\n        <ion-grid  no-padding margin-top>\n          <ion-row style=\"margin: 0 10px 0 10px;\">\n            <ion-col text-center style=\"padding: 0px;\" size=\"1\">\n              <ion-img src=\"./assets/svg/logo.svg\" alt=\"redy rider\" style=\"width: 20px;\"></ion-img>\n              <ion-img src=\"./assets/svg/dot.svg\" alt=\".\" style=\"width: 3px;margin: 5px 0 5px 8px;\" ></ion-img>\n              <ion-img src=\"./assets/svg/logo.svg\" alt=\"redy rider\" style=\"width: 20px;\"></ion-img>\n            </ion-col>\n            <ion-col text-left style=\"padding: 0px;\" size=\"11\">\n              <p class=\"p_location\">{{pickup_location}}</p>\n              <p style=\"margin:20px 0 0px 0px;\">{{drop_location}}</p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-toolbar class=\"toolbar-class\">\n                <ion-icon name=\"bus\" slot=\"start\" class=\"icon-margin-top\"></ion-icon> \n                <p class=\"no_margin_p_travel_details\">{{bookedDetails.travel_details.Bus_no}}</p>\n              </ion-toolbar>\n              <ion-toolbar class=\"toolbar-class\">\n                <ion-icon name=\"calendar\" slot=\"start\" class=\"icon-margin-top\"></ion-icon>\n                <p class=\"no_margin_p_travel_details\">{{bookedDetails.travel_details.journy_date}}</p>\n              </ion-toolbar>   \n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-toolbar class=\"toolbar-class\">\n                <fa-icon [icon]=\"['fas','chair']\" size=\"1x\" class=\"icon-margin-top\" style=\"font-size: 15px;margin-right: 5px;margin-left: 5px;\" slot=\"start\"></fa-icon>\n                <p class=\"no_margin_p_travel_details\">\n                  <ion-badge *ngFor=\"let s_number of bookedDetails.seat_details.seats\">{{s_number}}&nbsp; </ion-badge>\n                </p>\n              </ion-toolbar>\n              <ion-toolbar class=\"toolbar-class\">\n                <ion-icon name=\"clock\" slot=\"start\" class=\"icon-margin-top\"></ion-icon>\n                <p class=\"no_margin_p_travel_details\">{{bookedDetails.travel_details.journy_time}}</p>\n              </ion-toolbar>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"fare_details_class\">\n            <ion-col>\n              <ion-toolbar class=\"toolbar-class\">\n                <p slot=\"start\" size=\"small\" class=\"no_margin_p\">Base Fare</p>\n                <p slot=\"end\" size=\"small\" class=\"no_margin_p\">\n                  <fa-icon [icon]=\"['fas','rupee-sign']\" size=\"1x\" class=\"rstar-icon\"></fa-icon>  {{bookedDetails.fare_details.base_fare}}\n                </p>\n              </ion-toolbar>\n              <ion-toolbar class=\"toolbar-class\">\n                <p slot=\"start\" size=\"small\" class=\"no_margin_p\">Total Fare</p>\n                <p slot=\"end\" size=\"small\" class=\"no_margin_p\">\n                  <fa-icon [icon]=\"['fas','rupee-sign']\" size=\"1x\" class=\"rstar-icon\"></fa-icon>  {{bookedDetails.fare_details.total_fare}}\n                </p>\n              </ion-toolbar>\n              <ion-toolbar class=\"toolbar-class\">\n                <p slot=\"start\" size=\"small\" class=\"no_margin_p\">GST</p>\n                <p slot=\"end\" size=\"small\" class=\"no_margin_p\">\n                  <fa-icon [icon]=\"['fas','rupee-sign']\" size=\"1x\" class=\"rstar-icon\"></fa-icon>  {{bookedDetails.fare_details.gst}}\n                </p>\n              </ion-toolbar>\n                \n              <ion-toolbar class=\"toolbar-class\">\n                <p slot=\"start\" size=\"small\" style=\"font-weight: bold;\" class=\"no_margin_p\">TOTAL PAYABLE</p>\n                <p slot=\"end\" size=\"small\" style=\"font-weight: bold;\" class=\"no_margin_p\">\n                  <fa-icon [icon]=\"['fas','rupee-sign']\" size=\"1x\" class=\"rstar-icon\"></fa-icon>  {{bookedDetails.fare_details.payable_fare}}\n                </p>\n              </ion-toolbar>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card>\n    </div>\n    <ion-card class=\"card_class\" style=\"background: #02A1EB;\">\n      <ion-grid>\n        <ion-row class=\"\">\n          <ion-col>\n            <ion-text class=\"ion-text-center\"><p class=\"no_margin_p\">TOTAL FARE DETAILS</p></ion-text>\n            <hr/>\n            <ion-toolbar class=\"toolbar-class\">\n              <p slot=\"start\" size=\"small\" class=\"no_margin_p\">Total Fare</p>\n              <p slot=\"end\" size=\"small\" class=\"no_margin_p\">\n                <fa-icon [icon]=\"['fas','rupee-sign']\" size=\"1x\" class=\"rstar-icon\"></fa-icon>  {{total_seat_fare_details.total_fare}}\n              </p>\n            </ion-toolbar>\n            <ion-toolbar class=\"toolbar-class\">\n              <p slot=\"start\" size=\"small\" class=\"no_margin_p\">GST</p>\n              <p slot=\"end\" size=\"small\" class=\"no_margin_p\">\n                <fa-icon [icon]=\"['fas','rupee-sign']\" size=\"1x\" class=\"rstar-icon\"></fa-icon>  {{total_seat_fare_details.gst}}\n              </p>\n            </ion-toolbar>\n            <ion-toolbar class=\"toolbar-class\" *ngIf=\"coupan_div\">\n              <p slot=\"start\" size=\"small\" color=\"tertiary\" class=\"no_margin_p\">Coupon Amount</p>\n              <p slot=\"end\" size=\"small\" color=\"tertiary\" class=\"no_margin_p\">\n                <fa-icon [icon]=\"['fas','rupee-sign']\" size=\"1x\" class=\"rstar-icon\"></fa-icon> -{{total_seat_fare_details.coupan_rs}}\n              </p>\n            </ion-toolbar>\n            <ion-toolbar class=\"toolbar-class\">\n              <p slot=\"start\" size=\"small\" style=\"font-weight: bold;\" class=\"no_margin_p\">TOTAL PAYABLE</p>\n              <p slot=\"end\" size=\"small\" style=\"font-weight: bold;\" class=\"no_margin_p\">\n                <fa-icon [icon]=\"['fas','rupee-sign']\" size=\"1x\" class=\"rstar-icon\"></fa-icon>  {{total_seat_fare_details.payable_fare}}\n              </p>\n            </ion-toolbar>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card>\n    <form  [formGroup]=\"form\" novalidate>\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"8\" style=\"padding-right: 0px;\">\n            <ion-input formControlName=\"coupon_code\" autofocus=\"on\" type=\"text\" clearInput=\"true\" color=\"primary\" inputmode=\"text\" required=\"true\" style=\"background: #ffffff;height:45px;font-size: 18px;\" required></ion-input>\n          </ion-col>\n          <ion-col size=\"4\" style=\"padding: 0 0 0 0;\">\n            <ion-button class=\"ion-margin-top\" size=\"large\" style=\"margin-top: 0px;border-radius:0px;padding: 4px 0px 6px 0px;\"   type=\"button\" [disabled]=\"net_connection_check || form.invalid\" color=\"success\" (click)=\"applyCoupon()\">\n              APPLY\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </form>\n    <ion-button class=\"ion-margin-top\"  [disabled]=\"net_connection_check\"  size=\"large\" type=\"button\" expand=\"full\" (click)=\"goPaymentPage()\">\n      CONFIRM YOUR BOOKING \n      <ion-icon name=\"arrow-round-forward\"></ion-icon>\n    </ion-button>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/layout/office-pool-car-service/booked-details/booked-details.page.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/layout/office-pool-car-service/booked-details/booked-details.page.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".inner_div {\n  margin-left: 15px;\n  margin-right: 15px; }\n\n.card_class {\n  margin-left: 0px;\n  margin-right: 0px;\n  background-color: #ffffff; }\n\n.toolbar-class {\n  --background: transparent;\n  margin-left: 5px;\n  padding: 3px; }\n\nion-title {\n  font-size: 15px;\n  font-weight: normal;\n  padding-left: 5px; }\n\nion-toolbar {\n  --min-height:18px; }\n\nion-badge {\n  margin-bottom: -5px;\n  margin-right: 3px;\n  border-radius: 10px;\n  padding: 3px 2px 3px 5px;\n  background: #0A5999; }\n\nion-icon {\n  font-size: 20px; }\n\n.rstar-icon {\n  font-size: 15px; }\n\n.no_margin_p {\n  margin: 0 15px 0px 0px !important;\n  color: white; }\n\n.no_margin_p_travel_details {\n  margin: 0px;\n  opacity: 0.7; }\n\n.fare_details_class {\n  background: #B0B1AF;\n  color: white !important;\n  border-radius: 5px;\n  margin: 0px 5px 5px 5px; }\n\nhr {\n  border-top: 1px solid white !important; }\n\nion-button {\n  padding: 0px 0px 10px 0px;\n  --background: linear-gradient(45deg, #0A5999 0%, #02A1EB 100%);\n  margin: 0px 0 0px 0px; }\n\n.p_location {\n  margin: 0 0 0 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ByaXlhbS9Eb2N1bWVudHMvUmVkeVJpZGVyL3NyYy9hcHAvbGF5b3V0L29mZmljZS1wb29sLWNhci1zZXJ2aWNlL2Jvb2tlZC1kZXRhaWxzL2Jvb2tlZC1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLHlCQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLFlBQVksRUFBQTs7QUFFaEI7RUFDSSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLGlCQUFhLEVBQUE7O0FBRWpCO0VBQ0ksbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsd0JBQXdCO0VBQ3hCLG1CQUFtQixFQUFBOztBQUV2QjtFQUNJLGVBQWUsRUFBQTs7QUFFbkI7RUFDSSxlQUFlLEVBQUE7O0FBRW5CO0VBQ0ksaUNBQWtDO0VBQ2xDLFlBQVksRUFBQTs7QUFFaEI7RUFDSSxXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUVoQjtFQUNJLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLHVCQUF1QixFQUFBOztBQUUzQjtFQUNJLHNDQUFzQyxFQUFBOztBQUUxQztFQUNJLHlCQUF5QjtFQUN6Qiw4REFBYTtFQUNiLHFCQUFxQixFQUFBOztBQUV6QjtFQUVJLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L29mZmljZS1wb29sLWNhci1zZXJ2aWNlL2Jvb2tlZC1kZXRhaWxzL2Jvb2tlZC1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbm5lcl9kaXZ7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuLmNhcmRfY2xhc3N7XG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIC8vY29sb3I6IHdoaXRlO1xufVxuLnRvb2xiYXItY2xhc3N7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIHBhZGRpbmc6IDNweDtcbn1cbmlvbi10aXRsZXtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cbmlvbi10b29sYmFye1xuICAgIC0tbWluLWhlaWdodDoxOHB4O1xufVxuaW9uLWJhZGdle1xuICAgIG1hcmdpbi1ib3R0b206IC01cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAzcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwYWRkaW5nOiAzcHggMnB4IDNweCA1cHg7XG4gICAgYmFja2dyb3VuZDogIzBBNTk5OTtcbn1cbmlvbi1pY29ue1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5yc3Rhci1pY29ue1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn1cbi5ub19tYXJnaW5fcHtcbiAgICBtYXJnaW4gOiAwIDE1cHggMHB4IDBweCAhaW1wb3J0YW50OyBcbiAgICBjb2xvcjogd2hpdGU7XG59XG4ubm9fbWFyZ2luX3BfdHJhdmVsX2RldGFpbHN7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgb3BhY2l0eTogMC43O1xufVxuLmZhcmVfZGV0YWlsc19jbGFzc3tcbiAgICBiYWNrZ3JvdW5kOiAjQjBCMUFGO1xuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW46IDBweCA1cHggNXB4IDVweDtcbn1cbmhye1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB3aGl0ZSAhaW1wb3J0YW50O1xufVxuaW9uLWJ1dHRvbntcbiAgICBwYWRkaW5nOiAwcHggMHB4IDEwcHggMHB4O1xuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMEE1OTk5IDAlLCAjMDJBMUVCIDEwMCUpO1xuICAgIG1hcmdpbjogMHB4IDAgMHB4IDBweDtcbn1cbi5wX2xvY2F0aW9ue1xuICAgIC8vIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbWFyZ2luOiAwIDAgMCAwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/layout/office-pool-car-service/booked-details/booked-details.page.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/layout/office-pool-car-service/booked-details/booked-details.page.ts ***!
  \**************************************************************************************/
/*! exports provided: BookedDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookedDetailsPage", function() { return BookedDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _core_services_office_pool_car_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/services/office-pool-car.service */ "./src/app/core/services/office-pool-car.service.ts");
/* harmony import */ var _core_services_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/services/loading.service */ "./src/app/core/services/loading.service.ts");
/* harmony import */ var _core_services_toaster_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/services/toaster.service */ "./src/app/core/services/toaster.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");









var BookedDetailsPage = /** @class */ (function () {
    function BookedDetailsPage(router, booked_details_event, toasterService, officePoolCarService, loadingService, storage, formBuilder) {
        var _this = this;
        this.router = router;
        this.booked_details_event = booked_details_event;
        this.toasterService = toasterService;
        this.officePoolCarService = officePoolCarService;
        this.loadingService = loadingService;
        this.storage = storage;
        this.formBuilder = formBuilder;
        this.net_connection_check = false;
        this.total_seat_fare_details = {};
        this.payId = [];
        this.progress_bar = false;
        this.progress_bar = true;
        this.storage.get('select_location').then(function (val) {
            _this.bookedDetails_res = val.booking_details;
            _this.pickup_location = val.pickup_location;
            _this.drop_location = val.drop_location;
        });
        this.storage.get('bookingDetails').then(function (val) {
            _this.bookedDetails_res = val.booking_details;
            _this.total_seat_fare_details = val.total_fare_details;
            for (var i = 0; i < val.booking_details.length; i++) {
                _this.payId.push(val.booking_details[i].fare_details.pay_id);
            }
        });
        this.progress_bar = false;
        this.storage.get('USER_INFO').then(function (val) {
            _this.userId = val['id'];
        });
    }
    BookedDetailsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.booked_details_event.subscribe('check_net_connection', function (data) {
            if (data == 'connect')
                _this.net_connection_check = false;
            if (data == 'disconnect')
                _this.net_connection_check = true;
        });
        this.form = this.formBuilder.group({
            coupon_code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
        });
    };
    BookedDetailsPage.prototype.goPaymentPage = function () {
        this.router.navigateByUrl('payment-details');
    };
    BookedDetailsPage.prototype.applyCoupon = function () {
        var _this = this;
        this.loadingService.present();
        var request_data = {
            "type": "coupan",
            "pay_id": this.payId,
            "user_id": this.userId,
            "coupan_id": this.form.value.coupon_code
        };
        //console.log('request_data', request_data)
        this.officePoolCarService.applyCouponService(request_data).subscribe(function (res) {
            //console.log('res.result', res)
            _this.total_seat_fare_details = res.result.total_fare_details;
            _this.bookedDetails_res = res.result.booking_details;
            _this.storage.remove('bookingDetails');
            _this.storage.set('bookingDetails', res.result);
            _this.coupan_div = true;
            _this.form.reset();
            _this.loadingService.dismiss();
            _this.toasterService.showToast("Your coupon code applied successfully", 2000);
        }, function (error) {
            //console.log("error::::" + error.error.msg);
            _this.loadingService.dismiss();
            _this.toasterService.showToast(error.error.msg, 2000);
        });
    };
    BookedDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-booked-details',
            template: __webpack_require__(/*! ./booked-details.page.html */ "./src/app/layout/office-pool-car-service/booked-details/booked-details.page.html"),
            styles: [__webpack_require__(/*! ./booked-details.page.scss */ "./src/app/layout/office-pool-car-service/booked-details/booked-details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"],
            _core_services_toaster_service__WEBPACK_IMPORTED_MODULE_7__["ToasterService"],
            _core_services_office_pool_car_service__WEBPACK_IMPORTED_MODULE_5__["OfficePoolCarService"],
            _core_services_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"]])
    ], BookedDetailsPage);
    return BookedDetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=office-pool-car-service-booked-details-booked-details-module.js.map