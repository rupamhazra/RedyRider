(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["office-pool-car-service-date-time-date-time-module"],{

/***/ "./src/app/layout/office-pool-car-service/date-time/date-time.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/layout/office-pool-car-service/date-time/date-time.module.ts ***!
  \******************************************************************************/
/*! exports provided: DateTimePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateTimePageModule", function() { return DateTimePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _date_time_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./date-time.page */ "./src/app/layout/office-pool-car-service/date-time/date-time.page.ts");
/* harmony import */ var _core_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/components/components.module */ "./src/app/core/components/components.module.ts");








var routes = [
    {
        path: '',
        component: _date_time_page__WEBPACK_IMPORTED_MODULE_6__["DateTimePage"]
    }
];
var DateTimePageModule = /** @class */ (function () {
    function DateTimePageModule() {
    }
    DateTimePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _core_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            ],
            declarations: [_date_time_page__WEBPACK_IMPORTED_MODULE_6__["DateTimePage"]]
        })
    ], DateTimePageModule);
    return DateTimePageModule;
}());



/***/ }),

/***/ "./src/app/layout/office-pool-car-service/date-time/date-time.page.html":
/*!******************************************************************************!*\
  !*** ./src/app/layout/office-pool-car-service/date-time/date-time.page.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<ion-content>\n  <div class=\"personal_details\">\n    <div class=\"inner_div\">\n      <div class=\"personal-fields\">\n        <h5>Date and Time :: </h5>\n        <p>Help us to know what's your timing.</p>\n        <hr class=\"hr-border\">\n      </div>\n      <form  [formGroup]=\"form\" novalidate>\n        <ion-grid>\n          <ion-row class=\"ion-justify-content-center rstar-row-margin\">\n            <ion-col class=\"ion-align-self-center\">\n              <ion-label class=\"rstar-label-text\">Start Date</ion-label>\n              <ion-item class=\"rstar-border rstar-item rstar-margin-top rstar-ion-item\">\n                <ion-datetime min=\"{{minDate}}\"  displayFormat=\"YYYY-MM-DD\" max=\"{{maxDate}}\" placeholder=\"YYYY-MM-DD\" formControlName=\"journey_date\" class=\"rstar-date\" [(ngModel)]=\"myDate\" required></ion-datetime>\n              </ion-item>\n              <!-- <ion-item class=\"rstar-border rstar-item rstar-margin-top rstar-ion-item\">\n                <ion-datetime min=\"{{minDate}}\"  displayFormat=\"YYYY-MM-DD\" max=\"{{maxDate}}\" placeholder=\"YYYY-MM-DD\" formControlName=\"journey_date\" class=\"rstar-date\" [(ngModel)]=\"myDate\" (ionChange)=\"changeTime()\"  required></ion-datetime>\n              </ion-item> -->\n              <!-- <ion-label class=\"rstar-label-text\">Start Time</ion-label>\n              <ion-item class=\"rstar-border  rstar-item rstar-margin-bottom rstar-margin-top rstar-ion-item\">\n                <ion-datetime min=\"{{minTime}}\" displayFormat=\"HH:mm\" class=\"rstar-time\" formControlName=\"journey_time\" placeholder=\"h:mm a\" required [(ngModel)]=\"myTime\"></ion-datetime>\n              </ion-item> -->\n              <div *ngIf=\"roundTripDiv\">\n                <ion-label class=\"rstar-label-text\">Return Date</ion-label>\n                <ion-item class=\"rstar-border rstar-item rstar-margin-top rstar-ion-item\">\n                  <ion-datetime min=\"{{minDate}}\"  displayFormat=\"YYYY-MM-DD\" max=\"{{maxDate}}\" placeholder=\"YYYY-MM-DD\" formControlName=\"return_date\" class=\"rstar-date\" [(ngModel)]=\"myReturnDate\"  required ></ion-datetime>\n                </ion-item>\n                <!-- <ion-item class=\"rstar-border rstar-item rstar-margin-top rstar-ion-item\">\n                  <ion-datetime min=\"{{minDate}}\"  displayFormat=\"YYYY-MM-DD\" max=\"{{maxDate}}\" placeholder=\"YYYY-MM-DD\" formControlName=\"return_date\" class=\"rstar-date\" [(ngModel)]=\"myReturnDate\" (ionChange)=\"changeTime('round')\"  required ></ion-datetime>\n                </ion-item> -->\n                <!-- <ion-label class=\"rstar-label-text\">Return Time</ion-label>\n                <ion-item class=\"rstar-border  rstar-item rstar-margin-bottom rstar-margin-top rstar-ion-item\">\n                  <ion-datetime min=\"{{minReturnTime}}\" displayFormat=\"HH:mm\" class=\"rs0ar-time\" formControlName=\"return_time\" placeholder=\"h:mm a\" required [(ngModel)]=\"myReturnTime\"></ion-datetime>\n                </ion-item> -->\n              </div>\n              <ion-button class=\"ion-margin-top\"  size=\"large\" type=\"button\" [disabled]=\"form.invalid || net_connection_check\" expand=\"full\" (click)=\"savaData()\">\n                SAVE & CONTINUE \n                <ion-icon name=\"arrow-round-forward\"></ion-icon>\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </form>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/layout/office-pool-car-service/date-time/date-time.page.scss":
/*!******************************************************************************!*\
  !*** ./src/app/layout/office-pool-car-service/date-time/date-time.page.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-heading h1 {\n  text-transform: uppercase;\n  letter-spacing: 1px; }\n\n.small-content {\n  color: #616161;\n  letter-spacing: 0.5px; }\n\n.inner_div {\n  margin-left: 15px;\n  margin-right: 15px; }\n\n.cs-title-padding {\n  margin-left: 0px; }\n\n.radio-button-personal {\n  padding-bottom: 10px;\n  padding-top: 15px; }\n\n.radio-button-personal p {\n  font-size: 17px;\n  color: #757575; }\n\n.btn-group, .btn-group-vertical {\n  position: relative;\n  display: inline-flex;\n  vertical-align: middle; }\n\nion-icon {\n  font-size: 26px; }\n\n.item-radio-checked ion-label {\n  color: #fff;\n  background-color: #0062cc;\n  border-color: #005cbf; }\n\n.rstar-ion-item {\n  --padding-end: 0px;\n  --padding-bottom: 0px;\n  --padding-start: 0px;\n  --padding-top: 0px;\n  --inner-padding-bottom:0px;\n  --inner-padding-top:0px;\n  --inner-padding-start:0px;\n  --inner-padding-end:2px; }\n\n.rotate-90 {\n  display: inline-block;\n  transform: rotate(242deg); }\n\n.rstar-border {\n  border: 1px solid #757575; }\n\n.rstar-margin-bottom {\n  margin-bottom: 10px; }\n\n.rstar-margin-top {\n  margin-top: 10px; }\n\n.rstar-label-text {\n  margin-bottom: 10px;\n  font-size: 14px;\n  font-weight: 500; }\n\n.rstar-row-margin {\n  margin-left: -10px; }\n\n.rstar-item {\n  max-height: 46px; }\n\n.rstar-time {\n  padding-left: 120px; }\n\n.rstar-date {\n  padding-left: 104px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ByaXlhbS9Eb2N1bWVudHMvUmVkeVJpZGVyL3NyYy9hcHAvbGF5b3V0L29mZmljZS1wb29sLWNhci1zZXJ2aWNlL2RhdGUtdGltZS9kYXRlLXRpbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQWdCLHlCQUF5QjtFQUFFLG1CQUFtQixFQUFBOztBQUM5RDtFQUFnQixjQUFjO0VBQUUscUJBQXFCLEVBQUE7O0FBQ3JEO0VBQ0ksaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLG9CQUFvQjtFQUNwQixpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSxlQUFlO0VBQ2YsY0FBYyxFQUFBOztBQUdsQjtFQUNJLGtCQUFrQjtFQUVsQixvQkFBb0I7RUFDcEIsc0JBQXNCLEVBQUE7O0FBRTFCO0VBQ0ksZUFBYyxFQUFBOztBQUVsQjtFQUNJLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIscUJBQXFCLEVBQUE7O0FBRXpCO0VBQ0ksa0JBQWM7RUFDZCxxQkFBaUI7RUFDakIsb0JBQWdCO0VBQ2hCLGtCQUFjO0VBQ2QsMEJBQXVCO0VBQ3ZCLHVCQUFvQjtFQUNwQix5QkFBc0I7RUFDdEIsdUJBQW9CLEVBQUE7O0FBR3hCO0VBQ0kscUJBQXFCO0VBQ3JCLHlCQUF5QixFQUFBOztBQUUzQjtFQUNFLHlCQUF5QixFQUFBOztBQUkzQjtFQUNFLG1CQUFtQixFQUFBOztBQUVyQjtFQUNFLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0ksbUJBQWtCLEVBQUE7O0FBRXRCO0VBQ0UsbUJBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvb2ZmaWNlLXBvb2wtY2FyLXNlcnZpY2UvZGF0ZS10aW1lL2RhdGUtdGltZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwLWhlYWRpbmcgaDF7dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgbGV0dGVyLXNwYWNpbmc6IDFweDt9XG4uc21hbGwtY29udGVudCB7Y29sb3I6ICM2MTYxNjE7IGxldHRlci1zcGFjaW5nOiAwLjVweDt9XG4uaW5uZXJfZGl2e1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbn1cbi5jcy10aXRsZS1wYWRkaW5ne1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgLy9mb250LXNpemU6IDIwcHg7XG59XG4ucmFkaW8tYnV0dG9uLXBlcnNvbmFse1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xufVxuLnJhZGlvLWJ1dHRvbi1wZXJzb25hbCBwIHtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgY29sb3I6ICM3NTc1NzU7XG4gICAgXG59XG4uYnRuLWdyb3VwLCAuYnRuLWdyb3VwLXZlcnRpY2FsIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogLW1zLWlubGluZS1mbGV4Ym94O1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5pb24taWNvbntcbiAgICBmb250LXNpemU6MjZweDtcbn1cbi5pdGVtLXJhZGlvLWNoZWNrZWQgaW9uLWxhYmVsIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2MmNjO1xuICAgIGJvcmRlci1jb2xvcjogIzAwNWNiZjtcbn1cbi5yc3Rhci1pb24taXRlbXtcbiAgICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xuICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgIC0tcGFkZGluZy10b3A6IDBweDtcbiAgICAtLWlubmVyLXBhZGRpbmctYm90dG9tOjBweDtcbiAgICAtLWlubmVyLXBhZGRpbmctdG9wOjBweDtcbiAgICAtLWlubmVyLXBhZGRpbmctc3RhcnQ6MHB4O1xuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6MnB4O1xuXG59XG4ucm90YXRlLTkwIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDI0MmRlZyk7XG4gIH1cbiAgLnJzdGFyLWJvcmRlcntcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNzU3NTc1O1xuICAgIFxuICAgIFxuICB9XG4gIC5yc3Rhci1tYXJnaW4tYm90dG9te1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbiAgLnJzdGFyLW1hcmdpbi10b3B7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuICAucnN0YXItbGFiZWwtdGV4dHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG4gIC5yc3Rhci1yb3ctbWFyZ2lue1xuICAgICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xuICB9XG4gIC5yc3Rhci1pdGVte1xuICAgIG1heC1oZWlnaHQ6IDQ2cHg7XG4gIH1cbiAgLnJzdGFyLXRpbWV7XG4gICAgICBwYWRkaW5nLWxlZnQ6MTIwcHg7XG4gIH1cbiAgLnJzdGFyLWRhdGV7XG4gICAgcGFkZGluZy1sZWZ0OjEwNHB4O1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/layout/office-pool-car-service/date-time/date-time.page.ts":
/*!****************************************************************************!*\
  !*** ./src/app/layout/office-pool-car-service/date-time/date-time.page.ts ***!
  \****************************************************************************/
/*! exports provided: DateTimePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateTimePage", function() { return DateTimePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_services_toaster_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/toaster.service */ "./src/app/core/services/toaster.service.ts");
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/device/ngx */ "./node_modules/@ionic-native/device/ngx/index.js");
/* harmony import */ var _core_services_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/services/modal.service */ "./src/app/core/services/modal.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _core_services_loading_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/services/loading.service */ "./src/app/core/services/loading.service.ts");
/* harmony import */ var _core_services_alert_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../core/services/alert.service */ "./src/app/core/services/alert.service.ts");











var DateTimePage = /** @class */ (function () {
    function DateTimePage(router, formBuilder, toasterService, device, modalService, date_time_event, storage, loadingService, alertService) {
        var _this = this;
        this.router = router;
        this.formBuilder = formBuilder;
        this.toasterService = toasterService;
        this.device = device;
        this.modalService = modalService;
        this.date_time_event = date_time_event;
        this.storage = storage;
        this.loadingService = loadingService;
        this.alertService = alertService;
        this.net_connection_check = false;
        this.minDate = new Date().toISOString();
        this.myDate = new Date().toISOString();
        this.myReturnDate = new Date().toISOString();
        this.myTime = new Date().toISOString();
        this.myReturnTime = new Date().toISOString();
        this.roundTripDiv = false;
        this.today = new Date();
        this.storage.get('route_search_parameters').then(function (val) {
            _this.val1 = val;
            //console.log('val', val);
            if (val['single_or_round'] == '1') {
                _this.roundTripDiv = true;
                //console.log('this.roundTripDiv', this.roundTripDiv)
            }
        });
    }
    DateTimePage.prototype.ngOnInit = function () {
        var _this = this;
        this.maxDate = this.today.getFullYear() + 1;
        this.minTime = this.today.getHours() + ":" + this.today.getMinutes();
        this.minReturnTime = this.today.getHours() + ":" + this.today.getMinutes();
        //console.log('this.minTime', this.minTime)
        this.date_time_event.subscribe('check_net_connection', function (data) {
            if (data == 'connect')
                _this.net_connection_check = false;
            if (data == 'disconnect')
                _this.net_connection_check = true;
        });
        this.form = this.formBuilder.group({
            journey_date: [''],
            journey_time: [''],
            return_date: [''],
            return_time: [''],
        });
    };
    DateTimePage.prototype.changeTime = function (mode) {
        if (mode === void 0) { mode = 'single'; }
        if (mode == 'round') {
            var d = new Date(this.myReturnDate);
            var t1 = this.today.setHours(0, 0, 0, 0);
            var d1 = d.setHours(0, 0, 0, 0);
            //console.log('this.myReturnDate', d1, '==', t1);
            if (t1 < d1) {
                this.minReturnTime = '01:01';
            }
            else if (t1 == d1) {
                var c = new Date();
                this.minReturnTime = c.getHours() + ":" + c.getMinutes();
                this.myReturnTime = c.getHours() + ":" + c.getMinutes();
            }
        }
        else {
            var d = new Date(this.myDate);
            var t1 = this.today.setHours(0, 0, 0, 0);
            var d1 = d.setHours(0, 0, 0, 0);
            //console.log('this.myDate', d1, '==', t1);
            if (t1 < d1) {
                this.minTime = '01:01';
            }
            else if (t1 == d1) {
                var c = new Date();
                this.minTime = c.getHours() + ":" + c.getMinutes();
                this.myTime = c.getHours() + ":" + c.getMinutes();
            }
        }
    };
    DateTimePage.prototype.localTimeConversionWithOutSecondsIn24Format = function (takeDatetime) {
        var d = new Date(takeDatetime);
        var time = d.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });
        return time;
    };
    DateTimePage.prototype.getOnlyDate = function (takeDatetime) {
        return takeDatetime.split('T')[0];
    };
    DateTimePage.prototype.savaData = function () {
        if (this.roundTripDiv) {
            if (this.form.value.return_date < this.form.value.journey_date) {
                this.alertService.presentAlert('Return date should not be less than start date');
                return false;
            }
            // if (this.form.value.return_time < this.form.value.journey_time) {
            //   this.alertService.presentAlert('Return time should not be less than start time');
            //   return false;
            // }
            this.val1['return_date'] = this.form.value.return_date ? this.getOnlyDate(this.form.value.return_date) : '';
            // this.val1['return_time'] = this.form.value.return_time ? this.localTimeConversionWithOutSecondsIn24Format(this.form.value.return_time) : '';
        }
        this.val1['traval_date'] = this.form.value.journey_date ? this.getOnlyDate(this.form.value.journey_date) : '';
        // this.val1['traval_time'] = this.form.value.journey_time ? this.localTimeConversionWithOutSecondsIn24Format(this.form.value.journey_time) : '';
        this.storage.set('route_search_parameters', this.val1);
        this.router.navigateByUrl('bus-route-details');
    };
    DateTimePage.prototype.dateSelected = function (event) {
        //console.log('event', event);
    };
    DateTimePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-date-time',
            template: __webpack_require__(/*! ./date-time.page.html */ "./src/app/layout/office-pool-car-service/date-time/date-time.page.html"),
            styles: [__webpack_require__(/*! ./date-time.page.scss */ "./src/app/layout/office-pool-car-service/date-time/date-time.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _core_services_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"],
            _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_5__["Device"],
            _core_services_modal_service__WEBPACK_IMPORTED_MODULE_6__["ModalService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Events"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"],
            _core_services_loading_service__WEBPACK_IMPORTED_MODULE_9__["LoadingService"],
            _core_services_alert_service__WEBPACK_IMPORTED_MODULE_10__["AlertService"]])
    ], DateTimePage);
    return DateTimePage;
}());



/***/ })

}]);
//# sourceMappingURL=office-pool-car-service-date-time-date-time-module.js.map