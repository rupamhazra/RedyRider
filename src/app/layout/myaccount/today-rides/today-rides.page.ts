import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { LoadingService } from '../../../core/services/loading.service';
import { ToasterService } from '../../../core/services/toaster.service';
import { Platform } from '@ionic/angular';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { OfficePoolCarService } from '../../../core/services/office-pool-car.service';
import { Events } from '@ionic/angular';
import { RouteStoppageModalPage } from '../../office-pool-car-service/route-stoppage-modal/route-stoppage-modal.page';
import { ModalService } from '../../../core/services/modal.service';

@Component({
  selector: 'app-today-rides',
  templateUrl: './today-rides.page.html',
  styleUrls: ['./today-rides.page.scss'],
})
export class TodayRidesPage implements OnInit {
  userId = '';
  result = [];
  progress_bar: boolean = false;
  constructor(
    private storage: Storage,
    private router: Router,
    public loadingService: LoadingService,
    private toasterService: ToasterService,
    public platform: Platform,
    public localNotifications: LocalNotifications,
    public officePoolCarService: OfficePoolCarService,
    public home_page_event: Events,
    public modalService: ModalService,
  ) {
  }
  ngOnInit() {
    this.storage.get('USER_INFO').then((val) => {
      if (val) {
        this.userId = val.id;
        console.log('user_details_val_val', val.id)
        this.getTodayRides();
      }
    });
  }
  getTodayRides() {
    console.log('userId', this.userId)
    this.progress_bar = true;
    let request_data = { "type": "driver", "user_id": this.userId };
    this.officePoolCarService.todayRidesService(request_data).subscribe(
      res => {
        //console.log('res', res)
        this.result = res.result;
        console.log(this.result);
        //this.result.shift();
        this.progress_bar = false;
      },
      error => {
        //console.log("error::::" + error.error);
        this.progress_bar = false;
        this.toasterService.showToast(error.error.msg);
      }
    );
  }
  startRide(car_id) {
    this.router.navigateByUrl('myaccount/location-tracking/' + car_id + '/' + this.userId);
  }
  viewRoute(route_id: string, start_point, end_point) {
    let data = { 'route_id': route_id, 'from_which_page': 'bus-route-details-page', 'start_point': start_point, 'end_point': end_point }
    this.modalService.openModal(RouteStoppageModalPage, data, 'stoppage_modal_css');
  }

}
