import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FavoritosListComponent} from './components/favoritos-list.component';
import {FavoritoDetailComponent} from './components/favorito-detail.component';
//array con definicion de todas las rutas
const appRoutes: Routes = [
  {path: '', component: FavoritosListComponent},
  {path: 'marcador/:id', component: FavoritoDetailComponent},
  {path: '**', component: FavoritosListComponent} //esta siempre tiene que estar al final
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);