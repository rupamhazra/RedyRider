(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["myaccount-common-page-myaccount-common-page-module"],{

/***/ "./src/app/layout/myaccount/myaccount-common-page/myaccount-common-page.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/layout/myaccount/myaccount-common-page/myaccount-common-page.module.ts ***!
  \****************************************************************************************/
/*! exports provided: MyaccountCommonPagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyaccountCommonPagePageModule", function() { return MyaccountCommonPagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _myaccount_common_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./myaccount-common-page.page */ "./src/app/layout/myaccount/myaccount-common-page/myaccount-common-page.page.ts");
/* harmony import */ var _core_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/components/components.module */ "./src/app/core/components/components.module.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");









var routes = [
    {
        path: '',
        component: _myaccount_common_page_page__WEBPACK_IMPORTED_MODULE_6__["MyaccountCommonPagePage"]
    }
];
var MyaccountCommonPagePageModule = /** @class */ (function () {
    function MyaccountCommonPagePageModule() {
    }
    MyaccountCommonPagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _core_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"]
            ],
            declarations: [_myaccount_common_page_page__WEBPACK_IMPORTED_MODULE_6__["MyaccountCommonPagePage"]]
        })
    ], MyaccountCommonPagePageModule);
    return MyaccountCommonPagePageModule;
}());



/***/ }),

/***/ "./src/app/layout/myaccount/myaccount-common-page/myaccount-common-page.page.html":
/*!****************************************************************************************!*\
  !*** ./src/app/layout/myaccount/myaccount-common-page/myaccount-common-page.page.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<ion-progress-bar type=\"indeterminate\"class=\"progress_bar\" *ngIf=\"progress_bar\"></ion-progress-bar>\n<ion-content>\n  <div *ngIf=\"which_page == 'refer-earn'\">\n    <div class=\"inner_div\">\n      <div>\n          <ion-img src=\"/assets/svg/Gift2.svg\"></ion-img>\n      </div>\n      <div style=\"text-align: center;\">\n          <ion-text><h2 style=\"margin: 0 0 10px 0px;\">Refer & Earn upto Rs 200</h2></ion-text>\n          <p class=\"no_margin_p\">Get Rs 50 when your friend completes his/her first trip with us.</p>\n          <p style=\"margin: 15px 0 5px 0;\">Your Code</p>\n          <div class=\"div_class\">\n              <ion-text text-center>{{refer_code}} </ion-text>\n              <fa-icon [icon]=\"['far','clone']\" size=\"1x\" class=\"rstar-icon\" (click)=\"copyText(refer_code)\"></fa-icon>\n          </div>\n          <p style=\"margin: 25px 0 5px 0;\">\n              Generated Refer link\n          </p>\n          <div class=\"div_class\" style=\"margin-bottom: 30px;\">\n              <p color=\"primary\" class=\"div_link_class\"> \n                  {{generate_link}}\n              </p>\n              <fa-icon [icon]=\"['far','clone']\" size=\"1x\" class=\"link-icon\" (click)=\"copyText(generate_link)\"></fa-icon>\n          </div>\n          <ion-toolbar style=\"border: 1px dashed;--background: white;--min-height:42px;\">\n              <fa-icon [icon]=\"['fab','whatsapp-square']\" size=\"1x\" class=\"social-whatsapp-icon\" (click)=\"shareVia('whatsapp')\"></fa-icon>\n              <svg version=\"1.1\" id=\"Layer_1\" xmlns:x=\"&ns_extend;\" xmlns:i=\"&ns_ai;\" xmlns:graph=\"&ns_graphs;\"xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:a=\"http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/\" x=\"0px\" y=\"0px\" width=\"30px\" height=\"30px\" viewBox=\"0 0 288 288\" enable-background=\"new 0 0 288 288\" xml:space=\"preserve\" class=\"social-icon\" (click)=\"shareVia('facebook')\">\n                  <g>\n                      <path fill=\"#314A9F\" d=\"M287.111,256.911c0,16.196-13.132,29.327-29.327,29.327H31.898c-16.196,0-29.328-13.131-29.328-29.327\n                          V31.025c0-16.199,13.131-29.329,29.328-29.329h225.886c16.195,0,29.327,13.13,29.327,29.329V256.911z\"/>\n                      <path fill=\"#FFFFFF\" d=\"M242.967,40.302H204.68c0,0-36.053,3.716-38.282,37.913v32.709h-21.557v38.288h21.557v105.186h43.115\n                          V149.212h28.994l4.46-37.545h-32.712V87.134c0,0,2.975-8.919,10.411-8.919l22.301,0.742\"/>\n                  </g>\n              </svg>\n              <svg version=\"1.1\" id=\"Layer_1\" xmlns:x=\"&ns_extend;\" xmlns:i=\"&ns_ai;\" xmlns:graph=\"&ns_graphs;\"xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:a=\"http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/\" x=\"0px\" y=\"0px\" width=\"30px\" height=\"30px\" viewBox=\"0 0 288 288\" enable-background=\"new 0 0 288 288\" xml:space=\"preserve\" class=\"social-icon\" (click)=\"shareVia('gmail')\">\n                  <g>\n                      <path fill=\"#EDEDED\" d=\"M286.334,257.06c0,16.141-13.087,29.228-29.228,29.228H31.987c-16.141,0-29.228-13.087-29.228-29.228\n                          V31.941c0-16.143,13.087-29.229,29.228-29.229h225.12c16.141,0,29.228,13.086,29.228,29.229V257.06z\"/>\n                      <path fill=\"#D42E2A\" d=\"M273.376,50.707v201.372c0,0-0.999,12.839-11.37,12.164l-21.364,0.026V67.601L273.376,50.707z\"/>\n                      <path fill=\"#EF4337\" d=\"M15.717,50.707v201.372c0,0,1.062,12.839,12.139,12.164l22.803,0.026V67.601L15.717,50.707z\"/>\n                      <polygon fill=\"#D42E2A\" points=\"15.857,54.767 15.857,83.352 50.101,87.204 40.431,58.821 \t\"/>\n                      <path fill=\"#EF4337\" d=\"M35.83,25.765l108.787,97.308l107.952-97.308c0,0,15.627-4.731,20.808,11.487v17.569l-128.76,116.904\n                          L15.857,57.525V37.929C15.857,37.929,19.795,20.358,35.83,25.765z\"/>\n                  </g>\n              </svg>\n              <fa-icon [icon]=\"['fas','ellipsis-v']\" size=\"1x\" class=\"more-icon\" (click)='referFriends()'></fa-icon>\n          </ion-toolbar>\n          <ion-toolbar style=\"top:15px;\">\n              <p slot=\"start\" (click)=\"showHowToEarn()\">How To Earn ?</p>\n              <p slot=\"end\" (click)=\"showTerms()\">* Terms & Conditions</p>\n          </ion-toolbar>\n      </div>\n  </div>\n  </div>\n  <div *ngIf=\"which_page == 'notifications'\" style=\"background: white;\">\n    <div class=\"inner_div\">\n      <p *ngIf=\"blank_div\" style=\"text-align: center;\">\n          No Notification Found\n      </p>\n      <ion-grid no-marign no-padding *ngIf=\"!blank_div\">\n          <ion-row *ngFor=\"let item of dataList\">\n              <ion-col>\n                  <p style=\"margin-top: 10px;\">{{item.notice_title}}</p>\n                  <p *ngFor=\"let i of item.notice_txt\">{{i}}</p>\n                  <p style=\"opacity: 0.5;font-size: 11px;\">{{item.notice_date}}</p>\n              </ion-col>\n          </ion-row>\n      </ion-grid>\n  </div> \n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/layout/myaccount/myaccount-common-page/myaccount-common-page.page.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/layout/myaccount/myaccount-common-page/myaccount-common-page.page.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".div_class {\n  text-align: center; }\n\n.rstar-icon {\n  font-size: 25px;\n  top: 2px;\n  position: relative;\n  margin-left: 10px;\n  opacity: 0.3; }\n\n.div_link_class {\n  white-space: nowrap;\n  width: 270px;\n  text-overflow: clip;\n  overflow: hidden;\n  padding-left: 13px;\n  float: left; }\n\n.link-icon {\n  position: relative;\n  top: 8px;\n  font-size: 29px;\n  opacity: 0.3; }\n\n.social-whatsapp-icon {\n  font-size: 35px;\n  color: limegreen !important;\n  margin-right: 15px; }\n\n.more-icon {\n  font-size: 20px;\n  position: relative;\n  bottom: 5px; }\n\n.social-icon {\n  margin-left: 15px;\n  margin-right: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ByaXlhbS9Eb2N1bWVudHMvUmVkeVJpZGVyL3NyYy9hcHAvbGF5b3V0L215YWNjb3VudC9teWFjY291bnQtY29tbW9uLXBhZ2UvbXlhY2NvdW50LWNvbW1vbi1wYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLGVBQWU7RUFDZixRQUFRO0VBQ1Isa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixZQUFZLEVBQUE7O0FBRWhCO0VBQ0ksbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixXQUFXLEVBQUE7O0FBRWY7RUFDSSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLGVBQWU7RUFDZixZQUFZLEVBQUE7O0FBRWhCO0VBQ0ksZUFBZTtFQUNmLDJCQUEwQjtFQUMxQixrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFdBQVcsRUFBQTs7QUFFZjtFQUNJLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9teWFjY291bnQvbXlhY2NvdW50LWNvbW1vbi1wYWdlL215YWNjb3VudC1jb21tb24tcGFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGl2X2NsYXNze1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yc3Rhci1pY29ue1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICB0b3A6IDJweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgb3BhY2l0eTogMC4zO1xufVxuLmRpdl9saW5rX2NsYXNze1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgd2lkdGg6IDI3MHB4O1xuICAgIHRleHQtb3ZlcmZsb3c6IGNsaXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nLWxlZnQ6IDEzcHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG4ubGluay1pY29ue1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDhweDtcbiAgICBmb250LXNpemU6IDI5cHg7XG4gICAgb3BhY2l0eTogMC4zO1xufVxuLnNvY2lhbC13aGF0c2FwcC1pY29ue1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBjb2xvcjpsaW1lZ3JlZW4gIWltcG9ydGFudDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG4ubW9yZS1pY29ue1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm90dG9tOiA1cHg7XG59XG4uc29jaWFsLWljb257XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/layout/myaccount/myaccount-common-page/myaccount-common-page.page.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/layout/myaccount/myaccount-common-page/myaccount-common-page.page.ts ***!
  \**************************************************************************************/
/*! exports provided: MyaccountCommonPagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyaccountCommonPagePage", function() { return MyaccountCommonPagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/clipboard/ngx */ "./node_modules/@ionic-native/clipboard/ngx/index.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _office_pool_car_service_route_stoppage_modal_route_stoppage_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../office-pool-car-service/route-stoppage-modal/route-stoppage-modal.page */ "./src/app/layout/office-pool-car-service/route-stoppage-modal/route-stoppage-modal.page.ts");
/* harmony import */ var _core_services_modal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/services/modal.service */ "./src/app/core/services/modal.service.ts");
/* harmony import */ var _core_services_toaster_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/services/toaster.service */ "./src/app/core/services/toaster.service.ts");
/* harmony import */ var _core_services_office_pool_car_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/services/office-pool-car.service */ "./src/app/core/services/office-pool-car.service.ts");










var MyaccountCommonPagePage = /** @class */ (function () {
    function MyaccountCommonPagePage(route, storage, clipboard, socialSharing, modalService, toasterService, officePoolCarService) {
        this.route = route;
        this.storage = storage;
        this.clipboard = clipboard;
        this.socialSharing = socialSharing;
        this.modalService = modalService;
        this.toasterService = toasterService;
        this.officePoolCarService = officePoolCarService;
        this.which_page = '';
        this.refer_code = '';
        this.message = "";
        this.blank_div = false;
        this.progress_bar = false;
    }
    MyaccountCommonPagePage.prototype.ngOnInit = function () {
        var _this = this;
        this.which_page = this.route.snapshot.params['which-page'];
        this.progress_bar = true;
        this.storage.get('USER_INFO').then(function (val) {
            if (val) {
                _this.userId = val['id'];
                _this.refer_code = val.referral_no;
                _this.generate_link = 'https://google.com/' + _this.refer_code;
                _this.message = 'Your friend has invited you to join RedyRider instant and safe carpooling with verified users.Use promo code ' + _this.refer_code + ' on sign up.Click here';
                _this.progress_bar = false;
                _this.device_token = val.user_device['device_token'];
                _this.notificationDetails();
            }
        });
    };
    MyaccountCommonPagePage.prototype.copyText = function (input) {
        this.clipboard.copy(input);
        this.toasterService.showToast('Copied to clipboard', 1000, true, false);
    };
    MyaccountCommonPagePage.prototype.referFriends = function () {
        var options = {
            message: 'Your friend has invited you to join RedyRider instant and safe carpooling with verified users.Use promo code ' + this.refer_code + ' on sign up.Click here',
            // subject: 'this is a test subject',
            // files:[],
            // chooserTitle: 'RedyRider',
            //appPackageName:'com.'
            url: this.generate_link
        };
        this.socialSharing.shareWithOptions(options);
    };
    MyaccountCommonPagePage.prototype.shareVia = function (which) {
        if (which == 'whatsapp') {
            this.socialSharing.shareViaWhatsApp(this.message, '', this.generate_link);
        }
        if (which == 'facebook') {
            this.socialSharing.shareViaFacebook(this.message, '', this.generate_link);
        }
        if (which == 'gmail') {
            this.message = this.message + this.generate_link;
            this.socialSharing.shareViaEmail(this.message, 'Redy Rider Invitation', []);
        }
    };
    MyaccountCommonPagePage.prototype.showTerms = function () {
        var data = { 'from_which_page': 'refer-earn-page-terms' };
        this.modalService.openModal(_office_pool_car_service_route_stoppage_modal_route_stoppage_modal_page__WEBPACK_IMPORTED_MODULE_6__["RouteStoppageModalPage"], data, 'stoppage_modal_css');
    };
    MyaccountCommonPagePage.prototype.showHowToEarn = function () {
        var data = { 'from_which_page': 'refer-earn-page-earn' };
        this.modalService.openModal(_office_pool_car_service_route_stoppage_modal_route_stoppage_modal_page__WEBPACK_IMPORTED_MODULE_6__["RouteStoppageModalPage"], data, '_c_modal_css');
    };
    MyaccountCommonPagePage.prototype.notificationDetails = function () {
        var _this = this;
        this.progress_bar = true;
        var request_data = {
            "type": "notification",
            "user_id": this.userId,
            "device_token": this.device_token
        };
        this.officePoolCarService.notificationService(request_data).subscribe(function (res) {
            //console.log('res.result', res.result)
            if (res.result.length == 0) {
                _this.blank_div = true;
            }
            _this.dataList = res.result;
            _this.progress_bar = false;
        }, function (error) {
            _this.progress_bar = false;
            _this.toasterService.showToast(error.error.msg, 2000);
        });
    };
    MyaccountCommonPagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-myaccount-common-page',
            template: __webpack_require__(/*! ./myaccount-common-page.page.html */ "./src/app/layout/myaccount/myaccount-common-page/myaccount-common-page.page.html"),
            styles: [__webpack_require__(/*! ./myaccount-common-page.page.scss */ "./src/app/layout/myaccount/myaccount-common-page/myaccount-common-page.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
            _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_4__["Clipboard"],
            _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__["SocialSharing"],
            _core_services_modal_service__WEBPACK_IMPORTED_MODULE_7__["ModalService"],
            _core_services_toaster_service__WEBPACK_IMPORTED_MODULE_8__["ToasterService"],
            _core_services_office_pool_car_service__WEBPACK_IMPORTED_MODULE_9__["OfficePoolCarService"]])
    ], MyaccountCommonPagePage);
    return MyaccountCommonPagePage;
}());



/***/ })

}]);
//# sourceMappingURL=myaccount-common-page-myaccount-common-page-module.js.map