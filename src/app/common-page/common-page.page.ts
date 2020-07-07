import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { OfficePoolCarService } from '../core/services/office-pool-car.service';
import { ToasterService, LoadingService, NetworkService } from '../core/globalMethods/global-methods';
import { Location } from "@angular/common";

@Component({
  selector: 'app-common-page',
  templateUrl: './common-page.page.html',
  styleUrls: ['./common-page.page.scss'],
})
export class CommonPagePage implements OnInit {
  which_page: string = '';
  result: any;
  request_data: any;
  private previousUrl: string;
  private currentUrl: string;
  constructor(
    private route: ActivatedRoute,
    public officePoolCarService: OfficePoolCarService,
    private loadingService: LoadingService,
    private toasterService: ToasterService,
    private router: Router,
    private location: Location,
    private networkService: NetworkService
  ) {
    this.currentUrl = this.router.url;
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.previousUrl = this.currentUrl;
        this.currentUrl = event.url;
      }
    });
  }
  ngOnInit() {
    console.log('check')
    this.which_page = this.route.snapshot.params['which-page'];
    if (!(this.which_page == 'check-internet-connection')) this.getContent(this.which_page);
  }
  getContent(which_page) {
    this.loadingService.present();
    this.request_data = {
      "content_type": which_page,
      "type": "site_content"
    };
    if (which_page == 'popup-details') {
      this.request_data = {
        "type": which_page
      };
    }

    this.officePoolCarService.commonPageContentService(this.request_data).subscribe(
      res => {
        //console.log('res', res)
        this.loadingService.dismiss();
        this.result = res.result
      },
      error => {
        this.loadingService.dismiss();
        this.toasterService.showToast(error.error.msg, 2000, true, false, '', '', 'my-error-toast');
      }
    );
  }
  retry() {
    if (!this.networkService.checkNetworkDisconnect()) {
      this.previousUrl = this.currentUrl;
    } else {
      return false
    }

  }
}
