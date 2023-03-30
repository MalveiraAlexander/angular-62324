import { StorageService } from 'src/app/modules/shared/services/storage.service';
import { UserRequest } from './../models/user.request';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  private readonly URL_API = 'https://localhost:44323/';
  constructor(private http: HttpClient,
              private storage: StorageService ) { }


  getUsers() {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', `Bearer ${this.storage.getToken()}`);
    return this.http.get(`${this.URL_API}api/User/all?lastId=0&maxElements=10`, { headers });
  }

  getUser(id: number) {
    return this.http.get(`${this.URL_API}usuarios/${id}`);
  }

  createUser(user: UserRequest) {
    return this.http.post(`${this.URL_API}usuarios`, user);
  }

  updateUser(id: number, user: UserRequest) {
    return this.http.put(`${this.URL_API}usuarios/${id}`, user);
  }

  deleteUser(id: number) {
    return this.http.delete(`${this.URL_API}usuarios/${id}`);
  }
}
