import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OfficePoolCarService {
  httpHeaderOptions: any;
  constructor(
    private http: HttpClient,
  ) {
    this.httpHeaderOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Token ',
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    }
  }
  registerService(data: any): Observable<any> {
    return this.http.post(environment.apiEndpoint + 'usr.php/', data)
  }
  registerOTPService(data: any): Observable<any> {
    return this.http.post(environment.apiEndpoint + 'usr.php/', data)
  }
  OTPService(data: any): Observable<any> {
    return this.http.post(environment.apiEndpoint + 'usr.php/', data)
  }
  loginService(data: any): Observable<any> {
    return this.http.post(environment.apiEndpoint + 'usr.php/', data)
  }
  resetPasswordService(data: any): Observable<any> {
    return this.http.post(environment.apiEndpoint + 'usr.php/', data)
  }
  checkService(data: any): Observable<any> {
    return this.http.post(environment.apiEndpoint + 'check/', data)
  }
  insertDeviceDetailsService(data: any): Observable<any> {
    return this.http.post(environment.apiEndpoint + 'usr.php/', data)
  }
  commonSearchService(data: any): Observable<any> {
    return this.http.post(environment.apiEndpoint + 'search.php/', data);
  }
  seatBookingService(data: any): Observable<any> {
    return this.http.post(environment.apiEndpoint + 'booking.php/', data);
  }
  payThroughWalletService(data: any): Observable<any> {
    return this.http.post(environment.apiEndpoint + 'wallet.php/', data);
  }
  applyCouponService(data: any): Observable<any> {
    return this.http.post(environment.apiEndpoint + 'booking.php/', data);
  }
  notificationService(data: any): Observable<any> {
    return this.http.post(environment.apiEndpoint + 'notifications.php/', data);
  }
  personalService(data: any): Observable<any> {
    return this.http.post(environment.apiEndpoint + 'personal_details.php/', data);
  }
  addressService(data: any): Observable<any> {
    return this.http.post(environment.apiEndpoint + 'address_details.php/', data);
  }
  profileService(data: any): Observable<any> {
    return this.http.post(environment.apiEndpoint + 'profile.php/', data);
  }
  todayRidesService(data: any): Observable<any> {
    return this.http.post(environment.apiEndpoint + 'usr.php/', data);
  }
  commonPageContentService(data: any): Observable<any> {
    return this.http.post(environment.apiEndpoint + 'usr.php/', data);
  }



}
