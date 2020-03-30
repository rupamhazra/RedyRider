import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { ToasterService } from '../../../core/services/toaster.service';
import { Device } from '@ionic-native/device/ngx';
import { OtpVerificationPage } from './../otp-verification/otp-verification.page';
import { ModalService } from '../../../core/services/modal.service';
import { Events } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { LoadingService } from '../../../core/services/loading.service';
import { AlertService } from '../../../core/services/alert.service';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {
  //journey_date: any = new Date().toISOString();
  form: FormGroup;
  net_connection_check: boolean = false;
  minDate = new Date().toISOString();
  myDate = new Date().toISOString();
  myReturnDate = new Date().toISOString();
  myTime = new Date().toISOString();
  myReturnTime = new Date().toISOString();
  minTime: any;
  minReturnTime: any;
  maxDate: any;
  val1: any;
  roundTripDiv: boolean = false;
  today = new Date();
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private toasterService: ToasterService,
    private device: Device,
    public modalService: ModalService,
    public date_time_event: Events,
    public storage: Storage,
    private loadingService: LoadingService,
    private alertService: AlertService

  ) {
    this.storage.get('route_search_parameters').then((val) => {
      this.val1 = val;
      //console.log('val', val);
      if (val['single_or_round'] == '1') {
        this.roundTripDiv = true
        //console.log('this.roundTripDiv', this.roundTripDiv)
      }
    });
  }
  ngOnInit() {
    this.maxDate = this.today.getFullYear() + 1;
    this.minTime = this.today.getHours() + ":" + this.today.getMinutes();
    this.minReturnTime = this.today.getHours() + ":" + this.today.getMinutes();
    //console.log('this.minTime', this.minTime)

    this.date_time_event.subscribe('check_net_connection', (data) => {
      if (data == 'connect') this.net_connection_check = false;
      if (data == 'disconnect') this.net_connection_check = true;
    });
    this.form = this.formBuilder.group({
      journey_date: [''],
      journey_time: [''],
      return_date: [''],
      return_time: [''],
    });
  }
  changeTime(mode = 'single') {
    if (mode == 'round') {
      var d = new Date(this.myReturnDate);
      let t1 = this.today.setHours(0, 0, 0, 0);
      let d1 = d.setHours(0, 0, 0, 0);
      //console.log('this.myReturnDate', d1, '==', t1);
      if (t1 < d1) {
        this.minReturnTime = '01:01';
      } else if (t1 == d1) {
        let c = new Date()
        this.minReturnTime = c.getHours() + ":" + c.getMinutes();
        this.myReturnTime = c.getHours() + ":" + c.getMinutes();
      }
    } else {
      var d = new Date(this.myDate);
      let t1 = this.today.setHours(0, 0, 0, 0);
      let d1 = d.setHours(0, 0, 0, 0);
      //console.log('this.myDate', d1, '==', t1);
      if (t1 < d1) {
        this.minTime = '01:01';
      } else if (t1 == d1) {
        let c = new Date()
        this.minTime = c.getHours() + ":" + c.getMinutes();
        this.myTime = c.getHours() + ":" + c.getMinutes();
      }
    }

  }

  localTimeConversionWithOutSecondsIn24Format(takeDatetime: any) {
    let d = new Date(takeDatetime);
    let time = d.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' })
    return time
  }
  getOnlyDate(takeDatetime: any) {
    return takeDatetime.split('T')[0]
  }
  savaData() {
    if (this.roundTripDiv) {
      if (this.form.value.return_date < this.form.value.journey_date) {
        this.alertService.presentAlert('Return date should not be less than start date');
        return false;
      }
      // if (this.form.value.return_time < this.form.value.journey_time) {
      //   this.alertService.presentAlert('Return time should not be less than start time');
      //   return false;
      // }
      this.val1['return_date'] = this.form.value.return_date ? this.getOnlyDate(this.form.value.return_date) : '';
      // this.val1['return_time'] = this.form.value.return_time ? this.localTimeConversionWithOutSecondsIn24Format(this.form.value.return_time) : '';
    }
    this.val1['traval_date'] = this.form.value.journey_date ? this.getOnlyDate(this.form.value.journey_date) : '';
    // this.val1['traval_time'] = this.form.value.journey_time ? this.localTimeConversionWithOutSecondsIn24Format(this.form.value.journey_time) : '';

    this.storage.set('route_search_parameters', this.val1);
    this.router.navigateByUrl('bus-route-details');
  }
  dateSelected(event) {
    //console.log('event', event);
  }
}
