import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NowPlaying, Movie } from '../intefaces/cartelera';
import  {catchError, map, tap} from 'rxjs/operators';
import { MovieResponse } from '../intefaces/movie.details';
import { CreditResponse } from '../intefaces/credits.detail';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
   url = `https://api.themoviedb.org/3/`;
   private carteleraPage = 1;
   cargando: boolean = false;
  constructor(private http: HttpClient,
    ) { }
  
     get params (){
      return {
        api_key: '5a9b3c4481f1c3265a784d4b04b1fb84',
        language: 'es-ES',
        page: this.carteleraPage.toString()  

      }
    }
  getNowPlayingMovie (): Observable<Movie[]>{

    if (this.cargando) {
      //el operaor of devuelve un observable del tipo que querramos, en este caso lo usamos para detectar si aun no se ha respondido del get de pelis
      //de ser asi devomos un array vacio que concuerda con el array tipo observable de esta funcion
      return of([]);
    }
    this.cargando = true;
    const endpoint =  `${this.url}movie/now_playing`;
    return this.http.get<NowPlaying>(endpoint, {params: this.params}).pipe( 
      map((resp) => resp.results),
      tap(() => {
        this.carteleraPage +=1;
        this.cargando = false;
      })
    );
  }

  searchMovie (movie: string): Observable <Movie []>{
    const params = {...this.params, page: '1', query: movie}
    return this.http.get<NowPlaying>(`${this.url}search/movie`,  {
      params
    }).pipe(
      map (response => response.results   )
    )
  }

  resetCarteleraPage(){
    this.carteleraPage = 1;
  }

  getMovieDetails(movieId: string){
    return this.http.get<MovieResponse>(`${this.url}movie/${movieId}`, {
      params:this.params
    }).pipe(
      catchError(error => of(null))
    )

  }

  getCreditsMovie(movieId: string){
    return this.http.get<CreditResponse>(`${this.url}movie/${movieId}/credits`, {
      params:this.params
    }).pipe(
      map(response => response.cast),
      catchError(error => of([]))
    );

  }
}
