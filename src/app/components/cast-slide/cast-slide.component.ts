import { Component, Input, OnInit } from '@angular/core';
import { Cast } from 'src/app/intefaces/credits.detail';
import Swiper from 'swiper';

@Component({
  selector: 'app-cast-slide',
  templateUrl: './cast-slide.component.html',
  styleUrls: ['./cast-slide.component.css']
})
export class CastSlideComponent implements OnInit {
  @Input() cast: Cast[]=[];
  swiper: any;
  constructor() { }
  ngAfterViewInit (){
    this.swiper = new Swiper('.swiper-container', {
      // Optional parameters
      slidesPerView: 5.3,
      freeMode: true,
      spaceBetween: 15,
    
     
      loop: true,
      navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next'
      }
    
    });
    
    
  }

  ngOnInit(): void {
    console.log(this.cast);
  }
  prev(){
    this.swiper.slidePrev();


  }
  next(){
  this.swiper.slideNext();
  }

}
