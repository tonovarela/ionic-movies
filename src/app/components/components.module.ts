import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SlideshowBackdropComponent } from './slideshow-backdrop/slideshow-backdrop.component';
import { PipesModule } from '../pipes/pipes.module';
import { SlideShowPosterComponent } from './slide-show-poster/slide-show-poster.component';



@NgModule({
  declarations: [SlideshowBackdropComponent,SlideShowPosterComponent],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ],
  exports: [SlideshowBackdropComponent,SlideShowPosterComponent]
})
export class ComponentsModule { }
