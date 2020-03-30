import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-school-pool-car',
  templateUrl: './school-pool-car.page.html',
  styleUrls: ['./school-pool-car.page.scss'],
})
export class SchoolPoolCarPage implements OnInit {
  form: FormGroup;
  thankyou_div_visible:boolean=false;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      school_name: ['', Validators.required],
      branch: ['', Validators.required],
      pick_up_location: ['', Validators.required],
      no_of_canditate: ['', Validators.required],
      
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
