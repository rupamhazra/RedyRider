import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from "@angular/router";
import { FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { ToasterService } from '../../../core/services/toaster.service';
import { Device } from '@ionic-native/device/ngx';
import { ModalService } from '../../../core/services/modal.service';
import { Events } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { LoadingService } from '../../../core/services/loading.service';
import { IonInfiniteScroll, IonVirtualScroll } from '@ionic/angular';
import { RouteStoppageModalPage } from '../route-stoppage-modal/route-stoppage-modal.page';
import { OfficePoolCarService } from '../../../core/services/office-pool-car.service';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
@Component({
  selector: 'app-bus-route-details',
  templateUrl: './bus-route-details.page.html',
  styleUrls: ['./bus-route-details.page.scss'],
  animations: [
    trigger('fadein', [
      state('void', style({ opacity: 0 })),
      transition('void => *', [
        style({ opacity: 0 }),
        animate('900ms ease-out', style({ opacity: 1 }))
      ])
    ]),
    trigger('slidelefttitle', [
      transition('void => *', [
        style({ opacity: 0, transform: 'translateX(150%)' }),
        animate('900ms 300ms ease-out', style({ transform: 'translateX(0%)', opacity: 1 }))
      ])
    ]),

  ]
})
export class BusRouteDetailsPage implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  @ViewChild(IonVirtualScroll) virtualScroll: IonVirtualScroll;

  form: FormGroup;
  net_connection_check: boolean = false;
  request_data: any;
  dataList: any;
  dataList_show: boolean;
  disabled_button: boolean = false;
  disabled_button_text = 'SELECT THIS CAR'
  car_count = 0;
  select_class = '';
  mode = '2';
  progress_bar: boolean = false;
  no_bus_saturday: boolean = false;
  no_bus_saturday_msg = '';
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private toasterService: ToasterService,
    private device: Device,
    public modalService: ModalService,
    public bus_route_details_event: Events,
    public storage: Storage,
    private loadingService: LoadingService,
    private officePoolCarService: OfficePoolCarService,
  ) {
    this.progress_bar = true;
    this.storage.get('route_search_parameters').then((val) => {
      let val1 = val
      this.mode = val.single_or_round;
      //console.log('route_search_parameters', val)
      val1['cars_details'] = [];
      this.storage.set('route_search_parameters', val1);
      this.request_data = val1;
      this.routeDetails();
    });
  }


  ngOnInit() {
    this.progress_bar = true;
    this.bus_route_details_event.subscribe('check_net_connection', (data) => {
      if (data == 'connect') this.net_connection_check = false;
      if (data == 'disconnect') this.net_connection_check = true;
    });
    this.form = this.formBuilder.group({
      journey_date: ['', Validators.required],
      journey_time: ['', Validators.required],
    });



  }
  routeDetails() {

    //console.log('this.request_data', this.request_data)
    this.officePoolCarService.commonSearchService(this.request_data).subscribe(
      res => {
        let dataList1 = [];
        //console.log('res.result', res.result.length)
        if (res.result === undefined || res.result === null || res.result.length == 0) {
          this.dataList = [];
          this.dataList_show = true;
          this.progress_bar = false;
        }
        this.dataList = res.result;
        this.progress_bar = false;
        //}


      },
      error => {
        //console.log("error::::" + error.error.msg);
        this.progress_bar = false;
        this.no_bus_saturday = true;
        this.no_bus_saturday_msg = error.error.msg;
        //this.toasterService.showToast(error.error.msg, 2000)
      }
    );
  }
  reserveSeat(item, event) {
    item.car_selected = !item.car_selected;
    this.storage.get('route_search_parameters').then((val) => {
      let val1 = val
      let cars = {
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
      this.car_count = val1['cars_details'].length
      this.storage.set('route_search_parameters', val1);
    });
  }
  goToNextPage() {
    // console.log('this.car_count', this.car_count)
    // console.log('this.round_mode', this.mode)
    if (this.mode == '1' && this.car_count < 2) {
      this.toasterService.showToast('Please select two cars for your round trip', 3000);
    } else if (this.mode == '0' && this.car_count < 1) {
      this.toasterService.showToast('Please select one car for your single trip', 3000);
    } else {
      //console.log('OKKLKKKKK', this.mode)
      this.router.navigateByUrl('/seat-layout-details')
    }

  }
  loadData(event) {
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
  }
  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }
  viewRoute(route_id: string, start_point, end_point) {
    let data = { 'route_id': route_id, 'from_which_page': 'bus-route-details-page', 'start_point': start_point, 'end_point': end_point }
    this.modalService.openModal(RouteStoppageModalPage, data, 'stoppage_modal_css');
  }

}
