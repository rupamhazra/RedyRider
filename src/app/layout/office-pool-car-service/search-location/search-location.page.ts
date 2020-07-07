import { Component, OnInit, NgZone, ElementRef, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Events } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { OfficePoolCarService } from '../../../core/services/office-pool-car.service';
import { LoadingService, NetworkService } from '../../../core/globalMethods/global-methods';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';


declare var google;
@Component({
  selector: 'app-search-location',
  templateUrl: './search-location.page.html',
  styleUrls: ['./search-location.page.scss'],
})
export class SearchLocationPage implements OnInit {
  @ViewChild('map') mapElement: ElementRef;
  GoogleAutocomplete;
  autocomplete: { input: string; };
  autocompleteItems: any[];
  location: any;
  placeid: any;
  progress_bar: boolean = false;
  geoencoderOptions: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
  };
  search_address = '';
  back_button_visible: boolean = false;
  search_bar_visible: boolean = false;
  network_check_class: string = '';
  network_msg: string = '';
  network_check_class_show: boolean = false;
  isItemAvailable: boolean = false;
  quick_actions: boolean = true;
  items: any;
  search_location_event: Events;
  which_type_search: any;
  isNoItemAvailable: boolean;
  location_placeholder: string = "Enter pickup location";
  map: any;
  markers = [];
  showList: boolean = false;
  net_connection_check: boolean = false;
  result: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private storage: Storage,
    private officePoolCarService: OfficePoolCarService,
    private loadingService: LoadingService,
    public zone: NgZone,
    private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder,
    public search_loc_page_event: Events,
    private speechRecognition: SpeechRecognition,
    public networkService: NetworkService
  ) {
    this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
    this.autocomplete = { input: '' };
    this.autocompleteItems = [];
  }
  ngOnInit() {
    this.checkPermission();
    this.search_loc_page_event.subscribe('check_net_connection', (data) => {
      if (data == 'connect') this.net_connection_check = false;
      if (data == 'disconnect') this.net_connection_check = true;
    });
    this.which_type_search = this.route.snapshot.paramMap.get("type")
    if (this.which_type_search == 'drop') {
      this.quick_actions = false;
      this.location_placeholder = "Enter drop location"
    }
  }
  ionViewDidEnter() {
    if (this.which_type_search == 'pickup') {
      if (!this.networkService.checkNetworkDisconnect())
        this.currentLocation(this.which_type_search, true);
    }

  }
  currentLocation(which_type_search = '', start_flag = false) {
    this.geolocation.getCurrentPosition({ enableHighAccuracy: true }).then(resp => {
      if (which_type_search == 'pickup') {
        this.getGeoencoder(resp.coords.latitude, resp.coords.longitude);
        if (!start_flag)
          this.selectLocation('pickup')
      }
      this.loadMap(resp.coords.latitude, resp.coords.longitude);
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }
  loadMap(lat, lng) {
    this.showList = false;
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      center: { lat: lat, lng: lng },
      zoom: 15,
    });
    let marker = new google.maps.Marker({
      position: { lat: lat, lng: lng },
      map: this.map,
      draggable: true,
    });
    this.markers.push(marker);
    this.lastLatLng(marker);
  }
  lastLatLng(marker) {
    google.maps.event.addListener(marker, 'dragend', () => {
      this.getGeoencoder(marker.position.lat(), marker.position.lng());
    });
  }
  updateSearchResults(ev: any, which_type_search, voice = false) {
    this.isItemAvailable = false
    this.isNoItemAvailable = false;
    var val = ''
    if (voice) {
      val = ev;
    } else {
      val = ev.target.value;
    }
    if (val == '') {
      this.autocompleteItems = [];
      this.quick_actions = true;
      return;
    }
    if (which_type_search == 'pickup') {
      this.GoogleAutocomplete.getPlacePredictions({ input: val },
        (predictions, status) => {
          this.quick_actions = false;
          this.autocompleteItems = [];
          this.zone.run(() => {
            this.showList = true;
            predictions.forEach((prediction) => {
              this.autocompleteItems.push(prediction);
            });
          });
        });
    } else {
      this.autocompleteItems = [];
      this.showList = true;
      this.getDropLocations(val);
    }
  }
  getDropLocations(val) {
    let request_data = { 'type': 'nearest_location', 'address': val }
    this.officePoolCarService.commonSearchService(request_data).subscribe(
      res => {
        //console.log('res.result', res.result.length)
        this.autocompleteItems = res.result;
        this.progress_bar = false;
        if (this.autocompleteItems.length == 0)
          this.isNoItemAvailable = true;
        //}
      },
      error => {
        //console.log("error::::" + error.error.msg);
        this.progress_bar = false;
        //this.toasterService.showToast(error.error.msg, 2000)
      }
    );
    //this.autocompleteItems.push({ 'description': 'test ..' });

  }
  selectSearchLocation(location: any, type: any) {
    if (type == 'pickup') {
      this.showList = false;
      this.search_address = location;
      let geocoder = new google.maps.Geocoder();
      geocoder.geocode({ 'address': location }, (results, status) => {
        this.loadMap(results[0].geometry.location.lat(), results[0].geometry.location.lng());
      });
    }
    else {
      this.storage.get('select_location').then((val) => {
        if (val != null) {
          let val1 = val;
          val1['drop_location'] = location;
          this.storage.set('select_location', val1);
        }
      });
      this.router.navigateByUrl('office-pool-car-service');
    }

  }
  selectLocation(type: any) {
    this.storage.get('select_location').then((val) => {
      if (val != null) {
        //console.log('ifeeeeeeeeeeeee')
        let val1 = val;
        if (type == 'pickup') {
          val1['pickup_location'] = this.search_address;
          this.storage.set('select_location', val1)
        }
        else if (type == 'drop') {
          val1['drop_location'] = this.search_address;
          this.storage.set('select_location', val1);
        }
      }
      else {
        //console.log('elseeeeeeeeeee')
        if (type == 'pickup') {
          this.storage.set('select_location', { 'pickup_location': this.search_address })
        }
        else if (type == 'drop') {
          this.storage.set('select_location', { 'drop_location': this.search_address })
        }
      }
    });
    this.router.navigateByUrl('office-pool-car-service');
  }
  getGeoencoder(latitude, longitude) {
    this.nativeGeocoder.reverseGeocode(latitude, longitude, this.geoencoderOptions)
      .then((result: NativeGeocoderResult[]) => {
        this.search_address = this.generateAddress(result[0]);
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
  checkPermission() {
    this.speechRecognition.hasPermission().then((permission) => {
      if (permission) {

      } else {
        this.requestPermission();
      }
    }, (err) => {
      alert(JSON.stringify(err));
    })
  }
  requestPermission() {
    this.speechRecognition.requestPermission().then((data) => {
      //alert(JSON.stringify(data));
    },
      (err) => {
        alert(JSON.stringify(err));
      })
  }
  startListing(which_type_search) {
    this.speechRecognition.startListening().subscribe((speeches) => {
      //this.updateSearchResults(speeches, which_type_search, true)
      this.search_address = speeches[0];
    }, (err) => {
      alert(JSON.stringify(err));
    })
  }

}
