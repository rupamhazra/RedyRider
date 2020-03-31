(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["office-pool-car-service-office-pool-car-service-module"],{

/***/ "./src/app/layout/office-pool-car-service/office-pool-car-service.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/layout/office-pool-car-service/office-pool-car-service.module.ts ***!
  \**********************************************************************************/
/*! exports provided: OfficePoolCarServicePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfficePoolCarServicePageModule", function() { return OfficePoolCarServicePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _office_pool_car_service_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./office-pool-car-service.page */ "./src/app/layout/office-pool-car-service/office-pool-car-service.page.ts");
/* harmony import */ var _core_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/components/components.module */ "./src/app/core/components/components.module.ts");








var routes = [
    {
        path: '',
        component: _office_pool_car_service_page__WEBPACK_IMPORTED_MODULE_6__["OfficePoolCarServicePage"]
    }
];
var OfficePoolCarServicePageModule = /** @class */ (function () {
    function OfficePoolCarServicePageModule() {
    }
    OfficePoolCarServicePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _core_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            declarations: [_office_pool_car_service_page__WEBPACK_IMPORTED_MODULE_6__["OfficePoolCarServicePage"]]
        })
    ], OfficePoolCarServicePageModule);
    return OfficePoolCarServicePageModule;
}());



/***/ }),

/***/ "./src/app/layout/office-pool-car-service/office-pool-car-service.page.html":
/*!**********************************************************************************!*\
  !*** ./src/app/layout/office-pool-car-service/office-pool-car-service.page.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<ion-content>\n  <div class=\"personal_details\">\n    <div class=\"inner_div\">\n      <div class=\"personal-fields\">\n        <h5>Pick and Drop location :: </h5>\n        <p>Help us to know where you want to go.</p>\n        <hr class=\"hr-border\">\n      </div>\n      <form  [formGroup]=\"form\" novalidate>\n        <ion-grid>\n          <ion-row class=\"ion-justify-content-center rstar-row-margin\">\n            <ion-col class=\"ion-align-self-center\">\n              <ion-item text-wrap>\n                <ion-label position=\"floating\">Pick up location</ion-label>\n                <ion-textarea formControlName=\"pick_up\" type=\"text\" inputmode=\"text\" readonly=\"true\" (click)=\"openSearchPage('pickup')\" value=\"{{select_pickup_location}}\" style=\"font-size: 13px;\" required></ion-textarea>\n                <ion-icon ios=\"ios-locate\" md=\"md-locate\" slot=\"start\"></ion-icon>\n              </ion-item>\n              <ion-card (click)=\"changeLocation(select_pickup_location,select_drop_location)\">\n                <ion-icon name=\"swap\"></ion-icon>\n              </ion-card>\n              <ion-item text-wrap>\n                <ion-label position=\"floating\">Drop location</ion-label>\n                <ion-textarea  formControlName=\"drop_off\" type=\"text\" inputmode=\"text\" value=\"{{select_drop_location}}\" (click)=\"openSearchPage('drop')\" style=\"font-size: 13px;\" required></ion-textarea>\n                <ion-icon ios=\"ios-locate\" md=\"md-locate\" slot=\"start\"></ion-icon>\n              </ion-item>\n              <div class=\"radio-button-personal\">\n                <p>Select which trip want to choose</p>\n                <ion-radio-group formControlName=\"trip\" >\n                  <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\n                    <ion-item lines=\"none\" class=\"rstar-ion-item\">\n                      <ion-label class=\"rstar-label-bg rstar-label\">\n                        <ion-icon name=\"redo\" class=\"rotate-90\"></ion-icon><br>\n                        <ion-radio slot=\"start\" value=\"0\" class=\"rstar-radio\" required (ionSelect)=\"tripSelect('0')\"></ion-radio>Single Trip\n                      </ion-label>\n                    </ion-item>\n                    <ion-item lines=\"none\" class=\"rstar-ion-item\">\n                      <ion-label class=\"rstar-label-bg rstar-label\">\n                        <ion-icon ios=\"ios-sync\" md=\"md-sync\" class=\"ion-looping\"></ion-icon><br>\n                        <ion-radio slot=\"start\" value=\"1\" class=\"rstar-radio\" required (ionSelect)=\"tripSelect('1')\"></ion-radio>Round Trip\n                      </ion-label>\n                    </ion-item>\n                  </div>\n                </ion-radio-group>\n              </div>\n              <div *ngIf=\"singleTripDiv\">\n                <p style=\"margin: 0px;color:#B0B1AF;\">Start Date</p>\n                <ion-item class=\"rstar-border rstar-item rstar-margin-top rstar-ion-item\">\n                  <ion-datetime min=\"{{minDate}}\"  displayFormat=\"YYYY-MM-DD\" max=\"{{maxDate}}\" placeholder=\"YYYY-MM-DD\" formControlName=\"journey_date\" class=\"rstar-date\" [(ngModel)]=\"myDate\" required></ion-datetime>\n                </ion-item>\n              </div>\n              <div *ngIf=\"roundTripDiv\">\n                <p style=\"margin: 0px;color:#B0B1AF;\">Return Date</p>\n                <ion-item class=\"rstar-border rstar-item rstar-margin-top rstar-ion-item\">\n                  <ion-datetime min=\"{{minDate}}\"  displayFormat=\"YYYY-MM-DD\" max=\"{{maxDate}}\" placeholder=\"YYYY-MM-DD\" formControlName=\"return_date\" class=\"rstar-date\" [(ngModel)]=\"myReturnDate\"  required ></ion-datetime>\n                </ion-item>\n              </div>\n              \n              <ion-button class=\"ion-margin-top\"  [disabled]=\"net_connection_check || form.invalid\"  size=\"large\" type=\"button\" expand=\"full\" (click)=\"savaData()\">\n                Save & Continue \n                <ion-icon name=\"arrow-round-forward\"></ion-icon>\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </form>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/layout/office-pool-car-service/office-pool-car-service.page.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/layout/office-pool-car-service/office-pool-car-service.page.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-heading h1 {\n  text-transform: uppercase;\n  letter-spacing: 1px; }\n\n.small-content {\n  color: #B0B1AF;\n  letter-spacing: 0.5px; }\n\n.inner_div {\n  margin-left: 15px;\n  margin-right: 15px; }\n\n.cs-title-padding {\n  margin-left: 0px; }\n\n.radio-button-personal {\n  padding-bottom: 10px;\n  padding-top: 15px; }\n\n.radio-button-personal p {\n  font-size: 17px;\n  color: #B0B1AF;\n  margin: 0px; }\n\n.btn-group, .btn-group-vertical {\n  position: relative;\n  display: inline-flex;\n  vertical-align: middle; }\n\n.rstar-label {\n  display: inline-block;\n  font-weight: 400;\n  text-align: center;\n  vertical-align: middle;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  background-color: initial;\n  border: 1px solid;\n  border-bottom-color: initial;\n  padding: .375rem .75rem;\n  font-size: 0.8rem;\n  line-height: 1.5;\n  border-radius: .25rem;\n  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out; }\n\n.rstar-radio {\n  opacity: 0;\n  height: 0;\n  margin: 0; }\n\nion-icon {\n  font-size: 26px; }\n\n.item-radio-checked ion-label {\n  color: #fff;\n  background-color: #0A5999;\n  border-color: #0A5999; }\n\n.rstar-ion-item {\n  --padding-end: 0px;\n  --padding-bottom: 0px;\n  --padding-start: 0px;\n  --padding-top: 0px;\n  --inner-padding-bottom:0px;\n  --inner-padding-top:0px;\n  --inner-padding-start:0px;\n  --inner-padding-end:2px; }\n\n.rotate-90 {\n  display: inline-block;\n  transform: rotate(242deg); }\n\n.rstar-row-margin {\n  margin-left: -10px; }\n\nion-card {\n  position: absolute;\n  top: 50px;\n  z-index: 1000;\n  right: -17px;\n  transform: rotate(90deg);\n  background: #B0B1AF;\n  color: #ffffffff;\n  border-radius: 24px;\n  padding: 5px; }\n\n.rstar-border {\n  border: 1px solid #757575; }\n\n.rstar-margin-bottom {\n  margin-bottom: 10px; }\n\n.rstar-margin-top {\n  margin-top: 10px; }\n\n.rstar-label-text {\n  margin-bottom: 10px;\n  font-size: 14px;\n  font-weight: 500; }\n\n.rstar-item {\n  max-height: 45px; }\n\n.rstar-time {\n  padding-left: 120px; }\n\n.rstar-date {\n  padding-left: 104px; }\n\nion-button {\n  padding: 6px 0 6px 0 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ByaXlhbS9Eb2N1bWVudHMvUmVkeVJpZGVyL3NyYy9hcHAvbGF5b3V0L29mZmljZS1wb29sLWNhci1zZXJ2aWNlL29mZmljZS1wb29sLWNhci1zZXJ2aWNlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUFnQix5QkFBeUI7RUFBRSxtQkFBbUIsRUFBQTs7QUFDOUQ7RUFBZ0IsY0FBYztFQUFFLHFCQUFxQixFQUFBOztBQUNyRDtFQUNJLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxvQkFBb0I7RUFDcEIsaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksZUFBZTtFQUNmLGNBQWM7RUFDZCxXQUFXLEVBQUE7O0FBR2Y7RUFDSSxrQkFBa0I7RUFFbEIsb0JBQW9CO0VBQ3BCLHNCQUFzQixFQUFBOztBQUkxQjtFQUNJLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFFaEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsNEJBQTRCO0VBQzVCLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQiw4SEFBOEgsRUFBQTs7QUFFbEk7RUFDSSxVQUFVO0VBQ1YsU0FBUztFQUNULFNBQVMsRUFBQTs7QUFFYjtFQUNJLGVBQWMsRUFBQTs7QUFFbEI7RUFDSSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLHFCQUFxQixFQUFBOztBQUV6QjtFQUNJLGtCQUFjO0VBQ2QscUJBQWlCO0VBQ2pCLG9CQUFnQjtFQUNoQixrQkFBYztFQUNkLDBCQUF1QjtFQUN2Qix1QkFBb0I7RUFDcEIseUJBQXNCO0VBQ3RCLHVCQUFvQixFQUFBOztBQUd4QjtFQUNJLHFCQUFxQjtFQUNyQix5QkFBeUIsRUFBQTs7QUFFM0I7RUFDRSxrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULGFBQWE7RUFDYixZQUFZO0VBQ1osd0JBQXdCO0VBQ3hCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFlBQVksRUFBQTs7QUFHZDtFQUNFLHlCQUF5QixFQUFBOztBQUkzQjtFQUNFLG1CQUFtQixFQUFBOztBQUVyQjtFQUNFLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0ksbUJBQWtCLEVBQUE7O0FBRXRCO0VBQ0UsbUJBQWtCLEVBQUE7O0FBRXRCO0VBQ0UsK0JBQStCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvb2ZmaWNlLXBvb2wtY2FyLXNlcnZpY2Uvb2ZmaWNlLXBvb2wtY2FyLXNlcnZpY2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi5hcHAtaGVhZGluZyBoMXt0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyBsZXR0ZXItc3BhY2luZzogMXB4O31cbi5zbWFsbC1jb250ZW50IHtjb2xvcjogI0IwQjFBRjsgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O31cbi5pbm5lcl9kaXZ7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuLmNzLXRpdGxlLXBhZGRpbmd7XG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgICAvL2ZvbnQtc2l6ZTogMjBweDtcbn1cbi5yYWRpby1idXR0b24tcGVyc29uYWx7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG59XG4ucmFkaW8tYnV0dG9uLXBlcnNvbmFsIHAge1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBjb2xvcjogI0IwQjFBRjtcbiAgICBtYXJnaW46IDBweDtcbiAgICBcbn1cbi5idG4tZ3JvdXAsIC5idG4tZ3JvdXAtdmVydGljYWwge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiAtbXMtaW5saW5lLWZsZXhib3g7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuXG4ucnN0YXItbGFiZWwge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIC8vY29sb3I6ICNmZmY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5pdGlhbDtcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiBpbml0aWFsO1xuICAgIHBhZGRpbmc6IC4zNzVyZW0gLjc1cmVtO1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xuICAgIHRyYW5zaXRpb246IGNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsYmFja2dyb3VuZC1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dDtcbn1cbi5yc3Rhci1yYWRpb3tcbiAgICBvcGFjaXR5OiAwO1xuICAgIGhlaWdodDogMDtcbiAgICBtYXJnaW46IDA7XG59XG5pb24taWNvbntcbiAgICBmb250LXNpemU6MjZweDtcbn1cbi5pdGVtLXJhZGlvLWNoZWNrZWQgaW9uLWxhYmVsIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEE1OTk5O1xuICAgIGJvcmRlci1jb2xvcjogIzBBNTk5OTtcbn1cbi5yc3Rhci1pb24taXRlbXtcbiAgICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xuICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgIC0tcGFkZGluZy10b3A6IDBweDtcbiAgICAtLWlubmVyLXBhZGRpbmctYm90dG9tOjBweDtcbiAgICAtLWlubmVyLXBhZGRpbmctdG9wOjBweDtcbiAgICAtLWlubmVyLXBhZGRpbmctc3RhcnQ6MHB4O1xuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6MnB4O1xuXG59XG4ucm90YXRlLTkwIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDI0MmRlZyk7XG4gIH1cbiAgLnJzdGFyLXJvdy1tYXJnaW57XG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xufVxuaW9uLWNhcmR7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTBweDtcbiAgICB6LWluZGV4OiAxMDAwO1xuICAgIHJpZ2h0OiAtMTdweDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgYmFja2dyb3VuZDogI0IwQjFBRjtcbiAgICBjb2xvcjogI2ZmZmZmZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gICAgcGFkZGluZzogNXB4O1xufVxuXG4gIC5yc3Rhci1ib3JkZXJ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzc1NzU3NTtcbiAgICBcbiAgICBcbiAgfVxuICAucnN0YXItbWFyZ2luLWJvdHRvbXtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG4gIC5yc3Rhci1tYXJnaW4tdG9we1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbiAgLnJzdGFyLWxhYmVsLXRleHR7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuICBcbiAgLnJzdGFyLWl0ZW17XG4gICAgbWF4LWhlaWdodDogNDVweDtcbiAgfVxuICAucnN0YXItdGltZXtcbiAgICAgIHBhZGRpbmctbGVmdDoxMjBweDtcbiAgfVxuICAucnN0YXItZGF0ZXtcbiAgICBwYWRkaW5nLWxlZnQ6MTA0cHg7XG59XG5pb24tYnV0dG9ue1xuICBwYWRkaW5nOiA2cHggMCA2cHggMCAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/layout/office-pool-car-service/office-pool-car-service.page.ts":
/*!********************************************************************************!*\
  !*** ./src/app/layout/office-pool-car-service/office-pool-car-service.page.ts ***!
  \********************************************************************************/
/*! exports provided: OfficePoolCarServicePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfficePoolCarServicePage", function() { return OfficePoolCarServicePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_login_register_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/login-register.service */ "./src/app/core/services/login-register.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_services_toaster_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/services/toaster.service */ "./src/app/core/services/toaster.service.ts");
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/device/ngx */ "./node_modules/@ionic-native/device/ngx/index.js");
/* harmony import */ var _core_services_modal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/services/modal.service */ "./src/app/core/services/modal.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _core_services_loading_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/services/loading.service */ "./src/app/core/services/loading.service.ts");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "./node_modules/@ionic-native/native-geocoder/ngx/index.js");













var OfficePoolCarServicePage = /** @class */ (function () {
    function OfficePoolCarServicePage(loginRegisterService, router, route, formBuilder, toasterService, device, modalService, office_pool_car_service_event, storage, loadingService, geolocation, nativeGeocoder) {
        var _this = this;
        this.loginRegisterService = loginRegisterService;
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.toasterService = toasterService;
        this.device = device;
        this.modalService = modalService;
        this.office_pool_car_service_event = office_pool_car_service_event;
        this.storage = storage;
        this.loadingService = loadingService;
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.net_connection_check = false;
        this.minDate = new Date().toISOString();
        this.myDate = new Date().toISOString();
        this.geoencoderOptions = {
            useLocale: true,
            maxResults: 5
        };
        this.today = new Date();
        this.myReturnDate = new Date().toISOString();
        this.roundTripDiv = false;
        this.singleTripDiv = false;
        this.geolocation.getCurrentPosition({ enableHighAccuracy: true }).then(function (resp) {
            console.log('resp', resp);
            _this.getGeoencoder(resp.coords.latitude, resp.coords.longitude);
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    }
    OfficePoolCarServicePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        //console.log('check.................')
        this.storage.get('select_location').then(function (val) {
            //console.log('select_location_11', val)
            if (val) {
                _this.select_pickup_location = val['pickup_location'];
                _this.select_drop_location = val['drop_location'];
            }
        });
        this.storage.get('USER_INFO').then(function (val) {
            //console.log('USER_INFO', val)
            _this.userId = val.id;
        });
    };
    OfficePoolCarServicePage.prototype.ngOnInit = function () {
        var _this = this;
        this.office_pool_car_service_event.subscribe('check_net_connection', function (data) {
            if (data == 'connect')
                _this.net_connection_check = false;
            if (data == 'disconnect')
                _this.net_connection_check = true;
        });
        this.maxDate = this.today.getFullYear() + 1;
        this.form = this.formBuilder.group({
            pick_up: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            drop_off: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            trip: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            journey_date: [''],
            return_date: ['']
        });
    };
    //geocoder method to fetch address from coordinates passed as arguments
    OfficePoolCarServicePage.prototype.getGeoencoder = function (latitude, longitude) {
        var _this = this;
        this.nativeGeocoder.reverseGeocode(latitude, longitude, this.geoencoderOptions)
            .then(function (result) {
            _this.select_pickup_location = _this.generateAddress(result[0]);
        })
            .catch(function (error) {
            alert('Error getting location' + JSON.stringify(error));
        });
    };
    //Return Comma saperated address
    OfficePoolCarServicePage.prototype.generateAddress = function (addressObj) {
        var obj = [];
        var address = "";
        for (var key in addressObj) {
            obj.push(addressObj[key]);
        }
        obj.reverse();
        for (var val in obj) {
            if (obj[val].length)
                address += obj[val] + ', ';
        }
        return address.slice(0, -2);
    };
    OfficePoolCarServicePage.prototype.savaData = function () {
        var route_search_parameters = {
            'user_id': this.userId,
            'type': 'src',
            'pickup_location': this.form.value.pick_up,
            'drop_location': this.form.value.drop_off,
            'single_or_round': this.form.value.trip,
            'traval_date': this.form.value.journey_date,
            'traval_time': '',
            'return_date': this.form.value.return_date,
            'return_time': '',
            'cars_details': []
            // 'car_id': '',
            // 'route_master_id': ''
        };
        //console.log('route_search_parameters', route_search_parameters);
        this.storage.set('route_search_parameters', route_search_parameters);
        //this.loadingService.present();
        this.router.navigateByUrl('bus-route-details');
        //this.loadingService.dismiss();
    };
    OfficePoolCarServicePage.prototype.openSearchPage = function (type) {
        this.router.navigate(['search-location', { type: type }]);
    };
    OfficePoolCarServicePage.prototype.changeLocation = function (c_pickup_location, c_drop_location) {
        var _this = this;
        //console.log('checkkkkkkkkkkkkkkk');
        this.select_drop_location = c_pickup_location;
        this.select_pickup_location = c_drop_location;
        this.storage.get('select_location').then(function (val) {
            if (val != null) {
                //console.log('ifeeeeeeeeeeeee')
                var val1 = val;
                val1['pickup_location'] = c_drop_location;
                _this.storage.set('select_location', val1);
                val1['drop_location'] = c_pickup_location;
                _this.storage.set('select_location', val1);
            }
        });
    };
    OfficePoolCarServicePage.prototype.tripSelect = function (trip_val) {
        console.log('trip_val', trip_val);
        if (trip_val == '1') {
            this.roundTripDiv = true;
            this.singleTripDiv = true;
        }
        else {
            this.roundTripDiv = false;
            this.singleTripDiv = true;
        }
    };
    OfficePoolCarServicePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-office-pool-car-service',
            template: __webpack_require__(/*! ./office-pool-car-service.page.html */ "./src/app/layout/office-pool-car-service/office-pool-car-service.page.html"),
            styles: [__webpack_require__(/*! ./office-pool-car-service.page.scss */ "./src/app/layout/office-pool-car-service/office-pool-car-service.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_login_register_service__WEBPACK_IMPORTED_MODULE_3__["LoginRegisterService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _core_services_toaster_service__WEBPACK_IMPORTED_MODULE_5__["ToasterService"],
            _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_6__["Device"],
            _core_services_modal_service__WEBPACK_IMPORTED_MODULE_7__["ModalService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Events"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["Storage"],
            _core_services_loading_service__WEBPACK_IMPORTED_MODULE_10__["LoadingService"],
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_11__["Geolocation"],
            _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_12__["NativeGeocoder"]])
    ], OfficePoolCarServicePage);
    return OfficePoolCarServicePage;
}());



/***/ })

}]);
//# sourceMappingURL=office-pool-car-service-office-pool-car-service-module.js.map