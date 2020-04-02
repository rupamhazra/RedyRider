import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Subscription } from 'rxjs';
import { Storage } from '@ionic/storage';
import { NavController, Platform } from '@ionic/angular';
import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { BackgroundGeolocation, BackgroundGeolocationConfig, BackgroundGeolocationEvents, BackgroundGeolocationResponse } from '@ionic-native/background-geolocation/ngx';
import { LocalNotifications, ELocalNotificationTriggerUnit } from '@ionic-native/local-notifications/ngx';
import { OfficePoolCarService } from '../../../core/services/office-pool-car.service';
import { Insomnia } from '@ionic-native/insomnia/ngx';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ToasterService } from '../../../core/services/toaster.service';
import { AlertController } from '@ionic/angular';
import { AuthenticationService } from '../../../core/services/authentication.service';
import { RouteStoppageModalPage } from '../../office-pool-car-service/route-stoppage-modal/route-stoppage-modal.page';
import { ModalService } from '../../../core/services/modal.service';

declare var google;
import { map } from 'rxjs/operators';
import { element } from '@angular/core/src/render3';
declare var window;
@Component({
  selector: 'app-location-tracking',
  templateUrl: './location-tracking.page.html',
  styleUrls: ['./location-tracking.page.scss', '../../layout.page.scss'],
})
export class LocationTrackingPage implements OnInit {
  @ViewChild('map') mapElement: ElementRef;
  progress_bar: boolean = false;
  driver_current_lat;
  driver_current_lng;
  car_id;
  driver_marker;
  lat;
  lng;
  last_driver_postion;
  driver_distance_from_next_destination;
  next_stoppage_list_array;
  next_stoppage_info;
  

  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer({ suppressMarkers: true });
  distanceService = new google.maps.DistanceMatrixService;
  location_source;
  location_destination;
  ride_startTime;
  ride_endTime;
  already_exist_firebase;
  driver_distance_from_starting_point;
  driver_distance_from_ending_point
  DirectionsWaypoint = [];
  back_button_visible: boolean = true;
  locations: Observable<any>;
  locationsCollection: AngularFirestoreCollection<any>;
  arr = [];
  user = null;
  map: any;
  currentMapTrack = null;
  markers = [];
  isTracking = false;
  trackedRoute = [];
  previousTracks = [];
  loc = [];
  watch: any;
  positionSubscription: Subscription;
  geoAddress: string;
  //Geocoder configuration
  geoencoderOptions: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
  };
  stoppage_list = [];
  start_location = '';
  end_location = '';
  car_type = '';
  route_id = '';
  driver_id = '';
  route_start_point;
  route_end_point;
  constructor(
    public navCtrl: NavController,
    private plt: Platform,
    private geolocation: Geolocation,
    private storage: Storage,
    private nativeGeocoder: NativeGeocoder,
    private backgroundGeolocation: BackgroundGeolocation,
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private localNotifications: LocalNotifications,
    private route: ActivatedRoute,
    private officePoolCarService: OfficePoolCarService,
    private insomnia: Insomnia,
    private barcodeScanner: BarcodeScanner,
    private toasterService: ToasterService,
    public alertController: AlertController,
    private authenticationService: AuthenticationService,
    public modalService: ModalService,

  ) {
    console.log('constructor')
    this.car_id = this.route.snapshot.params['car_id'];
    this.driver_id = this.route.snapshot.params['driver_id'];
    this.storage.get('car_details').then((val) => {
      if (val) {
        val.forEach(element => {
          if (element.car_id == this.car_id) {
            console.log(element);
            this.route_id = element.route_id;
            this.stoppage_list = element.stoppage_list;
            this.next_stoppage_list_array=element.stoppage_list;
            this.next_stoppage_info=this.next_stoppage_list_array[0];
            //console.log('next_stoppage ',this.next_stoppage_info);
            this.start_location = element.start_location;
            this.end_location = element.end_location;
            this.car_type = element.car_type;
            this.route_end_point = element.end_point_id;
            this.route_start_point = element.start_point_id;
            this.loadMap({ lat: parseFloat(element.start_lat), lng: parseFloat(element.start_long) },
              { lat: parseFloat(element.end_lat), lng: parseFloat(element.end_long) });
            element.stoppage_list_1.forEach(element => {
              let waypoint_location;
              waypoint_location = {
                location: { lat: parseFloat(element.location.lat), lng: parseFloat(element.location.lng) },
                stopover: element.stopover
              };
              //console.log('element:',waypoint_location);
              this.DirectionsWaypoint.push(waypoint_location);
            });
            this.ride_startTime = parseFloat(element.start_end_time.start_time);
            this.ride_endTime = parseFloat(element.start_end_time.end_time);
          }
        });
      }
    });
    this.storage.get('USER_INFO').then((val) => {
      if (val) {
        //this.refer_code = val.user_account_no+'-'+val.name;
        this.anonLogin(val.user_account_no + '-' + val.name + '-' + new Date());
      }
    });
  }
  ngOnInit() {
    console.log('ngOnInit')
    const config: BackgroundGeolocationConfig = {
      desiredAccuracy: 10,
      stationaryRadius: 20,
      interval: 2000,
      distanceFilter: 30,
      debug: true, //  enable this hear sounds for background-geolocation life-cycle.
      stopOnTerminate: false, // enable this to clear background location settings when the app terminates
    };
    this.backgroundGeolocation.configure(config).then(() => {
      this.backgroundGeolocation.on(BackgroundGeolocationEvents.location).subscribe(
        (location: BackgroundGeolocationResponse) => {
          console.log(location);
          this.driver_current_lat = location.latitude;
          this.driver_current_lng = location.longitude;
          this.update_driver_cordinated_to_firebase();
          this.backgroundGeolocation.finish(); // FOR IOS ONLY
        });
    });
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter')
    this.plt.ready().then(() => {
      //this.loadHistoricRoutes();
    });
  }
  ionViewWillEnter() {
    console.log('ionViewWillEnter')
    //this.loadMap();
  }
  loadMap(location_source, location_destination) {
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
    this.geolocation.getCurrentPosition().then(resp => {
      //console.log('resp', resp)
      let pos = {
        lat: resp.coords.latitude,
        lng: resp.coords.longitude
      };
      this.driver_marker = new google.maps.Marker({
        position: pos,
        map: this.map,
        //icon: "http://tobuekalabya.com/carservice_manage/icon/car_top.png",
        icon: "http://tobuekalabya.com/carservice_manage/icon/icon_map_baloon.png",
        title: 'you are here!',
        //animation: google.maps.Animation.DROP,
      });
      //marker.setAnimation(google.maps.Animation.BOUNCE);
      //this.markers.push(marker);
      this.map.setCenter(pos);
      this.map.setZoom(30);

    }).catch((error) => {
      console.log('Error getting location', error);
    });
    this.directionsDisplay.setMap(this.map);
    console.log('start_loc', this.start_location);
    this.location_source = location_source;
    this.location_destination = location_destination;
    this.calculateAndDisplayRoute();
  }

  calculateAndDisplayRoute() {
    const that = this;

    //console.log(this.DirectionsWaypoint);
    that.directionsService.route({
      origin: this.location_source, //origin 
      destination: this.location_destination, //destination
      travelMode: 'DRIVING',
      waypoints: this.DirectionsWaypoint,
    }, (response, status) => {
      //alert(1);
      if (status === 'OK') {

        that.directionsDisplay.setDirections(response);
        this.stoppage_list.forEach(element => {
          let waypoint_location_marker;
          let pos_marker = {
            lat: parseFloat(element.lat),
            lng: parseFloat(element.lng)
          };
          var infowindow = new google.maps.InfoWindow({
            content: String(element.location_name)
          });
          //console.log("Location:" ,element.location_name);
          waypoint_location_marker = new google.maps.Marker({
            position: pos_marker,
            map: this.map,
            icon: element.icon,
            //icon: "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
            title: 'you are here!',
            //animation: google.maps.Animation.DROP,
          });
          // if (element.start == true || element.stop == true) {
          //   infowindow.open(this.map, waypoint_location_marker);
          // }
        });

        //this.loadMap();
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }
  anonLogin(user) {
    this.afAuth.auth.signInAnonymously().then(res => {
      this.locationsCollection = this.afs.collection(
        `locations/${user}/track`,
        ref => ref.orderBy('timestamp')
      );
      //load firebase data
      this.locations = this.locationsCollection.snapshotChanges().pipe(
        map(actions =>
          actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          })
        )
      );
      console.log('this.locations', this.locations)
      this.locations.subscribe(locations => {
        console.log('new location: ', locations);
        this.loc = locations;
        //this.updateMap(locations);
      })
    });
  }
  startTracking() {
    let car_id = this.car_type + "-" + this.car_id;
    //console.log("car: ", car_id);
    this.afs.collection('locations').snapshotChanges().subscribe(data => {
      //this.driver_curent_live_location = 
      data.map(e => {
        if (e.payload.doc.id == car_id) {
          this.already_exist_firebase = true;
        }
      })
    });
    if (this.already_exist_firebase == true) {
      console.log('sdfffffdsfdfsdfd')
      this.tracking_location();
    } else {
      this.create_tracking_inFirebase();
    }
  }

  create_tracking_inFirebase() {
    var driver_current_lat;
    var driver_current_lng;
    const that = this;
    this.geolocation.getCurrentPosition().then((resp) => {
      driver_current_lat = resp.coords.latitude;
      driver_current_lng = resp.coords.longitude;

      var driver_current_lat_1 = parseFloat(driver_current_lat);//parse float value of lat
      var driver_current_lng_1 = parseFloat(driver_current_lng);//parse float value of lng

      /////////////////////////////////////Distance/////////////////////////////

      this.distanceService.getDistanceMatrix({
        origins: [new google.maps.LatLng(driver_current_lat_1, driver_current_lng_1)],
        destinations: [this.location_source],
        travelMode: 'DRIVING',
        unitSystem: google.maps.UnitSystem.METRIC,
        avoidHighways: false,
        avoidTolls: false
      }, function (response, status) {
        if (status !== 'OK') {
          alert('Error was: ' + status);
        } else {
          that.driver_distance_from_starting_point = parseFloat(response.rows[0].elements[0].distance.text); //driver distance from ride starting point

          if (that.driver_distance_from_starting_point <= 2000) { //// should be 2
            this.back_button_visible = false;

            let date = new Date();

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

              let record = {};

              record['lat'] = driver_current_lat_1;
              record['long'] = driver_current_lng_1;
              record['name'] = ""; //////car name

              let car_id = that.car_type + "-" + that.car_id;
              that.afs.collection('locations').doc(car_id).set(record); //////car id


              that.tracking_location();


            } else {
              alert("Please Start the ride within time!");
            }

          } else {
            alert("The Driver must Start the ride from the Starting point of the route!");
          }

        }
      });
    }).catch((error) => {
      console.log('Error getting location', error);
    });
    //console.log(google.maps.LatLng(driver_current_lat, driver_current_lng));

  }

  tracking_location() {
    this.isTracking = true;
    this.back_button_visible = false;
    this.insomnia.keepAwake()
      .then(
        () => console.log('success'),
        () => console.log('error')
      );

    this.backgroundGeolocation.start();
    let options = {
      frequency: 3000,
      enableHighAccuracy: true
    };
    let point_nember = 1;
    this.trackedRoute = [];
    this.watch = this.geolocation.watchPosition(options)
      .subscribe((position) => {
        console.log('new position: ', position)
        if (position) {
          this.trackedRoute.push(
            {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
              address: this.geoAddress,
              point_number: point_nember
            });
          point_nember++;
          this.driver_current_lat = position.coords.latitude;
          this.driver_current_lng = position.coords.longitude;
          let new_driver_location = new google.maps.LatLng(this.driver_current_lat, this.driver_current_lng);

          this.get_next_stoppage_info(new_driver_location);

          if (this.last_driver_postion != undefined) {
            //console.log('last postion ',this.last_driver_postion);
            var heading = google.maps.geometry.spherical.computeHeading(this.last_driver_postion, new_driver_location);
            this.driver_marker.rotation = heading;
            this.map.setHeading = heading;
            //this.map.tilt=45;
          }
          console.log(new_driver_location);
          this.driver_marker.setPosition(new_driver_location);
          this.map.panTo(new_driver_location);
          this.update_driver_cordinated_to_firebase();
        }
      });
    this.sendNotificationToPassengers();
  }

  update_driver_cordinated_to_firebase() {
    let record = {};
    record['lat'] = this.driver_current_lat;
    record['long'] = this.driver_current_lng;
    record['name'] = 'test1.03.2020'; ///////car name optional
    let car_id = this.car_type + "-" + this.car_id; ///////car id required
    this.afs.collection('locations').doc(car_id).update(record);
  }

  stopTracking() {
    //console.log("distance dirve",parseFloat(this.driver_distance_from_ending_point));

    const that = this;
    var ending_driver_current_lat;
    var ending_driver_current_lng;

    this.geolocation.getCurrentPosition().then((resp) => {
      //console.log(resp.coords);
      //alert(1);

      ending_driver_current_lat = resp.coords.latitude;
      ending_driver_current_lng = resp.coords.longitude;

      var driver_current_lat_1 = parseFloat(ending_driver_current_lat);
      var driver_current_lng_1 = parseFloat(ending_driver_current_lng);

      this.distanceService.getDistanceMatrix({
        origins: [new google.maps.LatLng(driver_current_lat_1, driver_current_lng_1)],
        destinations: [this.location_destination],
        travelMode: 'DRIVING',
        unitSystem: google.maps.UnitSystem.METRIC,
        avoidHighways: false,
        avoidTolls: false
      }, function (response, status) {
        if (status !== 'OK') {
          alert('Error was: ' + status);
        } else {

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
              .then(
                () => console.log('success'),
                () => console.log('error')
              );



            let car_id = this.car_type + "-" + this.car_id;
            this.afs.collection('locations').doc(car_id).delete();
            this.endJourney();
            this.authenticationService.logout();
            navigator['app'].exitApp();


          } else {
            alert("The Driver must End the ride from the Ending point of the route!");
          }

        }
      });


    }).catch((error) => {
      console.log('Error getting location', error);
    });



  }
  sendNotificationToPassengers() {
    this.progress_bar = true;
    let request_data = {
      "type": "drive_start",
      "route_id": this.route_id,
      "route_timing_id": 0,
      "car_id": this.car_id,
      "driver_id": this.driver_id
    };
    console.log('request_data', request_data)
    this.officePoolCarService.todayRidesService(request_data).subscribe(
      res => {
        //this.result_data = res.result;
        //console.log("res:::" + this.stopp_list.length);
        this.storage.set('drive_history_id', res.result.drive_history_id)
        this.progress_bar = false;
      },
      error => {
        //console.log("error::::" + error.error.msg);
        this.progress_bar = false;
        //this.toasterService.showToast(error.error.msg, 2000)
      }
    );
  }
  endJourney() {
    this.progress_bar = true;
    this.storage.get('drive_history_id').then((val) => {
      if (val) {
        let request_data = { "type": "drive_end", "drive_history_id": val }
        this.officePoolCarService.todayRidesService(request_data).subscribe(
          res => {
            this.progress_bar = false;

          },
          error => {
            //console.log("error::::" + error.error.msg);
            this.progress_bar = false;
            //this.toasterService.showToast(error.error.msg, 2000)
          }
        );
      }
    });

  }
  scanQrCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      //console.log('Barcode data', barcodeData);
      this.progress_bar = true;
      let request_data = { "type": "qr_code_val", "car_id": this.car_id, 'qr_code': barcodeData.text };
      this.officePoolCarService.todayRidesService(request_data).subscribe(
        res => {
          this.toasterService.showToast(res.result, 2000);
          this.progress_bar = false;
        },
        error => {
          //console.log("error::::" + error.error);
          this.progress_bar = false;
          this.toasterService.showToast(error.error.msg, 2000);
        }
      );

      // this.toasterService.showToast('Your seats has been confirmed, have a safe journey', 6000)

      // this.toasterService.showToast('Qr code does not match! please contact to Redy Rider Help Line', 6000)

    }).catch(err => {
      console.log('Error', err);
    });

  }
  async stopConfirm() {
    const alert = await this.alertController.create({
      //header: 'Confirm!',
      message: 'Are you sure you want end this journey!!',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'alert-cancel-button',
          handler: (blah) => {
            this.alertResponseForLogout(false);

          }
        }, {
          text: 'Yes',
          cssClass: 'alert-ok-button',
          handler: () => {
            this.alertResponseForLogout(true);
          }
        }
      ]
    });
    await alert.present();
  }
  alertResponseForLogout(response) {
    if (response) {
      this.stopTracking();

    }
  }
  viewRoute() {
    let data = { 'from_which_page': 'location-tracking-page', 'stoppage_list': this.stoppage_list }
    this.modalService.openModal(RouteStoppageModalPage, data, 'stoppage_modal_css');
  }


  get_next_stoppage_info(current_location){
    const that = this;
     var reached_stoppage;

     //this.next_stoppage_list_array.forEach(element=>{

        let pos_marker = {
          lat: parseFloat(this.next_stoppage_list_array[0].lat),
          lng: parseFloat(this.next_stoppage_list_array[0].lng)
        };

        this.distanceService.getDistanceMatrix({
          origins: [current_location],
          destinations: [pos_marker],
          travelMode: 'DRIVING',
          unitSystem: google.maps.UnitSystem.METRIC,
          avoidHighways: false,
          avoidTolls: false
        }, function (response, status) {
          if (status !== 'OK') {
            alert('Error was: ' + status);
          } else {
  
            // var originList = response.originAddresses;
            // var destinationList = response.destinationAddresses;
  
            // var get_distance=response.rows[0].elements;
             that.driver_distance_from_next_destination = parseFloat(response.rows[0].elements[0].distance.text);
            if(that.driver_distance_from_next_destination<=0.2){
              reached_stoppage=1;
             
            }
          }
        });

        if(reached_stoppage==1){
           //console.log('laststoppage list1',that.next_stoppage_list_array);
           this.next_stoppage_list_array.shift();
           this.next_stoppage_info=this.next_stoppage_list_array[0];
           console.log('next_stoppage_info ', this.next_stoppage_info.location_name);
           //console.log('laststoppage list',that.next_stoppage_list_array);
        }

      //})
    

  }
}
