import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TourTravelsPage } from './tour-travels.page';
import { ComponentsModule } from "../../core/components/components.module";
import { TourTravelsRoutingModule } from './tour-travels-routing.module';

const routes: Routes = [
  {
    path: '',
    component: TourTravelsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    TourTravelsRoutingModule
  ],
  declarations: [TourTravelsPage]
})
export class TourTravelsPageModule {}
