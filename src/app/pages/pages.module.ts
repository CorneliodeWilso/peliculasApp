import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { BuscardorComponent } from './buscardor/buscardor.component';
import { ComponentsModule } from '../components/components.module';
import { PeliculasPosterGridComponent } from './peliculas/peliculas-poster-grid/peliculas-poster-grid.component';
import { RatingModule } from 'ng-starrating';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [HomeComponent, PeliculasComponent, BuscardorComponent,PeliculasPosterGridComponent ],
  imports: [
    CommonModule, 
    ComponentsModule,
    RatingModule,
    PipesModule
      
    
    
  ],
  exports: [
    PeliculasPosterGridComponent
  ]
})
export class PagesModule { }
