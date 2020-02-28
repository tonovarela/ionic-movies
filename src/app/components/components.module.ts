import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SlideshowBackdropComponent } from './slideshow-backdrop/slideshow-backdrop.component';
import { PipesModule } from '../pipes/pipes.module';
import { SlideShowPosterComponent } from './slide-show-poster/slide-show-poster.component';
import { EtiquetaComponent } from './etiqueta/etiqueta.component';
import { SlideshowParesComponent } from './slideshow-pares/slideshow-pares.component';
import { DetalleComponent } from './detalle/detalle.component';

@NgModule({
  declarations: [
    SlideshowBackdropComponent,
    SlideShowPosterComponent,
    EtiquetaComponent,
    SlideshowParesComponent,
    DetalleComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ],
  entryComponents:[
    DetalleComponent
  ],
  exports: [
    SlideshowBackdropComponent,
    SlideShowPosterComponent,
    EtiquetaComponent,
    SlideshowParesComponent,    
  ]
})
export class ComponentsModule { }
