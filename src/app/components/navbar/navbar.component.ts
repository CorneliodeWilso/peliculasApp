import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from '../../services/movies-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, ) { }

  ngOnInit(): void {
  }
  
  buscarPelicula(texto: string){
    texto = texto.trim();
    if (texto.length === 0) {
      return;
    }
    this.router.navigate(['/buscar', texto]);
  }
}
