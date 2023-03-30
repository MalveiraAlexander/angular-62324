import { UserRequest } from './../../main/models/user.request';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from '../models/login.request';

@Injectable()
export class AuthService {

  private readonly API_URL = 'https://localhost:44323/';
  constructor(private http: HttpClient) { }

  login(login: LoginRequest) {
    return this.http.post(`${this.API_URL}api/Auth/login`, login);
  }
}
