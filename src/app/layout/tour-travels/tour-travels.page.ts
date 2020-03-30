import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tour-travels',
  templateUrl: './tour-travels.page.html',
  styleUrls: ['./tour-travels.page.scss'],
})
export class TourTravelsPage implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }
  goDetailsPage(tour_id) {
    console.log('tour_id', tour_id)
    this.router.navigateByUrl('/tour-travels/tour-details/' + tour_id);
  }
}
