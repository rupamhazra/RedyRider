import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Clipboard } from '@ionic-native/clipboard/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { RouteStoppageModalPage } from '../../office-pool-car-service/route-stoppage-modal/route-stoppage-modal.page';
import { ModalService } from '../../../core/services/modal.service';
import { ToasterService } from '../../../core/services/toaster.service';
import { OfficePoolCarService } from '../../../core/services/office-pool-car.service';
@Component({
  selector: 'app-myaccount-common-page',
  templateUrl: './myaccount-common-page.page.html',
  styleUrls: ['./myaccount-common-page.page.scss'],
})
export class MyaccountCommonPagePage implements OnInit {
  which_page: string = '';
  refer_code: string = '';
  generate_link: string;
  message: string = "";
  dataList: any;
  userId: string;
  blank_div: boolean = false;
  device_token: string;
  progress_bar: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private storage: Storage,
    private clipboard: Clipboard,
    private socialSharing: SocialSharing,
    public modalService: ModalService,
    private toasterService: ToasterService,
    private officePoolCarService: OfficePoolCarService,
  ) { }

  ngOnInit() {
    this.which_page = this.route.snapshot.params['which-page'];
    this.progress_bar = true;
    this.storage.get('USER_INFO').then((val) => {
      if (val) {
        this.userId = val['id'];
        this.refer_code = val.referral_no;
        this.generate_link = 'https://google.com/' + this.refer_code;
        this.message = 'Your friend has invited you to join RedyRider instant and safe carpooling with verified users.Use promo code ' + this.refer_code + ' on sign up.Click here';
        this.progress_bar = false;
        this.device_token = val.user_device['device_token'];
        this.notificationDetails();
      }
    });
  }
  copyText(input) {
    this.clipboard.copy(input);
    this.toasterService.showToast('Copied to clipboard', 1000, true, false);
  }
  referFriends() {
    var options = {
      message: 'Your friend has invited you to join RedyRider instant and safe carpooling with verified users.Use promo code ' + this.refer_code + ' on sign up.Click here',
      // subject: 'this is a test subject',
      // files:[],
      // chooserTitle: 'RedyRider',
      //appPackageName:'com.'
      url: this.generate_link
    }
    this.socialSharing.shareWithOptions(options);
  }
  shareVia(which: string) {
    if (which == 'whatsapp') {
      this.socialSharing.shareViaWhatsApp(this.message, '', this.generate_link)
    }
    if (which == 'facebook') {
      this.socialSharing.shareViaFacebook(this.message, '', this.generate_link)
    }
    if (which == 'gmail') {
      this.message = this.message + this.generate_link
      this.socialSharing.shareViaEmail(this.message, 'Redy Rider Invitation', [])
    }
  }
  showTerms() {
    let data = { 'from_which_page': 'refer-earn-page-terms' }
    this.modalService.openModal(RouteStoppageModalPage, data, 'stoppage_modal_css');
  }
  showHowToEarn() {
    let data = { 'from_which_page': 'refer-earn-page-earn' }
    this.modalService.openModal(RouteStoppageModalPage, data, '_c_modal_css');
  }
  notificationDetails() {
    this.progress_bar = true;
    let request_data = {
      "type": "notification",
      "user_id": this.userId,
      "device_token": this.device_token
    };

    this.officePoolCarService.notificationService(request_data).subscribe(
      res => {
        //console.log('res.result', res.result)
        if (res.result.length == 0) {
          this.blank_div = true;
        }
        this.dataList = res.result;
        this.progress_bar = false;
      },
      error => {
        this.progress_bar = false;
        this.toasterService.showToast(error.error.msg, 2000);
      }
    );
  }
}
