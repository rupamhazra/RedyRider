import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Events } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { OfficePoolCarService } from '../../../core/services/office-pool-car.service';
import { LoadingService } from '../../../core/services/loading.service';
import { ToasterService } from '../../../core/services/toaster.service';
import { ActionSheetController } from '@ionic/angular';
declare var RazorpayCheckout: any;


@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.page.html',
  styleUrls: ['./wallet.page.scss'],
})
export class WalletPage implements OnInit {
  actionSheet: any;
  toggle_check: boolean;
  form: FormGroup;
  net_connection_check: boolean = false;
  userId: string;
  userName: string;
  userPhone: string;
  userEmail: string;
  page = 1;
  maximumPages = 10;
  walletAmount: string;
  transactionList = [];
  filter: string;
  progress_bar: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    public wallet_event: Events,
    private toasterService: ToasterService,
    private officePoolCarService: OfficePoolCarService,
    private loadingService: LoadingService,
    public storage: Storage,
    public actionSheetController: ActionSheetController
  ) {
    this.storage.get('USER_INFO').then((val) => {
      //console.log('USER_INFO', val);
      this.userId = val['id'];
      this.userName = val['name'];
      this.userEmail = val['email'];
      this.userPhone = val['mobile'];
      this.getTransactionHistory();

    });
  }
  ngOnInit() {
    this.wallet_event.subscribe('check_net_connection', (data) => {
      if (data == 'connect') this.net_connection_check = false;
      if (data == 'disconnect') this.net_connection_check = true;
    });
    this.form = this.formBuilder.group({
      amount: ['', Validators.required]
    });
  }
  getTransactionHistory(event?) {
    this.progress_bar = true;
    let request_data = {
      "type": "wallet",
      "user_id": this.userId,
      "filter_by": this.filter,
      "page": this.page,
      "count": 3,

    };
    this.officePoolCarService.payThroughWalletService(request_data).subscribe(
      res => {
        this.walletAmount = res.result['current_wallet_balance'];
        console.log('this.transactionList', res.result['payment_history'].length);
        if (res.result['payment_history'].length == 0) {
          this.transactionList = res.result['payment_history'];
        } else {
          this.transactionList = this.transactionList.concat(res.result['payment_history']);
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
  addMoneyToWallet() {
    var options = {
      description: 'Credits towards consultation',
      // image: 'https://i.imgur.com/3g7nmJC.png',
      currency: 'INR',
      key: 'rzp_test_5oKpHg5DYNOtKG',
      amount: this.form.value.amount,
      name: this.userName,
      prefill: {
        email: this.userEmail,
        contact: this.userPhone,
        name: this.userName
      },
      theme: {
        color: '#F37254'
      },
      modal: {
        ondismiss: function () {
          console.log('dismissed')
        }
      }
    };
    var successCallback = (payment_id) => {
      //alert('payment_id: ' + payment_id);
      let request_data = {
        "type": "add_to_wallet",
        "user_id": this.userId,
        "amount": options.amount,
        "transaction_no": payment_id,
        "referal_coupon_code_id": "0",
        "recharge_by": "razorpay",
        "status": '1'
      };
      //alert('request_data' + request_data)
      this.addToWallet(request_data);
    };
    var cancelCallback = (error) => {
      console.log(error.description + ' (Error ' + error.code + ')');
      let request_data = {
        "type": "add_to_wallet",
        "user_id": this.userId,
        "amount": 0.00,
        "transaction_no": 'CANCEL',
        "referal_coupon_code_id": "0",
        "recharge_by": "razorpay",
        "status": '3'
      };
      //alert('request_data' + request_data)
      this.addToWallet(request_data, '3');
    };
    RazorpayCheckout.open(options, successCallback, cancelCallback);
  }
  addToWallet(request_data: any, status = '') {
    this.officePoolCarService.payThroughWalletService(request_data).subscribe(
      res => {
        //alert('result' + res.result);
        this.getTransactionHistory();
        if (status == '3')
          this.toasterService.showToast('Your transaction has been cancelled', 2000);
        else
          this.toasterService.showToast('Your amound has been added to your wallet', 2000);
        this.loadingService.dismiss();
      },
      error => {
        //console.log("error::::" + error.error.msg);
        this.loadingService.dismiss();
        this.toasterService.showToast(error.error.msg, 2000)
      }
    );
  }
  filterTransactions() {
    this.actionSheet = this.actionSheetController.create({
      header: 'Filter Transactions',
      buttons: [
        {
          text: 'All',
          handler: () => {
            this.filter = '';
            this.getTransactionHistory();
          }
        },
        {
          text: 'Paid',
          handler: () => {
            this.filter = '2';
            this.getTransactionHistory();
          }
        }, {
          text: 'Add',
          handler: () => {
            this.filter = '1';
            this.getTransactionHistory();
          }
        }, {
          text: 'Cancelled',
          handler: () => {
            this.filter = '3';
            this.getTransactionHistory();
          }
        }]
    }).then(actionsheet => {
      actionsheet.present();
    });

  }

}
