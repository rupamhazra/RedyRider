import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-common-page',
  templateUrl: './common-page.page.html',
  styleUrls: ['./common-page.page.scss'],
})
export class CommonPagePage implements OnInit {
  which_page: string = '';
  constructor(
    private route: ActivatedRoute,
  ) { }
  ngOnInit() {
    this.which_page = this.route.snapshot.params['which-page'];
  }
}
