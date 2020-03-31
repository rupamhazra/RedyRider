(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["school-pool-car-school-pool-car-module"],{

/***/ "./src/app/layout/school-pool-car/school-pool-car.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/layout/school-pool-car/school-pool-car.module.ts ***!
  \******************************************************************/
/*! exports provided: SchoolPoolCarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolPoolCarPageModule", function() { return SchoolPoolCarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _school_pool_car_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./school-pool-car.page */ "./src/app/layout/school-pool-car/school-pool-car.page.ts");
/* harmony import */ var _core_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/components/components.module */ "./src/app/core/components/components.module.ts");








var routes = [
    {
        path: '',
        component: _school_pool_car_page__WEBPACK_IMPORTED_MODULE_6__["SchoolPoolCarPage"]
    }
];
var SchoolPoolCarPageModule = /** @class */ (function () {
    function SchoolPoolCarPageModule() {
    }
    SchoolPoolCarPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _core_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
            ],
            declarations: [_school_pool_car_page__WEBPACK_IMPORTED_MODULE_6__["SchoolPoolCarPage"]]
        })
    ], SchoolPoolCarPageModule);
    return SchoolPoolCarPageModule;
}());



/***/ }),

/***/ "./src/app/layout/school-pool-car/school-pool-car.page.html":
/*!******************************************************************!*\
  !*** ./src/app/layout/school-pool-car/school-pool-car.page.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header *ngIf=\"!thankyou_div_visible\"></app-header>\n<ion-content class=\"form_content\" *ngIf=\"!thankyou_div_visible\">\n  <div>\n    <div class=\"_c_top_image f-icons\">\n        <i class=\"fas fa-bus-alt fa-3x\"></i>\n    </div>\n    <ion-card class=\"sch-pool-car f-section\">\n      <ion-card-content class=\"f-icons\">\n        <h4 text-center>School pool car</h4>\n        <div class=\"d-flex justify-content-center\" text-center>\n          <div class=\"border-bot\"></div>\n        </div>\n        <p text-center>Please fill the form</p>\n        <form [formGroup]=\"form\"  novalidate>\n          <ion-item>\n            <ion-label position=\"floating\">School Name -</ion-label>\n            <ion-input autofocus=\"on\" formControlName=\"school_name\" type=\"text\" clearInput=\"true\" color=\"primary\" ngModel required></ion-input>\n          </ion-item>\n          <ion-item>\n              <ion-label position=\"floating\">Branch -</ion-label>\n              <ion-input autofocus=\"on\" formControlName=\"branch\" type=\"text\" clearInput=\"true\" color=\"primary\" ngModel required></ion-input>\n          </ion-item>  \n          <ion-item>\n              <ion-label position=\"floating\">Number of Candidates -</ion-label>\n              <ion-input autofocus=\"on\" formControlName=\"no_of_canditate\" type=\"number\" clearInput=\"true\" color=\"primary\" ngModel required></ion-input>\n          </ion-item>\n          <ion-item>\n              <ion-label position=\"floating\">Pick up location -</ion-label>\n              <ion-input autofocus=\"on\" formControlName=\"pick_up_location\" type=\"text\" clearInput=\"true\" color=\"primary\" ngModel required></ion-input>\n          </ion-item>\n          <ion-button margin-top size=\"default\"  type=\"button\" expand=\"full\" (click)=\"submitRequestForm()\">\n              Submit\n            <ion-icon name=\"arrow-round-forward\"></ion-icon>\n          </ion-button>\n        </form>\n      </ion-card-content>\n    </ion-card>\n  </div>\n  \n</ion-content>\n<ion-content *ngIf=\"thankyou_div_visible\" text-center>\n    <div class=\"middle-of-the-page-whole\">\n        <div class=\"border-circle-asd\">\n          <h2><i class=\"fas fa-check fa-3x\"></i></h2>\n          <h5>Thank You</h5>\n          <p>Your submission has been received.</p>\n          <ion-text color=\"primary\" (click)=\"goHome()\" style=\"font-weight: bold;\">BACK TO HOME PAGE</ion-text>\n        </div>\n    </div>\n</ion-content>\n\n\n"

/***/ }),

/***/ "./src/app/layout/school-pool-car/school-pool-car.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/layout/school-pool-car/school-pool-car.page.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form_content {\n  --background:  url('/assets/images/map-image.png') no-repeat center center / cover; }\n\n.sch-pool-car {\n  margin: 70px 15px 35px;\n  background: #ffffff; }\n\n.f-icons {\n  margin-top: 55px; }\n\n.f-section {\n  border: 2px solid #eeeeee;\n  background: #ffffff; }\n\n.f-section h4 {\n  color: #212121;\n  margin-bottom: 10px;\n  font-weight: 600;\n  text-transform: uppercase;\n  font-size: 19px; }\n\n.f-section p {\n  color: #757575;\n  font-size: 13px;\n  margin: 25px 0 10px 0; }\n\n.f-section:hover .border-bot {\n  background: #3F729B;\n  transition: all 0.3s linear; }\n\n.select-tour-sector {\n  padding: 15px 0; }\n\n.f-section .select-tour-sector p {\n  color: #212121;\n  font-size: 13px;\n  margin: 10px 0;\n  font-weight: 700;\n  text-transform: uppercase; }\n\n.border-bot {\n  height: 3px;\n  width: 100px;\n  border-radius: 50%;\n  background: #000; }\n\n.d-flex {\n  display: flex !important; }\n\n.justify-content-center {\n  justify-content: center !important; }\n\n._c_col_padd {\n  padding: 10px; }\n\n._c_top_image {\n  position: absolute;\n  z-index: 10000000;\n  top: -33px;\n  left: 35%;\n  --border-radius: 50%!important; }\n\n.middle-of-the-page-whole {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%); }\n\n.border-circle-asd h2 {\n  color: #007E33;\n  text-transform: uppercase;\n  border: 2px solid #007E33;\n  padding: 40px 20px;\n  border-radius: 50%;\n  text-align: center; }\n\n.border-circle-asd h5 {\n  color: #616161;\n  text-transform: uppercase;\n  text-align: center;\n  padding-top: 15px;\n  letter-spacing: 1px; }\n\n.border-circle-asd p {\n  color: #757575;\n  font-size: 13px;\n  text-align: center;\n  padding-top: 5px; }\n\n.border-circle-asd h6 a {\n  color: #0d47a1;\n  font-size: 14px; }\n\n.border-circle-asd h6 {\n  text-transform: uppercase;\n  text-align: center;\n  padding-top: 25px; }\n\n._c_icon_size {\n  font-size: 3em; }\n\n.f-icons i {\n  border: 2px solid #3880ff;\n  border-radius: 50px;\n  padding: 25px;\n  margin-bottom: 25px;\n  background: #3880ff;\n  color: #ffffff;\n  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ByaXlhbS9Eb2N1bWVudHMvUmVkeVJpZGVyL3NyYy9hcHAvbGF5b3V0L3NjaG9vbC1wb29sLWNhci9zY2hvb2wtcG9vbC1jYXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0ZBQWEsRUFBQTs7QUFFakI7RUFBYyxzQkFBc0I7RUFBQyxtQkFBbUIsRUFBQTs7QUFDeEQ7RUFBUyxnQkFBZ0IsRUFBQTs7QUFDekI7RUFBVyx5QkFBeUI7RUFBRSxtQkFBbUIsRUFBQTs7QUFDekQ7RUFBYyxjQUFjO0VBQUUsbUJBQW1CO0VBQUUsZ0JBQWU7RUFDOUQseUJBQXlCO0VBQUUsZUFBZSxFQUFBOztBQUM5QztFQUFhLGNBQWM7RUFBRSxlQUFlO0VBQUUscUJBQXFCLEVBQUE7O0FBQ25FO0VBQTZCLG1CQUFtQjtFQUFFLDJCQUEyQixFQUFBOztBQUM3RTtFQUFvQixlQUFlLEVBQUE7O0FBQ25DO0VBQWlDLGNBQWM7RUFBRSxlQUFlO0VBQUUsY0FBYztFQUFFLGdCQUFnQjtFQUFFLHlCQUF5QixFQUFBOztBQUM3SDtFQUFZLFdBQVc7RUFBRSxZQUFZO0VBQUUsa0JBQWtCO0VBQUUsZ0JBQWdCLEVBQUE7O0FBQzNFO0VBQXdDLHdCQUF1QixFQUFBOztBQUMvRDtFQUF5RCxrQ0FBaUMsRUFBQTs7QUFFMUY7RUFBYSxhQUFZLEVBQUE7O0FBQ3pCO0VBQ0ksa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsU0FBUztFQUNULDhCQUFnQixFQUFBOztBQUVwQjtFQUEwQixrQkFBa0I7RUFBRSxRQUFRO0VBQUUsU0FBUztFQUFFLGdDQUErQixFQUFBOztBQUNsRztFQUFzQixjQUFjO0VBQUUseUJBQXlCO0VBQUUseUJBQXlCO0VBQUUsa0JBQWtCO0VBQUUsa0JBQWtCO0VBQUUsa0JBQWtCLEVBQUE7O0FBQ3RKO0VBQXNCLGNBQWM7RUFBRSx5QkFBeUI7RUFBRSxrQkFBa0I7RUFBRSxpQkFBaUI7RUFBRSxtQkFBbUIsRUFBQTs7QUFDM0g7RUFBcUIsY0FBYztFQUFFLGVBQWU7RUFBRSxrQkFBa0I7RUFBRSxnQkFBZ0IsRUFBQTs7QUFDMUY7RUFBd0IsY0FBYztFQUFFLGVBQWUsRUFBQTs7QUFDdkQ7RUFBc0IseUJBQXlCO0VBQUUsa0JBQWtCO0VBQUUsaUJBQWlCLEVBQUE7O0FBQ3RGO0VBQ0ksY0FBYyxFQUFBOztBQUdsQjtFQUFXLHlCQUF5QjtFQUFFLG1CQUFtQjtFQUFFLGFBQWE7RUFBRSxtQkFBbUI7RUFBRSxtQkFBbUI7RUFBRSxjQUFjO0VBQUUseUNBQXlDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvc2Nob29sLXBvb2wtY2FyL3NjaG9vbC1wb29sLWNhci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybV9jb250ZW50e1xuICAgIC0tYmFja2dyb3VuZDogIHVybCgnL2Fzc2V0cy9pbWFnZXMvbWFwLWltYWdlLnBuZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXI7XG59XG4uc2NoLXBvb2wtY2Fye21hcmdpbjogNzBweCAxNXB4IDM1cHg7YmFja2dyb3VuZDogI2ZmZmZmZjt9XG4uZi1pY29uc3ttYXJnaW4tdG9wOiA1NXB4O31cbi5mLXNlY3Rpb257Ym9yZGVyOiAycHggc29saWQgI2VlZWVlZTsgYmFja2dyb3VuZDogI2ZmZmZmZjt9XG4uZi1zZWN0aW9uIGg0e2NvbG9yOiAjMjEyMTIxOyBtYXJnaW4tYm90dG9tOiAxMHB4OyBmb250LXdlaWdodDo2MDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgZm9udC1zaXplOiAxOXB4O31cbi5mLXNlY3Rpb24gcHtjb2xvcjogIzc1NzU3NTsgZm9udC1zaXplOiAxM3B4OyBtYXJnaW46IDI1cHggMCAxMHB4IDA7fVxuLmYtc2VjdGlvbjpob3ZlciAuYm9yZGVyLWJvdHtiYWNrZ3JvdW5kOiAjM0Y3MjlCOyB0cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXI7fVxuLnNlbGVjdC10b3VyLXNlY3RvcntwYWRkaW5nOiAxNXB4IDA7fVxuLmYtc2VjdGlvbiAuc2VsZWN0LXRvdXItc2VjdG9yIHB7Y29sb3I6ICMyMTIxMjE7IGZvbnQtc2l6ZTogMTNweDsgbWFyZ2luOiAxMHB4IDA7IGZvbnQtd2VpZ2h0OiA3MDA7IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7fVxuLmJvcmRlci1ib3R7aGVpZ2h0OiAzcHg7IHdpZHRoOiAxMDBweDsgYm9yZGVyLXJhZGl1czogNTAlOyBiYWNrZ3JvdW5kOiAjMDAwO31cbi5kLWZsZXgge2Rpc3BsYXk6IC1tcy1mbGV4Ym94IWltcG9ydGFudDtkaXNwbGF5OiBmbGV4IWltcG9ydGFudDt9XG4uanVzdGlmeS1jb250ZW50LWNlbnRlciB7LW1zLWZsZXgtcGFjazogY2VudGVyIWltcG9ydGFudDtqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciFpbXBvcnRhbnQ7XG59XG4uX2NfY29sX3BhZGR7cGFkZGluZzoxMHB4O31cbi5fY190b3BfaW1hZ2V7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDEwMDAwMDAwO1xuICAgIHRvcDogLTMzcHg7XG4gICAgbGVmdDogMzUlO1xuICAgIC0tYm9yZGVyLXJhZGl1czogNTAlIWltcG9ydGFudDtcbn1cbi5taWRkbGUtb2YtdGhlLXBhZ2Utd2hvbGV7cG9zaXRpb246IGFic29sdXRlOyB0b3A6IDUwJTsgbGVmdDogNTAlOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO31cbi5ib3JkZXItY2lyY2xlLWFzZCBoMntjb2xvcjogIzAwN0UzMzsgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgYm9yZGVyOiAycHggc29saWQgIzAwN0UzMzsgcGFkZGluZzogNDBweCAyMHB4OyBib3JkZXItcmFkaXVzOiA1MCU7IHRleHQtYWxpZ246IGNlbnRlcjt9XG4uYm9yZGVyLWNpcmNsZS1hc2QgaDV7Y29sb3I6ICM2MTYxNjE7IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IHRleHQtYWxpZ246IGNlbnRlcjsgcGFkZGluZy10b3A6IDE1cHg7IGxldHRlci1zcGFjaW5nOiAxcHg7fVxuLmJvcmRlci1jaXJjbGUtYXNkIHB7Y29sb3I6ICM3NTc1NzU7IGZvbnQtc2l6ZTogMTNweDsgdGV4dC1hbGlnbjogY2VudGVyOyBwYWRkaW5nLXRvcDogNXB4O31cbi5ib3JkZXItY2lyY2xlLWFzZCBoNiBhe2NvbG9yOiAjMGQ0N2ExOyBmb250LXNpemU6IDE0cHg7IH1cbi5ib3JkZXItY2lyY2xlLWFzZCBoNnt0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB0ZXh0LWFsaWduOiBjZW50ZXI7IHBhZGRpbmctdG9wOiAyNXB4O31cbi5fY19pY29uX3NpemV7XG4gICAgZm9udC1zaXplOiAzZW07XG59XG5cbi5mLWljb25zIGl7Ym9yZGVyOiAycHggc29saWQgIzM4ODBmZjsgYm9yZGVyLXJhZGl1czogNTBweDsgcGFkZGluZzogMjVweDsgbWFyZ2luLWJvdHRvbTogMjVweDsgYmFja2dyb3VuZDogIzM4ODBmZjsgY29sb3I6ICNmZmZmZmY7IGJveC1zaGFkb3c6IDAgMCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpO31cblxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/layout/school-pool-car/school-pool-car.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/layout/school-pool-car/school-pool-car.page.ts ***!
  \****************************************************************/
/*! exports provided: SchoolPoolCarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolPoolCarPage", function() { return SchoolPoolCarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var SchoolPoolCarPage = /** @class */ (function () {
    function SchoolPoolCarPage(formBuilder, router) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.thankyou_div_visible = false;
    }
    SchoolPoolCarPage.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            school_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            branch: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            pick_up_location: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            no_of_canditate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    SchoolPoolCarPage.prototype.submitRequestForm = function () {
        console.log('check');
        this.thankyou_div_visible = true;
    };
    SchoolPoolCarPage.prototype.goHome = function () {
        this.router.navigateByUrl('/home');
    };
    SchoolPoolCarPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-school-pool-car',
            template: __webpack_require__(/*! ./school-pool-car.page.html */ "./src/app/layout/school-pool-car/school-pool-car.page.html"),
            styles: [__webpack_require__(/*! ./school-pool-car.page.scss */ "./src/app/layout/school-pool-car/school-pool-car.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SchoolPoolCarPage);
    return SchoolPoolCarPage;
}());



/***/ })

}]);
//# sourceMappingURL=school-pool-car-school-pool-car-module.js.map