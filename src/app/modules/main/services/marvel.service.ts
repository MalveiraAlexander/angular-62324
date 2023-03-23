import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Md5 } from 'ts-md5';
@Injectable()
export class MarvelService {

  private readonly URL_API: string = 'https://pokeapi.co/';
  constructor(private http: HttpClient) { }

  getAbility() {
    return this.http.get(`${this.URL_API}api/v2/ability/?limit=20&offset=20`);
  }

  getPokemon(name: string) {
    return this.http.get(`${this.URL_API}api/v2/pokemon/${name}/`);
  }
}
