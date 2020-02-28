import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { MovieDetail, Cast } from 'src/app/interfaces/interfaces';
import { ModalController, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { DataLocalService } from 'src/app/services/data-local.service';

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
              private modalCtrl: ModalController,
              private storage: Storage,
              private dataLocaService: DataLocalService,
              private toastCtrl: ToastController    
    ) { }

  ngOnInit() {    
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

  async favorito(){
   const mensaje = this.dataLocaService.guardarPelicula(this.pelicula);
   const toast = await this.toastCtrl.create({
    message: mensaje,
    duration: 1000
  });
  toast.present();
   
  }
   
}
