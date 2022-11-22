import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../../services/movies-service.service';
import { MovieResponse } from '../../intefaces/movie.details';
import {Location} from '@angular/common';
import { Cast } from '../../intefaces/credits.detail';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {
  movieDetails: MovieResponse;
  cast: Cast [] = [];
  constructor(private activatedRoute:ActivatedRoute, private movieService: MoviesService, private location: Location, private router: Router) { 
    this.movieDetails = new MovieResponse();
  
  }
  
  ngOnInit(): void {
    // this.activatedRoute.params.subscribe(params => {
    //   console.log(params.id);
    // })

    //otra forma de obbtener los parametros que es literalmente del metodo de arriba soolo que podemos con st metodo desestructurarlo obteniendo los argumentos que querramos

    const {id} = this.activatedRoute.snapshot.params;


      //el conbine latest hace lomismo que las dos suscripciones de abajo, se pasan los gets y se suscribe y desestruuctura ya que devuelve un array.
      combineLatest([
        this.movieService.getMovieDetails(id),
        this.movieService.getCreditsMovie(id)
      ]).subscribe(([movie, cast]) => {
        if (!movie){
                this.router.navigateByUrl('/home');
                return;
              }
              this.cast = cast;
        if (!cast){
                  return;
              }
        this.movieDetails = movie;
        this.cast = cast;
        
      });
    //   this.movieService.getMovieDetails(id).subscribe(movie => {
    //     this.movieDetails = movie
    //     if (!this.movieDetails){
    //       this.router.navigateByUrl('/home');
    //       return;
    //     }
    //     // console.log(this.movieDetails);
    //   });
    

    // this.movieService.getCreditsMovie(id).subscribe(cast => {
    //   this.cast = cast;
    //   // if (!this.cast){
    //   //   return;
    //   // }
    //   // console.log(this.cast);
    // });


  }

  return(){
    this.location.back();
  }

}
