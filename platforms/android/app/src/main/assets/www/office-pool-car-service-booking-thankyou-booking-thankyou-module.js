(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["office-pool-car-service-booking-thankyou-booking-thankyou-module"],{

/***/ "./src/app/layout/office-pool-car-service/booking-thankyou/booking-thankyou.module.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/layout/office-pool-car-service/booking-thankyou/booking-thankyou.module.ts ***!
  \********************************************************************************************/
/*! exports provided: BookingThankyouPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingThankyouPageModule", function() { return BookingThankyouPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _booking_thankyou_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./booking-thankyou.page */ "./src/app/layout/office-pool-car-service/booking-thankyou/booking-thankyou.page.ts");
/* harmony import */ var _core_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/components/components.module */ "./src/app/core/components/components.module.ts");








var routes = [
    {
        path: '',
        component: _booking_thankyou_page__WEBPACK_IMPORTED_MODULE_6__["BookingThankyouPage"]
    }
];
var BookingThankyouPageModule = /** @class */ (function () {
    function BookingThankyouPageModule() {
    }
    BookingThankyouPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _core_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
            ],
            declarations: [_booking_thankyou_page__WEBPACK_IMPORTED_MODULE_6__["BookingThankyouPage"]]
        })
    ], BookingThankyouPageModule);
    return BookingThankyouPageModule;
}());



/***/ }),

/***/ "./src/app/layout/office-pool-car-service/booking-thankyou/booking-thankyou.page.html":
/*!********************************************************************************************!*\
  !*** ./src/app/layout/office-pool-car-service/booking-thankyou/booking-thankyou.page.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"inner_div\" margin>\n    <div *ngIf=\"payment_success\">\n      <ion-icon ios=\"ios-checkmark-circle-outline\" md=\"md-checkmark-circle-outline\" color=\"\" style=\"font-size: 140px;\"></ion-icon>\n      <h1>Booking Confirmed</h1>\n      <p *ngFor=\"let receipt of transactionDetails\">Receipt Number : <span style=\"font-weight: bold;\">{{receipt.invoice_no}}</span></p>\n    </div>\n    <div *ngIf=\"!payment_success\">\n      <ion-icon ios=\"ios-close-circle\" md=\"md-close-circle\" color=\"danger\" style=\"font-size: 140px;\"></ion-icon>\n      <p>Your payment has been declined</p>\n      <p>Please try again</p>\n    </div>\n    <ion-button margin-top size=\"large\"  type=\"button\" expand=\"full\" (click)=\"backToHomePage()\">\n        GOT IT!\n    </ion-button>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/layout/office-pool-car-service/booking-thankyou/booking-thankyou.page.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/layout/office-pool-car-service/booking-thankyou/booking-thankyou.page.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".inner_div {\n  margin-left: 15px;\n  margin-right: 15px;\n  margin-top: 100px;\n  text-align: center; }\n\nion-content {\n  --ion-background-color:#02A1EB;\n  --color:#ffffff; }\n\nion-button {\n  --background: white !important;\n  --color:#02A1EB !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ByaXlhbS9Eb2N1bWVudHMvUmVkeVJpZGVyL3NyYy9hcHAvbGF5b3V0L29mZmljZS1wb29sLWNhci1zZXJ2aWNlL2Jvb2tpbmctdGhhbmt5b3UvYm9va2luZy10aGFua3lvdS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSw4QkFBdUI7RUFDdkIsZUFBUSxFQUFBOztBQUVaO0VBQ0ksOEJBQWE7RUFDYiwwQkFBUSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L29mZmljZS1wb29sLWNhci1zZXJ2aWNlL2Jvb2tpbmctdGhhbmt5b3UvYm9va2luZy10aGFua3lvdS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5uZXJfZGl2e1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pb24tY29udGVudHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiMwMkExRUI7XG4gICAgLS1jb2xvcjojZmZmZmZmO1xufVxuaW9uLWJ1dHRvbntcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgLS1jb2xvcjojMDJBMUVCICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/layout/office-pool-car-service/booking-thankyou/booking-thankyou.page.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/layout/office-pool-car-service/booking-thankyou/booking-thankyou.page.ts ***!
  \******************************************************************************************/
/*! exports provided: BookingThankyouPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingThankyouPage", function() { return BookingThankyouPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");




var BookingThankyouPage = /** @class */ (function () {
    function BookingThankyouPage(router, storage) {
        var _this = this;
        this.router = router;
        this.storage = storage;
        this.payment_success = true;
        this.storage.get('transactionDetails').then(function (val) {
            _this.transactionDetails = val;
        });
    }
    BookingThankyouPage.prototype.ngOnInit = function () {
    };
    BookingThankyouPage.prototype.backToHomePage = function () {
        this.storage.remove('transactionDetails');
        this.router.navigateByUrl('home');
    };
    BookingThankyouPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-booking-thankyou',
            template: __webpack_require__(/*! ./booking-thankyou.page.html */ "./src/app/layout/office-pool-car-service/booking-thankyou/booking-thankyou.page.html"),
            styles: [__webpack_require__(/*! ./booking-thankyou.page.scss */ "./src/app/layout/office-pool-car-service/booking-thankyou/booking-thankyou.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]])
    ], BookingThankyouPage);
    return BookingThankyouPage;
}());



/***/ })

}]);
//# sourceMappingURL=office-pool-car-service-booking-thankyou-booking-thankyou-module.js.map