import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OfficePoolCarServicePage } from './office-pool-car-service.page';
import { ComponentsModule } from "../../core/components/components.module";

const routes: Routes = [
  {
    path: '',
    component: OfficePoolCarServicePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    ReactiveFormsModule
  ],
  declarations: [OfficePoolCarServicePage]
})
export class OfficePoolCarServicePageModule { }
