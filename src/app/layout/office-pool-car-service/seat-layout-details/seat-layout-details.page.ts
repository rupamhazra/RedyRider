import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from "@angular/router";
import { ToasterService } from '../../../core/services/toaster.service';
import { ModalService } from '../../../core/services/modal.service';
import { Events } from '@ionic/angular';
import { OfficePoolCarService } from '../../../core/services/office-pool-car.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-seat-layout-details',
  templateUrl: './seat-layout-details.page.html',
  styleUrls: ['./seat-layout-details.page.scss'],
})
export class SeatLayoutDetailsPage implements OnInit {
  seatClass: any = 'seatAvailable';
  seatNo: string;
  net_connection_check: boolean = false;
  request_data: any;
  request_data_for_booking: any;
  journy_date: any;
  journy_time: any;
  route_master_id: any;
  car_id: any;
  userId: any;
  selectedSeatNo: any = [];
  selectedSeatNoForReturn: any = [];
  mode = 2;
  allSeats: any = {};
  allSeats_round: any = {};
  progress_bar: boolean = false;
  constructor(
    private router: Router,
    private toasterService: ToasterService,
    public modalService: ModalService,
    public seat_layout_details_event: Events,
    private officePoolCarService: OfficePoolCarService,
    public storage: Storage,
  ) {
    this.progress_bar = true;
    this.storage.get('route_search_parameters').then((val) => {
      let val1 = val;
      val1['type'] = 'booked';
      this.request_data = val1;
      this.storage.set('route_search_parameters', val1);
      console.log('route_search_parameters', val)
      this.journy_date = val.traval_date;
      this.journy_time = val.traval_time;
      this.mode = val['single_or_round'];
      let cars_d = val.cars_details
      if (cars_d.length > 1 && this.mode == 1) {
        let request_data_1 = {
          "type": "seat_layout",
          "car_id": cars_d[0].car_id,
          "traval_date": val.traval_date,
          "traval_time": val.traval_time,
          "route_timing_id": cars_d[0].route_timing_id,
          'start_point_id': cars_d[0].start_point_id,
          'end_point_id': cars_d[0].end_point_id,
        }
        this.getSeatDetails(request_data_1);
        let request_data_2 = {
          "type": "seat_layout",
          "car_id": cars_d[1].car_id,
          "traval_date": val.return_date,
          "traval_time": val.return_time,
          "route_timing_id": cars_d[1].route_timing_id,
          'start_point_id': cars_d[1].start_point,
          'end_point_id': cars_d[1].end_point
        }
        this.getSeatDetailsforRoundTrip(request_data_2);
      }
      else {
        let request_data_1 = {
          "type": "seat_layout",
          "car_id": cars_d[0].car_id,
          "traval_date": val.traval_date,
          "traval_time": val.traval_time,
          "route_timing_id": cars_d[0].route_timing_id,
          'start_point_id': cars_d[0].start_point_id,
          'end_point_id': cars_d[0].end_point_id
        }
        this.getSeatDetails(request_data_1);
      }
    });
    this.storage.get('USER_INFO').then((val) => {
      //console.log('USER_INFO', val)
      this.userId = val.id;
    });
  }

  ngOnInit() {
    this.seat_layout_details_event.subscribe('check_net_connection', (data) => {
      if (data == 'connect') this.net_connection_check = false;
      if (data == 'disconnect') this.net_connection_check = true;
    });
  }
  getSeatDetailsforRoundTrip(request_data) {
    this.officePoolCarService.commonSearchService(request_data).subscribe(
      res => {
        this.allSeats_round = res.result;
      },
      error => {
        this.toasterService.showToast(error.error.msg, 2000)
      }
    );
  }
  getSeatDetails(request_data) {
    console.log('request_data', request_data)
    this.officePoolCarService.commonSearchService(request_data).subscribe(
      res => {
        this.allSeats = res.result;
        this.progress_bar = false;
      },
      error => {
        //console.log("error::::" + error.error);
        this.progress_bar = false;
        this.toasterService.showToast(error.error.msg, 2000)
      }
    );
  }
  toggleClass(item, car_id) {
    item.selected = !item.selected;
    if (item.selected) {
      this.storage.get('route_search_parameters').then((val) => {
        let val1 = val;
        for (var i = 0; i < val1['cars_details'].length; i++) {
          if (car_id == val1['cars_details'][i]['car_id']) {
            val1['cars_details'][i]['seats'].push(item.seat_number);
          }
        }
        this.storage.set('route_search_parameters', val1);
        this.request_data = val1;
      });
    } else {
      this.storage.get('route_search_parameters').then((val) => {
        let val1 = val;
        for (var i = 0; i < val1['cars_details'].length; i++) {
          if (car_id == val1['cars_details'][i]['car_id']) {
            val1['cars_details'][i]['seats'].pop(item.seat_number);
          }
        }
        this.storage.set('route_search_parameters', val1);
        this.request_data = val1;
      });
    }
  }
  confirmBooking() {
    this.progress_bar = true;
    this.officePoolCarService.seatBookingService(this.request_data).subscribe(
      res => {
        let bookingDetails = res.result;
        this.storage.set('bookingDetails', bookingDetails);
        this.progress_bar = false;
        this.router.navigateByUrl('booked-details');
      },
      error => {
        console.log("error::::" + error.error);
        this.progress_bar = false;
        this.toasterService.showToast(error.error.msg, 3000);
      }
    );
  }
}
