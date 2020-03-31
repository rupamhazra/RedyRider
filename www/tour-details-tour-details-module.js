(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tour-details-tour-details-module"],{

/***/ "./src/app/layout/tour-travels/tour-details/tour-details.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/layout/tour-travels/tour-details/tour-details.module.ts ***!
  \*************************************************************************/
/*! exports provided: TourDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TourDetailsPageModule", function() { return TourDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tour_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tour-details.page */ "./src/app/layout/tour-travels/tour-details/tour-details.page.ts");
/* harmony import */ var _core_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/components/components.module */ "./src/app/core/components/components.module.ts");








var routes = [
    {
        path: '',
        component: _tour_details_page__WEBPACK_IMPORTED_MODULE_6__["TourDetailsPage"]
    }
];
var TourDetailsPageModule = /** @class */ (function () {
    function TourDetailsPageModule() {
    }
    TourDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _core_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
            ],
            declarations: [_tour_details_page__WEBPACK_IMPORTED_MODULE_6__["TourDetailsPage"]]
        })
    ], TourDetailsPageModule);
    return TourDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/layout/tour-travels/tour-details/tour-details.page.html":
/*!*************************************************************************!*\
  !*** ./src/app/layout/tour-travels/tour-details/tour-details.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<ion-content>\n  <ion-thumbnail class=\"_c_top_image\">\n      <img src=\"/assets/images/delhi.png\" alt=\"\"/>\n  </ion-thumbnail>\n  <ion-card class=\"sch-pool-car f-section\">\n    <ion-card-content class=\"f-icons\">\n      <h4 text-center>Delhi tour Package info</h4>\n      <div class=\"d-flex justify-content-center\" text-center>\n        <div class=\"border-bot\"></div>\n      </div>\n      <p text-center>Terms and Condition</p>\n      <div class=\"terms-of-package\">\n          <h6>Deluxe Package :</h6>\n          <div class=\"border-bottom-package\"></div>\n          <ul type=\"circle\" class=\"tour-travel-terms-as-per-package\">\n            <li>Total Number of people. (10 adult, 4 Children)</li>\n            <li>All total 8 days, 7 nights.</li>\n            <li>At these tour total 6places are as follows -</li>\n            <ol type=\"1\">\n              <li>Humayun's Tomb (2 days)</li>\n              <li>Hauz khas Village (1 day)</li>\n              <li>Red Fort (1 day)</li>\n              <li>Qutub Minar (2 days)</li>\n              <li>Golden Triangle (1 day)</li>\n              <li>National Zoological Park (1 day)</li>\n            </ol>\n            <li>Deluxe hotel. (Including bed rooms, kitchen, bathroom and balcony)</li>\n            <li>Including louding and fooding.</li>\n          </ul>\n      </div>\n      <div class=\"terms-of-package\">\n          <h6>Premium Package :</h6>\n          <div class=\"border-bottom-package\"></div>\n          <ul type=\"circle\" class=\"tour-travel-terms-as-per-package\">\n            <li>Total Number of people. (10 adult, 4 Children)</li>\n            <li>All total 8 days, 7 nights.</li>\n            <li>At these tour total 6places are as follows -</li>\n            <ol type=\"1\">\n              <li>Humayun's Tomb (2 days)</li>\n              <li>Hauz khas Village (1 day)</li>\n              <li>Red Fort (1 day)</li>\n              <li>Qutub Minar (2 days)</li>\n              <li>Golden Triangle (1 day)</li>\n              <li>National Zoological Park (1 day)</li>\n            </ol>\n            <li>Deluxe hotel. (Including bed rooms, kitchen, bathroom and balcony)</li>\n            <li>Including louding and fooding.</li>\n          </ul>\n      </div>\n      <ion-button margin-top size=\"default\"  type=\"button\" expand=\"full\" (click)=\"requestNow()\">\n        Request Now\n        <ion-icon name=\"arrow-round-forward\"></ion-icon>\n      </ion-button>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/layout/tour-travels/tour-details/tour-details.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/layout/tour-travels/tour-details/tour-details.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".terms-of-package {\n  border-top: 1px dotted #eeeeee;\n  padding: 15px 0; }\n\n.border-bottom-package {\n  height: 1.5px;\n  width: 50px;\n  background: #000;\n  border-radius: 50%;\n  margin-top: 3px; }\n\n.tour-travel-terms-as-per-package {\n  padding: 10px 20px; }\n\n.tour-travel-terms-as-per-package li {\n  font-size: 13px;\n  color: #616161;\n  font-weight: 500;\n  letter-spacing: 0.5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ByaXlhbS9Eb2N1bWVudHMvUmVkeVJpZGVyL3NyYy9hcHAvbGF5b3V0L3RvdXItdHJhdmVscy90b3VyLWRldGFpbHMvdG91ci1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFrQiw4QkFBOEI7RUFBRSxlQUFlLEVBQUE7O0FBQ2pFO0VBQXVCLGFBQWE7RUFBRSxXQUFXO0VBQUUsZ0JBQWdCO0VBQUUsa0JBQWtCO0VBQUUsZUFBZSxFQUFBOztBQUN4RztFQUFrQyxrQkFBa0IsRUFBQTs7QUFDcEQ7RUFBcUMsZUFBZTtFQUFFLGNBQWM7RUFBRSxnQkFBZ0I7RUFBRSxxQkFBcUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xheW91dC90b3VyLXRyYXZlbHMvdG91ci1kZXRhaWxzL3RvdXItZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGVybXMtb2YtcGFja2FnZXtib3JkZXItdG9wOiAxcHggZG90dGVkICNlZWVlZWU7IHBhZGRpbmc6IDE1cHggMDt9XG4uYm9yZGVyLWJvdHRvbS1wYWNrYWdle2hlaWdodDogMS41cHg7IHdpZHRoOiA1MHB4OyBiYWNrZ3JvdW5kOiAjMDAwOyBib3JkZXItcmFkaXVzOiA1MCU7IG1hcmdpbi10b3A6IDNweDt9XG4udG91ci10cmF2ZWwtdGVybXMtYXMtcGVyLXBhY2thZ2V7cGFkZGluZzogMTBweCAyMHB4O31cbi50b3VyLXRyYXZlbC10ZXJtcy1hcy1wZXItcGFja2FnZSBsaXtmb250LXNpemU6IDEzcHg7IGNvbG9yOiAjNjE2MTYxOyBmb250LXdlaWdodDogNTAwOyBsZXR0ZXItc3BhY2luZzogMC41cHg7fSJdfQ== */"

/***/ }),

/***/ "./src/app/layout/tour-travels/tour-details/tour-details.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/layout/tour-travels/tour-details/tour-details.page.ts ***!
  \***********************************************************************/
/*! exports provided: TourDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TourDetailsPage", function() { return TourDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/modal.service */ "./src/app/core/services/modal.service.ts");
/* harmony import */ var _tour_details_package_tour_details_package_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tour-details-package/tour-details-package.page */ "./src/app/layout/tour-travels/tour-details-package/tour-details-package.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var TourDetailsPage = /** @class */ (function () {
    function TourDetailsPage(modalService, route, router) {
        this.modalService = modalService;
        this.route = route;
        this.router = router;
    }
    TourDetailsPage.prototype.ngOnInit = function () {
        this.tourId = this.route.snapshot.params['tour_id'];
    };
    TourDetailsPage.prototype.requestNow = function () {
        var data = { "tour_id": this.tourId };
        this.modalService.openModal(_tour_details_package_tour_details_package_page__WEBPACK_IMPORTED_MODULE_3__["TourDetailsPackagePage"], data, '_c_modal_css');
    };
    TourDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tour-details',
            template: __webpack_require__(/*! ./tour-details.page.html */ "./src/app/layout/tour-travels/tour-details/tour-details.page.html"),
            styles: [__webpack_require__(/*! ./tour-details.page.scss */ "./src/app/layout/tour-travels/tour-details/tour-details.page.scss"), __webpack_require__(/*! ../tour-travels.page.scss */ "./src/app/layout/tour-travels/tour-travels.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], TourDetailsPage);
    return TourDetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=tour-details-tour-details-module.js.map