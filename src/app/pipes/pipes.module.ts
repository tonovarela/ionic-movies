import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagenPipe } from './imagen.pipe';
import { ParesPipe } from './pares.pipe';
import { GeneroPipe } from './genero.pipe';



@NgModule({
  declarations: [ImagenPipe, ParesPipe, GeneroPipe],
  imports: [
    CommonModule
  ],
  exports: [ ImagenPipe, ParesPipe,GeneroPipe ]
})
export class PipesModule { }
