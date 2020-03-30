import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SchoolPoolCarPage } from './school-pool-car.page';
import { ComponentsModule } from "../../core/components/components.module";

const routes: Routes = [
  {
    path: '',
    component: SchoolPoolCarPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  declarations: [SchoolPoolCarPage]
})
export class SchoolPoolCarPageModule {}
