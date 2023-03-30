import { StorageService } from './../../shared/services/storage.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RefreshService {

  private readonly API_URL = 'https://localhost:44323/';
  constructor(private http: HttpClient,
              private storage: StorageService) { }

  refreshToken() {
    return this.http.get(`${this.API_URL}api/Auth/refreshToken?userId=${this.storage.getUserData().id}&cookie=${this.storage.getCookie()}&refreshToken=${this.storage.getRefreshToken()}`);
  }
}
