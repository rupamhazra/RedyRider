import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OfficePoolCarService } from '../core/services/office-pool-car.service';
import { LoadingService } from '../core/services/loading.service';
import { ToasterService } from '../core/services/toaster.service';

@Component({
  selector: 'app-common-page',
  templateUrl: './common-page.page.html',
  styleUrls: ['./common-page.page.scss'],
})
export class CommonPagePage implements OnInit {
  which_page: string = '';
  result: any;
  constructor(
    private route: ActivatedRoute,
    public officePoolCarService: OfficePoolCarService,
    private loadingService: LoadingService,
    private toasterService: ToasterService,
  ) { }
  ngOnInit() {
    this.which_page = this.route.snapshot.params['which-page'];
    this.getContent(this.which_page);
  }
  getContent(which_page) {
    this.loadingService.present();
    let request_data = {
      "content_type": which_page,
      "type": "site_content"
    };
    this.officePoolCarService.commonPageContentService(request_data).subscribe(
      res => {
        //console.log('res', res)
        this.loadingService.dismiss();
        this.result = res.result
      },
      error => {
        console.log("error::::" + error.error);
        this.loadingService.dismiss();
        this.toasterService.showToast(error.error.msg, 2000, true, false, '', '', 'my-error-toast');
      }
    );
  }
}
