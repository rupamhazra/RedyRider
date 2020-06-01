import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { NetworkService } from './../../core/services/network.service';

@Injectable({
  providedIn: 'root'
})
export class OfficePoolCarService {

  constructor(
    private http: HttpClient,
    private networkService: NetworkService
  ) { }
  commonSearchService(data: any): Observable<any> {
    if (!this.networkService.checkNetworkDisconnect())
      return this.http.post(environment.apiEndpoint + 'search.php/', data);
  }
  seatBookingService(data: any): Observable<any> {
    if (!this.networkService.checkNetworkDisconnect())
      return this.http.post(environment.apiEndpoint + 'booking.php/', data);
  }
  payThroughWalletService(data: any): Observable<any> {
    if (!this.networkService.checkNetworkDisconnect())
      return this.http.post(environment.apiEndpoint + 'wallet.php/', data);
  }
  applyCouponService(data: any): Observable<any> {
    if (!this.networkService.checkNetworkDisconnect())
      return this.http.post(environment.apiEndpoint + 'booking.php/', data);
  }
  notificationService(data: any): Observable<any> {
    if (!this.networkService.checkNetworkDisconnect())
      return this.http.post(environment.apiEndpoint + 'notifications.php/', data);
  }
  personalService(data: any): Observable<any> {
    if (!this.networkService.checkNetworkDisconnect())
      return this.http.post(environment.apiEndpoint + 'personal_details.php/', data);
  }
  addressService(data: any): Observable<any> {
    if (!this.networkService.checkNetworkDisconnect())
      return this.http.post(environment.apiEndpoint + 'address_details.php/', data);
  }
  profileService(data: any): Observable<any> {
    if (!this.networkService.checkNetworkDisconnect())
      return this.http.post(environment.apiEndpoint + 'profile.php/', data);
  }
  todayRidesService(data: any): Observable<any> {
    if (!this.networkService.checkNetworkDisconnect())
      return this.http.post(environment.apiEndpoint + 'usr.php/', data);
  }
  commonPageContentService(data: any): Observable<any> {
    if (!this.networkService.checkNetworkDisconnect())
      return this.http.post(environment.apiEndpoint + 'usr.php/', data);
  }
  refundRazorPayService(data: any): Observable<any> {
    if (!this.networkService.checkNetworkDisconnect())
      return this.http.post('https://<rzp_test_W1Bgb5JMuCx6Oy>:<qAlYTNBvQRlXyzlalC1zaKVE>@api.razorpay.com/v1/payments/' + data + '/refund', data);
    //https://<YOUR_KEY_ID>:<YOUR_KEY_SECRET>@api.razorpay.com/v1/payments/pay_DgExayLn3RBbZX/refund
  }


}
