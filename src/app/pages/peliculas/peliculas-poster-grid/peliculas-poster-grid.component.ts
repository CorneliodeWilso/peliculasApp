import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StarRatingComponent } from 'ng-starrating';
import { Movie } from '../../../intefaces/cartelera';

@Component({
  selector: 'app-peliculas-poster-grid',
  templateUrl: './peliculas-poster-grid.component.html',
  styleUrls: ['./peliculas-poster-grid.component.css']
})
export class PeliculasPosterGridComponent implements OnInit, AfterViewInit {
  @Input() movies: Movie;
  constructor(private router: Router) { }
  ngAfterViewInit(){
    console.log(this.movies);
  }
  ngOnInit(): void {
  }
  
  onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
    alert(`Old Value:${$event.oldValue}, 
      New Value: ${$event.newValue}, 
      Checked Color: ${$event.starRating.checkedcolor}, 
      Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  }

  viewMovie( movie: Movie) {
    this.router.navigate(['/movie', movie.id]);
  }
  
}
