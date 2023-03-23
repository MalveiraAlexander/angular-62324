import { AbilityResponse } from './../../models/ability.response';
import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../../services/marvel.service';
import { SearchService } from 'src/app/modules/shared/services/search.service';
import { PokemonResponse } from '../../models/pokemon.response';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  response: AbilityResponse = {} as AbilityResponse;
  pokemon: PokemonResponse = {} as PokemonResponse;
  isSearch: boolean = false;
  constructor(private marvel: MarvelService, private search: SearchService) { }

  ngOnInit(): void {
    this.getAbility();
    this.search.search.subscribe((data: string) => {
      this.getPokemon(data);
      console.log('home', data);
    });
  }

  getAbility() {
    this.marvel.getAbility().subscribe({
      next: (data: AbilityResponse) => {
        console.log(data);
        this.response = data;
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('complete');
      }
    });
  }

  getPokemon(name: string) {
    this.marvel.getPokemon(name).subscribe({
      next: (data: PokemonResponse) => {
        console.log(data);
        this.pokemon = data;
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('complete');
        this.isSearch = true;
      }
    });
  }

}
