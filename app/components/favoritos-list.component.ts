import {Component} from '@angular/core'

//decorador
@Component({
  selector: 'favoritos-list',
  templateUrl: 'app/views/favoritos-list.html'
})

export class FavoritosListComponent{
  public title: string;
  public favoritos: Array<string>;
  public favoritosVisibles: boolean;
  public color: string;

  constructor(){
    this.title = 'Listado de marcadores';
    this.favoritos = ['abner.com','lala.com','alfonso.es', 'google.com'];
    this.favoritosVisibles = false ;
  }

  showFavoritos(){
    this.favoritosVisibles = !this.favoritosVisibles;
  }

  changeColor(){
    console.log(this.color);
  }
}
