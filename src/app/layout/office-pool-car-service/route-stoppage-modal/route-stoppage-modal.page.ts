import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../../core/services/modal.service';
import { ToasterService } from '../../../core/services/toaster.service';
import { LoadingService } from '../../../core/services/loading.service';
import { OfficePoolCarService } from '../../../core/services/office-pool-car.service';
import { NavParams } from '@ionic/angular';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { Events } from '@ionic/angular';
import { IonicSelectableComponent } from 'ionic-selectable';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-route-stoppage-modal',
  templateUrl: './route-stoppage-modal.page.html',
  styleUrls: ['./route-stoppage-modal.page.scss'],
})
export class RouteStoppageModalPage implements OnInit {
  items: any;
  calling_page: string;
  form_personal: FormGroup;
  form_add: FormGroup;
  form_booking: FormGroup;
  result_data: any = {};
  net_connection_check: boolean = false;
  countries: any;
  states: any;
  cities: any;
  country_selected = {};
  state_selected = {};
  city_selected = {};
  qr_image;
  stoppage_list;
  constructor(
    public modalService: ModalService,
    private officePoolCarService: OfficePoolCarService,
    private navParams: NavParams,
    private loadingService: LoadingService,
    private toasterService: ToasterService,
    private formBuilder: FormBuilder,
    public route_stoppage_details_event: Events,
    private router: Router,
    private storage: Storage,
  ) {


  }

  ngOnInit() {

    this.route_stoppage_details_event.subscribe('check_net_connection', (data) => {
      if (data == 'connect') this.net_connection_check = false;
      if (data == 'disconnect') this.net_connection_check = true;
    });
    this.calling_page = this.navParams.get('from_which_page');
    console.log('this.calling_page', this.calling_page)
    let route_id = this.navParams.get('route_id');
    let end_point = this.navParams.get('end_point');
    let start_point = this.navParams.get('start_point');
    this.qr_image = this.navParams.get('qr_image');
    if (this.calling_page == 'bus-route-details-page') {
      this.loadingService.present();
      let request_data = { "type": "stoppage_details", "route_id": route_id, 'start_loc': start_point, 'end_loc': end_point };
      this.officePoolCarService.commonSearchService(request_data).subscribe(
        res => {
          //console.log("res:::" + res.msg);
          this.items = res.result;
          this.loadingService.dismiss();
        },
        error => {
          //console.log("error::::" + error.error.msg);
          this.loadingService.dismiss();
          this.toasterService.showToast(error.error.msg, 2000)
        }
      );
    }
    else if (this.calling_page == 'myaccount-personal') {
      console.log('myaccount-personal')
      this.getData(this.calling_page, this.navParams.get('userId'));
      this.form_personal = this.formBuilder.group({
        name: [Validators.required],
        email: [Validators.required],
        gender: [''],
        type: ['update'],
        user_id: [this.navParams.get('userId')]
      });
    }
    else if (this.calling_page == 'myaccount-address') {
      console.log('myaccount-address')
      this.countryList();
      this.getData(this.calling_page, this.navParams.get('userId'));
      this.form_add = this.formBuilder.group({
        address: [Validators.required],
        country_id: [Validators.required],
        state_id: [Validators.required],
        city_id: [Validators.required],
        pin_code: [Validators.required],
        type: ['update'],
        user_id: [this.navParams.get('userId')]
      });
    }
    if (this.calling_page == 'location-tracking-page') {
      this.stoppage_list = this.navParams.get('stoppage_list');
    }

  }
  closeModal() {
    this.modalService.closeModal();
  }
  getData(which, user_id, booking_id = '') {
    if (which == 'myaccount-personal') {
      console.log('getData myaccount-personal')
      this.loadingService.present();
      let request_data = { "user_id": user_id };
      this.officePoolCarService.personalService(request_data).subscribe(
        res => {
          //console.log("res:::" + res.msg);
          this.result_data = res.result;
          this.loadingService.dismiss();
        },
        error => {
          //console.log("error::::" + error.error.msg);
          this.loadingService.dismiss();
          this.toasterService.showToast(error.error.msg, 2000)
        }
      );
    }
    else if (which == 'myaccount-address') {
      console.log('getData myaccount-address')
      this.loadingService.present();
      let request_data = { "user_id": user_id };
      this.officePoolCarService.addressService(request_data).subscribe(
        res => {
          //console.log("res:::" + res.msg);
          this.country_selected = { 'id': res.result.country_id, 'name': res.result.country_name }
          this.state_selected = { 'id': res.result.state_id, 'name': res.result.state_name }
          this.city_selected = { 'id': res.result.city_id, 'name': res.result.city_name }
          this.result_data = res.result;
          this.loadingService.dismiss();
        },
        error => {
          //console.log("error::::" + error.error.msg);
          this.loadingService.dismiss();
          this.toasterService.showToast(error.error.msg, 2000)
        }
      );
    }
    else if (which == 'my-booking-history') {
      // this.loadingService.present();
      // let request_data = { "booking_id": booking_id };
      // this.officePoolCarService.addressService(request_data).subscribe(
      //   res => {
      //     //console.log("res:::" + res.msg);
      //     this.country_selected = { 'id': res.result.country_id, 'name': res.result.country_name }
      //     this.state_selected = { 'id': res.result.state_id, 'name': res.result.state_name }
      //     this.city_selected = { 'id': res.result.city_id, 'name': res.result.city_name }
      //     this.result_data = res.result;
      //     this.loadingService.dismiss();
      //   },
      //   error => {
      //     //console.log("error::::" + error.error.msg);
      //     this.loadingService.dismiss();
      //     this.toasterService.showToast(error.error.msg, 2000)
      //   }
      // );
    }
  }
  saveProfile() {
    this.officePoolCarService.profileService(this.form_personal.value).subscribe(
      res => {
        //console.log("res:::" + res.msg);
        this.result_data = res.result;
        this.route_stoppage_details_event.publish('profile_update', { "which": 'personal', "user_id": this.form_personal.value.user_id });
        this.storage.set('personal', res.result);
        this.modalService.closeModal();
        this.router.navigateByUrl('myaccount');
        this.loadingService.dismiss();
        this.toasterService.showToast(res.msg, 2000);
      },
      error => {
        //console.log("error::::" + error.error.msg);
        this.loadingService.dismiss();
        this.toasterService.showToast(error.error.msg, 2000)
      }
    );
  }
  countryList() {
    let request_data = { "type": 'country' };
    this.officePoolCarService.profileService(request_data).subscribe(
      res => {
        //console.log("res:::" + res.msg);
        this.countries = res.result;
        this.loadingService.dismiss();
      },
      error => {
        //console.log("error::::" + error.error.msg);
        this.loadingService.dismiss();
        this.toasterService.showToast(error.error.msg, 2000)
      }
    );
  }
  countryChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    let request_data = { "type": 'states', "which_id": event.value.id };
    this.officePoolCarService.profileService(request_data).subscribe(
      res => {
        //console.log("res:::" + res.msg);
        this.states = res.result;
        this.loadingService.dismiss();
      },
      error => {
        //console.log("error::::" + error.error.msg);
        this.loadingService.dismiss();
        this.toasterService.showToast(error.error.msg, 2000)
      }
    );
    console.log('port:', event.value);
  }
  stateChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    let request_data = { "type": 'cities', "which_id": event.value.id };
    this.officePoolCarService.profileService(request_data).subscribe(
      res => {
        //console.log("res:::" + res.msg);
        this.cities = res.result;
        this.loadingService.dismiss();
      },
      error => {
        //console.log("error::::" + error.error.msg);
        this.loadingService.dismiss();
        this.toasterService.showToast(error.error.msg, 2000)
      }
    );
    console.log('port:', event.value);
  }
  saveAddress() {
    console.log('this.form', this.form_add.value)
    let request_data = {
      "type": "update",
      "user_id": this.form_add.value.user_id,
      "address": this.form_add.value.address,
      "country_id": this.form_add.value.country_id.id,
      "state_id": this.form_add.value.state_id.id,
      "city_id": this.form_add.value.city_id.id,
      "pin_code": this.form_add.value.pin_code
    }
    this.officePoolCarService.profileService(request_data).subscribe(
      res => {
        //console.log("res:::" + res.msg);
        this.result_data = res.result;
        this.route_stoppage_details_event.publish('profile_update', { "which": 'address', "user_id": this.form_add.value.user_id });
        //this.storage.set('personal', res.result);
        this.modalService.closeModal();
        this.router.navigateByUrl('myaccount');
        this.loadingService.dismiss();
        this.toasterService.showToast(res.msg, 2000);
      },
      error => {
        //console.log("error::::" + error.error.msg);
        this.loadingService.dismiss();
        this.toasterService.showToast(error.error.msg, 2000)
      }
    );

  }
}
