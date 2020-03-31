(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["office-pool-car-service-search-location-search-location-module"],{

/***/ "./src/app/layout/office-pool-car-service/search-location/search-location.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/layout/office-pool-car-service/search-location/search-location.module.ts ***!
  \******************************************************************************************/
/*! exports provided: SearchLocationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchLocationPageModule", function() { return SearchLocationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _search_location_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search-location.page */ "./src/app/layout/office-pool-car-service/search-location/search-location.page.ts");
/* harmony import */ var _core_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/components/components.module */ "./src/app/core/components/components.module.ts");








var routes = [
    {
        path: '',
        component: _search_location_page__WEBPACK_IMPORTED_MODULE_6__["SearchLocationPage"]
    }
];
var SearchLocationPageModule = /** @class */ (function () {
    function SearchLocationPageModule() {
    }
    SearchLocationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _core_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
            ],
            declarations: [_search_location_page__WEBPACK_IMPORTED_MODULE_6__["SearchLocationPage"]]
        })
    ], SearchLocationPageModule);
    return SearchLocationPageModule;
}());



/***/ }),

/***/ "./src/app/layout/office-pool-car-service/search-location/search-location.page.html":
/*!******************************************************************************************!*\
  !*** ./src/app/layout/office-pool-car-service/search-location/search-location.page.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar style=\"padding:0 10px 0px 0px;\">\n    <!-- <ion-searchbar type=\"text\" debounce=\"10000\" (ionInput)=\"getItems($event)\" placeholder=\"Enter pickup location\"></ion-searchbar> -->\n    <ion-searchbar type=\"text\" debounce=\"10000\"  (ionInput)=\"updateSearchResults($event)\" placeholder=\"Enter pickup location\" [(ngModel)]=\"search_address\"></ion-searchbar>\n    <ion-buttons slot=\"start\" class=\"border_button\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <div class=\"{{network_check_class}}\" *ngIf=\"network_check_class_show\" [style.background]=\"network_check_class=='disconnect'?'red':'#4CAF50'\">{{network_msg}}</div>\n</ion-header>\n<ion-content>\n  <ion-progress-bar type=\"indeterminate\" class=\"progress_bar\" *ngIf=\"progress_bar\"></ion-progress-bar>\n  <div *ngIf=\"quick_actions\" style=\"margin: 0 0 0 10px;\" (click)=\"currentLocation()\">\n    <p style=\"margin: 10px;\">Quick Selections</p>\n    <ion-grid no-padding no-margin>\n      <ion-row no-padding no-margin>\n        <ion-col size=\"5\" text-center>\n          <ion-card no-padding no-margin>\n            <ion-img src=\"./assets/svg/logo.svg\" alt=\"redy rider\" style=\"width: 30px;margin: 10px 0px 0px 50px;\"></ion-img>\n          <p>Current Location</p>\n        </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  \n    <ion-list [hidden]=\"autocompleteItems.length == 0\">\n      \n      <ion-item *ngFor=\"let item of autocompleteItems\" tappable lines=\"full\" class=\"item-class\" (click)=\"selectLocation(item.description,which_type_search)\"><p>{{ item.description  }}</p></ion-item>\n    </ion-list>\n    <!-- <ion-list *ngIf=\"isItemAvailable\">\n      <ion-item *ngFor=\"let item of items\" lines=\"full\" class=\"item-class\" (click)=\"selectLocation(item.location_name,which_type_search)\"><p>{{ item.location_name }}</p></ion-item>\n    </ion-list> -->\n    <ion-text color=\"danger\" *ngIf=\"isNoItemAvailable\" >\n      <p style=\"text-align: center;\">No location Found</p>\n    </ion-text>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/layout/office-pool-car-service/search-location/search-location.page.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/layout/office-pool-car-service/search-location/search-location.page.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-searchbar {\n  --background:white;\n  padding: 0px; }\n\nion-header {\n  --ion-background-color:#3880ff;\n  --ion-text-color:#fff; }\n\n.border_button {\n  height: 44px;\n  border: 1px solid #3880ff;\n  margin-right: 10px;\n  border-radius: 23px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ByaXlhbS9Eb2N1bWVudHMvUmVkeVJpZGVyL3NyYy9hcHAvbGF5b3V0L29mZmljZS1wb29sLWNhci1zZXJ2aWNlL3NlYXJjaC1sb2NhdGlvbi9zZWFyY2gtbG9jYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWE7RUFDYixZQUFXLEVBQUE7O0FBRWY7RUFDSSw4QkFBdUI7RUFDdkIscUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvb2ZmaWNlLXBvb2wtY2FyLXNlcnZpY2Uvc2VhcmNoLWxvY2F0aW9uL3NlYXJjaC1sb2NhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2VhcmNoYmFye1xuICAgIC0tYmFja2dyb3VuZDp3aGl0ZTtcbiAgICBwYWRkaW5nOjBweDtcbn1cbmlvbi1oZWFkZXJ7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojMzg4MGZmO1xuICAgIC0taW9uLXRleHQtY29sb3I6I2ZmZjtcbn1cbi5ib3JkZXJfYnV0dG9ue1xuICAgIGhlaWdodDogNDRweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzg4MGZmO1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyM3B4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/layout/office-pool-car-service/search-location/search-location.page.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/layout/office-pool-car-service/search-location/search-location.page.ts ***!
  \****************************************************************************************/
/*! exports provided: SearchLocationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchLocationPage", function() { return SearchLocationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _core_services_office_pool_car_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/office-pool-car.service */ "./src/app/core/services/office-pool-car.service.ts");
/* harmony import */ var _core_services_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/services/loading.service */ "./src/app/core/services/loading.service.ts");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "./node_modules/@ionic-native/native-geocoder/ngx/index.js");








var SearchLocationPage = /** @class */ (function () {
    function SearchLocationPage(router, route, storage, officePoolCarService, loadingService, zone, geolocation, nativeGeocoder) {
        this.router = router;
        this.route = route;
        this.storage = storage;
        this.officePoolCarService = officePoolCarService;
        this.loadingService = loadingService;
        this.zone = zone;
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.progress_bar = false;
        this.geoencoderOptions = {
            useLocale: true,
            maxResults: 5
        };
        this.search_address = '';
        this.back_button_visible = false;
        this.search_bar_visible = false;
        this.network_check_class = '';
        this.network_msg = '';
        this.network_check_class_show = false;
        this.isItemAvailable = false;
        this.quick_actions = true;
        this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
        this.autocomplete = { input: '' };
        this.autocompleteItems = [];
    }
    SearchLocationPage.prototype.ngOnInit = function () {
        this.which_type_search = this.route.snapshot.paramMap.get("type");
        if (this.which_type_search == 'drop') {
            this.quick_actions = false;
        }
    };
    SearchLocationPage.prototype.initializeItems = function (search_word) {
        var _this = this;
        if (search_word === void 0) { search_word = ''; }
        this.loadingService.dismiss();
        var request_data = { "type": "auto_search", "location": search_word };
        this.officePoolCarService.commonSearchService(request_data).subscribe(function (res) {
            console.log('result', res.result);
            _this.items = res.result;
        }, function (error) {
            console.log("error::::" + error.error);
            //this.openOtpModal();
            _this.loadingService.dismiss();
            //this.toasterService.showToast(error.error.msg, 2000)
        });
        //this.items = ["Ram", "gopi", "dravid"];
    };
    SearchLocationPage.prototype.getItems = function (ev) {
        var _this = this;
        var val = ev.target.value;
        console.log('val', val);
        var request_data = { "type": "auto_search", "location": val };
        this.officePoolCarService.commonSearchService(request_data).subscribe(function (res) {
            console.log('result', res.result);
            _this.isNoItemAvailable = false;
            _this.isItemAvailable = true;
            _this.items = res.result;
        }, function (error) {
            console.log("error::::" + error.error);
            _this.isItemAvailable = false;
            _this.isNoItemAvailable = true;
        });
    };
    SearchLocationPage.prototype.updateSearchResults = function (ev) {
        var _this = this;
        this.isItemAvailable = false;
        this.isNoItemAvailable = false;
        var val = ev.target.value;
        if (val == '') {
            this.autocompleteItems = [];
            this.quick_actions = true;
            return;
        }
        console.log('this.autocomplete.input', val);
        this.GoogleAutocomplete.getPlacePredictions({ input: val }, function (predictions, status) {
            _this.quick_actions = false;
            _this.autocompleteItems = [];
            _this.zone.run(function () {
                predictions.forEach(function (prediction) {
                    _this.autocompleteItems.push(prediction);
                });
            });
        });
    };
    SearchLocationPage.prototype.selectLocation = function (location, type) {
        var _this = this;
        this.storage.get('select_location').then(function (val) {
            if (val != null) {
                //console.log('ifeeeeeeeeeeeee')
                var val1 = val;
                if (type == 'pickup') {
                    val1['pickup_location'] = location;
                    _this.storage.set('select_location', val1);
                }
                else if (type == 'drop') {
                    val1['drop_location'] = location;
                    _this.storage.set('select_location', val1);
                }
            }
            else {
                //console.log('elseeeeeeeeeee')
                if (type == 'pickup') {
                    _this.storage.set('select_location', { 'pickup_location': location });
                }
                else if (type == 'drop') {
                    _this.storage.set('select_location', { 'drop_location': location });
                }
            }
        });
        this.router.navigateByUrl('office-pool-car-service');
    };
    // selectSearchResult(item, curren_location) {
    //   this.progress_bar = true;
    //   console.log(item)
    //   this.autocompleteItems = [];
    //   var request_data
    //   if (curren_location) {
    //     request_data = { "type": "nearest_location_latlong", "lat": curren_location.lat, "long": curren_location.long };
    //   } else {
    //     request_data = { "type": "nearest_location", "address": item.description };
    //   }
    //   this.officePoolCarService.commonSearchService(request_data).subscribe(
    //     res => {
    //       this.progress_bar = false;
    //       //this.autocompleteItems = [];
    //       console.log('result', res.result);
    //       this.isNoItemAvailable = false;
    //       this.isItemAvailable = true;
    //       this.items = res.result;
    //       this.quick_actions = false;
    //     },
    //     error => {
    //       this.progress_bar = false;
    //       console.log("error::::" + error.error);
    //       this.isItemAvailable = false
    //       this.isNoItemAvailable = true;
    //       this.quick_actions = false;
    //     }
    //   );
    // }
    SearchLocationPage.prototype.currentLocation = function () {
        var _this = this;
        console.log('sdffdfsdff');
        this.geolocation.getCurrentPosition({ enableHighAccuracy: true }).then(function (resp) {
            console.log('resp', resp);
            _this.getGeoencoder(resp.coords.latitude, resp.coords.longitude);
            _this.selectLocation(_this.search_address, 'pickup');
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    };
    //geocoder method to fetch address from coordinates passed as arguments
    SearchLocationPage.prototype.getGeoencoder = function (latitude, longitude) {
        var _this = this;
        this.nativeGeocoder.reverseGeocode(latitude, longitude, this.geoencoderOptions)
            .then(function (result) {
            _this.search_address = _this.generateAddress(result[0]);
            console.log('this.search_address', _this.search_address);
        })
            .catch(function (error) {
            alert('Error getting location' + JSON.stringify(error));
        });
    };
    //Return Comma saperated address
    SearchLocationPage.prototype.generateAddress = function (addressObj) {
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
    SearchLocationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search-location',
            template: __webpack_require__(/*! ./search-location.page.html */ "./src/app/layout/office-pool-car-service/search-location/search-location.page.html"),
            styles: [__webpack_require__(/*! ./search-location.page.scss */ "./src/app/layout/office-pool-car-service/search-location/search-location.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
            _core_services_office_pool_car_service__WEBPACK_IMPORTED_MODULE_4__["OfficePoolCarService"],
            _core_services_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__["Geolocation"],
            _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_7__["NativeGeocoder"]])
    ], SearchLocationPage);
    return SearchLocationPage;
}());



/***/ })

}]);
//# sourceMappingURL=office-pool-car-service-search-location-search-location-module.js.map