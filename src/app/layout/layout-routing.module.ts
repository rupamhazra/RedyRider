import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPage } from './layout.page';

const routes: Routes = [
  {
    path: '',
    component: LayoutPage,
    children: [
      //{ path: '', redirectTo: 'home' },
      { path: 'home', loadChildren: './home/home.module#HomePageModule' },
      { path: 'myaccount', loadChildren: './myaccount/myaccount.module#MyaccountPageModule' },
      { path: 'tour-travels', loadChildren: './tour-travels/tour-travels.module#TourTravelsPageModule' },
      { path: 'school-pool-car', loadChildren: './school-pool-car/school-pool-car.module#SchoolPoolCarPageModule' },
      { path: 'office-pool-car-service', loadChildren: './office-pool-car-service/office-pool-car-service.module#OfficePoolCarServicePageModule' },
      { path: 'bus-route-details', loadChildren: './office-pool-car-service/bus-route-details/bus-route-details.module#BusRouteDetailsPageModule' },
      { path: 'seat-layout-details', loadChildren: './office-pool-car-service/seat-layout-details/seat-layout-details.module#SeatLayoutDetailsPageModule' },
      { path: 'booked-details', loadChildren: './office-pool-car-service/booked-details/booked-details.module#BookedDetailsPageModule' },
      { path: 'payment-details', loadChildren: './office-pool-car-service/payment-details/payment-details.module#PaymentDetailsPageModule' },
      { path: 'booking-thankyou', loadChildren: './office-pool-car-service/booking-thankyou/booking-thankyou.module#BookingThankyouPageModule' },
      { path: 'search-location', loadChildren: './office-pool-car-service/search-location/search-location.module#SearchLocationPageModule' },
      { path: 'route-stoppage-modal', loadChildren: './office-pool-car-service/route-stoppage-modal/route-stoppage-modal.module#RouteStoppageModalPageModule' },
    ]
  },





















];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
