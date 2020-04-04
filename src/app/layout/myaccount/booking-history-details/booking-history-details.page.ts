import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ModalService } from '../../../core/services/modal.service';
import { ToasterService } from '../../../core/services/toaster.service';
import { OfficePoolCarService } from '../../../core/services/office-pool-car.service';
import { LoadingService } from '../../../core/services/loading.service';
import { Events } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { SMS } from '@ionic-native/sms/ngx';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import 'firebase/firestore';
import { RouteStoppageModalPage } from '../../office-pool-car-service/route-stoppage-modal/route-stoppage-modal.page';
declare var google: any;

@Component({
  selector: 'app-booking-history-details',
  templateUrl: './booking-history-details.page.html',
  styleUrls: ['./booking-history-details.page.scss'],
})
export class BookingHistoryDetailsPage implements OnInit {
  @ViewChild('map') mapElement: ElementRef;

  /////priyam
  //item: Observable<any[]>;
  driver_curent_live_location;
  driver_lat;
  driver_long;
  driver_trip_start;
  driver_trip_end;
  driver_previous_location_lat;
  driver_previous_location_long;
  driver_marker;
  lat;
  lng;
  car_icon;
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer({ suppressMarkers: true });
  location_source;
  location_destination;
  last_driver_postion;

  DirectionsWaypoint = [];

  driver_cordinates;
  waypoint_stoppage_list;

  map: any;
  markers = [];
  result_data: any = {
    'fare_details': {},
    'stoppage_list': [],
    'stoppage_list_1': [],
    'seats': []
  };
  stopp_list = [];
  booking_id: string;
  sos_number: string;
  sos_email: string;
  name: any;
  userId: any;
  userType: string;
  coupan_div: boolean = true;
  progress_bar: boolean = false;

  constructor(
    private storage: Storage,
    public modalService: ModalService,
    private toasterService: ToasterService,
    private officePoolCarService: OfficePoolCarService,
    private loadingService: LoadingService,
    private route: ActivatedRoute,
    private geolocation: Geolocation,
    private callNumber: CallNumber,
    private sms: SMS,
    private emailComposer: EmailComposer,
    private barcodeScanner: BarcodeScanner,
    private socialSharing: SocialSharing,
    private firestore: AngularFirestore
  ) {
    this.storage.get('USER_INFO').then((val) => {
      //console.log('user_details_val_val', val)
      if (val) {
        this.userId = val.id;
        this.name = val.name;
        this.userType = val.user_type_id;
        this.sos_number = val.sos_details.contact_no;
        this.sos_email = val.sos_details.contact_email;
        //this.car_details_d = val.car_details;
        //console.log('this.car_details', this.car_details_d.car_no)
      }
    });
    this.booking_id = this.route.snapshot.params['id'];
    //console.log('this.booking_id', this.booking_id)
    this.getData(this.booking_id);
  }

  ngOnInit() {


    this.loadMap();


  }


  firebase_get_data() {
    let car_id = this.result_data.car_name + "-" + this.result_data.car_id;
    //console.log("car: ", car_id);
    this.firestore.collection('locations').snapshotChanges().subscribe(data => {
      //this.driver_curent_live_location = 
      data.map(e => {
        if (e.payload.doc.id == car_id) {
        //if (e.payload.doc.id == '123') {
          // return {
          //   id: e.payload.doc.id,
          //   Name: e.payload.doc.data()['driver'],
          //   lat: e.payload.doc.data()['lat'],
          //   long: e.payload.doc.data()['long'],
          //   driver_trip_start: e.payload.doc.data()['is_start'],
          //   driver_trip_end: e.payload.doc.data()['is_end'],

          // };
          this.driver_lat = e.payload.doc.data()['lat'];
          this.driver_long = e.payload.doc.data()['long'];
        }
      })

      //alert(this.driver_curent_live_location[0].id);
      //console.log('driver_curent_live_location', this.driver_curent_live_location);
      //this.allocate_driver_on_map(this.driver_curent_live_location);
      this.allocate_driver_on_map();
    });

    // this.driver_curent_live_location = this.firestore.collection('locations').doc(car_id).get().pipe(
    //   map(responce=>{console.log(responce.data()['lat']);})

    // );
    // this.driver_curent_live_location = this.firestore.collection('locations').get().subscribe((snapshot)=>{
    //   snapshot.docs.forEach(element => {

    //     if(element.id==car_id){

    //       this.driver_lat=element.data().lat;
    //       this.driver_long=element.data().long;
    //       console.log('lat:',this.driver_lat,"long:", this.driver_long);
    //     }
    //     //element.data()
    //   });
    // });
    // //this.driver_curent_live_location = this.firestore.doc('locations/'+car_id);
    // //console.log(this.driver_curent_live_location);
    // this.allocate_driver_on_map();
  }




  allocate_driver_on_map() {

    //this.driver_lat = driver_curent_live_location[0].lat;
    //this.driver_long = driver_curent_live_location[0].long;
    if (this.driver_lat != '' && this.driver_long != '') {
      let latLng = new google.maps.LatLng(this.driver_lat, this.driver_long);
      this.driver_marker.setPosition(latLng);

      if (this.last_driver_postion != undefined) {
        //console.log('last postion ',this.last_driver_postion);
        var heading = google.maps.geometry.spherical.computeHeading(this.last_driver_postion, latLng);
        var car = "M17.402,0H5.643C2.526,0,0,3.467,0,6.584v34.804c0,3.116,2.526,5.644,5.643,5.644h11.759c3.116,0,5.644-2.527,5.644-5.644 V6.584C23.044,3.467,20.518,0,17.402,0z M22.057,14.188v11.665l-2.729,0.351v-4.806L22.057,14.188z M20.625,10.773 c-1.016,3.9-2.219,8.51-2.219,8.51H4.638l-2.222-8.51C2.417,10.773,11.3,7.755,20.625,10.773z M3.748,21.713v4.492l-2.73-0.349 V14.502L3.748,21.713z M1.018,37.938V27.579l2.73,0.343v8.196L1.018,37.938z M2.575,40.882l2.218-3.336h13.771l2.219,3.336H2.575z M19.328,35.805v-7.872l2.729-0.355v10.048L19.328,35.805z";
            this.car_icon = {
              path: car,
              scale: .7,
              strokeColor: 'white',
              strokeWeight: .10,
              fillOpacity: 1,
              fillColor: '#404040',
              offset: '5%',
              // rotation: parseInt(heading[i]),
              anchor: new google.maps.Point(10, 25) // orig 10,50 back of car, 10,0 front of car, 10,25 center of car
            };
            console.log('heading', heading);
            this.car_icon.rotation = heading;
            this.driver_marker.setIcon(this.car_icon);
        //this.driver_marker.rotation = heading;
        this.map.setHeading = heading;
        //this.map.tilt=45;
      }

      this.map.panTo(latLng);
      this.last_driver_postion = latLng;

    }
  }

  loadMap() {
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      //center: { lat: -34.9011, lng: -56.1645 },
      center: this.location_source,
      zoom: 18,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      tilt: 45,
      // mapTypeControl: true,
      // streetViewControl: true,
      // fullscreenControl: true
      disableDefaultUI: true,
    });
    //let pos1 = { lat: 22.5764753, lng: 88.4306861 };
    this.driver_marker = new google.maps.Marker({
      position: this.location_source,
      map: this.map,
      //icon: image,
      title: 'you are here!',
      icon: "http://tobuekalabya.com/carservice_manage/icon/car_top.png",
      //icon: "http://tobuekalabya.com/carservice_manage/icon/icon_map_baloon.png",
    });
    this.directionsDisplay.setMap(this.map);

  }
  getMyLocation() {

    var i;
    this.geolocation.getCurrentPosition({
      enableHighAccuracy: true
    }).then(location => {
      this.lat = location.coords.latitude;
      this.lng = location.coords.longitude


    }).catch((error) => {
      console.log('Error getting location', error);
    })

    // this.DirectionsWaypoint = [
    //   {
    //     location: { lat: 22.571232, lng: 88.425483 },
    //     stopover: false
    //   }, {
    //     location: { lat: 22.576701, lng: 88.429078 },
    //     stopover: true
    //   }
    // ];

    //console.log('this.stopp_list_1', JSON.stringify(this.waypoint_stoppage_list));

    //alert(JSON.stringify(this.waypoint_stoppage_list));
    this.waypoint_stoppage_list.forEach(element => {
      //console.log('element',element);
      let waypoint_location;
      //waypoint_location=JSON.stringify(element)
      //waypoint_location=element;

      waypoint_location = {
        location: { lat: parseFloat(element.location.lat), lng: parseFloat(element.location.lng) },
        stopover: element.stopover
      };
      //console.log('element:',waypoint_location);
      this.DirectionsWaypoint.push(waypoint_location);
    });
    //console.log('DirectionsWaypoint',this.DirectionsWaypoint);


    //this.DirectionsWaypoint = JSON.stringify(this.waypoint_stoppage_list);

    //let latLng = new google.maps.LatLng(this.driver_lat, this.driver_long);
    //console.log('this.stopp_list', this.stopp_list[0])
    //console.log('this.stopp_list_lat', this.stopp_list[0].lat)
    let sto_len = this.stopp_list.length
    this.location_source = { lat: parseFloat(this.stopp_list[0].lat), lng: parseFloat(this.stopp_list[0].lng) };

    //console.log('this.location_source', this.location_source)
    this.location_destination = { lat: parseFloat(this.stopp_list[sto_len - 1].lat), lng: parseFloat(this.stopp_list[sto_len - 1].lng) };
    //console.log('this.location_destination', this.location_destination)

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
        //console.log(response);
        that.directionsDisplay.setDirections(response);
        this.loadMap();

        this.stopp_list.forEach(element => {
          let waypoint_location_marker;
          let pos_marker = {
            lat: parseFloat(element.lat),
            lng: parseFloat(element.lng)
          };
          var infowindow = new google.maps.InfoWindow({
            //content: String(element.location_name,stoppage_img)
            content: String(element.stoppage_img)
          });
          console.log("Location:", element.icon);
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
          waypoint_location_marker.addListener('click', function () {
            infowindow.open(this.map, waypoint_location_marker);
          });

        });


      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }
  callNow() {
    this.callNumber.callNumber(this.sos_number, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }
  smsNow() {
    if (this.sms.hasPermission()) {
      this.sms.send(this.sos_number, 'This is an emergency in bus.Please look into it immediately.').then((val) => {
        //console.log('val', val)
      });
    }
  }
  sendMail() {
    let email = {
      to: this.sos_email,
      cc: 'vicbro.arise@gmail.com',
      bcc: ['vicbro.arise@gmail.com', 'rupamhazra@gmail.com'],
      attachments: [],
      subject: 'This an Emergency email',
      body: 'This is an emergency in bus.Please look into it immediately',
      isHtml: false,
      app: "gmail"
    };
    this.emailComposer.isAvailable().then((available: boolean) => {
      if (available) {
        this.emailComposer.open(email);
      }
    });
  }
  scanQrCode(qr_code = '') {
    let data = { 'from_which_page': 'booking-history-details', 'qr_image': qr_code }
    this.modalService.openModal(RouteStoppageModalPage, data, 'stoppage_modal_css');
    // this.barcodeScanner.scan().then(barcodeData => {
    //   //console.log('Barcode data', barcodeData);
    //   if (barcodeData.text == this.result_data.seat_qr) {
    //     this.toasterService.showToast('Your seats has been confirmed, have a safe journey', 6000)
    //   } else {
    //     this.toasterService.showToast('Qr code does not match! please contact to Redy Rider Help Line', 6000)
    //   }
    // }).catch(err => {
    //   console.log('Error', err);
    // });

  }
  shareYourRoute() {
    let message = 'Booking Details \n -----------------\n';
    message = message + 'Pick Up : ' + this.result_data.pick_up + '\nDrop : ' + this.result_data.drop + "\n";
    message = message + 'Seat No: ' + this.result_data.seats + '\n';
    message = message + 'Journy date: ' + this.result_data.journy_date + '\n';
    message = message + 'Journy time: ' + this.result_data.journy_time + '\n';
    message = message + 'Total Fare Amount: ' + this.result_data.amount + '/-' + '\n';
    message = message + 'Car: ' + this.result_data.car_name + '\n';
    message = message + 'Car No: ' + this.result_data.car_no + '\n';
    message = message + 'Invoice No: ' + this.result_data.order_no + '\n';
    this.socialSharing.shareViaWhatsApp(message, '', '')
  }
  getData(booking_id) {
    this.progress_bar = true;
    //console.log('getData myaccount-personal')
    //this.loadingService.present();
    let request_data = { "type": "booking_history", "booking_id": booking_id };
    this.officePoolCarService.applyCouponService(request_data).subscribe(
      res => {

        this.result_data = res.result;
        this.stopp_list = res.result.stoppage_list;
        this.waypoint_stoppage_list = res.result.stoppage_list_1;


        //console.log("res:::" + this.stopp_list.length);

        this.getMyLocation();
        this.firebase_get_data();
        this.progress_bar = false;

        console.log(this.result_data);
        //this.firebase_get_data();

      },
      error => {
        //console.log("error::::" + error.error.msg);
        this.progress_bar = false;
        this.toasterService.showToast(error.error.msg, 2000)
      }
    );
  }
  viewRoute(route_id: string, start_point, end_point) {
    let data = { 'route_id': route_id, 'from_which_page': 'bus-route-details-page', 'start_point': start_point, 'end_point': end_point }
    this.modalService.openModal(RouteStoppageModalPage, data, 'stoppage_modal_css');
  }
}
