import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { Movie } from '../../intefaces/cartelera';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit, AfterViewInit {
  swiper: Swiper;
  @Input() movieSlide: Movie [];
  image_url ='https://image.tmdb.org/t/p/w500/';
  constructor() { }
  ngAfterViewInit (){
    this.swiper = new Swiper('.swiper-container', {
      // Optional parameters
     
      loop: true,
      navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next'
      }
    
    });
    
    
  }
  ngOnInit(): void {
  }
   
  prev(){
    this.swiper.slidePrev();


  }
  next(){
  this.swiper.slideNext();
  }
}
