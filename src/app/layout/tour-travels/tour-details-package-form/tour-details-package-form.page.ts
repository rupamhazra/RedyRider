import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tour-details-package-form',
  templateUrl: './tour-details-package-form.page.html',
  styleUrls: ['./tour-details-package-form.page.scss'],
})
export class TourDetailsPackageFormPage implements OnInit {
  form: FormGroup;
  thankyou_div_visible:boolean=false;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      how_many_people: ['', Validators.required],
      no_of_adult: ['', Validators.required],
      pick_up_location: ['', Validators.required],
      no_of_child: ['', Validators.required],
      
    });
  }
  submitRequestForm(){
    console.log('check');
    this.thankyou_div_visible = true;
  }
  goHome(){
    this.router.navigateByUrl('/home');
  }
}
