import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, Validators, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { ModalService, NetworkService } from '../../core/globalMethods/global-methods';
import { Events } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';

import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { AppDateAdapter, APP_DATE_FORMATS } from '../../core/components/format-datepicker';

declare var google;
@Component({
  selector: 'app-office-pool-car-service',
  templateUrl: './office-pool-car-service.page.html',
  styleUrls: ['./office-pool-car-service.page.scss'],
  providers: [
    { provide: DateAdapter, useClass: AppDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS }
  ]
})
export class OfficePoolCarServicePage implements OnInit {
  form: FormGroup;
  net_connection_check: boolean = false;
  select_pickup_location: any;
  select_drop_location: any;
  userId: string;
  minDate = new Date().toISOString();
  maxDate: any;
  myDate = new Date().toISOString();
  geoencoderOptions: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
  };
  geoAddress: string;
  today = new Date();
  myReturnDate = new Date().toISOString();
  roundTripDiv: boolean = false;
  singleTripDiv: boolean = false;
  free_mode: boolean;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    public modalService: ModalService,
    public office_pool_car_service_event: Events,
    public storage: Storage,
    private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder,
    private networkService: NetworkService
  ) {
    if (!this.networkService.checkNetworkDisconnect()) {
      this.geolocation.getCurrentPosition({ enableHighAccuracy: true }).then(resp => {
        this.getGeoencoder(resp.coords.latitude, resp.coords.longitude);
      }).catch((error) => {
        console.log('Error getting location', error);
      });
    }

  }
  ionViewDidEnter() {
    this.storage.get('select_location').then((val) => {
      if (val) {
        this.select_pickup_location = val['pickup_location'];
        this.select_drop_location = val['drop_location'];
      }
    });
    this.storage.get('USER_INFO').then((val) => {
      this.userId = val.id;
      this.free_mode = val.free_mode;
    });
  }
  ngOnInit() {
    this.office_pool_car_service_event.subscribe('check_net_connection', (data) => {
      if (data == 'connect') this.net_connection_check = false;
      if (data == 'disconnect') this.net_connection_check = true;
    });
    this.maxDate = this.today.getFullYear() + 1;
    //journey_date = new FormControl(moment());
    this.form = this.formBuilder.group({
      pick_up: ['', Validators.required],
      drop_off: ['', Validators.required],
      //trip: ['', Validators.required],
      journey_date: [''],
      return_date: ['']
    });
  }
  getGeoencoder(latitude, longitude) {
    this.nativeGeocoder.reverseGeocode(latitude, longitude, this.geoencoderOptions)
      .then((result: NativeGeocoderResult[]) => {
        this.select_pickup_location = this.generateAddress(result[0]);
      })
      .catch((error: any) => {
        alert('Error getting location' + JSON.stringify(error));
      });
  }
  generateAddress(addressObj) {
    let obj = [];
    let address = "";
    for (let key in addressObj) {
      obj.push(addressObj[key]);
    }
    obj.reverse();
    for (let val in obj) {
      if (obj[val].length)
        address += obj[val] + ', ';
    }
    return address.slice(0, -2);
  }
  savaData() {

    let d = new Date(Date.parse(this.form.value.journey_date))
    let month = d.getMonth() + 1;
    let date = d.getFullYear() + '-' + month + '-' + d.getDate();
    //console.log('date', d)
    let route_search_parameters = {
      'user_id': this.userId,
      'type': 'src',
      'pickup_location': this.form.value.pick_up,
      'drop_location': this.form.value.drop_off,
      'single_or_round': 0,
      'traval_date': date,
      'traval_time': '',
      'return_date': this.form.value.return_date,
      'return_time': '',
      'cars_details': [],
      'free_mode': this.free_mode
    };
    //console.log('route_search_parameters', route_search_parameters);
    this.storage.set('route_search_parameters', route_search_parameters);
    this.router.navigateByUrl('bus-route-details');
  }
  parseISOString(s) {
    var b = s.split(/\D+/);
    return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
  }
  openSearchPage(type: any) {
    this.router.navigate(['search-location', { type: type }]);
  }
  changeLocation(c_pickup_location, c_drop_location) {
    this.select_drop_location = c_pickup_location;
    this.select_pickup_location = c_drop_location;
    this.storage.get('select_location').then((val) => {
      if (val != null) {
        let val1 = val;
        val1['pickup_location'] = c_drop_location;
        this.storage.set('select_location', val1)
        val1['drop_location'] = c_pickup_location;
        this.storage.set('select_location', val1);
      }
    });
  }
  tripSelect(trip_val) {
    if (trip_val == '1') {
      this.roundTripDiv = true;
      this.singleTripDiv = true;
    } else {
      this.roundTripDiv = false;
      this.singleTripDiv = true;
    }
  }
}
