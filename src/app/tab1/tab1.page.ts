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
 
  constructor(private movieService: MoviesService) {}

  

  ngOnInit() {       
    this.movieService
        .getFeatures()
        .subscribe( resp  => {
          this.peliculasRecientes = resp.results;          
          console.log(this.peliculasRecientes);
        });
  }

}
