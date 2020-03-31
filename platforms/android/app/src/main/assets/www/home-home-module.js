(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/core/services/home.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/home.service.ts ***!
  \***********************************************/
/*! exports provided: HomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeService", function() { return HomeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _core_services_network_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../core/services/network.service */ "./src/app/core/services/network.service.ts");





var HomeService = /** @class */ (function () {
    function HomeService(http, networkService) {
        this.http = http;
        this.networkService = networkService;
    }
    HomeService.prototype.insertDeviceDetailsService = function (data) {
        if (!this.networkService.checkNetworkDisconnect())
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiEndpoint + 'usr/', data);
    };
    HomeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _core_services_network_service__WEBPACK_IMPORTED_MODULE_4__["NetworkService"]])
    ], HomeService);
    return HomeService;
}());



/***/ }),

/***/ "./src/app/layout/home/home.module.ts":
/*!********************************************!*\
  !*** ./src/app/layout/home/home.module.ts ***!
  \********************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/layout/home/home.page.ts");
/* harmony import */ var _core_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/components/components.module */ "./src/app/core/components/components.module.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");









var routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
    }
];
var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _core_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"]
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/layout/home/home.page.html":
/*!********************************************!*\
  !*** ./src/app/layout/home/home.page.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<ion-content>\n  \n    <div class=\"background-gif\">\n      <ion-img src=\"/assets/svg/shuttle_small.gif\" *ngIf=\"userType=='2'\"></ion-img>\n      <ion-img src=\"/assets/svg/shuttle.gif\" *ngIf=\"userType=='3'\"></ion-img>\n    </div>\n\n      \n  \n    \n    <div *ngIf=\"userType=='3'\">\n      <p class=\"ion-text-center cs-p\">Which ride do you want to takes?\n        <br>Please tap any one of them.\n      </p>\n      <div @slidelefttitle>\n\n      \n      <!-- <ion-card (click)=\"goSchoolPullCarPage()\"  margin no-border-radius class=\"_c_card-cl-bag _c_card-cl-border-cl _c_card-cl-b-r-n\">\n        <ion-card-content no-padding>\n          <ion-grid no-padding>\n            <ion-row>\n              <ion-col size=\"2\" class=\"_c_col_back\" text-center><ion-icon ios=\"ios-bus\" md=\"md-bus\"></ion-icon></ion-col>\n              <ion-col size=\"8\" style=\"margin-top:4px;padding-left: 10px;\">SCHOOL POOL CAR</ion-col>\n              <ion-col size=\"2\" text-center><ion-icon ios=\"ios-arrow-forward\" md=\"md-arrow-forward\"></ion-icon></ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-card-content>\n      </ion-card> -->\n      <ion-card margin no-border-radius class=\"_c_card-cl-bag _c_card-cl-border-cl _c_card-cl-b-r-n\" (click)=\"goToPage('office-pool-car-service')\" [disabled]=\"net_connection_check\">\n          <ion-card-content no-padding>\n            <ion-grid no-padding>\n              <ion-row>\n                <ion-col size=\"2\" class=\"_c_col_back\" text-center><ion-icon name=\"car\"></ion-icon></ion-col>\n                <ion-col size=\"8\" style=\"margin-top:4px;padding-left: 10px;\">OFFICE SHARING BUS SERVICE</ion-col>\n                <ion-col size=\"2\" text-center><ion-icon ios=\"ios-arrow-forward\" md=\"md-arrow-forward\"></ion-icon></ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-card-content>\n      </ion-card>\n      <ion-card margin no-border-radius class=\"_c_card-cl-bag _c_card-cl-border-cl _c_card-cl-b-r-n\" [disabled]=\"net_connection_check\">\n          <ion-card-content no-padding>\n            <ion-grid no-padding>\n              <ion-row>\n                <ion-col size=\"2\" class=\"_c_col_back\" text-center> <ion-icon ios=\"ios-car\" md=\"md-car\"></ion-icon></ion-col>\n                <ion-col size=\"8\" style=\"margin-top:4px;padding-left: 10px;\">INTERCITY POOL CAR SERVICE</ion-col>\n                <ion-col size=\"2\" text-center><ion-icon ios=\"ios-arrow-forward\" md=\"md-arrow-forward\"></ion-icon></ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-card-content>\n        </ion-card>\n        <ion-card (click)=\"goTourPage()\" margin no-border-radius class=\"_c_card-cl-bag _c_card-cl-border-cl _c_card-cl-b-r-n\" [disabled]=\"net_connection_check\">\n          <ion-card-content no-padding>\n            <ion-grid no-padding>\n              <ion-row>\n                <ion-col size=\"2\" class=\"_c_col_back\" text-center><ion-icon md=\"ios-airplane\"></ion-icon></ion-col>\n                <ion-col size=\"8\" style=\"margin-top:4px;padding-left: 10px;\">CAR RENTAL</ion-col>\n                <ion-col size=\"2\" text-center><ion-icon ios=\"ios-arrow-forward\" md=\"md-arrow-forward\"></ion-icon></ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-card-content>\n      </ion-card>\n        <!-- <ion-card (click)=\"goTourPage()\" margin no-border-radius class=\"_c_card-cl-bag _c_card-cl-border-cl _c_card-cl-b-r-n\">\n            <ion-card-content no-padding>\n              <ion-grid no-padding>\n                <ion-row>\n                  <ion-col size=\"2\" class=\"_c_col_back\" text-center><ion-icon md=\"ios-airplane\"></ion-icon></ion-col>\n                  <ion-col size=\"8\" style=\"margin-top:4px;padding-left: 10px;\">TOUR AND TRAVEL PACKAGE</ion-col>\n                  <ion-col size=\"2\" text-center><ion-icon ios=\"ios-arrow-forward\" md=\"md-arrow-forward\"></ion-icon></ion-col>\n                </ion-row>\n              </ion-grid>\n            </ion-card-content>\n        </ion-card> -->\n      </div>\n    </div>\n    <div *ngIf=\"userType=='2'\">\n      <ion-progress-bar type=\"indeterminate\" class=\"progress_bar\" *ngIf=\"progress_bar\"></ion-progress-bar>\n      <div class=\"inner_div\">\n        <ion-card class=\"card_class\">\n          <ion-grid style=\"margin:5px 10px 5px 10px;\">\n            <ion-row>\n              <ion-col>\n                <ion-text class=\"ion-text-center\"><p class=\"no_margin_p\">CHECK YOUR CURRENT RIDE DETAILS &nbsp;&nbsp; <span appClock></span></p></ion-text>\n                <hr/>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col  text-center>\n                <p class=\"no_margin_p\" style=\"font-size: 20px;\">\n                  {{car_details_d.car_type}} - <ion-text color=\"success\">{{car_details_d.car_no}}</ion-text>\n                </p>\n                <ion-row style=\"margin: 5px 0 5px 0;\" no-padding no-margin>\n                  <ion-col>\n                    <p style=\"margin: 0px 0 0px 0;\">\n                      <fa-icon [icon]=\"['fas','clock']\" size=\"1x\" class=\"rstar-icon\"></fa-icon>\n                      Start at : {{car_details_d.start_time}}</p>\n                  </ion-col>\n                  <ion-col>\n                    <p style=\"margin: 0px 0 0px 0;\" class=\"\">\n                      <fa-icon [icon]=\"['fas','clock']\" size=\"1x\" class=\"rstar-icon\"></fa-icon>\n                      Reach at : {{car_details_d.end_time}}</p>\n                  </ion-col>\n                </ion-row>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col  text-center>\n                <p class=\"no_margin_p\" style=\"font-size: 17px;\">\n                  <fa-icon [icon]=\"['fas','chair']\" size=\"1x\" class=\"rstar-icon\"></fa-icon>Total Seats - <ion-text color=\"tertiary\">{{car_details_d.total_seat}}</ion-text>\n                </p>\n                <ion-row style=\"margin: 5px 0 5px 0;\" no-padding>\n                  <ion-col>\n                    <p style=\"margin: 0px 0 0px 0;\">\n                      <fa-icon [icon]=\"['fas','chair']\" size=\"1x\" class=\"rstar-icon\"></fa-icon>\n                      Available : {{car_details_d.total_seat - car_details_d.seat_booked}}</p>\n                  </ion-col>\n                  <ion-col>\n                    <p style=\"margin: 0px 0 0px 0;\" class=\"\">\n                      <fa-icon [icon]=\"['fas','chair']\" size=\"1x\" class=\"rstar-icon\"></fa-icon>\n                      Booked : {{car_details_d.seat_booked}}</p>\n                  </ion-col>\n                </ion-row>\n              </ion-col>\n            </ion-row>\n            <ion-row style=\"margin: 0 0 10px 0px;\">\n              <ion-col>\n                <p class=\"no_margin_p\" style=\"\">\n                  <fa-icon [icon]=\"['fas','chair']\" size=\"1x\" class=\"rstar-icon\"></fa-icon>&nbsp;Booked Seats - <ion-text color=\"tertiary\" *ngFor=\"let i of car_details_d.booked_seats_list\">{{i}}</ion-text>\n                </p>\n              </ion-col>\n            </ion-row>\n            <ion-row style=\"\">\n              <ion-col text-center style=\"padding: 0px;\" size=\"1\">\n                <ion-img src=\"./assets/svg/logo.svg\" alt=\"redy rider\" style=\"width: 20px;\"></ion-img>\n                <ion-img src=\"./assets/svg/dot.svg\" alt=\".\" style=\"width: 3px;margin: 10px 0 10px 8px;\" ></ion-img>\n                <ion-img src=\"./assets/svg/logo.svg\" alt=\"redy rider\" style=\"width: 20px;\"></ion-img>\n              </ion-col>\n              <ion-col text-left style=\"padding: 0px;\" size=\"11\">\n                <p class=\"p_location\">{{car_details_d.start_location}}</p>\n                <p style=\"margin: 10px 0 10px 0;color:#02A1EB;\" (click)=\"viewRoute(car_details_d.route_id,car_details_d.start_point_id,car_details_d.end_point_id)\"><fa-icon [icon]=\"['fas','route']\" size=\"1x\" class=\"rstar-icon\"></fa-icon>&nbsp;View Route</p>\n                <p class=\"p_location\">{{car_details_d.end_location}}</p>\n              </ion-col>\n            </ion-row>\n            <ion-row text-center no-margin class=\"button-row\">\n              <ion-col style=\"border-right: 2px solid white;\" no-padding no-margin>\n                <ion-button expand=\"full\"  size=\"default\" type=\"button\"(click)=\"startRide(car_details_d.car_id)\" [disabled]=\"\">\n                  <fa-icon [icon]=\"['fas','play-circle']\" size=\"1x\" class=\"rstar-icon\"></fa-icon>&nbsp;\n                  Start Ride\n                </ion-button>\n              </ion-col>\n              <ion-col no-margin no-padding>\n                <ion-button expand=\"full\"  size=\"default\" type=\"button\" (click)=\"scanQrCode(car_details_d.car_id)\">\n                  <ion-icon ios=\"ios-qr-scanner\" md=\"md-qr-scanner\"></ion-icon>&nbsp;\n                  Scan QR\n                </ion-button>\n              </ion-col>\n              <!-- <ion-col no-margin no-padding>\n                <ion-button expand=\"full\"  size=\"default\" type=\"button\"   (click)=\"reachNotify()\">\n                  <fa-icon [icon]=\"['fas','bell']\" size=\"1x\" class=\"rstar-icon\"></fa-icon>&nbsp;\n                  Reached\n                </ion-button>\n              </ion-col> -->\n            </ion-row>\n          </ion-grid>\n        </ion-card>\n      </div>\n    </div>\n  </ion-content>\n  <!-- <ion-footer no-margin no-paading>\n    <ion-grid style=\"margin: 0px;padding: 0px;\">\n      \n      </ion-grid>\n    \n   \n  </ion-footer> -->"

/***/ }),

/***/ "./src/app/layout/home/home.page.scss":
/*!********************************************!*\
  !*** ./src/app/layout/home/home.page.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-icon {\n  font-size: 24px; }\n\n.cs-p {\n  font-size: 13px;\n  font-weight: 500; }\n\n.background-gif ion-img {\n  border-bottom: 3px solid #02A1EB; }\n\n._c_col_back {\n  background: #02A1EB; }\n\n._c_p_text_color {\n  color: #757575;\n  letter-spacing: 1px; }\n\n.inner_div {\n  margin-left: 0px;\n  margin-right: 0px; }\n\n.card_class {\n  margin-left: 0px;\n  margin-right: 0px;\n  margin-top: 0px;\n  border-radius: 0px; }\n\n.toolbar-class {\n  --background: transparent; }\n\nion-toolbar {\n  --min-height:25px; }\n\nion-badge {\n  margin-bottom: -5px;\n  margin-right: 3px;\n  border-radius: 10px;\n  padding: 3px 2px 3px 5px;\n  background: #0A5999; }\n\nion-icon {\n  font-size: 20px; }\n\n.rstar-icon {\n  font-size: 15px; }\n\n.no_margin_p {\n  margin: 0 10px 0px 0px !important; }\n\n.no_margin_p_travel_details {\n  margin: 0px 0px 0px 3px;\n  font-size: 12px; }\n\n.fare_details_class {\n  background: #B0B1AF;\n  color: white !important;\n  border-radius: 5px; }\n\nhr {\n  border-top: 1px solid #B0B1AF !important; }\n\nion-button {\n  padding: 0px 0px 10px 0px;\n  --background: linear-gradient(45deg, #0A5999 0%, #02A1EB 100%);\n  margin: 0px 0 0px 0px; }\n\n#tt {\n  font-size: 20px;\n  font-family: \"Raleway\"; }\n\n.eb_left {\n  float: left; }\n\n.clear {\n  clear: both; }\n\n.p_location {\n  margin: 0 0 0 0px; }\n\n.button-row {\n  margin-top: 10px;\n  text-align: center; }\n\nion-button {\n  padding: 0px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ByaXlhbS9Eb2N1bWVudHMvUmVkeVJpZGVyL3NyYy9hcHAvbGF5b3V0L2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFlLEVBQUE7O0FBRW5CO0VBQ0ksZUFBZTtFQUNmLGdCQUFnQixFQUFBOztBQUVwQjtFQUF3QixnQ0FBZ0MsRUFBQTs7QUFDdkQ7RUFBYSxtQkFBbUIsRUFBQTs7QUFDaEM7RUFBaUIsY0FBYztFQUFFLG1CQUFtQixFQUFBOztBQUVwRDtFQUNHLGdCQUFnQjtFQUNoQixpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBR2pCLGVBQWU7RUFDZixrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSx5QkFBYSxFQUFBOztBQUdqQjtFQUNJLGlCQUFhLEVBQUE7O0FBRWpCO0VBQ0ksbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsd0JBQXdCO0VBQ3hCLG1CQUFtQixFQUFBOztBQUV2QjtFQUNJLGVBQWUsRUFBQTs7QUFFbkI7RUFDSSxlQUFlLEVBQUE7O0FBRW5CO0VBQ0ksaUNBQWtDLEVBQUE7O0FBR3RDO0VBQ0ksdUJBQXVCO0VBQ3ZCLGVBQWUsRUFBQTs7QUFFbkI7RUFDSSxtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLHdDQUF3QyxFQUFBOztBQUU1QztFQUNJLHlCQUF5QjtFQUN6Qiw4REFBYTtFQUNiLHFCQUFxQixFQUFBOztBQUV6QjtFQUNJLGVBQWM7RUFDZCxzQkFBc0IsRUFBQTs7QUFHMUI7RUFBUyxXQUFVLEVBQUE7O0FBQ25CO0VBQVEsV0FBVyxFQUFBOztBQUNuQjtFQUVJLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSx1QkFBc0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMjRweDsgLy9QcmVmZXJyZWQgc2l6ZSBoZXJlXG59XG4uY3MtcHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5iYWNrZ3JvdW5kLWdpZiBpb24taW1ne2JvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMDJBMUVCO31cbiAuX2NfY29sX2JhY2t7YmFja2dyb3VuZDogIzAyQTFFQjt9XG4gLl9jX3BfdGV4dF9jb2xvcntjb2xvcjogIzc1NzU3NTsgbGV0dGVyLXNwYWNpbmc6IDFweDt9XG5cbiAuaW5uZXJfZGl2e1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG59XG4uY2FyZF9jbGFzc3tcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICAgIC8vYmFja2dyb3VuZC1jb2xvcjogIzBBNTk5OSAhaW1wb3J0YW50O1xuICAgIC8vY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG59XG4udG9vbGJhci1jbGFzc3tcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgLy8gLS1jb2xvcjogd2hpdGU7XG59XG5pb24tdG9vbGJhcntcbiAgICAtLW1pbi1oZWlnaHQ6MjVweDtcbn1cbmlvbi1iYWRnZXtcbiAgICBtYXJnaW4tYm90dG9tOiAtNXB4O1xuICAgIG1hcmdpbi1yaWdodDogM3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgcGFkZGluZzogM3B4IDJweCAzcHggNXB4O1xuICAgIGJhY2tncm91bmQ6ICMwQTU5OTk7XG59XG5pb24taWNvbntcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG4ucnN0YXItaWNvbntcbiAgICBmb250LXNpemU6IDE1cHg7XG59XG4ubm9fbWFyZ2luX3B7XG4gICAgbWFyZ2luIDogMCAxMHB4IDBweCAwcHggIWltcG9ydGFudDsgXG4gICAgLy8gY29sb3I6IHdoaXRlO1xufVxuLm5vX21hcmdpbl9wX3RyYXZlbF9kZXRhaWxze1xuICAgIG1hcmdpbjogMHB4IDBweCAwcHggM3B4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5mYXJlX2RldGFpbHNfY2xhc3N7XG4gICAgYmFja2dyb3VuZDogI0IwQjFBRjtcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5ocntcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI0IwQjFBRiAhaW1wb3J0YW50O1xufVxuaW9uLWJ1dHRvbntcbiAgICBwYWRkaW5nOiAwcHggMHB4IDEwcHggMHB4O1xuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMEE1OTk5IDAlLCAjMDJBMUVCIDEwMCUpO1xuICAgIG1hcmdpbjogMHB4IDAgMHB4IDBweDtcbn1cbiN0dCB7XG4gICAgZm9udC1zaXplOjIwcHg7XG4gICAgZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiO1xuICB9XG5cbi5lYl9sZWZ0e2Zsb2F0OmxlZnR9XG4uY2xlYXIge2NsZWFyOiBib3RoO31cbi5wX2xvY2F0aW9ue1xuICAgIC8vIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbWFyZ2luOiAwIDAgMCAwcHg7XG59XG4uYnV0dG9uLXJvd3tcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmlvbi1idXR0b257XG4gICAgcGFkZGluZzowcHggIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/layout/home/home.page.ts":
/*!******************************************!*\
  !*** ./src/app/layout/home/home.page.ts ***!
  \******************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _core_services_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/services/loading.service */ "./src/app/core/services/loading.service.ts");
/* harmony import */ var _core_services_toaster_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/services/toaster.service */ "./src/app/core/services/toaster.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_background_mode_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/background-mode/ngx */ "./node_modules/@ionic-native/background-mode/ngx/index.js");
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "./node_modules/@ionic-native/local-notifications/ngx/index.js");
/* harmony import */ var _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/firebase-x/ngx */ "./node_modules/@ionic-native/firebase-x/ngx/index.js");
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/device/ngx */ "./node_modules/@ionic-native/device/ngx/index.js");
/* harmony import */ var _core_services_home_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../core/services/home.service */ "./src/app/core/services/home.service.ts");
/* harmony import */ var _core_services_office_pool_car_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../core/services/office-pool-car.service */ "./src/app/core/services/office-pool-car.service.ts");
/* harmony import */ var _office_pool_car_service_route_stoppage_modal_route_stoppage_modal_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../office-pool-car-service/route-stoppage-modal/route-stoppage-modal.page */ "./src/app/layout/office-pool-car-service/route-stoppage-modal/route-stoppage-modal.page.ts");
/* harmony import */ var _core_services_modal_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../core/services/modal.service */ "./src/app/core/services/modal.service.ts");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");



















var HomePage = /** @class */ (function () {
    function HomePage(storage, router, loadingService, toasterService, device, backgroundMode, platform, localNotifications, fcm, firebaseX, homeService, home_page_event, officePoolCarService, modalService, barcodeScanner) {
        var _this = this;
        this.storage = storage;
        this.router = router;
        this.loadingService = loadingService;
        this.toasterService = toasterService;
        this.device = device;
        this.backgroundMode = backgroundMode;
        this.platform = platform;
        this.localNotifications = localNotifications;
        this.fcm = fcm;
        this.firebaseX = firebaseX;
        this.homeService = homeService;
        this.home_page_event = home_page_event;
        this.officePoolCarService = officePoolCarService;
        this.modalService = modalService;
        this.barcodeScanner = barcodeScanner;
        this.count = 0;
        this.notificationAlreadyReceived = false;
        this.background_gif = '';
        this.medie_url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].imageURL;
        this.visibleKey = false;
        this.net_connection_check = false;
        this.clock = '';
        this.stoppage_list = [];
        this.start_location = '';
        this.end_location = '';
        this.progress_bar = false;
        platform.ready().then(function () {
            /**
             * Firebase Token
             */
            if (_this.platform.is("cordova"))
                _this.firebaseX.getToken()
                    .then(function (token) { return _this.device_token = token; })
                    .catch(function (error) { return console.error('Error getting token', error); });
        });
        this.storage.get('USER_INFO').then(function (val) {
            //console.log('user_details_val_val', val)
            if (val) {
                _this.userId = val.id;
                _this.name = val.name;
                _this.userType = val.user_type_id;
                //console.log('userType', this.userType)
                if (val.user_type_id == 2)
                    _this.getTodayRides();
            }
        });
    }
    HomePage.prototype.getNotification = function () {
        var _this = this;
        this.fcm.onMessageReceived().subscribe(function (data) {
            //console.log('data', this.fcm.getBadgeNumber)
            //this.home_page_event.publish('notification_count', this.fcm.getBadgeNumber);
            if (data.wasTapped) {
                //console.log("Received in background");
                //console.log(JSON.parse(this.pushes))
                //this.home_page_event.publish('notification_count', this.fcm.getBadgeNumber);
                //this.app_component_event.publish('notification_count_e', 1);
                // this.storage.get('noti_count').then((val) => {
                //   if (val) {
                //     this.storage.set('noti_count', val + 1)
                //   }
                //   else {
                //     this.storage.set('noti_count', 1)
                //   }
                // });
                //this.storage.set('noti_count', 1)
                _this.router.navigate(['myaccount/notification', { pushes: JSON.stringify(data) }]);
            }
            else {
                //console.log("Received in foreground");
                _this.toasterService.showToast('Received in foreground', 3000);
                //this.home_page_event.publish('notification_count', this.fcm.getBadgeNumber);
            }
            ;
        });
    };
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.home_page_event.subscribe('check_net_connection', function (data) {
            if (data == 'connect')
                _this.net_connection_check = false;
            if (data == 'disconnect')
                _this.net_connection_check = true;
        });
        //console.log('this.disabled_check', this.disabled_check);
        //this.loadingService.present();
        this.title = this.router.url;
        if (this.platform.is("cordova"))
            setTimeout(function () {
                /**
                 * Device Details
                 */
                var device_details = {
                    "uuid": _this.device.uuid,
                    "model": _this.device.model,
                    "platform": _this.device.platform,
                    "serial": _this.device.serial,
                    "version": _this.device.version,
                    "manufacturer": _this.device.manufacturer
                };
                _this.request_data = {
                    'userid': _this.userId,
                    'device_details': JSON.stringify(device_details),
                    'device_uuid': _this.device.uuid,
                    'device_token': _this.device_token,
                    'type': 'user_device'
                };
                _this.insertDeviceDetails(_this.request_data);
            }, 3000);
    };
    HomePage.prototype.insertDeviceDetails = function (request_data) {
        //console.log('request_data111', request_data)
        this.homeService.insertDeviceDetailsService(request_data).subscribe(function (res) {
            //console.log('res', res)
            if (res.status.toLowerCase() == 'success') {
            }
        }, function (error) {
            //console.log("error::::" + error.error);
        });
    };
    HomePage.prototype.getTodayRides = function () {
        var _this = this;
        //console.log('userId', this.userId)
        this.progress_bar = true;
        var request_data = { "type": "driver", "user_id": this.userId };
        this.officePoolCarService.todayRidesService(request_data).subscribe(function (res) {
            //console.log('res', res)
            _this.car_details_d = res.result[0];
            _this.storage.set('car_details', res.result);
            _this.progress_bar = false;
        }, function (error) {
            //console.log("error::::" + error.error);
            _this.progress_bar = false;
            _this.toasterService.showToast(error.error.msg);
        });
    };
    HomePage.prototype.goTourPage = function () {
        //this.router.navigateByUrl('/tour-travels');
    };
    HomePage.prototype.goSchoolPullCarPage = function () {
        this.router.navigateByUrl('/school-pool-car');
    };
    HomePage.prototype.goToPage = function (name) {
        this.router.navigateByUrl('/' + name);
    };
    HomePage.prototype.viewRoute = function (route_id, start_point, end_point) {
        var data = { 'route_id': route_id, 'from_which_page': 'bus-route-details-page', 'start_point': start_point, 'end_point': end_point };
        this.modalService.openModal(_office_pool_car_service_route_stoppage_modal_route_stoppage_modal_page__WEBPACK_IMPORTED_MODULE_14__["RouteStoppageModalPage"], data, 'stoppage_modal_css');
    };
    HomePage.prototype.startRide = function (car_id) {
        this.router.navigateByUrl('myaccount/location-tracking/' + car_id + '/' + this.userId);
    };
    HomePage.prototype.scanQrCode = function (car_id) {
        var _this = this;
        if (car_id === void 0) { car_id = ''; }
        this.barcodeScanner.scan().then(function (barcodeData) {
            //console.log('Barcode data', barcodeData);
            _this.progress_bar = true;
            var request_data = { "type": "qr_code_val", "car_id": car_id, 'qr_code': barcodeData.text };
            _this.officePoolCarService.todayRidesService(request_data).subscribe(function (res) {
                //console.log('res', res)
                _this.toasterService.showToast(res.result, 2000);
                _this.progress_bar = false;
            }, function (error) {
                //console.log("error::::" + error.error);
                _this.progress_bar = false;
                _this.toasterService.showToast(error.error.msg, 2000);
            });
            // this.toasterService.showToast('Your seats has been confirmed, have a safe journey', 6000)
            // this.toasterService.showToast('Qr code does not match! please contact to Redy Rider Help Line', 6000)
        }).catch(function (err) {
            console.log('Error', err);
        });
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/layout/home/home.page.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["trigger"])('fadein', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["style"])({ opacity: 0 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["transition"])('void => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["style"])({ opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["animate"])('900ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["style"])({ opacity: 1 }))
                    ])
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["trigger"])('slidelefttitle', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["transition"])('void => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["style"])({ opacity: 0, transform: 'translateX(150%)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["animate"])('900ms 300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["style"])({ transform: 'translateX(0%)', opacity: 1 }))
                    ])
                ]),
            ],
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/layout/home/home.page.scss"), __webpack_require__(/*! ../layout.page.scss */ "./src/app/layout/layout.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _core_services_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"],
            _core_services_toaster_service__WEBPACK_IMPORTED_MODULE_6__["ToasterService"],
            _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_11__["Device"],
            _ionic_native_background_mode_ngx__WEBPACK_IMPORTED_MODULE_8__["BackgroundMode"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"],
            _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_9__["LocalNotifications"],
            _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_10__["FirebaseX"],
            _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_10__["FirebaseX"],
            _core_services_home_service__WEBPACK_IMPORTED_MODULE_12__["HomeService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Events"],
            _core_services_office_pool_car_service__WEBPACK_IMPORTED_MODULE_13__["OfficePoolCarService"],
            _core_services_modal_service__WEBPACK_IMPORTED_MODULE_15__["ModalService"],
            _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_16__["BarcodeScanner"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map