import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TourDetailsPackagePage } from './tour-details-package.page';

const routes: Routes = [
  {
    path: '',
    component: TourDetailsPackagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TourDetailsPackagePage]
})
export class TourDetailsPackagePageModule {}
