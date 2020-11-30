import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(public http: HttpClient) { 

  }

  public url="https://pokeapi.co/api/v2/pokemon/";
  getpokemon(name:string){
  
   return this.http.get(this.url + name)
 
    
  }
}
