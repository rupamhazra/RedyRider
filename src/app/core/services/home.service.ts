import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { NetworkService } from './../../core/services/network.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient, private networkService: NetworkService) { }
  insertDeviceDetailsService(data: any): Observable<any> {
    if (!this.networkService.checkNetworkDisconnect())
      return this.http.post(environment.apiEndpoint + 'usr/', data)
  }
}

