import { Component, OnInit, Input } from '@angular/core';
import { ModalService } from '../../../core/services/modal.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-tour-details-package',
  templateUrl: './tour-details-package.page.html',
  styleUrls: ['./tour-details-package.page.scss'],
})
export class TourDetailsPackagePage implements OnInit {
  tourId: BigInteger
  @Input() tour_id: BigInteger;
  constructor(
    public modalService: ModalService,
    private route: ActivatedRoute,
    private router: Router,
    private navParams: NavParams
  ) { }

  ngOnInit() {
    this.tourId = this.navParams.get('tour_id');
  }
  closePackegeModal() {
    this.modalService.closeModal();
  }
  sendRequestForm(package_id) {
    console.log('package_id', package_id)
    this.modalService.closeModal();
    this.router.navigateByUrl('/tour-travels/tour-details/tour-details-package-form/' + this.tourId + '/' + package_id);
  }
}
