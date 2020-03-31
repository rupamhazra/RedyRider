(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tour-travels-tour-travels-module"],{

/***/ "./src/app/layout/tour-travels/tour-travels-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/layout/tour-travels/tour-travels-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: TourTravelsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TourTravelsRoutingModule", function() { return TourTravelsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
    {
        path: 'tour-details/:tour_id',
        loadChildren: './tour-details/tour-details.module#TourDetailsPageModule'
    },
    {
        path: 'tour-details/tour-details-package-form/:tour_id/:package_id',
        loadChildren: './tour-details-package-form/tour-details-package-form.module#TourDetailsPackageFormPageModule'
    },
];
var TourTravelsRoutingModule = /** @class */ (function () {
    function TourTravelsRoutingModule() {
    }
    TourTravelsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TourTravelsRoutingModule);
    return TourTravelsRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/tour-travels/tour-travels.module.ts":
/*!************************************************************!*\
  !*** ./src/app/layout/tour-travels/tour-travels.module.ts ***!
  \************************************************************/
/*! exports provided: TourTravelsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TourTravelsPageModule", function() { return TourTravelsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tour_travels_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tour-travels.page */ "./src/app/layout/tour-travels/tour-travels.page.ts");
/* harmony import */ var _core_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/components/components.module */ "./src/app/core/components/components.module.ts");
/* harmony import */ var _tour_travels_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tour-travels-routing.module */ "./src/app/layout/tour-travels/tour-travels-routing.module.ts");









var routes = [
    {
        path: '',
        component: _tour_travels_page__WEBPACK_IMPORTED_MODULE_6__["TourTravelsPage"]
    }
];
var TourTravelsPageModule = /** @class */ (function () {
    function TourTravelsPageModule() {
    }
    TourTravelsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _core_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _tour_travels_routing_module__WEBPACK_IMPORTED_MODULE_8__["TourTravelsRoutingModule"]
            ],
            declarations: [_tour_travels_page__WEBPACK_IMPORTED_MODULE_6__["TourTravelsPage"]]
        })
    ], TourTravelsPageModule);
    return TourTravelsPageModule;
}());



/***/ }),

/***/ "./src/app/layout/tour-travels/tour-travels.page.html":
/*!************************************************************!*\
  !*** ./src/app/layout/tour-travels/tour-travels.page.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<ion-content>\n  <ion-thumbnail class=\"_c_top_image\">\n      <img src=\"/assets/images/logo-form.jpg\" alt=\"\"/>\n  </ion-thumbnail>\n  <ion-card class=\"sch-pool-car f-section\">\n    <ion-card-content class=\"f-icons\" text-center>\n      <h4>Tour and travel</h4>\n      <div class=\"d-flex justify-content-center\" text-center>\n        <div class=\"border-bot\"></div>\n      </div>\n      <p>Please tap any one of them</p>\n      <ion-grid no-padding>\n        <ion-row>\n          <ion-col text-center class=\"_c_col_padd\"> \n            <div class=\"select-tour-sector\" (click)=\"goDetailsPage(1)\">\n              <img src=\"/assets/images/delhi.png\" alt=\"\">\n              <p>Delhi</p>\n            </div> \n          </ion-col>\n          <ion-col text-center class=\"_c_col_padd\">\n            <div class=\"select-tour-sector\">\n              <img src=\"/assets/images/andaman.png\" alt=\"\">\n              <p>Andaman</p>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col text-center class=\"_c_col_padd\"> \n              <div class=\"select-tour-sector\">\n                <img src=\"/assets/images/benaras.png\" alt=\"\">\n                <p>Benaras</p>\n              </div> \n            </ion-col>\n            <ion-col text-center class=\"_c_col_padd\">\n              <div class=\"select-tour-sector\">\n                <img src=\"/assets/images/goa.png\" alt=\"\">\n                <p>Goa</p>\n              </div>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col text-center class=\"_c_col_padd\"> \n              <div class=\"select-tour-sector\">\n                <img src=\"/assets/images/kashmir.png\" alt=\"\">\n                <p>kashmir</p>\n              </div> \n            </ion-col>\n            <ion-col text-center class=\"_c_col_padd\">\n              <div class=\"select-tour-sector\">\n                <img src=\"/assets/images/kerala.png\" alt=\"\">\n                <p>kerala</p>\n              </div>\n            </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/layout/tour-travels/tour-travels.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/layout/tour-travels/tour-travels.page.ts ***!
  \**********************************************************/
/*! exports provided: TourTravelsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TourTravelsPage", function() { return TourTravelsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var TourTravelsPage = /** @class */ (function () {
    function TourTravelsPage(router) {
        this.router = router;
    }
    TourTravelsPage.prototype.ngOnInit = function () {
    };
    TourTravelsPage.prototype.goDetailsPage = function (tour_id) {
        console.log('tour_id', tour_id);
        this.router.navigateByUrl('/tour-travels/tour-details/' + tour_id);
    };
    TourTravelsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tour-travels',
            template: __webpack_require__(/*! ./tour-travels.page.html */ "./src/app/layout/tour-travels/tour-travels.page.html"),
            styles: [__webpack_require__(/*! ./tour-travels.page.scss */ "./src/app/layout/tour-travels/tour-travels.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], TourTravelsPage);
    return TourTravelsPage;
}());



/***/ })

}]);
//# sourceMappingURL=tour-travels-tour-travels-module.js.map