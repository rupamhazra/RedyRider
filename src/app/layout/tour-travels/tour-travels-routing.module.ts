import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { 
    path: 'tour-details/:tour_id',
    loadChildren: './tour-details/tour-details.module#TourDetailsPageModule' 
  },
  { 
    path: 'tour-details/tour-details-package-form/:tour_id/:package_id', 
    loadChildren: './tour-details-package-form/tour-details-package-form.module#TourDetailsPackageFormPageModule' 
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TourTravelsRoutingModule {}
