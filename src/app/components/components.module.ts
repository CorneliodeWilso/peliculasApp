import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { SlideComponent } from './slide/slide.component';
import { PipesModule } from '../pipes/pipes.module';
import { CastSlideComponent } from './cast-slide/cast-slide.component';

@NgModule({
  declarations: [NavbarComponent, SlideComponent, CastSlideComponent],
  imports: [
    CommonModule,
    RouterModule,
    PipesModule
  ],
  exports: [
    NavbarComponent, SlideComponent, CastSlideComponent
  ]
})
export class ComponentsModule { }
