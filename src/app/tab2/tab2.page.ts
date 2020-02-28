import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Movie } from '../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../components/detalle/detalle.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  cargando = false;
  textoBuscar: string = "";
  ideas = ["Spiderman", "Superman", "El santo", "Caliman", "Dragon Ball Z", "Avengers"]
  peliculas: Movie[] = []


  constructor(private movieService: MoviesService,
              private modalCtrl: ModalController) { }


async verDetalle(id: string) {      
    const modal= await this.modalCtrl.create({
      component: DetalleComponent,
      componentProps: {
        id
      }
    });
    modal.present();
  }



  buscar(event) {
    let valor: string;
    valor = event.detail.value;
    if (valor.length === 0) {
      this.peliculas = [];
      return;
    }
    this.cargando = true;
    this.movieService.searchMovie(valor).subscribe(x => {
      this.peliculas = x.results
      this.cargando = false;
    });

  }
  setIdea(idea) {
    this.textoBuscar = idea;

  }

}
