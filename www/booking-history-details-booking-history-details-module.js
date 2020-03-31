(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["booking-history-details-booking-history-details-module"],{

/***/ "./src/app/layout/myaccount/booking-history-details/booking-history-details.module.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/layout/myaccount/booking-history-details/booking-history-details.module.ts ***!
  \********************************************************************************************/
/*! exports provided: BookingHistoryDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingHistoryDetailsPageModule", function() { return BookingHistoryDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _booking_history_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./booking-history-details.page */ "./src/app/layout/myaccount/booking-history-details/booking-history-details.page.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _core_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/components/components.module */ "./src/app/core/components/components.module.ts");









var routes = [
    {
        path: '',
        component: _booking_history_details_page__WEBPACK_IMPORTED_MODULE_6__["BookingHistoryDetailsPage"]
    }
];
var BookingHistoryDetailsPageModule = /** @class */ (function () {
    function BookingHistoryDetailsPageModule() {
    }
    BookingHistoryDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"],
                _core_components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"]
            ],
            declarations: [_booking_history_details_page__WEBPACK_IMPORTED_MODULE_6__["BookingHistoryDetailsPage"]]
        })
    ], BookingHistoryDetailsPageModule);
    return BookingHistoryDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/layout/myaccount/booking-history-details/booking-history-details.page.html":
/*!********************************************************************************************!*\
  !*** ./src/app/layout/myaccount/booking-history-details/booking-history-details.page.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"header-menu\">\n    <ion-buttons slot=\"start\" class=\"border_button\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-card slot=\"start\" style=\"padding: 0px;\n    background: transparent;\n    box-shadow: none;\n    color: white;\n    margin: 0px;\">\n        <p style=\"margin:0px;\">{{result_data.journy_date_time}}</p>\n        <p style=\"margin:5px 0 0 0;\">{{result_data.car_name}} {{result_data.car_no}}</p>\n    </ion-card>\n  </ion-toolbar>\n</ion-header>\n  <div slot=\"fixed\">\n    \n    <ion-fab vertical=\"center\" horizontal=\"start\" slot=\"fixed\">\n      <ion-fab-button color=\"danger\" class=\"main_fab_bt\">\n       <ion-img src=\"/assets/svg/sos.svg\"></ion-img>\n      </ion-fab-button>\n      <ion-fab-list side=\"top\">\n        <ion-fab-button color=\"success\" type=\"button\" class=\"main_fab_bt\" (click)=\"callNow()\"><ion-icon ios=\"ios-call\" md=\"md-call\"></ion-icon></ion-fab-button>\n        <ion-fab-button color=\"warning\" type=\"button\" class=\"main_fab_bt\" (click)=\"smsNow()\"><ion-icon ios=\"ios-chatbubbles\" md=\"md-chatbubbles\"></ion-icon></ion-fab-button>\n        <ion-fab-button color=\"light\" type=\"button\" class=\"main_fab_bt\" (click)=\"sendMail()\"><ion-img src=\"/assets/svg/gmail.svg\"></ion-img></ion-fab-button>\n      </ion-fab-list>\n    </ion-fab>\n    <div #map id=\"map\"></div>\n  </div>\n  <ion-content>\n    \n    <ion-card class=\"card_class\">\n      <ion-progress-bar type=\"indeterminate\" class=\"progress_bar\" *ngIf=\"progress_bar\"></ion-progress-bar>\n      <ion-grid no-margin no-padding>\n        <ion-row style=\"border-bottom: 1px solid #B0B1AF;\">\n          <ion-col size=\"2\" style=\"margin:0 0 0px 8px;\">\n              <ion-toolbar style=\"--background: transparent;\">\n                <ion-avatar style=\"height: 50px;width: 50px;\">\n                  <img src = \"{{result_data.driver_photo}}\" alt=\"\" />\n                </ion-avatar>\n              </ion-toolbar>\n          </ion-col>\n          <ion-col size=\"9\">\n            <p style=\"margin: 10px 0px 0px 0px;font-weight: bold;\">{{result_data.driver_name | uppercase }}</p>\n            <p style=\"margin: 2px 0px 5px 0px;font-size: 12px;\">{{result_data.driver_contact}}</p>\n          </ion-col>\n        </ion-row>\n        <ion-row style=\"border-bottom: 1px solid #B0B1AF;\">\n          <ion-col size=\"6\">\n            <ion-toolbar class=\"toolbar-class\">\n              <div style=\"float: left;\">\n                <ion-img src=\"./assets/svg/my_ride.svg\" slot=\"start\" alt=\"redy rider\" style=\"width: 33px;margin: 10px 10px 0px 0;\"></ion-img>\n              </div>\n              <div>\n                <p class=\"no_margin_p_travel_details\" style=\"margin-left: 5px;\">{{result_data.car_name}} \n                <p class=\"no_margin_p_travel_details\" style=\"margin-left: 5px;\">{{result_data.car_no}}</p>\n              </div>  \n            </ion-toolbar>\n          </ion-col>\n       <ion-col size=\"6\">\n        <ion-toolbar class=\"toolbar-class\">\n          <fa-icon [icon]=\"['fas','chair']\" size=\"1x\" class=\"icon-margin-top\" style=\"font-size: 20px;margin-right: 5px;opacity: 0.7;\" slot=\"start\"></fa-icon>\n          <p class=\"\" style=\"margin: 5px 0 0 0;\">\n            <ion-badge *ngFor=\"let s_number of result_data.seats\" style=\"margin-right: 5px;\">{{s_number}}</ion-badge>\n          </p>\n        </ion-toolbar>\n      </ion-col>\n        </ion-row>\n        <ion-row style=\"margin: 10px 8px 10px 10px;\">\n        <ion-col text-center style=\"padding: 0px;\" size=\"1\">\n          <ion-img src=\"./assets/svg/logo.svg\" alt=\"redy rider\" style=\"width: 20px;margin-top: 5px;\"></ion-img>\n          <ion-img src=\"./assets/svg/dot.svg\" alt=\".\" style=\"width: 3px;margin: 10px 0 10px 8px;\" ></ion-img>\n          <ion-img src=\"./assets/svg/logo.svg\" alt=\"redy rider\" style=\"width: 20px;\"></ion-img>\n        </ion-col>\n        <ion-col text-left style=\"padding: 0px;\" size=\"11\">\n          <p class=\"p_location\">{{result_data.pick_up}}</p>\n          <p style=\"margin: 10px 0 10px 0;color:#02A1EB;\" (click)=\"viewRoute(result_data.route_master_id,result_data.stoppage_start_id,result_data.stoppage_end_id)\"><fa-icon [icon]=\"['fas','route']\" size=\"1x\" class=\"rstar-icon\"></fa-icon>&nbsp;View Route</p>\n          <p class=\"p_location\">{{result_data.drop}}</p>\n        </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card>\n    <ion-card class=\"card_class\">\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <h5 style=\"color: initial;margin-left: 10px;\">Fare Details</h5>\n            <ion-toolbar class=\"toolbar-class\">\n              <p slot=\"start\" size=\"small\" class=\"no_margin_p\">Base Fare</p>\n              <p slot=\"end\" size=\"small\" class=\"no_margin_p\">\n                <fa-icon [icon]=\"['fas','rupee-sign']\" size=\"1x\" class=\"rstar-icon\"></fa-icon> {{result_data.fare_details.base_fare}}\n              </p>\n            </ion-toolbar>\n            <ion-toolbar class=\"toolbar-class\">\n              <p slot=\"start\" size=\"small\" class=\"no_margin_p\">GST</p>\n              <p slot=\"end\" size=\"small\" class=\"no_margin_p\">\n                <fa-icon [icon]=\"['fas','rupee-sign']\" size=\"1x\" class=\"rstar-icon\"></fa-icon> {{result_data.fare_details.gst}}\n              </p>\n            </ion-toolbar>\n            <ion-toolbar class=\"toolbar-class\">\n              <p slot=\"start\" size=\"small\" class=\"no_margin_p\">Total Fare</p>\n              <p slot=\"end\" size=\"small\" class=\"no_margin_p\">\n                <fa-icon [icon]=\"['fas','rupee-sign']\" size=\"1x\" class=\"rstar-icon\"></fa-icon>  {{result_data.fare_details.total_fare}}\n              </p>\n            </ion-toolbar>\n            <!-- <ion-toolbar class=\"toolbar-class\" *ngIf=\"coupan_div\">\n              <p slot=\"start\" size=\"small\" color=\"tertiary\" class=\"no_margin_p\">Coupon Amount</p>\n              <p slot=\"end\" size=\"small\" color=\"tertiary\" class=\"no_margin_p\">\n                <fa-icon [icon]=\"['fas','rupee-sign']\" size=\"1x\" class=\"rstar-icon\"></fa-icon> -20.00\n              </p>\n            </ion-toolbar> -->\n            <ion-toolbar class=\"toolbar-class\">\n              <p slot=\"start\" size=\"small\" style=\"font-weight: bold;\" class=\"no_margin_p\">TOTAL PAID</p>\n              <p slot=\"end\" size=\"small\" style=\"font-weight: bold;\" class=\"no_margin_p\">\n                <fa-icon [icon]=\"['fas','rupee-sign']\" size=\"1x\" class=\"rstar-icon\"></fa-icon>  {{result_data.fare_details.payable_fare}}\n              </p>\n            </ion-toolbar>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card>\n</ion-content>\n<ion-footer class=\"footer-bus-route-details\">\n  <ion-grid no-padding>\n    <ion-row>\n      <ion-col text-center >\n        <fa-icon [icon]=\"['fas','qrcode']\" size=\"x\" class=\"rstar-icon\" style=\"font-size: 20px;\" (click)=\"scanQrCode(result_data.qr_code)\"></fa-icon>\n        <p class=\"no_margin_p\" style=\"font-size:13px;\">QR Code</p>\n      </ion-col>\n      <ion-col text-center>\n        <ion-icon ios=\"ios-share\" md=\"md-share\" style=\"font-size: 20px;\" (click)=\"shareYourRoute()\"></ion-icon>\n        <p class=\"no_margin_p\" style=\"font-size:13px;\">Share Booking Info.</p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>"

/***/ }),

/***/ "./src/app/layout/myaccount/booking-history-details/booking-history-details.page.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/layout/myaccount/booking-history-details/booking-history-details.page.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#map {\n  width: 100%;\n  height: 300px; }\n\n#markerLayer img {\n  animation: pulse .5s infinite alternate;\n  -webkit-animation: pulse .5s infinite alternate;\n  transform-origin: center;\n  -webkit-transform-origin: center; }\n\nion-item {\n  --background:white; }\n\n.toolbar-class {\n  --background: transparent;\n  margin-left: 5px;\n  padding: 0 10px 0px 5px;\n  --min-height: 30px; }\n\n.card_class {\n  background-color: #ffffff;\n  margin: 0px;\n  border-radius: 0px;\n  border-top: 1px solid #B0B1AF; }\n\n.no_margin_p_travel_details {\n  margin: 0px;\n  opacity: 0.7; }\n\n.footer-bus-route-details {\n  background: #0A5999;\n  color: white; }\n\nion-badge {\n  font-size: 10px; }\n\n.main_fab_bt {\n  height: 35px;\n  width: 35px;\n  margin: 8px; }\n\n.p_location {\n  margin: 0 0 0 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ByaXlhbS9Eb2N1bWVudHMvUmVkeVJpZGVyL3NyYy9hcHAvbGF5b3V0L215YWNjb3VudC9ib29raW5nLWhpc3RvcnktZGV0YWlscy9ib29raW5nLWhpc3RvcnktZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXO0VBQ1gsYUFBYSxFQUFBOztBQUVqQjtFQUNJLHVDQUF1QztFQUN2QywrQ0FBK0M7RUFDL0Msd0JBQXdCO0VBQ3hCLGdDQUFnQyxFQUFBOztBQUVwQztFQUNJLGtCQUFhLEVBQUE7O0FBRWpCO0VBQ0kseUJBQWE7RUFDYixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLGtCQUFhLEVBQUE7O0FBRWpCO0VBQ0kseUJBQXlCO0VBRXpCLFdBQVc7RUFDWCxrQkFBa0I7RUFFbEIsNkJBQTZCLEVBQUE7O0FBRWpDO0VBQ0ksV0FBVztFQUNYLFlBQVksRUFBQTs7QUFFaEI7RUFDSSxtQkFBbUI7RUFDbkIsWUFBVyxFQUFBOztBQUVmO0VBQ0ksZUFBZSxFQUFBOztBQUVuQjtFQUNJLFlBQVk7RUFDWixXQUFXO0VBQ1gsV0FBVyxFQUFBOztBQUVmO0VBRUksaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvbXlhY2NvdW50L2Jvb2tpbmctaGlzdG9yeS1kZXRhaWxzL2Jvb2tpbmctaGlzdG9yeS1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYXAge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgfVxuI21hcmtlckxheWVyIGltZyB7XG4gICAgYW5pbWF0aW9uOiBwdWxzZSAuNXMgaW5maW5pdGUgYWx0ZXJuYXRlO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBwdWxzZSAuNXMgaW5maW5pdGUgYWx0ZXJuYXRlO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbiAgICB9XG5pb24taXRlbXtcbiAgICAtLWJhY2tncm91bmQ6d2hpdGU7XG59XG4udG9vbGJhci1jbGFzc3tcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgcGFkZGluZzogMCAxMHB4IDBweCA1cHg7XG4gICAgLS1taW4taGVpZ2h0OiAzMHB4O1xufVxuLmNhcmRfY2xhc3N7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAvL2NvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW46IDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgLy9ib3JkZXItYm90dG9tOiAxcHggc29saWQgI0IwQjFBRjtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI0IwQjFBRjtcbn1cbi5ub19tYXJnaW5fcF90cmF2ZWxfZGV0YWlsc3tcbiAgICBtYXJnaW46IDBweDtcbiAgICBvcGFjaXR5OiAwLjc7XG59XG4uZm9vdGVyLWJ1cy1yb3V0ZS1kZXRhaWxze1xuICAgIGJhY2tncm91bmQ6ICMwQTU5OTk7XG4gICAgY29sb3I6d2hpdGU7XG59XG5pb24tYmFkZ2V7XG4gICAgZm9udC1zaXplOiAxMHB4O1xufVxuLm1haW5fZmFiX2J0e1xuICAgIGhlaWdodDogMzVweDtcbiAgICB3aWR0aDogMzVweDtcbiAgICBtYXJnaW46IDhweDtcbn1cbi5wX2xvY2F0aW9ue1xuICAgIC8vIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbWFyZ2luOiAwIDAgMCAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/layout/myaccount/booking-history-details/booking-history-details.page.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/layout/myaccount/booking-history-details/booking-history-details.page.ts ***!
  \******************************************************************************************/
/*! exports provided: BookingHistoryDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingHistoryDetailsPage", function() { return BookingHistoryDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _core_services_modal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/modal.service */ "./src/app/core/services/modal.service.ts");
/* harmony import */ var _core_services_toaster_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/toaster.service */ "./src/app/core/services/toaster.service.ts");
/* harmony import */ var _core_services_office_pool_car_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/services/office-pool-car.service */ "./src/app/core/services/office-pool-car.service.ts");
/* harmony import */ var _core_services_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/services/loading.service */ "./src/app/core/services/loading.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/sms/ngx */ "./node_modules/@ionic-native/sms/ngx/index.js");
/* harmony import */ var _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/email-composer/ngx */ "./node_modules/@ionic-native/email-composer/ngx/index.js");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");
/* harmony import */ var _office_pool_car_service_route_stoppage_modal_route_stoppage_modal_page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../office-pool-car-service/route-stoppage-modal/route-stoppage-modal.page */ "./src/app/layout/office-pool-car-service/route-stoppage-modal/route-stoppage-modal.page.ts");

















var BookingHistoryDetailsPage = /** @class */ (function () {
    function BookingHistoryDetailsPage(storage, modalService, toasterService, officePoolCarService, loadingService, route, geolocation, callNumber, sms, emailComposer, barcodeScanner, socialSharing, firestore) {
        var _this = this;
        this.storage = storage;
        this.modalService = modalService;
        this.toasterService = toasterService;
        this.officePoolCarService = officePoolCarService;
        this.loadingService = loadingService;
        this.route = route;
        this.geolocation = geolocation;
        this.callNumber = callNumber;
        this.sms = sms;
        this.emailComposer = emailComposer;
        this.barcodeScanner = barcodeScanner;
        this.socialSharing = socialSharing;
        this.firestore = firestore;
        this.directionsService = new google.maps.DirectionsService;
        this.directionsDisplay = new google.maps.DirectionsRenderer({ suppressMarkers: true });
        this.DirectionsWaypoint = [];
        this.markers = [];
        this.result_data = {
            'fare_details': {},
            'stoppage_list': [],
            'stoppage_list_1': [],
            'seats': []
        };
        this.stopp_list = [];
        this.coupan_div = true;
        this.progress_bar = false;
        this.storage.get('USER_INFO').then(function (val) {
            //console.log('user_details_val_val', val)
            if (val) {
                _this.userId = val.id;
                _this.name = val.name;
                _this.userType = val.user_type_id;
                _this.sos_number = val.sos_details.contact_no;
                _this.sos_email = val.sos_details.contact_email;
                //this.car_details_d = val.car_details;
                //console.log('this.car_details', this.car_details_d.car_no)
            }
        });
        this.booking_id = this.route.snapshot.params['id'];
        //console.log('this.booking_id', this.booking_id)
        this.getData(this.booking_id);
    }
    BookingHistoryDetailsPage.prototype.ngOnInit = function () {
        this.loadMap();
    };
    BookingHistoryDetailsPage.prototype.firebase_get_data = function () {
        var _this = this;
        var car_id = this.result_data.car_name + "-" + this.result_data.car_id;
        //console.log("car: ", car_id);
        this.firestore.collection('locations').snapshotChanges().subscribe(function (data) {
            //this.driver_curent_live_location = 
            data.map(function (e) {
                //if (e.payload.doc.id == car_id) {
                if (e.payload.doc.id == '123') {
                    // return {
                    //   id: e.payload.doc.id,
                    //   Name: e.payload.doc.data()['driver'],
                    //   lat: e.payload.doc.data()['lat'],
                    //   long: e.payload.doc.data()['long'],
                    //   driver_trip_start: e.payload.doc.data()['is_start'],
                    //   driver_trip_end: e.payload.doc.data()['is_end'],
                    // };
                    _this.driver_lat = e.payload.doc.data()['lat'];
                    _this.driver_long = e.payload.doc.data()['long'];
                }
            });
            //alert(this.driver_curent_live_location[0].id);
            //console.log('driver_curent_live_location', this.driver_curent_live_location);
            //this.allocate_driver_on_map(this.driver_curent_live_location);
            _this.allocate_driver_on_map();
        });
        // this.driver_curent_live_location = this.firestore.collection('locations').doc(car_id).get().pipe(
        //   map(responce=>{console.log(responce.data()['lat']);})
        // );
        // this.driver_curent_live_location = this.firestore.collection('locations').get().subscribe((snapshot)=>{
        //   snapshot.docs.forEach(element => {
        //     if(element.id==car_id){
        //       this.driver_lat=element.data().lat;
        //       this.driver_long=element.data().long;
        //       console.log('lat:',this.driver_lat,"long:", this.driver_long);
        //     }
        //     //element.data()
        //   });
        // });
        // //this.driver_curent_live_location = this.firestore.doc('locations/'+car_id);
        // //console.log(this.driver_curent_live_location);
        // this.allocate_driver_on_map();
    };
    BookingHistoryDetailsPage.prototype.allocate_driver_on_map = function () {
        //this.driver_lat = driver_curent_live_location[0].lat;
        //this.driver_long = driver_curent_live_location[0].long;
        if (this.driver_lat != '' && this.driver_long != '') {
            var latLng = new google.maps.LatLng(this.driver_lat, this.driver_long);
            this.driver_marker.setPosition(latLng);
            if (this.last_driver_postion != undefined) {
                //console.log('last postion ',this.last_driver_postion);
                var heading = google.maps.geometry.spherical.computeHeading(this.last_driver_postion, latLng);
                this.driver_marker.rotation = heading;
                this.map.setHeading = heading;
                //this.map.tilt=45;
            }
            this.map.panTo(latLng);
            this.last_driver_postion = latLng;
        }
    };
    BookingHistoryDetailsPage.prototype.loadMap = function () {
        this.map = new google.maps.Map(this.mapElement.nativeElement, {
            //center: { lat: -34.9011, lng: -56.1645 },
            center: this.location_source,
            zoom: 18,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            tilt: 45,
            // mapTypeControl: true,
            // streetViewControl: true,
            // fullscreenControl: true
            disableDefaultUI: true,
        });
        //let pos1 = { lat: 22.5764753, lng: 88.4306861 };
        this.driver_marker = new google.maps.Marker({
            position: this.location_source,
            map: this.map,
            //icon: image,
            title: 'you are here!',
            icon: "http://tobuekalabya.com/carservice_manage/icon/car_top.png",
        });
        this.directionsDisplay.setMap(this.map);
    };
    BookingHistoryDetailsPage.prototype.getMyLocation = function () {
        var _this = this;
        var i;
        this.geolocation.getCurrentPosition({
            enableHighAccuracy: true
        }).then(function (location) {
            _this.lat = location.coords.latitude;
            _this.lng = location.coords.longitude;
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
        // this.DirectionsWaypoint = [
        //   {
        //     location: { lat: 22.571232, lng: 88.425483 },
        //     stopover: false
        //   }, {
        //     location: { lat: 22.576701, lng: 88.429078 },
        //     stopover: true
        //   }
        // ];
        //console.log('this.stopp_list_1', JSON.stringify(this.waypoint_stoppage_list));
        //alert(JSON.stringify(this.waypoint_stoppage_list));
        this.waypoint_stoppage_list.forEach(function (element) {
            //console.log('element',element);
            var waypoint_location;
            //waypoint_location=JSON.stringify(element)
            //waypoint_location=element;
            waypoint_location = {
                location: { lat: parseFloat(element.location.lat), lng: parseFloat(element.location.lng) },
                stopover: element.stopover
            };
            //console.log('element:',waypoint_location);
            _this.DirectionsWaypoint.push(waypoint_location);
        });
        //console.log('DirectionsWaypoint',this.DirectionsWaypoint);
        //this.DirectionsWaypoint = JSON.stringify(this.waypoint_stoppage_list);
        //let latLng = new google.maps.LatLng(this.driver_lat, this.driver_long);
        //console.log('this.stopp_list', this.stopp_list[0])
        //console.log('this.stopp_list_lat', this.stopp_list[0].lat)
        var sto_len = this.stopp_list.length;
        this.location_source = { lat: parseFloat(this.stopp_list[0].lat), lng: parseFloat(this.stopp_list[0].lng) };
        //console.log('this.location_source', this.location_source)
        this.location_destination = { lat: parseFloat(this.stopp_list[sto_len - 1].lat), lng: parseFloat(this.stopp_list[sto_len - 1].lng) };
        //console.log('this.location_destination', this.location_destination)
        this.calculateAndDisplayRoute();
    };
    BookingHistoryDetailsPage.prototype.calculateAndDisplayRoute = function () {
        var _this = this;
        var that = this;
        //console.log(this.DirectionsWaypoint);
        that.directionsService.route({
            origin: this.location_source,
            destination: this.location_destination,
            travelMode: 'DRIVING',
            waypoints: this.DirectionsWaypoint,
        }, function (response, status) {
            //alert(1);
            if (status === 'OK') {
                //console.log(response);
                that.directionsDisplay.setDirections(response);
                _this.loadMap();
                _this.stopp_list.forEach(function (element) {
                    var waypoint_location_marker;
                    var pos_marker = {
                        lat: parseFloat(element.lat),
                        lng: parseFloat(element.lng)
                    };
                    var infowindow = new google.maps.InfoWindow({
                        //content: String(element.location_name,stoppage_img)
                        content: String(element.stoppage_img)
                    });
                    console.log("Location:", element.icon);
                    waypoint_location_marker = new google.maps.Marker({
                        position: pos_marker,
                        map: _this.map,
                        icon: element.icon,
                        //icon: "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
                        title: 'you are here!',
                    });
                    // if (element.start == true || element.stop == true) {
                    //   infowindow.open(this.map, waypoint_location_marker);
                    // }
                    waypoint_location_marker.addListener('click', function () {
                        infowindow.open(this.map, waypoint_location_marker);
                    });
                });
            }
            else {
                window.alert('Directions request failed due to ' + status);
            }
        });
    };
    BookingHistoryDetailsPage.prototype.callNow = function () {
        this.callNumber.callNumber(this.sos_number, true)
            .then(function (res) { return console.log('Launched dialer!', res); })
            .catch(function (err) { return console.log('Error launching dialer', err); });
    };
    BookingHistoryDetailsPage.prototype.smsNow = function () {
        if (this.sms.hasPermission()) {
            this.sms.send(this.sos_number, 'This is an emergency in bus.Please look into it immediately.').then(function (val) {
                //console.log('val', val)
            });
        }
    };
    BookingHistoryDetailsPage.prototype.sendMail = function () {
        var _this = this;
        var email = {
            to: this.sos_email,
            cc: 'vicbro.arise@gmail.com',
            bcc: ['vicbro.arise@gmail.com', 'rupamhazra@gmail.com'],
            attachments: [],
            subject: 'This an Emergency email',
            body: 'This is an emergency in bus.Please look into it immediately',
            isHtml: false,
            app: "gmail"
        };
        this.emailComposer.isAvailable().then(function (available) {
            if (available) {
                _this.emailComposer.open(email);
            }
        });
    };
    BookingHistoryDetailsPage.prototype.scanQrCode = function (qr_code) {
        if (qr_code === void 0) { qr_code = ''; }
        var data = { 'from_which_page': 'booking-history-details', 'qr_image': qr_code };
        this.modalService.openModal(_office_pool_car_service_route_stoppage_modal_route_stoppage_modal_page__WEBPACK_IMPORTED_MODULE_16__["RouteStoppageModalPage"], data, 'stoppage_modal_css');
        // this.barcodeScanner.scan().then(barcodeData => {
        //   //console.log('Barcode data', barcodeData);
        //   if (barcodeData.text == this.result_data.seat_qr) {
        //     this.toasterService.showToast('Your seats has been confirmed, have a safe journey', 6000)
        //   } else {
        //     this.toasterService.showToast('Qr code does not match! please contact to Redy Rider Help Line', 6000)
        //   }
        // }).catch(err => {
        //   console.log('Error', err);
        // });
    };
    BookingHistoryDetailsPage.prototype.shareYourRoute = function () {
        var message = 'Booking Details \n -----------------\n';
        message = message + 'Pick Up : ' + this.result_data.pick_up + '\nDrop : ' + this.result_data.drop + "\n";
        message = message + 'Seat No: ' + this.result_data.seats + '\n';
        message = message + 'Journy date: ' + this.result_data.journy_date + '\n';
        message = message + 'Journy time: ' + this.result_data.journy_time + '\n';
        message = message + 'Total Fare Amount: ' + this.result_data.amount + '/-' + '\n';
        message = message + 'Car: ' + this.result_data.car_name + '\n';
        message = message + 'Car No: ' + this.result_data.car_no + '\n';
        message = message + 'Invoice No: ' + this.result_data.order_no + '\n';
        this.socialSharing.shareViaWhatsApp(message, '', '');
    };
    BookingHistoryDetailsPage.prototype.getData = function (booking_id) {
        var _this = this;
        this.progress_bar = true;
        //console.log('getData myaccount-personal')
        //this.loadingService.present();
        var request_data = { "type": "booking_history", "booking_id": booking_id };
        this.officePoolCarService.applyCouponService(request_data).subscribe(function (res) {
            _this.result_data = res.result;
            _this.stopp_list = res.result.stoppage_list;
            _this.waypoint_stoppage_list = res.result.stoppage_list_1;
            //console.log("res:::" + this.stopp_list.length);
            _this.getMyLocation();
            _this.firebase_get_data();
            _this.progress_bar = false;
            console.log(_this.result_data);
            //this.firebase_get_data();
        }, function (error) {
            //console.log("error::::" + error.error.msg);
            _this.progress_bar = false;
            _this.toasterService.showToast(error.error.msg, 2000);
        });
    };
    BookingHistoryDetailsPage.prototype.viewRoute = function (route_id, start_point, end_point) {
        var data = { 'route_id': route_id, 'from_which_page': 'bus-route-details-page', 'start_point': start_point, 'end_point': end_point };
        this.modalService.openModal(_office_pool_car_service_route_stoppage_modal_route_stoppage_modal_page__WEBPACK_IMPORTED_MODULE_16__["RouteStoppageModalPage"], data, 'stoppage_modal_css');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], BookingHistoryDetailsPage.prototype, "mapElement", void 0);
    BookingHistoryDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-booking-history-details',
            template: __webpack_require__(/*! ./booking-history-details.page.html */ "./src/app/layout/myaccount/booking-history-details/booking-history-details.page.html"),
            styles: [__webpack_require__(/*! ./booking-history-details.page.scss */ "./src/app/layout/myaccount/booking-history-details/booking-history-details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"],
            _core_services_modal_service__WEBPACK_IMPORTED_MODULE_3__["ModalService"],
            _core_services_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"],
            _core_services_office_pool_car_service__WEBPACK_IMPORTED_MODULE_5__["OfficePoolCarService"],
            _core_services_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_8__["Geolocation"],
            _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_9__["CallNumber"],
            _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_10__["SMS"],
            _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_11__["EmailComposer"],
            _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_12__["BarcodeScanner"],
            _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_13__["SocialSharing"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_14__["AngularFirestore"]])
    ], BookingHistoryDetailsPage);
    return BookingHistoryDetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=booking-history-details-booking-history-details-module.js.map