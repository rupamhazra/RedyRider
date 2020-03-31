(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tour-details-package-form-tour-details-package-form-module"],{

/***/ "./src/app/layout/tour-travels/tour-details-package-form/tour-details-package-form.module.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/layout/tour-travels/tour-details-package-form/tour-details-package-form.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: TourDetailsPackageFormPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TourDetailsPackageFormPageModule", function() { return TourDetailsPackageFormPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tour_details_package_form_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tour-details-package-form.page */ "./src/app/layout/tour-travels/tour-details-package-form/tour-details-package-form.page.ts");
/* harmony import */ var _core_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/components/components.module */ "./src/app/core/components/components.module.ts");








var routes = [
    {
        path: '',
        component: _tour_details_package_form_page__WEBPACK_IMPORTED_MODULE_6__["TourDetailsPackageFormPage"]
    }
];
var TourDetailsPackageFormPageModule = /** @class */ (function () {
    function TourDetailsPackageFormPageModule() {
    }
    TourDetailsPackageFormPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _core_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
            ],
            declarations: [_tour_details_package_form_page__WEBPACK_IMPORTED_MODULE_6__["TourDetailsPackageFormPage"]]
        })
    ], TourDetailsPackageFormPageModule);
    return TourDetailsPackageFormPageModule;
}());



/***/ }),

/***/ "./src/app/layout/tour-travels/tour-details-package-form/tour-details-package-form.page.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/layout/tour-travels/tour-details-package-form/tour-details-package-form.page.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header *ngIf=\"!thankyou_div_visible\"></app-header>\n<ion-content class=\"form_content\" *ngIf=\"!thankyou_div_visible\">\n  <div>\n    <ion-thumbnail class=\"_c_top_image\">\n        <img src=\"/assets/images/delhi.png\" alt=\"\"/>\n    </ion-thumbnail>\n    <ion-card class=\"sch-pool-car f-section\">\n      <ion-card-content class=\"f-icons\">\n        <h4 text-center>Golden Package (Delhi)</h4>\n        <div class=\"d-flex justify-content-center\" text-center>\n          <div class=\"border-bot\"></div>\n        </div>\n        <p text-center>Please fill the form</p>\n        <form [formGroup]=\"form\"  novalidate>\n          <ion-item>\n            <ion-label position=\"floating\">How Many People - </ion-label>\n            <ion-input autofocus=\"on\" formControlName=\"how_many_people\" type=\"number\" clearInput=\"true\" color=\"primary\" ngModel required></ion-input>\n          </ion-item>\n          <ion-item>\n              <ion-label position=\"floating\">Number of adult -</ion-label>\n              <ion-input autofocus=\"on\" formControlName=\"no_of_adult\" type=\"number\" clearInput=\"true\" color=\"primary\" ngModel required></ion-input>\n          </ion-item>  \n          <ion-item>\n              <ion-label position=\"floating\">Number of Children -</ion-label>\n              <ion-input autofocus=\"on\" formControlName=\"no_of_child\" type=\"number\" clearInput=\"true\" color=\"primary\" ngModel required></ion-input>\n          </ion-item>\n          <ion-item>\n              <ion-label position=\"floating\">Pick up location -</ion-label>\n              <ion-input autofocus=\"on\" formControlName=\"pick_up_location\" type=\"text\" clearInput=\"true\" color=\"primary\" ngModel required></ion-input>\n          </ion-item>\n          <ion-button margin-top size=\"default\"  type=\"button\" expand=\"full\" (click)=\"submitRequestForm()\">\n              Submit\n            <ion-icon name=\"arrow-round-forward\"></ion-icon>\n          </ion-button>\n        </form>\n      </ion-card-content>\n    </ion-card>\n  </div>\n  \n</ion-content>\n<ion-content *ngIf=\"thankyou_div_visible\" text-center>\n    <div class=\"middle-of-the-page-whole\">\n        <div class=\"border-circle-asd\">\n          <h2><i class=\"fas fa-check fa-3x\"></i></h2>\n          <h5>Thank You</h5>\n          <p>Your submission has been received.</p>\n          <ion-text color=\"primary\" (click)=\"goHome()\" style=\"font-weight: bold;\">BACK TO HOME PAGE</ion-text>\n        </div>\n    </div>\n</ion-content>\n\n\n"

/***/ }),

/***/ "./src/app/layout/tour-travels/tour-details-package-form/tour-details-package-form.page.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/layout/tour-travels/tour-details-package-form/tour-details-package-form.page.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form_content {\n  --background:  url('/assets/images/map-image.png') no-repeat center center / cover; }\n\n.sch-pool-car {\n  margin: 70px 15px 35px;\n  background: #ffffff; }\n\n.f-icons {\n  margin-top: 55px; }\n\n.f-section {\n  border: 2px solid #eeeeee;\n  background: #ffffff; }\n\n.f-section h4 {\n  color: #212121;\n  margin-bottom: 10px;\n  font-weight: 600;\n  text-transform: uppercase;\n  font-size: 19px; }\n\n.f-section p {\n  color: #757575;\n  font-size: 13px;\n  margin: 25px 0 10px 0; }\n\n.f-section:hover .border-bot {\n  background: #3F729B;\n  transition: all 0.3s linear; }\n\n.select-tour-sector {\n  padding: 15px 0; }\n\n.f-section .select-tour-sector p {\n  color: #212121;\n  font-size: 13px;\n  margin: 10px 0;\n  font-weight: 700;\n  text-transform: uppercase; }\n\n.border-bot {\n  height: 3px;\n  width: 100px;\n  border-radius: 50%;\n  background: #000; }\n\n.d-flex {\n  display: flex !important; }\n\n.justify-content-center {\n  justify-content: center !important; }\n\n._c_col_padd {\n  padding: 10px; }\n\n._c_top_image {\n  --size: 100px;\n  position: absolute;\n  z-index: 10000000;\n  top: 18px;\n  left: 35%;\n  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.7);\n  --border-radius:50%!important; }\n\n.middle-of-the-page-whole {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%); }\n\n.border-circle-asd h2 {\n  color: #007E33;\n  text-transform: uppercase;\n  border: 2px solid #007E33;\n  padding: 40px 20px;\n  border-radius: 50%;\n  text-align: center; }\n\n.border-circle-asd h5 {\n  color: #616161;\n  text-transform: uppercase;\n  text-align: center;\n  padding-top: 15px;\n  letter-spacing: 1px; }\n\n.border-circle-asd p {\n  color: #757575;\n  font-size: 13px;\n  text-align: center;\n  padding-top: 5px; }\n\n.border-circle-asd h6 a {\n  color: #0d47a1;\n  font-size: 14px; }\n\n.border-circle-asd h6 {\n  text-transform: uppercase;\n  text-align: center;\n  padding-top: 25px; }\n\n._c_icon_size {\n  font-size: 3em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ByaXlhbS9Eb2N1bWVudHMvUmVkeVJpZGVyL3NyYy9hcHAvbGF5b3V0L3RvdXItdHJhdmVscy90b3VyLWRldGFpbHMtcGFja2FnZS1mb3JtL3RvdXItZGV0YWlscy1wYWNrYWdlLWZvcm0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0ZBQWEsRUFBQTs7QUFFakI7RUFBYyxzQkFBc0I7RUFBQyxtQkFBbUIsRUFBQTs7QUFDeEQ7RUFBUyxnQkFBZ0IsRUFBQTs7QUFDekI7RUFBVyx5QkFBeUI7RUFBRSxtQkFBbUIsRUFBQTs7QUFDekQ7RUFBYyxjQUFjO0VBQUUsbUJBQW1CO0VBQUUsZ0JBQWU7RUFDOUQseUJBQXlCO0VBQUUsZUFBZSxFQUFBOztBQUM5QztFQUFhLGNBQWM7RUFBRSxlQUFlO0VBQUUscUJBQXFCLEVBQUE7O0FBQ25FO0VBQTZCLG1CQUFtQjtFQUFFLDJCQUEyQixFQUFBOztBQUM3RTtFQUFvQixlQUFlLEVBQUE7O0FBQ25DO0VBQWlDLGNBQWM7RUFBRSxlQUFlO0VBQUUsY0FBYztFQUFFLGdCQUFnQjtFQUFFLHlCQUF5QixFQUFBOztBQUM3SDtFQUFZLFdBQVc7RUFBRSxZQUFZO0VBQUUsa0JBQWtCO0VBQUUsZ0JBQWdCLEVBQUE7O0FBQzNFO0VBQXdDLHdCQUF1QixFQUFBOztBQUMvRDtFQUF5RCxrQ0FBaUMsRUFBQTs7QUFFMUY7RUFBYSxhQUFZLEVBQUE7O0FBQ3pCO0VBQ0ksYUFBTztFQUNQLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsU0FBUztFQUNULFNBQVM7RUFDVCx5Q0FBeUM7RUFDekMsNkJBQWdCLEVBQUE7O0FBR3BCO0VBQTBCLGtCQUFrQjtFQUFFLFFBQVE7RUFBRSxTQUFTO0VBQUUsZ0NBQStCLEVBQUE7O0FBQ2xHO0VBQXNCLGNBQWM7RUFBRSx5QkFBeUI7RUFBRSx5QkFBeUI7RUFBRSxrQkFBa0I7RUFBRSxrQkFBa0I7RUFBRSxrQkFBa0IsRUFBQTs7QUFDdEo7RUFBc0IsY0FBYztFQUFFLHlCQUF5QjtFQUFFLGtCQUFrQjtFQUFFLGlCQUFpQjtFQUFFLG1CQUFtQixFQUFBOztBQUMzSDtFQUFxQixjQUFjO0VBQUUsZUFBZTtFQUFFLGtCQUFrQjtFQUFFLGdCQUFnQixFQUFBOztBQUMxRjtFQUF3QixjQUFjO0VBQUUsZUFBZSxFQUFBOztBQUN2RDtFQUFzQix5QkFBeUI7RUFBRSxrQkFBa0I7RUFBRSxpQkFBaUIsRUFBQTs7QUFDdEY7RUFDSSxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvdG91ci10cmF2ZWxzL3RvdXItZGV0YWlscy1wYWNrYWdlLWZvcm0vdG91ci1kZXRhaWxzLXBhY2thZ2UtZm9ybS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybV9jb250ZW50e1xuICAgIC0tYmFja2dyb3VuZDogIHVybCgnL2Fzc2V0cy9pbWFnZXMvbWFwLWltYWdlLnBuZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXI7XG59XG4uc2NoLXBvb2wtY2Fye21hcmdpbjogNzBweCAxNXB4IDM1cHg7YmFja2dyb3VuZDogI2ZmZmZmZjt9XG4uZi1pY29uc3ttYXJnaW4tdG9wOiA1NXB4O31cbi5mLXNlY3Rpb257Ym9yZGVyOiAycHggc29saWQgI2VlZWVlZTsgYmFja2dyb3VuZDogI2ZmZmZmZjt9XG4uZi1zZWN0aW9uIGg0e2NvbG9yOiAjMjEyMTIxOyBtYXJnaW4tYm90dG9tOiAxMHB4OyBmb250LXdlaWdodDo2MDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgZm9udC1zaXplOiAxOXB4O31cbi5mLXNlY3Rpb24gcHtjb2xvcjogIzc1NzU3NTsgZm9udC1zaXplOiAxM3B4OyBtYXJnaW46IDI1cHggMCAxMHB4IDA7fVxuLmYtc2VjdGlvbjpob3ZlciAuYm9yZGVyLWJvdHtiYWNrZ3JvdW5kOiAjM0Y3MjlCOyB0cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXI7fVxuLnNlbGVjdC10b3VyLXNlY3RvcntwYWRkaW5nOiAxNXB4IDA7fVxuLmYtc2VjdGlvbiAuc2VsZWN0LXRvdXItc2VjdG9yIHB7Y29sb3I6ICMyMTIxMjE7IGZvbnQtc2l6ZTogMTNweDsgbWFyZ2luOiAxMHB4IDA7IGZvbnQtd2VpZ2h0OiA3MDA7IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7fVxuLmJvcmRlci1ib3R7aGVpZ2h0OiAzcHg7IHdpZHRoOiAxMDBweDsgYm9yZGVyLXJhZGl1czogNTAlOyBiYWNrZ3JvdW5kOiAjMDAwO31cbi5kLWZsZXgge2Rpc3BsYXk6IC1tcy1mbGV4Ym94IWltcG9ydGFudDtkaXNwbGF5OiBmbGV4IWltcG9ydGFudDt9XG4uanVzdGlmeS1jb250ZW50LWNlbnRlciB7LW1zLWZsZXgtcGFjazogY2VudGVyIWltcG9ydGFudDtqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciFpbXBvcnRhbnQ7XG59XG4uX2NfY29sX3BhZGR7cGFkZGluZzoxMHB4O31cbi5fY190b3BfaW1hZ2V7XG4gICAgLS1zaXplOiAxMDBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMTAwMDAwMDA7XG4gICAgdG9wOiAxOHB4O1xuICAgIGxlZnQ6IDM1JTtcbiAgICBib3gtc2hhZG93OiAwIDAgMjBweCAwIHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgICAtLWJvcmRlci1yYWRpdXM6NTAlIWltcG9ydGFudDtcbn1cblxuLm1pZGRsZS1vZi10aGUtcGFnZS13aG9sZXtwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogNTAlOyBsZWZ0OiA1MCU7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7fVxuLmJvcmRlci1jaXJjbGUtYXNkIGgye2NvbG9yOiAjMDA3RTMzOyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyBib3JkZXI6IDJweCBzb2xpZCAjMDA3RTMzOyBwYWRkaW5nOiA0MHB4IDIwcHg7IGJvcmRlci1yYWRpdXM6IDUwJTsgdGV4dC1hbGlnbjogY2VudGVyO31cbi5ib3JkZXItY2lyY2xlLWFzZCBoNXtjb2xvcjogIzYxNjE2MTsgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgdGV4dC1hbGlnbjogY2VudGVyOyBwYWRkaW5nLXRvcDogMTVweDsgbGV0dGVyLXNwYWNpbmc6IDFweDt9XG4uYm9yZGVyLWNpcmNsZS1hc2QgcHtjb2xvcjogIzc1NzU3NTsgZm9udC1zaXplOiAxM3B4OyB0ZXh0LWFsaWduOiBjZW50ZXI7IHBhZGRpbmctdG9wOiA1cHg7fVxuLmJvcmRlci1jaXJjbGUtYXNkIGg2IGF7Y29sb3I6ICMwZDQ3YTE7IGZvbnQtc2l6ZTogMTRweDsgfVxuLmJvcmRlci1jaXJjbGUtYXNkIGg2e3RleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IHRleHQtYWxpZ246IGNlbnRlcjsgcGFkZGluZy10b3A6IDI1cHg7fVxuLl9jX2ljb25fc2l6ZXtcbiAgICBmb250LXNpemU6IDNlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/layout/tour-travels/tour-details-package-form/tour-details-package-form.page.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/layout/tour-travels/tour-details-package-form/tour-details-package-form.page.ts ***!
  \*************************************************************************************************/
/*! exports provided: TourDetailsPackageFormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TourDetailsPackageFormPage", function() { return TourDetailsPackageFormPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var TourDetailsPackageFormPage = /** @class */ (function () {
    function TourDetailsPackageFormPage(formBuilder, router) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.thankyou_div_visible = false;
    }
    TourDetailsPackageFormPage.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            how_many_people: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            no_of_adult: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            pick_up_location: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            no_of_child: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    TourDetailsPackageFormPage.prototype.submitRequestForm = function () {
        console.log('check');
        this.thankyou_div_visible = true;
    };
    TourDetailsPackageFormPage.prototype.goHome = function () {
        this.router.navigateByUrl('/home');
    };
    TourDetailsPackageFormPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tour-details-package-form',
            template: __webpack_require__(/*! ./tour-details-package-form.page.html */ "./src/app/layout/tour-travels/tour-details-package-form/tour-details-package-form.page.html"),
            styles: [__webpack_require__(/*! ./tour-details-package-form.page.scss */ "./src/app/layout/tour-travels/tour-details-package-form/tour-details-package-form.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], TourDetailsPackageFormPage);
    return TourDetailsPackageFormPage;
}());



/***/ })

}]);
//# sourceMappingURL=tour-details-package-form-tour-details-package-form-module.js.map