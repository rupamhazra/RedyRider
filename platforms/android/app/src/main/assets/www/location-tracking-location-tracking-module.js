(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["location-tracking-location-tracking-module"],{

/***/ "./src/app/layout/myaccount/location-tracking/location-tracking.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/layout/myaccount/location-tracking/location-tracking.module.ts ***!
  \********************************************************************************/
/*! exports provided: LocationTrackingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationTrackingPageModule", function() { return LocationTrackingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _location_tracking_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./location-tracking.page */ "./src/app/layout/myaccount/location-tracking/location-tracking.page.ts");
/* harmony import */ var _core_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/components/components.module */ "./src/app/core/components/components.module.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");









var routes = [
    {
        path: '',
        component: _location_tracking_page__WEBPACK_IMPORTED_MODULE_6__["LocationTrackingPage"]
    }
];
var LocationTrackingPageModule = /** @class */ (function () {
    function LocationTrackingPageModule() {
    }
    LocationTrackingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _core_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"]
            ],
            declarations: [_location_tracking_page__WEBPACK_IMPORTED_MODULE_6__["LocationTrackingPage"]]
        })
    ], LocationTrackingPageModule);
    return LocationTrackingPageModule;
}());



/***/ }),

/***/ "./src/app/layout/myaccount/location-tracking/location-tracking.page.html":
/*!********************************************************************************!*\
  !*** ./src/app/layout/myaccount/location-tracking/location-tracking.page.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"header-menu\">\n    <ion-buttons slot=\"start\" *ngIf=\"back_button_visible\" class=\"border_button\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title slot=\"start\" style=\"padding: 0px;\">\n        Tracking\n    </ion-title>\n    <ion-card class=\"qr_card\" slot=\"end\" type=\"button\" (click)=\"viewRoute()\">\n      <fa-icon [icon]=\"['fas','route']\" size=\"1x\" class=\"rstar-icon\" style=\"font-size: 21px;\"></fa-icon>\n      <p class=\"no_margin_p\" style=\"font-size:13px;\">Stoppage</p>\n    </ion-card>\n    <ion-card class=\"qr_card\" slot=\"end\" type=\"button\" (click)=\"scanQrCode()\">\n      <ion-icon ios=\"ios-qr-scanner\" md=\"md-qr-scanner\" style=\"font-size: 21px;\"></ion-icon>\n      <p class=\"no_margin_p\" style=\"font-size:13px;\">Scan QR</p>\n    </ion-card>\n\n  </ion-toolbar>\n</ion-header>\n<ion-progress-bar type=\"indeterminate\" class=\"progress_bar\" *ngIf=\"progress_bar\"></ion-progress-bar>\n<ion-content>\n  <div #map id=\"map\"></div>\n \n  <!-- <ion-button type=\"button\"  size=\"default\" color=\"tertiary\" (click)=\"startTracking()\">\n    <ion-icon name=\"locate\"></ion-icon>\n    Start\n  </ion-button>\n  <ion-button type=\"button\"  size=\"default\" color=\"tertiary\" (click)=\"stopTracking()\">\n      <ion-icon name=\"hand\"></ion-icon>\n      Stop\n  </ion-button>\n  <ion-button type=\"button\"  size=\"default\" color=\"tertiary\" (click)=\"GetLocations()\">\n    <ion-icon name=\"hand\"></ion-icon>\n    GetLocations\n</ion-button> -->\n\n  <!-- <ion-list-header><ion-label>Previous Tracks History</ion-label></ion-list-header>\n  <ion-grid>\n    \n      <ion-row *ngFor=\"let pos of locations | async\">\n\n        <ion-col>\n          <p>Lat: {{ pos.lat }}</p>\n          <p>Lng: {{ pos.lng }}</p>\n          <p>\n            {{ pos.timestamp | date:'short' }}\n          </p>\n          <p>\n            {{ pos.address}}\n          </p>\n        <button ion-button clear item-end (click)=\"showHistoryRoute(locations)\">View Route</button>\n      </ion-col>\n      </ion-row>\n\n     \n\n    \n  </ion-grid> -->\n</ion-content>\n<ion-footer class=\"footer-bus-route-details\">\n  <ion-grid no-margin no-paading>\n    <ion-row text-center no-margin>\n      <ion-col no-margin style=\"font-size: 20px;\" (click)=\"startTracking()\" *ngIf=\"!isTracking\">\n        <fa-icon [icon]=\"['fas','play-circle']\" size=\"1x\" class=\"rstar-icon\"></fa-icon>\n        START \n      </ion-col>\n    </ion-row>\n    <ion-row text-center no-margin>\n      <ion-col no-margin style=\"font-size: 20px;\" (click)=\"stopConfirm()\" *ngIf=\"isTracking\">\n        <fa-icon [icon]=\"['fas','stop-circle']\" size=\"1x\" class=\"rstar-icon\"></fa-icon>\n        STOP\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>"

/***/ }),

/***/ "./src/app/layout/myaccount/location-tracking/location-tracking.page.scss":
/*!********************************************************************************!*\
  !*** ./src/app/layout/myaccount/location-tracking/location-tracking.page.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#map {\n  width: 100%;\n  height: 550px; }\n\n#markerLayer img {\n  animation: pulse .5s infinite alternate;\n  -webkit-animation: pulse .5s infinite alternate;\n  transform-origin: center;\n  -webkit-transform-origin: center; }\n\n.footer-bus-route-details {\n  background: #0A5999;\n  color: white;\n  text-align: center;\n  padding: 0 10px 0 10px; }\n\nion-header {\n  --ion-background-color: linear-gradient(45deg, #0A5999 0%, #02A1EB 100%);\n  --ion-text-color:#fff; }\n\n.qr_card {\n  text-align: center;\n  background: transparent;\n  box-shadow: none;\n  color: white;\n  margin-right: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ByaXlhbS9Eb2N1bWVudHMvUmVkeVJpZGVyL3NyYy9hcHAvbGF5b3V0L215YWNjb3VudC9sb2NhdGlvbi10cmFja2luZy9sb2NhdGlvbi10cmFja2luZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXO0VBQ1gsYUFBYSxFQUFBOztBQUVqQjtFQUNJLHVDQUF1QztFQUN2QywrQ0FBK0M7RUFDL0Msd0JBQXdCO0VBQ3hCLGdDQUFnQyxFQUFBOztBQUdwQztFQUNJLG1CQUFtQjtFQUNuQixZQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHNCQUFzQixFQUFBOztBQU0xQjtFQUNJLHdFQUF1QjtFQUN2QixxQkFBaUIsRUFBQTs7QUFFckI7RUFDSSxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvbXlhY2NvdW50L2xvY2F0aW9uLXRyYWNraW5nL2xvY2F0aW9uLXRyYWNraW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYXAge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNTUwcHg7XG4gICAgfVxuI21hcmtlckxheWVyIGltZyB7XG4gICAgYW5pbWF0aW9uOiBwdWxzZSAuNXMgaW5maW5pdGUgYWx0ZXJuYXRlO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBwdWxzZSAuNXMgaW5maW5pdGUgYWx0ZXJuYXRlO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbiAgICB9XG5cbi5mb290ZXItYnVzLXJvdXRlLWRldGFpbHN7XG4gICAgYmFja2dyb3VuZDogIzBBNTk5OTtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMCAxMHB4IDAgMTBweDtcbn1cbi8vIGlvbi10b29sYmFye1xuLy8gICAgIC0tYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcbi8vICAgICAtLWNvbG9yOndoaXRlO1xuLy8gfVxuaW9uLWhlYWRlciB7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMEE1OTk5IDAlLCAjMDJBMUVCIDEwMCUpO1xuICAgIC0taW9uLXRleHQtY29sb3I6I2ZmZjtcbn1cbi5xcl9jYXJke1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/layout/myaccount/location-tracking/location-tracking.page.ts":
/*!******************************************************************************!*\
  !*** ./src/app/layout/myaccount/location-tracking/location-tracking.page.ts ***!
  \******************************************************************************/
/*! exports provided: LocationTrackingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationTrackingPage", function() { return LocationTrackingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "./node_modules/@ionic-native/native-geocoder/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _ionic_native_background_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/background-geolocation/ngx */ "./node_modules/@ionic-native/background-geolocation/ngx/index.js");
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "./node_modules/@ionic-native/local-notifications/ngx/index.js");
/* harmony import */ var _core_services_office_pool_car_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../core/services/office-pool-car.service */ "./src/app/core/services/office-pool-car.service.ts");
/* harmony import */ var _ionic_native_insomnia_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/insomnia/ngx */ "./node_modules/@ionic-native/insomnia/ngx/index.js");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");
/* harmony import */ var _core_services_toaster_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../core/services/toaster.service */ "./src/app/core/services/toaster.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _office_pool_car_service_route_stoppage_modal_route_stoppage_modal_page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../office-pool-car-service/route-stoppage-modal/route-stoppage-modal.page */ "./src/app/layout/office-pool-car-service/route-stoppage-modal/route-stoppage-modal.page.ts");
/* harmony import */ var _core_services_modal_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../core/services/modal.service */ "./src/app/core/services/modal.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




















var LocationTrackingPage = /** @class */ (function () {
    function LocationTrackingPage(navCtrl, plt, geolocation, storage, nativeGeocoder, backgroundGeolocation, afAuth, afs, localNotifications, route, officePoolCarService, insomnia, barcodeScanner, toasterService, alertController, authenticationService, modalService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.plt = plt;
        this.geolocation = geolocation;
        this.storage = storage;
        this.nativeGeocoder = nativeGeocoder;
        this.backgroundGeolocation = backgroundGeolocation;
        this.afAuth = afAuth;
        this.afs = afs;
        this.localNotifications = localNotifications;
        this.route = route;
        this.officePoolCarService = officePoolCarService;
        this.insomnia = insomnia;
        this.barcodeScanner = barcodeScanner;
        this.toasterService = toasterService;
        this.alertController = alertController;
        this.authenticationService = authenticationService;
        this.modalService = modalService;
        this.progress_bar = false;
        this.directionsService = new google.maps.DirectionsService;
        this.directionsDisplay = new google.maps.DirectionsRenderer({ suppressMarkers: true });
        this.distanceService = new google.maps.DistanceMatrixService;
        this.DirectionsWaypoint = [];
        this.back_button_visible = true;
        this.arr = [];
        this.user = null;
        this.currentMapTrack = null;
        this.markers = [];
        this.isTracking = false;
        this.trackedRoute = [];
        this.previousTracks = [];
        this.loc = [];
        //Geocoder configuration
        this.geoencoderOptions = {
            useLocale: true,
            maxResults: 5
        };
        this.stoppage_list = [];
        this.start_location = '';
        this.end_location = '';
        this.car_type = '';
        this.route_id = '';
        this.driver_id = '';
        console.log('constructor');
        this.car_id = this.route.snapshot.params['car_id'];
        this.driver_id = this.route.snapshot.params['driver_id'];
        this.storage.get('car_details').then(function (val) {
            if (val) {
                val.forEach(function (element) {
                    if (element.car_id == _this.car_id) {
                        console.log(element);
                        _this.route_id = element.route_id;
                        _this.stoppage_list = element.stoppage_list;
                        _this.start_location = element.start_location;
                        _this.end_location = element.end_location;
                        _this.car_type = element.car_type;
                        _this.route_end_point = element.end_point_id;
                        _this.route_start_point = element.start_point_id;
                        _this.loadMap({ lat: parseFloat(element.start_lat), lng: parseFloat(element.start_long) }, { lat: parseFloat(element.end_lat), lng: parseFloat(element.end_long) });
                        element.stoppage_list_1.forEach(function (element) {
                            var waypoint_location;
                            waypoint_location = {
                                location: { lat: parseFloat(element.location.lat), lng: parseFloat(element.location.lng) },
                                stopover: element.stopover
                            };
                            //console.log('element:',waypoint_location);
                            _this.DirectionsWaypoint.push(waypoint_location);
                        });
                        _this.ride_startTime = parseFloat(element.start_end_time.start_time);
                        _this.ride_endTime = parseFloat(element.start_end_time.end_time);
                    }
                });
            }
        });
        this.storage.get('USER_INFO').then(function (val) {
            if (val) {
                //this.refer_code = val.user_account_no+'-'+val.name;
                _this.anonLogin(val.user_account_no + '-' + val.name + '-' + new Date());
            }
        });
    }
    LocationTrackingPage.prototype.ngOnInit = function () {
        var _this = this;
        console.log('ngOnInit');
        var config = {
            desiredAccuracy: 10,
            stationaryRadius: 20,
            interval: 2000,
            distanceFilter: 30,
            debug: true,
            stopOnTerminate: false,
        };
        this.backgroundGeolocation.configure(config).then(function () {
            _this.backgroundGeolocation.on(_ionic_native_background_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__["BackgroundGeolocationEvents"].location).subscribe(function (location) {
                console.log(location);
                _this.driver_current_lat = location.latitude;
                _this.driver_current_lng = location.longitude;
                _this.update_driver_cordinated_to_firebase();
                _this.backgroundGeolocation.finish(); // FOR IOS ONLY
            });
        });
    };
    LocationTrackingPage.prototype.ionViewDidEnter = function () {
        console.log('ionViewDidEnter');
        this.plt.ready().then(function () {
            //this.loadHistoricRoutes();
        });
    };
    LocationTrackingPage.prototype.ionViewWillEnter = function () {
        console.log('ionViewWillEnter');
        //this.loadMap();
    };
    LocationTrackingPage.prototype.loadMap = function (location_source, location_destination) {
        var _this = this;
        this.map = new google.maps.Map(this.mapElement.nativeElement, {
            center: { lat: -34.9011, lng: -56.1645 },
            zoom: 30,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            // mapTypeControl: true,
            // streetViewControl: true,
            // fullscreenControl: true
            disableDefaultUI: true,
            tilt: 45,
        });
        //var image = '/assets/svg/sos.svg'
        this.geolocation.getCurrentPosition().then(function (resp) {
            //console.log('resp', resp)
            var pos = {
                lat: resp.coords.latitude,
                lng: resp.coords.longitude
            };
            _this.driver_marker = new google.maps.Marker({
                position: pos,
                map: _this.map,
                //icon: "http://tobuekalabya.com/carservice_manage/icon/car_top.png",
                icon: "http://tobuekalabya.com/carservice_manage/icon/icon_map_baloon.png",
                title: 'you are here!',
            });
            //marker.setAnimation(google.maps.Animation.BOUNCE);
            //this.markers.push(marker);
            _this.map.setCenter(pos);
            _this.map.setZoom(30);
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
        this.directionsDisplay.setMap(this.map);
        console.log('start_loc', this.start_location);
        this.location_source = location_source;
        this.location_destination = location_destination;
        this.calculateAndDisplayRoute();
    };
    LocationTrackingPage.prototype.calculateAndDisplayRoute = function () {
        var _this = this;
        var that = this;
        //console.log(this.DirectionsWaypoint);
        that.directionsService.route({
            origin: this.location_source,
            destination: this.location_destination,
            travelMode: 'DRIVING',
            waypoints: this.DirectionsWaypoint,
        }, function (response, status) {
            //alert(1);
            if (status === 'OK') {
                that.directionsDisplay.setDirections(response);
                _this.stoppage_list.forEach(function (element) {
                    var waypoint_location_marker;
                    var pos_marker = {
                        lat: parseFloat(element.lat),
                        lng: parseFloat(element.lng)
                    };
                    var infowindow = new google.maps.InfoWindow({
                        content: String(element.location_name)
                    });
                    //console.log("Location:" ,element.location_name);
                    waypoint_location_marker = new google.maps.Marker({
                        position: pos_marker,
                        map: _this.map,
                        icon: element.icon,
                        //icon: "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
                        title: 'you are here!',
                    });
                    // if (element.start == true || element.stop == true) {
                    //   infowindow.open(this.map, waypoint_location_marker);
                    // }
                });
                //this.loadMap();
            }
            else {
                window.alert('Directions request failed due to ' + status);
            }
        });
    };
    LocationTrackingPage.prototype.anonLogin = function (user) {
        var _this = this;
        this.afAuth.auth.signInAnonymously().then(function (res) {
            _this.locationsCollection = _this.afs.collection("locations/" + user + "/track", function (ref) { return ref.orderBy('timestamp'); });
            //load firebase data
            _this.locations = _this.locationsCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["map"])(function (actions) {
                return actions.map(function (a) {
                    var data = a.payload.doc.data();
                    var id = a.payload.doc.id;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: id }, data);
                });
            }));
            console.log('this.locations', _this.locations);
            _this.locations.subscribe(function (locations) {
                console.log('new location: ', locations);
                _this.loc = locations;
                //this.updateMap(locations);
            });
        });
    };
    LocationTrackingPage.prototype.startTracking = function () {
        var _this = this;
        var car_id = this.car_type + "-" + this.car_id;
        //console.log("car: ", car_id);
        this.afs.collection('locations').snapshotChanges().subscribe(function (data) {
            //this.driver_curent_live_location = 
            data.map(function (e) {
                if (e.payload.doc.id == car_id) {
                    _this.already_exist_firebase = true;
                }
            });
        });
        if (this.already_exist_firebase == true) {
            console.log('sdfffffdsfdfsdfd');
            this.tracking_location();
        }
        else {
            this.create_tracking_inFirebase();
        }
    };
    LocationTrackingPage.prototype.create_tracking_inFirebase = function () {
        var _this = this;
        var driver_current_lat;
        var driver_current_lng;
        var that = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            driver_current_lat = resp.coords.latitude;
            driver_current_lng = resp.coords.longitude;
            var driver_current_lat_1 = parseFloat(driver_current_lat); //parse float value of lat
            var driver_current_lng_1 = parseFloat(driver_current_lng); //parse float value of lng
            /////////////////////////////////////Distance/////////////////////////////
            _this.distanceService.getDistanceMatrix({
                origins: [new google.maps.LatLng(driver_current_lat_1, driver_current_lng_1)],
                destinations: [_this.location_source],
                travelMode: 'DRIVING',
                unitSystem: google.maps.UnitSystem.METRIC,
                avoidHighways: false,
                avoidTolls: false
            }, function (response, status) {
                if (status !== 'OK') {
                    alert('Error was: ' + status);
                }
                else {
                    that.driver_distance_from_starting_point = parseFloat(response.rows[0].elements[0].distance.text); //driver distance from ride starting point
                    if (that.driver_distance_from_starting_point <= 2000) { //// should be 2
                        this.back_button_visible = false;
                        var date = new Date();
                        // (date.getHours())*100)+date.getMinutes() //// Current time in a army time format
                        //that.ride_startTime-15 // 15 min erly of ride time
                        if ((that.ride_startTime - 1500) <= ((date.getHours()) * 100) + date.getMinutes()) { ////15 min
                            console.log("ride time", (parseFloat(that.ride_startTime) - 1500));
                            // that.geolocation.getCurrentPosition().then((resp) => {
                            //   let record = {};
                            //   record['lat'] = resp.coords.latitude;
                            //   record['long'] = resp.coords.longitude;
                            //   record['name'] = ""; //////car name
                            //   let car_id = that.car_type + "-" + that.car_id;
                            //   that.afs.collection('locations').doc(car_id).set(record); //////car id
                            // }).catch((error) => {
                            //   console.log('Error getting location', error);
                            // });
                            var record = {};
                            record['lat'] = driver_current_lat_1;
                            record['long'] = driver_current_lng_1;
                            record['name'] = ""; //////car name
                            var car_id = that.car_type + "-" + that.car_id;
                            that.afs.collection('locations').doc(car_id).set(record); //////car id
                            that.tracking_location();
                        }
                        else {
                            alert("Please Start the ride within time!");
                        }
                    }
                    else {
                        alert("The Driver must Start the ride from the Starting point of the route!");
                    }
                }
            });
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
        //console.log(google.maps.LatLng(driver_current_lat, driver_current_lng));
    };
    LocationTrackingPage.prototype.tracking_location = function () {
        var _this = this;
        this.isTracking = true;
        this.back_button_visible = false;
        this.insomnia.keepAwake()
            .then(function () { return console.log('success'); }, function () { return console.log('error'); });
        this.backgroundGeolocation.start();
        var options = {
            frequency: 3000,
            enableHighAccuracy: true
        };
        var point_nember = 1;
        this.trackedRoute = [];
        this.watch = this.geolocation.watchPosition(options)
            .subscribe(function (position) {
            console.log('new position: ', position);
            if (position) {
                _this.trackedRoute.push({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                    address: _this.geoAddress,
                    point_number: point_nember
                });
                point_nember++;
                _this.driver_current_lat = position.coords.latitude;
                _this.driver_current_lng = position.coords.longitude;
                var new_driver_location = new google.maps.LatLng(_this.driver_current_lat, _this.driver_current_lng);
                if (_this.last_driver_postion != undefined) {
                    //console.log('last postion ',this.last_driver_postion);
                    var heading = google.maps.geometry.spherical.computeHeading(_this.last_driver_postion, new_driver_location);
                    _this.driver_marker.rotation = heading;
                    _this.map.setHeading = heading;
                    //this.map.tilt=45;
                }
                console.log(new_driver_location);
                _this.driver_marker.setPosition(new_driver_location);
                _this.map.panTo(new_driver_location);
                _this.update_driver_cordinated_to_firebase();
            }
        });
        this.sendNotificationToPassengers();
    };
    LocationTrackingPage.prototype.update_driver_cordinated_to_firebase = function () {
        var record = {};
        record['lat'] = this.driver_current_lat;
        record['long'] = this.driver_current_lng;
        record['name'] = 'test1.03.2020'; ///////car name optional
        var car_id = this.car_type + "-" + this.car_id; ///////car id required
        this.afs.collection('locations').doc(car_id).update(record);
    };
    LocationTrackingPage.prototype.stopTracking = function () {
        //console.log("distance dirve",parseFloat(this.driver_distance_from_ending_point));
        var _this = this;
        var that = this;
        var ending_driver_current_lat;
        var ending_driver_current_lng;
        this.geolocation.getCurrentPosition().then(function (resp) {
            //console.log(resp.coords);
            //alert(1);
            ending_driver_current_lat = resp.coords.latitude;
            ending_driver_current_lng = resp.coords.longitude;
            var driver_current_lat_1 = parseFloat(ending_driver_current_lat);
            var driver_current_lng_1 = parseFloat(ending_driver_current_lng);
            _this.distanceService.getDistanceMatrix({
                origins: [new google.maps.LatLng(driver_current_lat_1, driver_current_lng_1)],
                destinations: [_this.location_destination],
                travelMode: 'DRIVING',
                unitSystem: google.maps.UnitSystem.METRIC,
                avoidHighways: false,
                avoidTolls: false
            }, function (response, status) {
                if (status !== 'OK') {
                    alert('Error was: ' + status);
                }
                else {
                    // var originList = response.originAddresses;
                    // var destinationList = response.destinationAddresses;
                    // var get_distance=response.rows[0].elements;
                    that.driver_distance_from_ending_point = parseFloat(response.rows[0].elements[0].distance.text);
                    //console.log('originList' , that.driver_distance_from_starting_point);
                    console.log('destinationList', that.driver_distance_from_ending_point);
                    if (that.driver_distance_from_starting_point <= 0.5) {
                        that.isTracking = false;
                        that.backgroundGeolocation.stop();
                        that.watch.unsubscribe();
                        //this.currentMapTrack.setMap(null);
                        this.insomnia.allowSleepAgain()
                            .then(function () { return console.log('success'); }, function () { return console.log('error'); });
                        var car_id = this.car_type + "-" + this.car_id;
                        this.afs.collection('locations').doc(car_id).delete();
                        this.endJourney();
                        this.authenticationService.logout();
                        navigator['app'].exitApp();
                    }
                    else {
                        alert("The Driver must End the ride from the Ending point of the route!");
                    }
                }
            });
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    };
    LocationTrackingPage.prototype.sendNotificationToPassengers = function () {
        var _this = this;
        this.progress_bar = true;
        var request_data = {
            "type": "drive_start",
            "route_id": this.route_id,
            "route_timing_id": 0,
            "car_id": this.car_id,
            "driver_id": this.driver_id
        };
        console.log('request_data', request_data);
        this.officePoolCarService.todayRidesService(request_data).subscribe(function (res) {
            //this.result_data = res.result;
            //console.log("res:::" + this.stopp_list.length);
            _this.storage.set('drive_history_id', res.result.drive_history_id);
            _this.progress_bar = false;
        }, function (error) {
            //console.log("error::::" + error.error.msg);
            _this.progress_bar = false;
            //this.toasterService.showToast(error.error.msg, 2000)
        });
    };
    LocationTrackingPage.prototype.endJourney = function () {
        var _this = this;
        this.progress_bar = true;
        this.storage.get('drive_history_id').then(function (val) {
            if (val) {
                var request_data = { "type": "drive_end", "drive_history_id": val };
                _this.officePoolCarService.todayRidesService(request_data).subscribe(function (res) {
                    _this.progress_bar = false;
                }, function (error) {
                    //console.log("error::::" + error.error.msg);
                    _this.progress_bar = false;
                    //this.toasterService.showToast(error.error.msg, 2000)
                });
            }
        });
    };
    LocationTrackingPage.prototype.scanQrCode = function () {
        var _this = this;
        this.barcodeScanner.scan().then(function (barcodeData) {
            //console.log('Barcode data', barcodeData);
            _this.progress_bar = true;
            var request_data = { "type": "qr_code_val", "car_id": _this.car_id, 'qr_code': barcodeData.text };
            _this.officePoolCarService.todayRidesService(request_data).subscribe(function (res) {
                _this.toasterService.showToast(res.result, 2000);
                _this.progress_bar = false;
            }, function (error) {
                //console.log("error::::" + error.error);
                _this.progress_bar = false;
                _this.toasterService.showToast(error.error.msg, 2000);
            });
            // this.toasterService.showToast('Your seats has been confirmed, have a safe journey', 6000)
            // this.toasterService.showToast('Qr code does not match! please contact to Redy Rider Help Line', 6000)
        }).catch(function (err) {
            console.log('Error', err);
        });
    };
    LocationTrackingPage.prototype.stopConfirm = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            //header: 'Confirm!',
                            message: 'Are you sure you want end this journey!!',
                            buttons: [
                                {
                                    text: 'No',
                                    role: 'cancel',
                                    cssClass: 'alert-cancel-button',
                                    handler: function (blah) {
                                        _this.alertResponseForLogout(false);
                                    }
                                }, {
                                    text: 'Yes',
                                    cssClass: 'alert-ok-button',
                                    handler: function () {
                                        _this.alertResponseForLogout(true);
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LocationTrackingPage.prototype.alertResponseForLogout = function (response) {
        if (response) {
            this.stopTracking();
        }
    };
    LocationTrackingPage.prototype.viewRoute = function () {
        var data = { 'from_which_page': 'location-tracking-page', 'stoppage_list': this.stoppage_list };
        this.modalService.openModal(_office_pool_car_service_route_stoppage_modal_route_stoppage_modal_page__WEBPACK_IMPORTED_MODULE_16__["RouteStoppageModalPage"], data, 'stoppage_modal_css');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], LocationTrackingPage.prototype, "mapElement", void 0);
    LocationTrackingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-location-tracking',
            template: __webpack_require__(/*! ./location-tracking.page.html */ "./src/app/layout/myaccount/location-tracking/location-tracking.page.html"),
            styles: [__webpack_require__(/*! ./location-tracking.page.scss */ "./src/app/layout/myaccount/location-tracking/location-tracking.page.scss"), __webpack_require__(/*! ../../layout.page.scss */ "./src/app/layout/layout.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
            _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeGeocoder"],
            _ionic_native_background_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__["BackgroundGeolocation"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuth"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestore"],
            _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_10__["LocalNotifications"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _core_services_office_pool_car_service__WEBPACK_IMPORTED_MODULE_11__["OfficePoolCarService"],
            _ionic_native_insomnia_ngx__WEBPACK_IMPORTED_MODULE_12__["Insomnia"],
            _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_13__["BarcodeScanner"],
            _core_services_toaster_service__WEBPACK_IMPORTED_MODULE_14__["ToasterService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_15__["AuthenticationService"],
            _core_services_modal_service__WEBPACK_IMPORTED_MODULE_17__["ModalService"]])
    ], LocationTrackingPage);
    return LocationTrackingPage;
}());



/***/ })

}]);
//# sourceMappingURL=location-tracking-location-tracking-module.js.map