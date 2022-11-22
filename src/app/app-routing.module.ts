import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BuscardorComponent } from './pages/buscardor/buscardor.component';
import { PeliculasComponent } from './pages/peliculas/peliculas.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'movie/:id', component:PeliculasComponent },
  {path: 'buscar/:texto', component: BuscardorComponent },
  {path: '**', redirectTo: '/home'},


  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
