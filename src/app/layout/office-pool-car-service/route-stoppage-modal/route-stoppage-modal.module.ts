import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RouteStoppageModalPage } from './route-stoppage-modal.page';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IonicSelectableModule } from 'ionic-selectable';

const routes: Routes = [
  {
    path: '',
    component: RouteStoppageModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    FontAwesomeModule,
    IonicSelectableModule
  ],
  declarations: [RouteStoppageModalPage]
})
export class RouteStoppageModalPageModule { }
