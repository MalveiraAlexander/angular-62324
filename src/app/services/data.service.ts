import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  getRandomGif() {
    return this.http.get('https://api.giphy.com/v1/gifs/random?api_key=YRb3VzUXU6A3Zqo1FRrxz2eQYwqaSDLO&rating=g');
  }

  setData(data: string) {
    localStorage.setItem('data', data);
  }

  getData(): string {
    return localStorage.getItem('data');
  }
}
