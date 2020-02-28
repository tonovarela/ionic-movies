import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { ResponseMDB, Movie } from '../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page  implements OnInit{
  
  peliculasRecientes : Movie[] = [];
  peliculasPopulares : Movie[] = [];
 
  constructor(private movieService: MoviesService) {}
  cargarMas() {
    this.getPopulares();
  }  
  getPopulares(){
    this.movieService
    .getPopulars()
    .subscribe( resp  => {
      this.peliculasPopulares=[...this.peliculasPopulares, ...resp.results];
      //this.peliculasPopulares = resp.results;                
    });
  }
  ngOnInit() {       
    this.movieService
        .getFeatures()
        .subscribe( resp  => {
          this.peliculasRecientes = resp.results;          
          //console.log(this.peliculasRecientes);
        });
    this.getPopulares();
      
     
  }

}
