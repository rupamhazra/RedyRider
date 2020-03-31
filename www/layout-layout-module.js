(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layout-layout-module"],{

/***/ "./src/app/layout/layout-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/layout/layout-routing.module.ts ***!
  \*************************************************/
/*! exports provided: LayoutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutRoutingModule", function() { return LayoutRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layout_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout.page */ "./src/app/layout/layout.page.ts");




var routes = [
    {
        path: '',
        component: _layout_page__WEBPACK_IMPORTED_MODULE_3__["LayoutPage"],
        children: [
            //{ path: '', redirectTo: 'home' },
            { path: 'home', loadChildren: './home/home.module#HomePageModule' },
            { path: 'myaccount', loadChildren: './myaccount/myaccount.module#MyaccountPageModule' },
            { path: 'tour-travels', loadChildren: './tour-travels/tour-travels.module#TourTravelsPageModule' },
            { path: 'school-pool-car', loadChildren: './school-pool-car/school-pool-car.module#SchoolPoolCarPageModule' },
            { path: 'office-pool-car-service', loadChildren: './office-pool-car-service/office-pool-car-service.module#OfficePoolCarServicePageModule' },
            { path: 'date-time', loadChildren: './office-pool-car-service/date-time/date-time.module#DateTimePageModule' },
            { path: 'bus-route-details', loadChildren: './office-pool-car-service/bus-route-details/bus-route-details.module#BusRouteDetailsPageModule' },
            { path: 'seat-layout-details', loadChildren: './office-pool-car-service/seat-layout-details/seat-layout-details.module#SeatLayoutDetailsPageModule' },
            { path: 'booked-details', loadChildren: './office-pool-car-service/booked-details/booked-details.module#BookedDetailsPageModule' },
            { path: 'payment-details', loadChildren: './office-pool-car-service/payment-details/payment-details.module#PaymentDetailsPageModule' },
            { path: 'booking-thankyou', loadChildren: './office-pool-car-service/booking-thankyou/booking-thankyou.module#BookingThankyouPageModule' },
            { path: 'search-location', loadChildren: './office-pool-car-service/search-location/search-location.module#SearchLocationPageModule' },
            { path: 'route-stoppage-modal', loadChildren: './office-pool-car-service/route-stoppage-modal/route-stoppage-modal.module#RouteStoppageModalPageModule' },
        ]
    },
];
var LayoutRoutingModule = /** @class */ (function () {
    function LayoutRoutingModule() {
    }
    LayoutRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], LayoutRoutingModule);
    return LayoutRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/layout.module.ts":
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/*! exports provided: LayoutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutPageModule", function() { return LayoutPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _layout_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout.page */ "./src/app/layout/layout.page.ts");
/* harmony import */ var _layout_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout-routing.module */ "./src/app/layout/layout-routing.module.ts");







var LayoutPageModule = /** @class */ (function () {
    function LayoutPageModule() {
    }
    LayoutPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _layout_routing_module__WEBPACK_IMPORTED_MODULE_6__["LayoutRoutingModule"],
            ],
            declarations: [_layout_page__WEBPACK_IMPORTED_MODULE_5__["LayoutPage"]]
        })
    ], LayoutPageModule);
    return LayoutPageModule;
}());



/***/ }),

/***/ "./src/app/layout/layout.page.html":
/*!*****************************************!*\
  !*** ./src/app/layout/layout.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n    <ion-router-outlet></ion-router-outlet>\n</ion-content>"

/***/ }),

/***/ "./src/app/layout/layout.page.ts":
/*!***************************************!*\
  !*** ./src/app/layout/layout.page.ts ***!
  \***************************************/
/*! exports provided: LayoutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutPage", function() { return LayoutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var LayoutPage = /** @class */ (function () {
    function LayoutPage(router) {
        this.router = router;
    }
    LayoutPage.prototype.ngOnInit = function () {
        //console.log("current route",this.router.url)
    };
    LayoutPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./layout.page.html */ "./src/app/layout/layout.page.html"),
            styles: [__webpack_require__(/*! ./layout.page.scss */ "./src/app/layout/layout.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LayoutPage);
    return LayoutPage;
}());



/***/ })

}]);
//# sourceMappingURL=layout-layout-module.js.map