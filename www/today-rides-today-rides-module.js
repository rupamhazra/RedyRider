(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["today-rides-today-rides-module"],{

/***/ "./src/app/layout/myaccount/today-rides/today-rides.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/layout/myaccount/today-rides/today-rides.module.ts ***!
  \********************************************************************/
/*! exports provided: TodayRidesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodayRidesPageModule", function() { return TodayRidesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _today_rides_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./today-rides.page */ "./src/app/layout/myaccount/today-rides/today-rides.page.ts");
/* harmony import */ var _core_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/components/components.module */ "./src/app/core/components/components.module.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");









var routes = [
    {
        path: '',
        component: _today_rides_page__WEBPACK_IMPORTED_MODULE_6__["TodayRidesPage"]
    }
];
var TodayRidesPageModule = /** @class */ (function () {
    function TodayRidesPageModule() {
    }
    TodayRidesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _core_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"]
            ],
            declarations: [_today_rides_page__WEBPACK_IMPORTED_MODULE_6__["TodayRidesPage"]]
        })
    ], TodayRidesPageModule);
    return TodayRidesPageModule;
}());



/***/ }),

/***/ "./src/app/layout/myaccount/today-rides/today-rides.page.html":
/*!********************************************************************!*\
  !*** ./src/app/layout/myaccount/today-rides/today-rides.page.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<ion-content>\n  <ion-progress-bar type=\"indeterminate\" class=\"progress_bar\" *ngIf=\"progress_bar\"></ion-progress-bar>\n  <ion-card class=\"card_class\" *ngFor=\"let item of result\">\n    <ion-grid style=\"margin:5px 10px 5px 10px;\" no-padding>\n      <ion-row class=\"\">\n        <ion-col>\n          <p class=\"no_margin_p\" style=\"font-size: 18px; padding: 6px;\n          background: #02A1EB;\n          color: white;\" text-center>\n            {{item.car_type}} - {{item.car_no}}\n          </p>\n          <ion-row style=\"margin: 5px 0 5px 0;\" no-padding>\n            <ion-col>\n              <p style=\"margin: 0px 0 0px 0;\">\n                <fa-icon [icon]=\"['fas','clock']\" size=\"1x\" class=\"rstar-icon\"></fa-icon>\n                Start at :  {{item.start_time}}</p>\n            </ion-col>\n            <ion-col>\n              <p style=\"margin: 0px 0 0px 0;\" class=\"\">\n                <fa-icon [icon]=\"['fas','clock']\" size=\"1x\" class=\"rstar-icon\"></fa-icon>\n                Reach at : {{item.end_time}}</p>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col  text-center>\n          <p class=\"no_margin_p\" style=\"font-size: 17px;\">\n            <fa-icon [icon]=\"['fas','chair']\" size=\"1x\" class=\"rstar-icon\"></fa-icon>Total Seats - <ion-text color=\"tertiary\">{{item.total_seat}}</ion-text>\n          </p>\n          <ion-row style=\"margin: 5px 0 5px 0;\" no-padding>\n            <ion-col>\n              <p style=\"margin: 0px 0 0px 0;\">\n                <fa-icon [icon]=\"['fas','chair']\" size=\"1x\" class=\"rstar-icon\"></fa-icon>\n                Available : {{item.total_seat - item.seat_booked}}</p>\n            </ion-col>\n            <ion-col>\n              <p style=\"margin: 0px 0 0px 0;\" class=\"\">\n                <fa-icon [icon]=\"['fas','chair']\" size=\"1x\" class=\"rstar-icon\"></fa-icon>\n                Booked : {{item.seat_booked}}</p>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n      <ion-row style=\"margin: 0 0 10px 0px;\">\n        <ion-col>\n          <p class=\"no_margin_p\" style=\"\">\n            <fa-icon [icon]=\"['fas','chair']\" size=\"1x\" class=\"rstar-icon\"></fa-icon>&nbsp;Booked Seats - <ion-text color=\"tertiary\" *ngFor=\"let i of item.booked_seats_list\">{{i}}</ion-text>\n          </p>\n        </ion-col>\n      </ion-row>\n      <ion-row style=\"\">\n        <ion-col text-center style=\"padding: 0px;\" size=\"1\">\n          <ion-img src=\"./assets/svg/logo.svg\" alt=\"redy rider\" style=\"width: 20px;\"></ion-img>\n          <ion-img src=\"./assets/svg/dot.svg\" alt=\".\" style=\"width: 3px;margin: 10px 0 10px 8px;\" ></ion-img>\n          <ion-img src=\"./assets/svg/logo.svg\" alt=\"redy rider\" style=\"width: 20px;\"></ion-img>\n        </ion-col>\n        <ion-col text-left style=\"padding: 0px;\" size=\"11\">\n          <p class=\"p_location\">{{item.start_location}}</p>\n          <p style=\"margin: 10px 0 10px 0;color:#02A1EB;\" (click)=\"viewRoute(item.route_id,item.start_point_id,item.end_point_id)\"> <fa-icon [icon]=\"['fas','route']\" size=\"1x\" class=\"rstar-icon\"></fa-icon>&nbsp;View Route</p>\n          <p class=\"p_location\">{{item.end_location}}</p>\n        </ion-col>\n      </ion-row>\n      <ion-row text-center no-margin class=\"button-row\">\n        <ion-col style=\"border-right: 2px solid white;\" no-padding no-margin>\n          <ion-button expand=\"full\"  size=\"default\" type=\"button\"   (click)=\"startRide(item.car_id)\" [disabled]=\"\">\n            <fa-icon [icon]=\"['fas','play-circle']\" size=\"1x\" class=\"rstar-icon\"></fa-icon>&nbsp;\n            Start Ride\n          </ion-button>\n        </ion-col>\n        <!-- <ion-col no-margin no-padding>\n          <ion-button expand=\"full\"  size=\"default\" type=\"button\"   (click)=\"reachNotify()\">\n            <fa-icon [icon]=\"['fas','bell']\" size=\"1x\" class=\"rstar-icon\"></fa-icon>&nbsp;\n            Reached\n          </ion-button>\n        </ion-col> -->\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/layout/myaccount/today-rides/today-rides.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/layout/myaccount/today-rides/today-rides.page.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button-row {\n  margin-top: 10px;\n  text-align: center; }\n\nion-button {\n  padding: 0px !important; }\n\n.eb_left {\n  margin-right: 5px; }\n\n.p_location {\n  margin: 0 0 0 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ByaXlhbS9Eb2N1bWVudHMvUmVkeVJpZGVyL3NyYy9hcHAvbGF5b3V0L215YWNjb3VudC90b2RheS1yaWRlcy90b2RheS1yaWRlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksdUJBQXNCLEVBQUE7O0FBRTFCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBRXJCO0VBRUksaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvbXlhY2NvdW50L3RvZGF5LXJpZGVzL3RvZGF5LXJpZGVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b24tcm93e1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuaW9uLWJ1dHRvbntcbiAgICBwYWRkaW5nOjBweCAhaW1wb3J0YW50O1xufVxuLmViX2xlZnR7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG4ucF9sb2NhdGlvbntcbiAgICAvLyB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG1hcmdpbjogMCAwIDAgMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/layout/myaccount/today-rides/today-rides.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/layout/myaccount/today-rides/today-rides.page.ts ***!
  \******************************************************************/
/*! exports provided: TodayRidesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodayRidesPage", function() { return TodayRidesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/loading.service */ "./src/app/core/services/loading.service.ts");
/* harmony import */ var _core_services_toaster_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/services/toaster.service */ "./src/app/core/services/toaster.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_background_mode_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/background-mode/ngx */ "./node_modules/@ionic-native/background-mode/ngx/index.js");
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "./node_modules/@ionic-native/local-notifications/ngx/index.js");
/* harmony import */ var _core_services_office_pool_car_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/services/office-pool-car.service */ "./src/app/core/services/office-pool-car.service.ts");
/* harmony import */ var _office_pool_car_service_route_stoppage_modal_route_stoppage_modal_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../office-pool-car-service/route-stoppage-modal/route-stoppage-modal.page */ "./src/app/layout/office-pool-car-service/route-stoppage-modal/route-stoppage-modal.page.ts");
/* harmony import */ var _core_services_modal_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../core/services/modal.service */ "./src/app/core/services/modal.service.ts");













var TodayRidesPage = /** @class */ (function () {
    function TodayRidesPage(storage, router, loadingService, toasterService, backgroundMode, platform, localNotifications, officePoolCarService, home_page_event, modalService) {
        this.storage = storage;
        this.router = router;
        this.loadingService = loadingService;
        this.toasterService = toasterService;
        this.backgroundMode = backgroundMode;
        this.platform = platform;
        this.localNotifications = localNotifications;
        this.officePoolCarService = officePoolCarService;
        this.home_page_event = home_page_event;
        this.modalService = modalService;
        this.userId = '';
        this.result = [];
        this.progress_bar = false;
    }
    TodayRidesPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('USER_INFO').then(function (val) {
            if (val) {
                _this.userId = val.id;
                console.log('user_details_val_val', val.id);
                _this.getTodayRides();
            }
        });
    };
    TodayRidesPage.prototype.getTodayRides = function () {
        var _this = this;
        console.log('userId', this.userId);
        this.progress_bar = true;
        var request_data = { "type": "driver", "user_id": this.userId };
        this.officePoolCarService.todayRidesService(request_data).subscribe(function (res) {
            //console.log('res', res)
            _this.result = res.result;
            //this.result.shift();
            _this.progress_bar = false;
        }, function (error) {
            //console.log("error::::" + error.error);
            _this.progress_bar = false;
            _this.toasterService.showToast(error.error.msg);
        });
    };
    TodayRidesPage.prototype.startRide = function (car_id) {
        this.router.navigateByUrl('myaccount/location-tracking/' + car_id + '/' + this.userId);
    };
    TodayRidesPage.prototype.viewRoute = function (route_id, start_point, end_point) {
        var data = { 'route_id': route_id, 'from_which_page': 'bus-route-details-page', 'start_point': start_point, 'end_point': end_point };
        this.modalService.openModal(_office_pool_car_service_route_stoppage_modal_route_stoppage_modal_page__WEBPACK_IMPORTED_MODULE_10__["RouteStoppageModalPage"], data, 'stoppage_modal_css');
    };
    TodayRidesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-today-rides',
            template: __webpack_require__(/*! ./today-rides.page.html */ "./src/app/layout/myaccount/today-rides/today-rides.page.html"),
            styles: [__webpack_require__(/*! ./today-rides.page.scss */ "./src/app/layout/myaccount/today-rides/today-rides.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _core_services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"],
            _core_services_toaster_service__WEBPACK_IMPORTED_MODULE_5__["ToasterService"],
            _ionic_native_background_mode_ngx__WEBPACK_IMPORTED_MODULE_7__["BackgroundMode"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"],
            _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_8__["LocalNotifications"],
            _core_services_office_pool_car_service__WEBPACK_IMPORTED_MODULE_9__["OfficePoolCarService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Events"],
            _core_services_modal_service__WEBPACK_IMPORTED_MODULE_11__["ModalService"]])
    ], TodayRidesPage);
    return TodayRidesPage;
}());



/***/ })

}]);
//# sourceMappingURL=today-rides-today-rides-module.js.map