import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

const url=environment.imgPath;
@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img: string, size:string ='w500'): string {    
    if (!img){

      return './assets/img/no-image-banner.jpg' ;
    }
    const imagenUrl =  `${url}/${size}${img}`;
     //console.log(imagenUrl);         
    return imagenUrl;
  }

}
