import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Events } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { OfficePoolCarService } from '../../../core/services/office-pool-car.service';
import { ToasterService, LoadingService, NetworkService } from '../../../core/globalMethods/global-methods';
import { ActionSheetController, IonContent } from '@ionic/angular';
declare var RazorpayCheckout: any;


@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.page.html',
  styleUrls: ['./wallet.page.scss'],
})
export class WalletPage implements OnInit {
  @ViewChild(IonContent) ionContent: IonContent;
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
  razor_pay_key: string;
  constructor(
    private formBuilder: FormBuilder,
    public wallet_event: Events,
    private toasterService: ToasterService,
    private officePoolCarService: OfficePoolCarService,
    private loadingService: LoadingService,
    public storage: Storage,
    public actionSheetController: ActionSheetController,
    private networkService: NetworkService
  ) {
    this.storage.get('USER_INFO').then((val) => {
      //console.log('USER_INFO', val);
      this.userId = val['id'];
      this.userName = val['name'];
      this.userEmail = val['email'];
      this.userPhone = val['mobile'];
      //this.razor_pay_key = val['razor_pay_key'];
      if (!this.networkService.checkNetworkDisconnect()) this.getTransactionHistory(false, false);

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
    if (!this.networkService.checkNetworkDisconnect()) this.getApiKeyDetails();
  }
  getApiKeyDetails() {
    let request_data = {
      "type": "rzr_pay_api",
    }
    this.officePoolCarService.commonPageContentService(request_data).subscribe(
      res => {
        this.razor_pay_key = res.result.razor_pay_key
      },
      error => {

      }
    );
  }
  getTransactionHistory(event, isFirstLoad: boolean) {
    if (!event)
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
        //console.log('this.transactionList', res.result['payment_history'].length);
        if (res.result['payment_history']) {
          let res_arr = res.result['payment_history'];
          for (let i = 0; i < res_arr.length; i++) {
            this.transactionList.push(res_arr[i]);
          }
          this.page++;

        } else {
          if (this.page == 1) {
            this.progress_bar = false;
            this.transactionList = res.result['payment_history'];
          }
        }

        if (!event) this.progress_bar = false;
        if (isFirstLoad) {
          event.target.complete();
        }

      },
      error => {
        //console.log("error::::" + error.error.msg);
        this.progress_bar = false;
        this.toasterService.showToast(error.error.msg, 2000, true, false, '', '', 'my-error-toast');
      }
    );
  }
  loadData(event) {
    //this.page++;
    this.getTransactionHistory(event, true);
    //this.ionContent.scrollToBottom();
    // if (this.page === this.maximumPages) {
    //   event.target.disabled = true;
    // }
  }
  addMoneyToWallet() {
    console.log('API KEY', this.razor_pay_key);
    var options = {
      description: 'Credits towards consultation',
      // image: 'https://i.imgur.com/3g7nmJC.png',
      currency: 'INR',
      key: this.razor_pay_key,
      amount: parseFloat(this.form.value.amount) * 100,
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
        "amount": parseFloat(this.form.value.amount),
        "transaction_no": payment_id,
        "referal_coupon_code_id": "0",
        "recharge_by": "razorpay",
        "status": '1'
      };
      //alert('request_data' + request_data)
      this.addToWallet(request_data);
    };
    var cancelCallback = (error) => {
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
        this.getTransactionHistory(false, false);
        if (status == '3')
          this.toasterService.showToast('Your transaction has been cancelled', 2000, true, false, '', '', 'my-error-toast');
        else
          this.toasterService.showToast('Your amound has been added to your wallet', 2000);
        this.loadingService.dismiss();
      },
      error => {
        //console.log("error::::" + error.error.msg);
        this.loadingService.dismiss();
        this.toasterService.showToast(error.error.msg, 2000, true, false, '', '', 'my-error-toast');
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
            this.getTransactionHistory(false, false);
          }
        },
        {
          text: 'Paid',
          handler: () => {
            this.filter = '2';
            this.getTransactionHistory(false, false);
          }
        },
        {
          text: 'Cancelled',
          handler: () => {
            this.filter = '3';
            this.getTransactionHistory(false, false);
          }
        }]
    }).then(actionsheet => {
      actionsheet.present();
    });

  }

}
