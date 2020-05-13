import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { RouteStoppageModalPage } from '../../office-pool-car-service/route-stoppage-modal/route-stoppage-modal.page';
import { ModalService } from '../../../core/services/modal.service';
import { ToasterService } from '../../../core/services/toaster.service';
import { OfficePoolCarService } from '../../../core/services/office-pool-car.service';
import { ActionSheetController } from '@ionic/angular';
import { LoadingService } from '../../../core/services/loading.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.page.html',
  styleUrls: ['./booking-history.page.scss'],
})
export class BookingHistoryPage implements OnInit {
  filter: string = "today";
  actionSheet: any;
  userId: string;
  page = 1;
  maximumPages = 10;
  transactionList = [];
  progress_bar: boolean = false;
  filter_text: string = "Today's";
  constructor(
    private storage: Storage,
    public modalService: ModalService,
    private toasterService: ToasterService,
    private officePoolCarService: OfficePoolCarService,
    public actionSheetController: ActionSheetController,
    private loadingService: LoadingService,
    private router: Router
  ) { }

  ngOnInit() {
    this.storage.get('USER_INFO').then((val) => {
      //console.log('USER_INFO', val);
      this.userId = val['id'];
      this.getTransactionHistory();

    });
  }
  getTransactionHistory(event?) {
    this.progress_bar = true;
    let request_data = {
      "type": "booking_list",
      "user_id": this.userId,
      //"filter_by": this.filter,
      "page": this.page,
      "count": 6,
      "booking_list status": this.filter

    };
    this.officePoolCarService.applyCouponService(request_data).subscribe(
      res => {
        //console.log('this.transactionList', res.result['payment_history'].length);
        if (res.result.length == 0) {
          event.target.complete();
        } else {
          this.transactionList = this.transactionList.concat(res.result);
        }

        this.progress_bar = false;
        if (event) {
          event.target.complete();
        }
      },
      error => {
        //console.log("error::::" + error.error.msg);
        this.progress_bar = false;
        this.toasterService.showToast(error.error.msg, 2000)
      }
    );
  }
  loadData(event) {
    this.page++;
    this.getTransactionHistory(event);
    if (this.page === this.maximumPages) {
      event.target.disabled = true;
    }
  }
  openBooking(booking_id) {
    //let data = { 'from_which_page': 'my-booking-history', 'userId': this.userId, 'booking_id': booking_id }
    this.router.navigateByUrl('myaccount/booking-history-details/' + booking_id)
  }
  filterRides() {
    this.actionSheet = this.actionSheetController.create({
      header: 'Filter Rides',
      buttons: [
        {
          text: 'All',
          handler: () => {
            this.filter = '';
            this.filter_text = 'All';
            this.getTransactionHistory();
          }
        },
        {
          text: 'Completed',
          handler: () => {
            this.filter = 'complete';
            this.filter_text = 'Completed';
            this.getTransactionHistory();
          }
        },
        {
          text: 'Upcoming',
          handler: () => {
            this.filter = 'up_come_today';
            this.filter_text = 'Upcoming';
            this.getTransactionHistory();
          }
        },
        {
          text: "Today's",
          handler: () => {
            this.filter = 'today';
            this.filter_text = "Today's";
            this.getTransactionHistory();
          }
        },
        {
          text: 'Cancelled',
          handler: () => {
            this.filter = 'cancelled';
            this.filter_text = 'Cancelled';
            this.getTransactionHistory();
          }
        }]
    }).then(actionsheet => {
      actionsheet.present();
    });

  }

}
