import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from 'src/app/interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-slide-show-poster',
  templateUrl: './slide-show-poster.component.html',
  styleUrls: ['./slide-show-poster.component.scss'],
})
export class SlideShowPosterComponent implements OnInit  {

@Output() refrescaLista = new EventEmitter();
 @Input() peliculas: Movie[];
 slideOpts = {
  slidesPerView : 3.3,
  freeMod: true
 };

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  async verDetalle(id: string) {    
    const modal= await this.modalCtrl.create({
    component: DetalleComponent,
    componentProps: {
      id
    }
  });

  modal.onDidDismiss().then( (data) => {    
    this.refrescaLista.emit();
});
  modal.present();  
}

}
