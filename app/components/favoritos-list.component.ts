import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router'; //este import es para usar los servicios del router

import {FavoritoService} from '../services/favorito.service';
import {Favorito} from '../models/favorito';

//decorador
@Component({
  selector: 'favoritos-list',
  templateUrl: 'app/views/favoritos-list.html',
  providers: [FavoritoService]
})

export class FavoritosListComponent implements OnInit{
  public title: string;
  public favoritos: Favorito[];
  public errorMessage;

  //EL Constructor asigna valores
  constructor(private _favoritoService: FavoritoService){
    this.title = 'Listado de marcadores';
  }

  //esto se ejecuta al principio del controlador y puede tener cualquier logica
  ngOnInit(){
    console.log("favoritos cargados");
    this._favoritoService.getFavoritos()
      .subscribe(result => {
        console.log(result);
        this.favoritos = result.favoritos;

        if(!this.favoritos){
          alert("error en el servidor");
        }
      }, error => {
        this.errorMessage = <any>error;
        if(this.errorMessage != null){
          console.log(this.errorMessage);
          alert("Error en la petición");
        }
      });
  }
  
}
