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
      return this.http.post(environment.apiEndpoint + 'search/', data);
  }
  seatBookingService(data: any): Observable<any> {
    if (!this.networkService.checkNetworkDisconnect())
      return this.http.post(environment.apiEndpoint + 'booking/', data);
  }
  payThroughWalletService(data: any): Observable<any> {
    if (!this.networkService.checkNetworkDisconnect())
      return this.http.post(environment.apiEndpoint + 'wallet/', data);
  }
  applyCouponService(data: any): Observable<any> {
    if (!this.networkService.checkNetworkDisconnect())
      return this.http.post(environment.apiEndpoint + 'booking/', data);
  }
  notificationService(data: any): Observable<any> {
    if (!this.networkService.checkNetworkDisconnect())
      return this.http.post(environment.apiEndpoint + 'notifications/', data);
  }
  personalService(data: any): Observable<any> {
    if (!this.networkService.checkNetworkDisconnect())
      return this.http.post(environment.apiEndpoint + 'personal_details/', data);
  }
  addressService(data: any): Observable<any> {
    if (!this.networkService.checkNetworkDisconnect())
      return this.http.post(environment.apiEndpoint + 'address_details/', data);
  }
  profileService(data: any): Observable<any> {
    if (!this.networkService.checkNetworkDisconnect())
      return this.http.post(environment.apiEndpoint + 'profile/', data);
  }
  todayRidesService(data: any): Observable<any> {
    if (!this.networkService.checkNetworkDisconnect())
      return this.http.post(environment.apiEndpoint + 'usr/', data);
  }


}
