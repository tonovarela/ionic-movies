import { Pipe, PipeTransform } from '@angular/core';
import { Movie, Genre, MovieDetail } from '../interfaces/interfaces';
import { MoviesService } from '../services/movies.service';

@Pipe({
  name: 'genero'
})
export class GeneroPipe implements PipeTransform {

  transform(movies: MovieDetail[], genero: Genre ): MovieDetail[] {
    let resultMovie: MovieDetail[] =[];    
    movies.forEach(m=>{            
       m.genres.forEach(g=>{
         if (g.id===genero.id){
             resultMovie.push(m);
         }
       })
    })    
    return resultMovie;
  }

}
