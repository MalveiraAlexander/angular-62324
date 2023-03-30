import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class IpService {

  constructor(private http: HttpClient) { }

  getIp() {
    return this.http.get('https://api.ipify.org?format=json');
  }
}
