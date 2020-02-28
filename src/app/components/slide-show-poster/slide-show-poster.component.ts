import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-slide-show-poster',
  templateUrl: './slide-show-poster.component.html',
  styleUrls: ['./slide-show-poster.component.scss'],
})
export class SlideShowPosterComponent implements OnInit  {

 @Input() peliculas: Movie[];
 slideOpts = {
  slidesPerView : 3.3,
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
