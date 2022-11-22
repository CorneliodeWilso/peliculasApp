import { Component } from '@angular/core';
import { MoviesService } from './services/movies-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'paliculasApp';

  constructor(private movieService: MoviesService) {
     
  }


}
