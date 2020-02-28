import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { MovieDetail } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {
  peliculas: MovieDetail[]=[];

  constructor( private storage: Storage) { 
    this.cargarFavoritos();
  }
  guardarPelicula(pelicula: MovieDetail) {    
    const m =this.peliculas.find(pel=> pelicula.id==pel.id);
    let mensaje ='';
    if (m){
      this.peliculas=this.peliculas.filter(pel=>pelicula.id!==pel.id);      
       mensaje = 'Se eliminó de favoritos';
    }  else {
      this.peliculas.unshift(pelicula);
      mensaje = 'Se agrego a favoritos';
    }      
    this.storage.set('peliculas',this.peliculas);    
    return mensaje;
  }

 
   esFavorito(id: number){
     return this.peliculas.find(p=>p.id===id)!==undefined;
   }

   async cargarFavoritos(){
     const peliculas =await this.storage.get('peliculas');
     this.peliculas = peliculas || [];
     return this.peliculas
   }
}
