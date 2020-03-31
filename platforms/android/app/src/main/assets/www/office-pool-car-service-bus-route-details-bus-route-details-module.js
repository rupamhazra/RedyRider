(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["office-pool-car-service-bus-route-details-bus-route-details-module"],{

/***/ "./src/app/layout/office-pool-car-service/bus-route-details/bus-route-details.module.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/layout/office-pool-car-service/bus-route-details/bus-route-details.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: BusRouteDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusRouteDetailsPageModule", function() { return BusRouteDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _bus_route_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bus-route-details.page */ "./src/app/layout/office-pool-car-service/bus-route-details/bus-route-details.page.ts");
/* harmony import */ var _core_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/components/components.module */ "./src/app/core/components/components.module.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");









var routes = [
    {
        path: '',
        component: _bus_route_details_page__WEBPACK_IMPORTED_MODULE_6__["BusRouteDetailsPage"]
    }
];
var BusRouteDetailsPageModule = /** @class */ (function () {
    function BusRouteDetailsPageModule() {
    }
    BusRouteDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _core_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"]
            ],
            declarations: [_bus_route_details_page__WEBPACK_IMPORTED_MODULE_6__["BusRouteDetailsPage"]]
        })
    ], BusRouteDetailsPageModule);
    return BusRouteDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/layout/office-pool-car-service/bus-route-details/bus-route-details.page.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/layout/office-pool-car-service/bus-route-details/bus-route-details.page.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<ion-progress-bar type=\"indeterminate\" class=\"progress_bar\" *ngIf=\"progress_bar\"></ion-progress-bar>\n<ion-content>\n    <div class=\"inner_div\">\n      <ion-card *ngIf=\"no_bus_saturday\">\n        <ion-text color=\"danger\" text-center>\n          <p style=\"padding: 10px;\">{{no_bus_saturday_msg}}</p>\n        </ion-text>\n      </ion-card>\n      <ion-card  *ngIf=\"dataList_show\">\n        <ion-text color=\"danger\" text-center>\n          <p>No car has been available </p>\n        </ion-text>\n      </ion-card>\n      <ion-virtual-scroll [items]=\"dataList\"  @fadein>\n        <ion-card class=\"card_back\" [disabled]=\"net_connection_check\" *virtualItem=\"let item\">\n            <ion-grid no-padding margin-top>\n              \n              <ion-row style=\"margin: 0 8px 0 10px;\">\n                <ion-col text-center style=\"padding: 0px;\" size=\"1\">\n                  <ion-img src=\"./assets/svg/logo.svg\" alt=\"redy rider\" style=\"width: 20px;margin-top: 5px;\"></ion-img>\n                  <ion-img src=\"./assets/svg/dot.svg\" alt=\".\" style=\"width: 3px;margin: 10px 0 10px 8px;\" ></ion-img>\n                  <ion-img src=\"./assets/svg/logo.svg\" alt=\"redy rider\" style=\"width: 20px;\"></ion-img>\n                </ion-col>\n                <ion-col text-left style=\"padding: 0px;\" size=\"11\">\n                  <p class=\"p_location\">{{item.start_point}}</p>\n                  <p style=\"margin: 10px 0 10px 0;color:#02A1EB;\" (click)=\"viewRoute(item.route_master_id,item.start_point_id,item.end_point_id)\"><fa-icon [icon]=\"['fas','route']\" size=\"1x\" class=\"rstar-icon\"></fa-icon>&nbsp;View Route</p>\n                  <p class=\"p_location\">{{item.end_point}}</p>\n                </ion-col>\n              </ion-row>\n              <ion-row no-padding no-margin style=\"margin-left: 10px;\">\n                <ion-col no-padding no-margin>\n                  <ion-toolbar style=\"--min-height:35px;\">\n                    <ion-icon name=\"bus\" slot=\"start\"></ion-icon>\n                    <p style=\"margin:0px;\">&nbsp;{{item.carname}}</p>\n                    <p style=\"margin:0 26px 0px 0px;font-size: 13px;\" slot=\"end\"><fa-icon [icon]=\"['fas','chair']\" size=\"1x\" class=\"rstar-icon\"></fa-icon>&nbsp;&nbsp;Available Seats : <ion-text color=\"success\">{{item.available_seat}}</ion-text></p>\n                  </ion-toolbar>\n                  <p style=\"margin:-7px 0px 2px 24px;\">&nbsp;{{item.carno}}</p>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col size=\"6\">\n                  <p style=\"font-size: 19px;margin: 0 0 0 30px;color:#000000;\">{{item.start_time}}</p>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-toolbar style=\"--min-height:24px;\">\n                    <ion-icon name=\"alarm\" slot=\"start\" style=\"font-size: 20px;opacity: 0.6;\"></ion-icon>\n                    <p style=\"opacity: 0.6;margin: 0 0px 0 0;\">&nbsp; You will reach by</p>\n                  </ion-toolbar>\n                  <p style=\"margin:0px 0px 5px 27px;opacity: 0.6;font-size: 13px;\">{{item.arrival_time}}</p>\n                </ion-col>\n              </ion-row>\n              <ion-row no-padding no-margin>\n                <ion-col>\n                  <ion-button [ngClass]=\"{'car_selected': item.car_selected}\" size=\"large\" type=\"button\"  expand=\"block\"  (click)=\"reserveSeat(item,$event)\">\n                    SELECT THIS CAR\n                  </ion-button>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n        </ion-card>\n      </ion-virtual-scroll>\n      <!-- <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\" *ngIf=\"dataList!=0\">\n        <ion-infinite-scroll-content\n          loadingSpinner=\"bubbles\"\n          loadingText=\"Loading more route...\">\n        </ion-infinite-scroll-content>\n      </ion-infinite-scroll> -->\n    </div>\n</ion-content>\n<ion-footer class=\"footer-bus-route-details\" (click)=\"goToNextPage()\" *ngIf=\"!no_bus_saturday\">\n  <ion-toolbar>\n    <p style=\"margin: 0px 20px 0px 0px;color: white;text-align: center;\"><fa-icon [icon]=\"['fas','chair']\" size=\"1x\" class=\"rstar-icon\"></fa-icon> &nbsp;RESERVE YOUR SEAT</p>\n  </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/layout/office-pool-car-service/bus-route-details/bus-route-details.page.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/layout/office-pool-car-service/bus-route-details/bus-route-details.page.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".inner_div {\n  margin-left: 10px;\n  margin-right: 10px; }\n\nion-icon {\n  font-size: 24px; }\n\n.cs-p {\n  font-size: 13px;\n  font-weight: 500; }\n\n.background-gif ion-img {\n  border-bottom: 3px solid #33b5e5; }\n\n._c_col_back {\n  background: #0d47a1; }\n\n._c_p_text_color {\n  color: #757575;\n  letter-spacing: 1px; }\n\n.rstar-margin {\n  margin: 0 0 10px 0; }\n\n.rstar-icon {\n  font-size: 17px; }\n\n.top-div {\n  height: 50px !important; }\n\n.inner-scroll {\n  height: 50px !important; }\n\n.card_back {\n  background-color: #ffffff;\n  margin: 10px 0px 10px 0px; }\n\nion-toolbar {\n  --background:transparent; }\n\n.footer-bus-route-details {\n  background: #0A5999;\n  color: white; }\n\nion-button {\n  --background: #0ec254;\n  color: white;\n  --border-color: #0ec254;\n  font-size: 13px;\n  padding: 0px;\n  margin: 0px; }\n\n.car_selected {\n  --background: #0ec254;\n  color: white;\n  --border-color: #0ec254;\n  font-size: 13px;\n  padding: 0px;\n  margin: 0px;\n  opacity: 0.5; }\n\n.p_location {\n  margin: 0 0 0 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ByaXlhbS9Eb2N1bWVudHMvUmVkeVJpZGVyL3NyYy9hcHAvbGF5b3V0L29mZmljZS1wb29sLWNhci1zZXJ2aWNlL2J1cy1yb3V0ZS1kZXRhaWxzL2J1cy1yb3V0ZS1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxlQUFlLEVBQUE7O0FBRW5CO0VBQ0ksZUFBZTtFQUNmLGdCQUFnQixFQUFBOztBQUduQjtFQUF3QixnQ0FBZ0MsRUFBQTs7QUFDeEQ7RUFBYSxtQkFBbUIsRUFBQTs7QUFDaEM7RUFBaUIsY0FBYztFQUFFLG1CQUFtQixFQUFBOztBQUNwRDtFQUNJLGtCQUFpQixFQUFBOztBQUV0QjtFQUNJLGVBQWUsRUFBQTs7QUFFbkI7RUFDSSx1QkFBdUIsRUFBQTs7QUFFM0I7RUFDSSx1QkFBdUIsRUFBQTs7QUFFM0I7RUFDSSx5QkFBeUI7RUFDekIseUJBQXlCLEVBQUE7O0FBRTdCO0VBQ0ksd0JBQWEsRUFBQTs7QUFFakI7RUFDSSxtQkFBbUI7RUFDbkIsWUFBVyxFQUFBOztBQUVmO0VBQ0kscUJBQWE7RUFDYixZQUFZO0VBQ1osdUJBQWU7RUFDZixlQUFlO0VBQ2YsWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFFZjtFQUNJLHFCQUFhO0VBQ2IsWUFBWTtFQUNaLHVCQUFlO0VBQ2YsZUFBZTtFQUNmLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdoQjtFQUVJLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L29mZmljZS1wb29sLWNhci1zZXJ2aWNlL2J1cy1yb3V0ZS1kZXRhaWxzL2J1cy1yb3V0ZS1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbm5lcl9kaXZ7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMjRweDsgLy9QcmVmZXJyZWQgc2l6ZSBoZXJlXG59XG4uY3MtcHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuIC5iYWNrZ3JvdW5kLWdpZiBpb24taW1ne2JvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMzNiNWU1O31cbiAuX2NfY29sX2JhY2t7YmFja2dyb3VuZDogIzBkNDdhMTt9XG4gLl9jX3BfdGV4dF9jb2xvcntjb2xvcjogIzc1NzU3NTsgbGV0dGVyLXNwYWNpbmc6IDFweDt9XG4gLnJzdGFyLW1hcmdpbntcbiAgICAgbWFyZ2luOjAgMCAxMHB4IDA7XG4gfVxuLnJzdGFyLWljb257XG4gICAgZm9udC1zaXplOiAxN3B4O1xufVxuLnRvcC1kaXZ7XG4gICAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XG59XG4uaW5uZXItc2Nyb2xse1xuICAgIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xufVxuLmNhcmRfYmFja3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIG1hcmdpbjogMTBweCAwcHggMTBweCAwcHg7XG59XG5pb24tdG9vbGJhcntcbiAgICAtLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XG59XG4uZm9vdGVyLWJ1cy1yb3V0ZS1kZXRhaWxze1xuICAgIGJhY2tncm91bmQ6ICMwQTU5OTk7XG4gICAgY29sb3I6d2hpdGU7XG59XG5pb24tYnV0dG9ue1xuICAgIC0tYmFja2dyb3VuZDogIzBlYzI1NDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgLS1ib3JkZXItY29sb3I6ICMwZWMyNTQ7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBtYXJnaW46IDBweDtcbn1cbi5jYXJfc2VsZWN0ZWR7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMGVjMjU0O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAtLWJvcmRlci1jb2xvcjogIzBlYzI1NDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIG1hcmdpbjogMHB4O1xuICAgIG9wYWNpdHk6IDAuNTsgXG59XG5cbi5wX2xvY2F0aW9ue1xuICAgIC8vIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbWFyZ2luOiAwIDAgMCAwcHg7XG59XG5cblxuXG5cblxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/layout/office-pool-car-service/bus-route-details/bus-route-details.page.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/layout/office-pool-car-service/bus-route-details/bus-route-details.page.ts ***!
  \********************************************************************************************/
/*! exports provided: BusRouteDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusRouteDetailsPage", function() { return BusRouteDetailsPage; });
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
/* harmony import */ var _route_stoppage_modal_route_stoppage_modal_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../route-stoppage-modal/route-stoppage-modal.page */ "./src/app/layout/office-pool-car-service/route-stoppage-modal/route-stoppage-modal.page.ts");
/* harmony import */ var _core_services_office_pool_car_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../core/services/office-pool-car.service */ "./src/app/core/services/office-pool-car.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");














var BusRouteDetailsPage = /** @class */ (function () {
    function BusRouteDetailsPage(router, formBuilder, toasterService, device, modalService, bus_route_details_event, storage, loadingService, officePoolCarService) {
        var _this = this;
        this.router = router;
        this.formBuilder = formBuilder;
        this.toasterService = toasterService;
        this.device = device;
        this.modalService = modalService;
        this.bus_route_details_event = bus_route_details_event;
        this.storage = storage;
        this.loadingService = loadingService;
        this.officePoolCarService = officePoolCarService;
        this.net_connection_check = false;
        this.disabled_button = false;
        this.disabled_button_text = 'SELECT THIS CAR';
        this.car_count = 0;
        this.select_class = '';
        this.mode = '2';
        this.progress_bar = false;
        this.no_bus_saturday = false;
        this.no_bus_saturday_msg = '';
        this.progress_bar = true;
        this.storage.get('route_search_parameters').then(function (val) {
            var val1 = val;
            _this.mode = val.single_or_round;
            //console.log('route_search_parameters', val)
            val1['cars_details'] = [];
            _this.storage.set('route_search_parameters', val1);
            _this.request_data = val1;
            _this.routeDetails();
        });
    }
    BusRouteDetailsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.progress_bar = true;
        this.bus_route_details_event.subscribe('check_net_connection', function (data) {
            if (data == 'connect')
                _this.net_connection_check = false;
            if (data == 'disconnect')
                _this.net_connection_check = true;
        });
        this.form = this.formBuilder.group({
            journey_date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            journey_time: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    };
    BusRouteDetailsPage.prototype.routeDetails = function () {
        var _this = this;
        //console.log('this.request_data', this.request_data)
        this.officePoolCarService.commonSearchService(this.request_data).subscribe(function (res) {
            var dataList1 = [];
            //console.log('res.result', res.result.length)
            if (res.result === undefined || res.result === null || res.result.length == 0) {
                _this.dataList = [];
                _this.dataList_show = true;
                _this.progress_bar = false;
            }
            _this.dataList = res.result;
            _this.progress_bar = false;
            //}
        }, function (error) {
            //console.log("error::::" + error.error.msg);
            _this.progress_bar = false;
            _this.no_bus_saturday = true;
            _this.no_bus_saturday_msg = error.error.msg;
            //this.toasterService.showToast(error.error.msg, 2000)
        });
    };
    BusRouteDetailsPage.prototype.reserveSeat = function (item, event) {
        var _this = this;
        item.car_selected = !item.car_selected;
        this.storage.get('route_search_parameters').then(function (val) {
            var val1 = val;
            var cars = {
                'car_id': item.car_id,
                'route_master_id': item.route_master_id,
                'route_timing_id': item.route_timing_id,
                'journy_date': item.traval_date,
                'journy_time': item.traval_time,
                'seats': [],
                'start_point_id': item.start_point_id,
                'end_point_id': item.end_point_id
            };
            if (item.car_selected) {
                event.target.textContent = 'SELECTED';
                val1['cars_details'].push(cars);
            }
            else {
                event.target.textContent = 'SELECT THIS CAR';
                val1['cars_details'].pop(cars);
            }
            _this.car_count = val1['cars_details'].length;
            _this.storage.set('route_search_parameters', val1);
        });
    };
    BusRouteDetailsPage.prototype.goToNextPage = function () {
        // console.log('this.car_count', this.car_count)
        // console.log('this.round_mode', this.mode)
        if (this.mode == '1' && this.car_count < 2) {
            this.toasterService.showToast('Please select two cars for your round trip', 3000);
        }
        else if (this.mode == '0' && this.car_count < 1) {
            this.toasterService.showToast('Please select one car for your single trip', 3000);
        }
        else {
            //console.log('OKKLKKKKK', this.mode)
            this.router.navigateByUrl('/seat-layout-details');
        }
    };
    BusRouteDetailsPage.prototype.loadData = function (event) {
        // setTimeout(() => {
        //   this.routeDetails();
        //   // for (let i = 0; i < 3; i++) {
        //   //   this.dataList.push("Item number " + (this.dataList.length + 1));
        //   // }
        //   event.target.complete();
        //   this.virtualScroll.checkEnd();
        //   if (this.dataList.length == 15) {
        //     event.target.disabled = true;
        //   }
        // }, 500);
    };
    BusRouteDetailsPage.prototype.toggleInfiniteScroll = function () {
        this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
    };
    BusRouteDetailsPage.prototype.viewRoute = function (route_id, start_point, end_point) {
        var data = { 'route_id': route_id, 'from_which_page': 'bus-route-details-page', 'start_point': start_point, 'end_point': end_point };
        this.modalService.openModal(_route_stoppage_modal_route_stoppage_modal_page__WEBPACK_IMPORTED_MODULE_10__["RouteStoppageModalPage"], data, 'stoppage_modal_css');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonInfiniteScroll"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonInfiniteScroll"])
    ], BusRouteDetailsPage.prototype, "infiniteScroll", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonVirtualScroll"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonVirtualScroll"])
    ], BusRouteDetailsPage.prototype, "virtualScroll", void 0);
    BusRouteDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bus-route-details',
            template: __webpack_require__(/*! ./bus-route-details.page.html */ "./src/app/layout/office-pool-car-service/bus-route-details/bus-route-details.page.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["trigger"])('fadein', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["style"])({ opacity: 0 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["transition"])('void => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["style"])({ opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["animate"])('900ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["style"])({ opacity: 1 }))
                    ])
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["trigger"])('slidelefttitle', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["transition"])('void => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["style"])({ opacity: 0, transform: 'translateX(150%)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["animate"])('900ms 300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["style"])({ transform: 'translateX(0%)', opacity: 1 }))
                    ])
                ]),
            ],
            styles: [__webpack_require__(/*! ./bus-route-details.page.scss */ "./src/app/layout/office-pool-car-service/bus-route-details/bus-route-details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _core_services_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"],
            _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_5__["Device"],
            _core_services_modal_service__WEBPACK_IMPORTED_MODULE_6__["ModalService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Events"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"],
            _core_services_loading_service__WEBPACK_IMPORTED_MODULE_9__["LoadingService"],
            _core_services_office_pool_car_service__WEBPACK_IMPORTED_MODULE_11__["OfficePoolCarService"]])
    ], BusRouteDetailsPage);
    return BusRouteDetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=office-pool-car-service-bus-route-details-bus-route-details-module.js.map