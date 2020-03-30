import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-booking-thankyou',
  templateUrl: './booking-thankyou.page.html',
  styleUrls: ['./booking-thankyou.page.scss'],
})
export class BookingThankyouPage implements OnInit {
  transaction_id: string;
  payment_success: boolean = true;
  transactionDetails: any;
  constructor(
    private router: Router,
    public storage: Storage,
  ) {
    this.storage.get('transactionDetails').then((val) => {
      this.transactionDetails = val;

    });
  }

  ngOnInit() {
  }
  backToHomePage() {
    this.storage.remove('transactionDetails');
    this.router.navigateByUrl('home');
  }
}
