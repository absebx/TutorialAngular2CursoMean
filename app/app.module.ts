import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { FavoritosListComponent} from './components/favoritos-list.component';
import { FormsModule} from '@angular/forms';
 
@NgModule({
  imports:      [ BrowserModule, FormsModule],
  //aquí van los componentes que vamos a ocupar en nuestra app
  declarations: [
     AppComponent,
     FavoritosListComponent
    ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
 