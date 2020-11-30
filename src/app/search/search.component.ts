import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {




 filterFunction() :void{
  var input, filter, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  var div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
   var  txtValue = a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}



  constructor(public pokemon: PokemonService) { }

  public randomPokemon:any;
  public PokemonName:string="";
 
  public pokemonInfo;
  public pokemonAbility: any[];
  public pokemonMove: any[];
  public pokemonSprites: any;
  public showAbility:boolean = false;
  public showMoves:boolean = false;
  public showSprites:boolean = false;
  public allPokemon:any[]=[];
  public showAll:boolean =false;
  ngOnInit(): void {
    this.pokemon.getpokemon(this.PokemonName).subscribe(
      response=> {this.pokemonInfo = response
     
        for(let i = 0; i< this.pokemonInfo.results.length; i++){
          this.allPokemon[i] = this.pokemonInfo.results[i].name;
         
         }
     
    }
    
    );
this.showAll =false;

  }
  
  getPokemon(){
    //console.log(this.pokemonInfo);
    this.pokemon.getpokemon(this.PokemonName).subscribe(
      response=> {this.pokemonInfo = response
        this.pokemonAbility = this.pokemonInfo.abilities;
        this.pokemonMove = this.pokemonInfo.moves;
        this.pokemonSprites = this.pokemonInfo.sprites;
     
    }
    
    );

 this.showAllContent();

  }
  showAllContent(){
    this.showAbility=true;
    this.showMoves=true;
    this.showSprites=true;
  }
  showAllPokemon(){
    this.showAll=true;
  }

  hideAll(i){

    this.showAll=false;
   
   var aname = document.getElementsByClassName("a")[i].innerHTML;
   this.PokemonName= aname;
   

    
  }
  
  hideAll1(){

    this.showAll=false;
   

   

    
  }
 

  changeAbility(){
    this.showAbility=true;
    this.showMoves=false;
    this.showSprites=false;
  }
  changeMoves(){
    this.showAbility=false;
    this.showMoves=true;
    this.showSprites=false;
  }
  changeSprites(){
    this.showAbility=false;
    this.showMoves=false;
    this.showSprites=true;
  }
}
