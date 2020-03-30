import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BookingThankyouPage } from './booking-thankyou.page';
import { ComponentsModule } from "../../../core/components/components.module";

const routes: Routes = [
  {
    path: '',
    component: BookingThankyouPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  declarations: [BookingThankyouPage]
})
export class BookingThankyouPageModule { }
