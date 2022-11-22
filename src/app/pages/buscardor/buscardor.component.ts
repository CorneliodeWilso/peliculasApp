import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/intefaces/cartelera';
import { MoviesService } from 'src/app/services/movies-service.service';

@Component({
  selector: 'app-buscardor',
  templateUrl: './buscardor.component.html',
  styleUrls: ['./buscardor.component.css']
})
export class BuscardorComponent implements OnInit {
  movies: Movie [] = [];
  textoBuscado = '';
  constructor(private activatedRoute: ActivatedRoute, private   movieService: MoviesService) { }

  ngOnInit(): void {
  this.activatedRoute.params.subscribe(params => {
    this.textoBuscado = params.texto;
    this.movieService.searchMovie(params.texto).subscribe( movie => {
      this.movies = movie;
    });
  })
  }

}
