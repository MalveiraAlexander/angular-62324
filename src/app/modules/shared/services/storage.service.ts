import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { CookieService } from 'ngx-cookie-service';
import { v4 as uuidv4 } from 'uuid';
import { TokenModel } from '../models/token.model';
@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private readonly API_URL = 'https://localhost:44323/';
  constructor(private jwtHelper: JwtHelperService,
              private cookieService: CookieService,
              private http: HttpClient) { }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken(): string {
    return localStorage.getItem('token');
  }

  existToken(): boolean {
    return localStorage.getItem('token') ? true : false;
  }

  setRefreshToken(refreshToken: string) {
    localStorage.setItem('refreshToken', refreshToken);
  }

  getRefreshToken(): string {
    return localStorage.getItem('refreshToken');
  }

  removeAll() {
    localStorage.clear();
  }

  logout() {
    this.http.get(`${this.API_URL}api/Auth/logout?userId=${this.getUserData().id}&cookie=${this.getCookie()}&deviceId=0`).subscribe({
      next: () => {},
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        this.removeAll();
        window.location.reload();
      }
    });
  }

  setCookie() {
    if (!this.cookieService.check('device1-id')) {
      let uuid: string = uuidv4();
      this.cookieService.set('device1-id', uuid, 365, '/', '', true, 'Strict');
    }
  }

  getCookie(): string {
    return this.cookieService.get('device1-id');
  }

  getBrowserInfo(): string {
    var ua= navigator.userAgent, tem,
    M= ua.match(/(opera|chrome|safari|edg|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if(/trident/i.test(M[1])){
        tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'IE '+(tem[1] || '');
    }
    if(M[1]=== 'Chrome'){
        tem= ua.match(/\b(OPR|Edg)\/(\d+)/);
        if(tem!= null && tem.includes('OPR')) return tem[1].replace('OPR', 'Opera');
        if(tem!= null && tem.includes('Edg')) return tem[1].replace('Edg', 'MicrosoftEdge');
    }
    return M[1];
  }

  getUserData(): TokenModel {
    const token = this.getToken();
    return this.jwtHelper.decodeToken(token);
  }
}
