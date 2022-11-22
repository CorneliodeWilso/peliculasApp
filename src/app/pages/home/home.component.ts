import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies-service.service';
import { Movie } from '../../intefaces/cartelera';
import { resourceUsage } from 'process';
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy{
  movies: Movie [] = [];
  moviesSlide: Movie [] = [];
  //este decorador funciona para escuchar cualquier evento, pero en este caso solo queremos escuchar cuano se haga scroll en la pantalla 
  //y lanzamos la funcion onscroll al detectar este scroll
  @HostListener('window:scroll', ['event']) onScroll (){
    //con esta instruccion obtenemos la posicion del scroll, le suumanos 1300 o cualquier numero que sume mas que el scrollHeigh
    const posicion = document.documentElement.scrollTop + 1300;

    //con esta instruccion obteemos el valor maximo de la altura en la pantalla
    const max = document.documentElement.scrollHeight;

    if (posicion > max) {
      if (this.movieService.cargando === true) {return;}
      this.movieService.getNowPlayingMovie().subscribe(movies => {
        this.movies.push(...movies);
        })
    }
  }  
  
  constructor(private movieService: MoviesService) { 
    this.movieService.getNowPlayingMovie().subscribe(movies => {
      // console.log(movies);
      this.movies = movies;
      this.moviesSlide = movies;
    });
  }

  ngOnInit(): void {
  }
  ngOnDestroy (){
    this.movieService.resetCarteleraPage();
  }

}
