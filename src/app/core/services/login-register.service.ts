import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { NetworkService } from './../../core/services/network.service';
@Injectable({
  providedIn: 'root'
})
export class LoginRegisterService {
  httpHeaderOptions: any;
  constructor(private http: HttpClient, private networkService: NetworkService) {
    this.httpHeaderOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Token ',
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    }
  }
  registerService(data: any): Observable<any> {
    if (!this.networkService.checkNetworkDisconnect())
      return this.http.post(environment.apiEndpoint + 'usr/', data)
  }
  registerOTPService(data: any): Observable<any> {
    if (!this.networkService.checkNetworkDisconnect())
      return this.http.post(environment.apiEndpoint + 'usr/', data)
  }
  OTPService(data: any): Observable<any> {
    if (!this.networkService.checkNetworkDisconnect())
      return this.http.post(environment.apiEndpoint + 'usr/', data)
  }
  loginService(data: any): Observable<any> {
    console.log(data);
    if (!this.networkService.checkNetworkDisconnect())
      return this.http.post(environment.apiEndpoint + 'usr/', data)
  }
  resetPasswordService(data: any): Observable<any> {
    console.log(data);
    if (!this.networkService.checkNetworkDisconnect())
      return this.http.post(environment.apiEndpoint + 'usr/', data)
  }
  checkService(data: any): Observable<any> {
    console.log(data);
    if (!this.networkService.checkNetworkDisconnect())
      return this.http.post(environment.apiEndpoint + 'check/', data)
  }
}
