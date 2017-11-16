// Importar Component desde el núcleo de Angular
import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

import {FavoritoService} from '../services/favorito.service';
import {Favorito} from '../models/favorito';

// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
   selector: 'favorito-edit',
   templateUrl: 'app/views/favorito-add.html',
   providers: [FavoritoService]
})

// Clase del componente donde irán los datos y funcionalidades
export class FavoritoEditComponent implements OnInit{ 
  public titleSection: string;
  public favorito: Favorito;
  public errorMessage;
  constructor(
    private _favoritoService:FavoritoService,
    private _route:ActivatedRoute,
    private _router:Router
  ){
    this.titleSection = "Editar favorito";
  }

  ngOnInit(){
    this.favorito = new Favorito("","","","");
    this.getFavorito();
  }

  getFavorito(){
    this._route.params.forEach((params: Params) => {
      let id = params['id'];

      this._favoritoService.getFavorito(id).subscribe(
        response => {
          //no manda error por no coincidir ya typescript aún no sabe que es lo que llegará.
          this.favorito = response.favorito;

          if(!this.favorito){
            this._router.navigate(['/']);
          }
        },
        error => {
          this.errorMessage = <any>error;
          if(this.errorMessage != null){
            console.log(this.errorMessage);
            alert("Error en la petición");
          }
        }
      );
    });
  }

  public onSubmit(){
    console.log(this.favorito);

    this._favoritoService.editFavorito(this.favorito._id,this.favorito).subscribe(
      response => {
        if(!response.favorito){
          alert('Error en el servidor');
        }else{
          this.favorito = response.favorito;
          this._router.navigate(['/marcador', this.favorito._id]);
        }
      },
      error => {
        this.errorMessage = <any>error;
        if(this.errorMessage != null){
          console.log(this.errorMessage);
          alert("Error en la petición");
        }
      }
    );
  }
}