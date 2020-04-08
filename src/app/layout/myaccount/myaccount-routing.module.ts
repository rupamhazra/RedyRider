import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'wallet', loadChildren: './wallet/wallet.module#WalletPageModule' },
  { path: 'booking-history', loadChildren: './booking-history/booking-history.module#BookingHistoryPageModule' },
  { path: 'booking-history-details/:id', loadChildren: './booking-history-details/booking-history-details.module#BookingHistoryDetailsPageModule' },
  { path: 'myaccount-common-page/:which-page', loadChildren: './myaccount-common-page/myaccount-common-page.module#MyaccountCommonPagePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MyaccountRoutingModule { }
