(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common-page-common-page-module"],{

/***/ "./src/app/common-page/common-page.module.ts":
/*!***************************************************!*\
  !*** ./src/app/common-page/common-page.module.ts ***!
  \***************************************************/
/*! exports provided: CommonPagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonPagePageModule", function() { return CommonPagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _common_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common-page.page */ "./src/app/common-page/common-page.page.ts");
/* harmony import */ var _core_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/components/components.module */ "./src/app/core/components/components.module.ts");








var routes = [
    {
        path: '',
        component: _common_page_page__WEBPACK_IMPORTED_MODULE_6__["CommonPagePage"]
    }
];
var CommonPagePageModule = /** @class */ (function () {
    function CommonPagePageModule() {
    }
    CommonPagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _core_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
            ],
            declarations: [_common_page_page__WEBPACK_IMPORTED_MODULE_6__["CommonPagePage"]]
        })
    ], CommonPagePageModule);
    return CommonPagePageModule;
}());



/***/ }),

/***/ "./src/app/common-page/common-page.page.html":
/*!***************************************************!*\
  !*** ./src/app/common-page/common-page.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<ion-content>\n  <div *ngIf=\"which_page=='contact-us'\">\n    contact us\n  </div>\n  <div *ngIf=\"which_page=='terms-conditions'\">\n    Terms & Conditions\n  </div>\n  <div *ngIf=\"which_page=='privacy-policy'\">\n    Privacy Policy\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/common-page/common-page.page.scss":
/*!***************************************************!*\
  !*** ./src/app/common-page/common-page.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi1wYWdlL2NvbW1vbi1wYWdlLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/common-page/common-page.page.ts":
/*!*************************************************!*\
  !*** ./src/app/common-page/common-page.page.ts ***!
  \*************************************************/
/*! exports provided: CommonPagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonPagePage", function() { return CommonPagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var CommonPagePage = /** @class */ (function () {
    function CommonPagePage(route) {
        this.route = route;
        this.which_page = '';
    }
    CommonPagePage.prototype.ngOnInit = function () {
        this.which_page = this.route.snapshot.params['which-page'];
    };
    CommonPagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-common-page',
            template: __webpack_require__(/*! ./common-page.page.html */ "./src/app/common-page/common-page.page.html"),
            styles: [__webpack_require__(/*! ./common-page.page.scss */ "./src/app/common-page/common-page.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], CommonPagePage);
    return CommonPagePage;
}());



/***/ })

}]);
//# sourceMappingURL=common-page-common-page-module.js.map