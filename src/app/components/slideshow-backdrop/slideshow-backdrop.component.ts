import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-slideshow-backdrop',
  templateUrl: './slideshow-backdrop.component.html',
  styleUrls: ['./slideshow-backdrop.component.scss'],
})
export class SlideshowBackdropComponent implements OnInit {
 @Input() peliculas: Movie[] = [];
  slideOpts = {
   slidesPerView : 1.3,
   freeMod: true
  };
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}
  
async verDetalle(id: string) {
      console.log(id);
    const modal= await this.modalCtrl.create({
      component: DetalleComponent,
      componentProps: {
        id
      }
    });
    modal.present();
  }
}
