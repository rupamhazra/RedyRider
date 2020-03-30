import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../../core/services/modal.service';
import { TourDetailsPackagePage } from '../tour-details-package/tour-details-package.page';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tour-details',
  templateUrl: './tour-details.page.html',
  styleUrls: ['./tour-details.page.scss','../tour-travels.page.scss'],
})
export class TourDetailsPage implements OnInit {
  tourId:BigInteger
  constructor(
    public modalService: ModalService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.tourId = this.route.snapshot.params['tour_id']
  }
  requestNow(){
    let data = {"tour_id":this.tourId}
    this.modalService.openModal(TourDetailsPackagePage,data,'_c_modal_css');
  }
  
}
