import { Component, OnInit } from '@angular/core';
import { DataLocalService } from '../services/data-local.service';
import { MovieDetail, Genre } from '../interfaces/interfaces';
import { from } from 'rxjs';
import { groupBy, mergeMap, toArray, map, distinct, concatAll, concat, tap } from 'rxjs/operators';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page  implements OnInit{
  favoritos: MovieDetail[] =[];
  generos: Genre[]=[];
  

  constructor(private dataLocalService: DataLocalService) {}

   ionViewWillEnter() {     
      this.LoadData();
  }
  
  async LoadData(){
    this.favoritos = await this.dataLocalService.cargarFavoritos();    
    console.log(this.favoritos);
    const source= from(this.favoritos);
    const generos$= source.pipe(    
     map(g=>g.genres),                      
     concatAll(),    
     distinct(g=>g.id),
     toArray<Genre>()      
    );
      generos$.subscribe(z=>{  
      this.generos= z   
    });
  }
   ngOnInit() {    
   this.LoadData();
}

}
