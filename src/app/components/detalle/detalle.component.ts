import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { MovieDetail, Cast } from 'src/app/interfaces/interfaces';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {
   
  @Input() id:string;
  pelicula: MovieDetail = {};  
  oculto: number = 150;
  actores: Cast[] =[];
  slideOptActores = {
    slidesPerView: 3.3,
    freeMode : false,
    spaceBetween: -15
  };
  constructor(private movieService: MoviesService,
              private modalCtrl: ModalController   
    ) { }

  ngOnInit() {
    console.log(this.id);
    this.movieService.getDetail(this.id).subscribe(x=>{
      this.pelicula= x;   
    });
    this.movieService.getCredits(this.id).subscribe(x=>{
      this.actores= x.cast
    });
  }


  regresar(){
   this.modalCtrl.dismiss();
  }

  favorito(){

  }
   
}
