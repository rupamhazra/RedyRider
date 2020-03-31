(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["myaccount-myaccount-module"],{

/***/ "./src/app/layout/myaccount/myaccount-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/myaccount/myaccount-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: MyaccountRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyaccountRoutingModule", function() { return MyaccountRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
    {
        path: 'location-tracking/:car_id/:driver_id',
        loadChildren: './location-tracking/location-tracking.module#LocationTrackingPageModule'
    },
    { path: 'wallet', loadChildren: './wallet/wallet.module#WalletPageModule' },
    { path: 'booking-history', loadChildren: './booking-history/booking-history.module#BookingHistoryPageModule' },
    { path: 'booking-history-details/:id', loadChildren: './booking-history-details/booking-history-details.module#BookingHistoryDetailsPageModule' },
    { path: 'today-rides', loadChildren: './today-rides/today-rides.module#TodayRidesPageModule' },
    { path: 'myaccount-common-page/:which-page', loadChildren: './myaccount-common-page/myaccount-common-page.module#MyaccountCommonPagePageModule' },
];
var MyaccountRoutingModule = /** @class */ (function () {
    function MyaccountRoutingModule() {
    }
    MyaccountRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], MyaccountRoutingModule);
    return MyaccountRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/myaccount/myaccount.module.ts":
/*!******************************************************!*\
  !*** ./src/app/layout/myaccount/myaccount.module.ts ***!
  \******************************************************/
/*! exports provided: MyaccountPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyaccountPageModule", function() { return MyaccountPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _myaccount_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./myaccount.page */ "./src/app/layout/myaccount/myaccount.page.ts");
/* harmony import */ var _core_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/components/components.module */ "./src/app/core/components/components.module.ts");
/* harmony import */ var _myaccount_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./myaccount-routing.module */ "./src/app/layout/myaccount/myaccount-routing.module.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");










var routes = [
    {
        path: '',
        component: _myaccount_page__WEBPACK_IMPORTED_MODULE_6__["MyaccountPage"]
    }
];
var MyaccountPageModule = /** @class */ (function () {
    function MyaccountPageModule() {
    }
    MyaccountPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _core_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _myaccount_routing_module__WEBPACK_IMPORTED_MODULE_8__["MyaccountRoutingModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeModule"]
            ],
            declarations: [_myaccount_page__WEBPACK_IMPORTED_MODULE_6__["MyaccountPage"]]
        })
    ], MyaccountPageModule);
    return MyaccountPageModule;
}());



/***/ }),

/***/ "./src/app/layout/myaccount/myaccount.page.html":
/*!******************************************************!*\
  !*** ./src/app/layout/myaccount/myaccount.page.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<ion-progress-bar type=\"indeterminate\" class=\"progress_bar\" *ngIf=\"progress_bar\"></ion-progress-bar>\n<ion-content>\n  <div class=\"top_div\">\n    <ion-thumbnail class=\"_c_top_image\">\n      <img [(src)] = \"profile_img\" alt=\"\" style=\"opacity: 0.8;\" /> \n      <ion-icon ios=\"ios-camera\" md=\"md-camera\" (click)=\"presentActionSheet()\" style=\"    position: absolute;\n      top: 55px;\n      right: 28px;\n      font-size: 25px;\n  \"></ion-icon>\n    </ion-thumbnail>\n    \n    <h4>{{user_details.name}}</h4>\n    <p style=\"font-size: 13px;margin: 15px 0 4px 0;\">{{user_details.mobile}}</p>\n    <ion-toolbar class=\"toolbar-class-top\">\n      <p style=\"font-size: 13px;margin: 0 0 0 0;\">{{user_details.email}}</p>\n      <fa-icon [icon]=\"['fas','edit']\"  class=\"fa-icon-input\" (click)=\"openModal('myaccount-personal')\" slot=\"end\"></fa-icon>\n    </ion-toolbar>\n  </div>\n  <div class=\"inner_div\">\n    <ion-card class=\"card_class\">\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-toolbar class=\"toolbar-class\">\n              <ion-text class=\"ion-text-center\"><p><fa-icon [icon]=\"['fas','address-card']\" style=\"font-size: 15px;opacity: 0.4;margin-bottom: 15px;\"></fa-icon>&nbsp;ADDRESS</p></ion-text>\n              <hr class=\"hr-border\">\n              <fa-icon [icon]=\"['fas','edit']\" style=\"font-size: 17px;opacity: 0.4;margin-bottom: 15px;\" (click)=\"openModal1('myaccount-address')\" slot=\"end\"></fa-icon>\n            </ion-toolbar>\n            \n            <ion-toolbar class=\"toolbar-class\">\n              <ion-title>Address : {{address_details.address}} </ion-title>\n            </ion-toolbar>\n            <ion-toolbar class=\"toolbar-class\">\n              <ion-title>Country : {{address_details.country_name}}</ion-title>\n            </ion-toolbar>\n            <ion-toolbar class=\"toolbar-class\">\n              <ion-title>City : {{address_details.city_name}}</ion-title>\n            </ion-toolbar>\n            <ion-toolbar class=\"toolbar-class\">\n              <ion-title>State : {{address_details.state_name}}</ion-title>\n            </ion-toolbar>\n            <ion-toolbar class=\"toolbar-class\">\n              <ion-title>Pincocde : {{address_details.pin_code}}</ion-title>\n            </ion-toolbar>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card>\n    <ion-card class=\"card_class\">\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-toolbar class=\"toolbar-class\">\n              <ion-text class=\"ion-text-center\"><p style=\"margin: 0 0 0 0;\"><fa-icon [icon]=\"['fas','key']\" style=\"font-size: 15px;opacity: 0.4;\"></fa-icon>&nbsp;CHANGE PASSWORD</p></ion-text>\n              <fa-icon [icon]=\"['fas','edit']\" style=\"font-size: 17px;opacity: 0.4;\" (click)=\"changePassword()\" slot=\"end\"></fa-icon>\n            </ion-toolbar>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card>\n    <ion-card class=\"card_class\">\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-toolbar class=\"toolbar-class\" (click)=\"logoutUser()\">\n              <ion-text class=\"ion-text-center\"><p style=\"margin: 0 0 0 0;color:red;\"><fa-icon [icon]=\"['fas','sign-out-alt']\" style=\"font-size: 15px;opacity: 0.4;\"></fa-icon>&nbsp;LOGOUT</p></ion-text>\n              <!-- <fa-icon [icon]=\"['fas','edit']\" style=\"font-size: 17px;opacity: 0.4;\" (click)=\"logoutUser()\" slot=\"end\"></fa-icon> -->\n            </ion-toolbar>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card>\n\n    <!-- <ion-card class=\"card_class\">\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-toolbar class=\"toolbar-class\">\n              <ion-text class=\"ion-text-center\"><p><fa-icon [icon]=\"['fas','address-card']\" style=\"font-size: 15px;opacity: 0.4;margin-bottom: 15px;\"></fa-icon>&nbsp;DEVICE DETAILS</p></ion-text>\n              <hr class=\"hr-border\">\n            </ion-toolbar>\n            \n            <ion-toolbar class=\"toolbar-class\">\n              <ion-title>Model : Redmi Note 5 </ion-title>\n            </ion-toolbar>\n            <ion-toolbar class=\"toolbar-class\">\n              <ion-title>UUID : uuid001</ion-title>\n            </ion-toolbar>\n            <ion-toolbar class=\"toolbar-class\">\n              <ion-title>Version : 9</ion-title>\n            </ion-toolbar>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card> -->\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/layout/myaccount/myaccount.page.scss":
/*!******************************************************!*\
  !*** ./src/app/layout/myaccount/myaccount.page.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "._c_top_image {\n  --size: 90px;\n  --border-radius:50%!important;\n  margin-left: auto;\n  margin-right: auto;\n  border: 2px solid white;\n  position: relative; }\n\n.top_div {\n  background: linear-gradient(45deg, #0A5999 0%, #02A1EB 100%);\n  color: #fff;\n  padding: 25px;\n  text-align: center; }\n\n.f-icons {\n  margin-top: 70px;\n  margin-left: 15px; }\n\n.sch-pool-car {\n  margin: 70px 15px 35px;\n  background: #ffffff; }\n\n.select-tour-sector {\n  padding: 15px 0; }\n\n.card_class {\n  margin-left: 0px;\n  margin-right: 0px;\n  background-color: #ffffff; }\n\n.toolbar-class-top {\n  --background: transparent;\n  --color:white; }\n\n.toolbar-class {\n  --background: transparent; }\n\nion-title {\n  font-size: 15px;\n  font-weight: normal; }\n\nion-toolbar {\n  --min-height:30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ByaXlhbS9Eb2N1bWVudHMvUmVkeVJpZGVyL3NyYy9hcHAvbGF5b3V0L215YWNjb3VudC9teWFjY291bnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBTztFQUNQLDZCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSw0REFBNEQ7RUFDNUQsV0FBVTtFQUNWLGFBQWE7RUFDYixrQkFBa0IsRUFBQTs7QUFFdEI7RUFBUyxnQkFBZ0I7RUFBQyxpQkFBaUIsRUFBQTs7QUFDM0M7RUFBYyxzQkFBc0I7RUFBQyxtQkFBbUIsRUFBQTs7QUFDeEQ7RUFBb0IsZUFBZSxFQUFBOztBQUNuQztFQUNJLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIseUJBQXlCLEVBQUE7O0FBRTdCO0VBQ0kseUJBQWE7RUFDYixhQUFRLEVBQUE7O0FBRVo7RUFDSSx5QkFBYSxFQUFBOztBQUdqQjtFQUNJLGVBQWU7RUFDZixtQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSxpQkFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L215YWNjb3VudC9teWFjY291bnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLl9jX3RvcF9pbWFnZXtcbiAgICAtLXNpemU6IDkwcHg7XG4gICAgLS1ib3JkZXItcmFkaXVzOjUwJSFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgIFxufVxuLnRvcF9kaXZ7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMEE1OTk5IDAlLCAjMDJBMUVCIDEwMCUpO1xuICAgIGNvbG9yOiNmZmY7XG4gICAgcGFkZGluZzogMjVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZi1pY29uc3ttYXJnaW4tdG9wOiA3MHB4O21hcmdpbi1sZWZ0OiAxNXB4O31cbi5zY2gtcG9vbC1jYXJ7bWFyZ2luOiA3MHB4IDE1cHggMzVweDtiYWNrZ3JvdW5kOiAjZmZmZmZmO31cbi5zZWxlY3QtdG91ci1zZWN0b3J7cGFkZGluZzogMTVweCAwO31cbi5jYXJkX2NsYXNze1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cbi50b29sYmFyLWNsYXNzLXRvcHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIC0tY29sb3I6d2hpdGU7XG59XG4udG9vbGJhci1jbGFzc3tcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIFxufVxuaW9uLXRpdGxle1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuaW9uLXRvb2xiYXJ7XG4gICAgLS1taW4taGVpZ2h0OjMwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/layout/myaccount/myaccount.page.ts":
/*!****************************************************!*\
  !*** ./src/app/layout/myaccount/myaccount.page.ts ***!
  \****************************************************/
/*! exports provided: MyaccountPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyaccountPage", function() { return MyaccountPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/modal.service */ "./src/app/core/services/modal.service.ts");
/* harmony import */ var _core_services_toaster_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/toaster.service */ "./src/app/core/services/toaster.service.ts");
/* harmony import */ var _core_services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/services/loading.service */ "./src/app/core/services/loading.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _office_pool_car_service_route_stoppage_modal_route_stoppage_modal_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../office-pool-car-service/route-stoppage-modal/route-stoppage-modal.page */ "./src/app/layout/office-pool-car-service/route-stoppage-modal/route-stoppage-modal.page.ts");
/* harmony import */ var _core_services_login_register_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/services/login-register.service */ "./src/app/core/services/login-register.service.ts");
/* harmony import */ var _core_services_office_pool_car_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/services/office-pool-car.service */ "./src/app/core/services/office-pool-car.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/File/ngx */ "./node_modules/@ionic-native/File/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "./node_modules/@ionic-native/file-path/ngx/index.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _core_services_alert_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../core/services/alert.service */ "./src/app/core/services/alert.service.ts");

















var MyaccountPage = /** @class */ (function () {
    function MyaccountPage(modalService, storage, router, loginRegisterService, toasterService, loadingService, officePoolCarService, myaccount_event, actionSheetCtrl, camera, transfer, platform, filePath, file, alertService, my_account_event) {
        this.modalService = modalService;
        this.storage = storage;
        this.router = router;
        this.loginRegisterService = loginRegisterService;
        this.toasterService = toasterService;
        this.loadingService = loadingService;
        this.officePoolCarService = officePoolCarService;
        this.myaccount_event = myaccount_event;
        this.actionSheetCtrl = actionSheetCtrl;
        this.camera = camera;
        this.transfer = transfer;
        this.platform = platform;
        this.filePath = filePath;
        this.file = file;
        this.alertService = alertService;
        this.my_account_event = my_account_event;
        this.name = '';
        this.user_details = {};
        this.device_details = [];
        this.address_details = {};
        this.progress_bar = true;
        //this.modalService.closeModal();
        //this.modalService.openModal(LoginPage,null);
    }
    MyaccountPage.prototype.ngOnInit = function () {
        var _this = this;
        this.myaccount_event.subscribe('profile_update', function (data) {
            console.log('data', data);
            if (data.which == 'personal') {
                _this.getData('myaccount-personal', data.user_id);
            }
            else {
                _this.getData('myaccount-address', data.user_id);
            }
        });
        this.storage.get('USER_INFO').then(function (val) {
            if (val) {
                _this.userId = val.id;
                _this.name = val.name;
                _this.contact = val.mobile;
                _this.device_details = val.user_device;
                _this.profile_img = val.photo;
                _this.getData('myaccount-address', val.id);
                _this.getData('myaccount-personal', val.id);
                _this.visible_myaccount_details_div = true;
            }
            else {
                _this.visible_myaccount_details_div = false;
            }
        });
    };
    MyaccountPage.prototype.openModal = function (which) {
        var data = { 'from_which_page': which, 'userId': this.userId };
        this.modalService.openModal(_office_pool_car_service_route_stoppage_modal_route_stoppage_modal_page__WEBPACK_IMPORTED_MODULE_7__["RouteStoppageModalPage"], data, 'stoppage_modal_css');
    };
    MyaccountPage.prototype.openModal1 = function (which) {
        console.log('which', which);
        var data = { 'from_which_page': which, 'userId': this.userId };
        this.modalService.openModal(_office_pool_car_service_route_stoppage_modal_route_stoppage_modal_page__WEBPACK_IMPORTED_MODULE_7__["RouteStoppageModalPage"], data, 'stoppage_modal_css');
    };
    MyaccountPage.prototype.changePassword = function (resendOtp) {
        var _this = this;
        if (resendOtp === void 0) { resendOtp = false; }
        this.loadingService.present();
        var request_data = { 'type': 'log_by_otp', 'contact': this.contact };
        this.loginRegisterService.loginService(request_data).subscribe(function (res) {
            _this.loadingService.dismiss();
            _this.router.navigateByUrl('/forgot-password');
        }, function (error) {
            //console.log("error::::" + error.error.msg);
            _this.loadingService.dismiss();
            _this.toasterService.showToast(error.error.msg, 2000);
        });
    };
    MyaccountPage.prototype.getData = function (which, user_id) {
        var _this = this;
        //this.loadingService.present();
        if (which == 'myaccount-personal') {
            this.progress_bar = true;
            var request_data = { "user_id": user_id };
            this.officePoolCarService.personalService(request_data).subscribe(function (res) {
                //console.log("res:::" + res.msg);
                _this.user_details = res.result;
                _this.progress_bar = false;
            }, function (error) {
                //console.log("error::::" + error.error.msg);
                _this.progress_bar = false;
                _this.toasterService.showToast(error.error.msg, 2000);
            });
        }
        else {
            //this.loadingService.present();
            var request_data = { "user_id": user_id };
            this.officePoolCarService.addressService(request_data).subscribe(function (res) {
                //console.log("res:::" + res.msg);
                _this.address_details = res.result;
                _this.progress_bar = false;
            }, function (error) {
                //console.log("error::::" + error.error.msg);
                _this.progress_bar = false;
                _this.toasterService.showToast(error.error.msg, 2000);
            });
        }
    };
    MyaccountPage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            header: 'Select Image Source',
            buttons: [
                {
                    text: 'Load from Library',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                },
                {
                    text: 'Use Camera',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.CAMERA);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        }).then(function (actionsheet) {
            actionsheet.present();
        });
    };
    MyaccountPage.prototype.takePicture = function (sourceType) {
        var _this = this;
        var options = {
            quality: 60,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(function (imagePath) {
            if (_this.platform.is('android') && sourceType === _this.camera.PictureSourceType.PHOTOLIBRARY) {
                _this.filePath.resolveNativePath(imagePath)
                    .then(function (filePath) {
                    var correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                    var currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                    _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
                });
            }
            else {
                var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
                var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
                _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
            }
        });
    };
    // Copy the image to a local folder
    MyaccountPage.prototype.copyFileToLocalDir = function (namePath, currentName, newFileName) {
        var _this = this;
        this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(function (success) {
            _this.lastImage = newFileName;
            _this.uploadImage();
        }, function (error) {
            _this.toasterService.showToast('Error while storing file.');
        });
    };
    // Create a new name for the image
    MyaccountPage.prototype.createFileName = function () {
        var d = new Date(), n = d.getTime(), newFileName = n + ".png";
        return newFileName;
    };
    MyaccountPage.prototype.uploadImage = function () {
        var _this = this;
        //let filePath = this.file.dataDirectory + this.lastImage;
        var targetPath = this.pathForImage(this.lastImage);
        var filename = this.lastImage;
        console.log('filename', filename);
        var today = new Date();
        this.currentDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var options = {
            fileKey: "profile_pic",
            fileName: filename,
            chunkedMode: false,
            // mimeType: "multipart/form-data",
            params: { 'fileName': filename, 'upload_date': this.currentDate, 'user_id': this.userId, 'type': "update_photo", },
        };
        var fileTransfer = this.transfer.create();
        this.loadingService.present();
        // Use the FileTransfer to upload the image
        //console.log('url1111111111111111', environment.apiEndpoint + 'usr/')
        //console.log('targetPath', targetPath)
        fileTransfer.upload(targetPath, _environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].apiEndpoint + 'usr/', options).then(function (data) {
            _this.loadingService.dismiss();
            _this.toasterService.showToast('Image succesful uploaded.', 3000);
            //console.log('data', data)
            var userUpdateImg = JSON.parse(data.response);
            //console.log('userUpdateImg', userUpdateImg)
            _this.profile_img = userUpdateImg.result;
            _this.storage.get('USER_INFO').then(function (val) {
                var val1 = val;
                val1['photo'] = userUpdateImg.result;
                _this.storage.set('USER_INFO', val1);
                _this.my_account_event.publish('update_profile_image', '1');
            });
            //this.getImgList();
        }, function (err) {
            _this.loadingService.dismiss();
            _this.toasterService.showToast('Error while uploading file.', 3000);
        });
    };
    MyaccountPage.prototype.pathForImage = function (img) {
        if (img === null) {
            return '';
        }
        else {
            return cordova.file.dataDirectory + img;
        }
    };
    MyaccountPage.prototype.logoutUser = function () {
        this.alertService.presentAlertConfirm("Are you sure you want to end this session?", "logout");
    };
    MyaccountPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-myaccount',
            template: __webpack_require__(/*! ./myaccount.page.html */ "./src/app/layout/myaccount/myaccount.page.html"),
            styles: [__webpack_require__(/*! ./myaccount.page.scss */ "./src/app/layout/myaccount/myaccount.page.scss"), __webpack_require__(/*! ../layout.page.scss */ "./src/app/layout/layout.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _core_services_login_register_service__WEBPACK_IMPORTED_MODULE_8__["LoginRegisterService"],
            _core_services_toaster_service__WEBPACK_IMPORTED_MODULE_3__["ToasterService"],
            _core_services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"],
            _core_services_office_pool_car_service__WEBPACK_IMPORTED_MODULE_9__["OfficePoolCarService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["Events"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ActionSheetController"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_14__["Camera"],
            _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_12__["FileTransfer"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["Platform"],
            _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_13__["FilePath"],
            _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_11__["File"],
            _core_services_alert_service__WEBPACK_IMPORTED_MODULE_16__["AlertService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["Events"]])
    ], MyaccountPage);
    return MyaccountPage;
}());



/***/ })

}]);
//# sourceMappingURL=myaccount-myaccount-module.js.map