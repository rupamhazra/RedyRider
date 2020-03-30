import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TourDetailsPackageFormPage } from './tour-details-package-form.page';
import { ComponentsModule } from "../../../core/components/components.module";


const routes: Routes = [
  {
    path: '',
    component: TourDetailsPackageFormPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    ComponentsModule
  ],
  declarations: [TourDetailsPackageFormPage]
})
export class TourDetailsPackageFormPageModule {}
