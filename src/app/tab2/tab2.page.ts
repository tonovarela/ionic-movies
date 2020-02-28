import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  textoBuscar: string = "";
  ideas = ["Spiderman", "Superman", "El santo", "Caliman", "Dragon Ball Z", "Avengers"]


  constructor() { }


  buscar(event) {
    let valor;
    //if (event){
       valor = event.detail.value;
    // }else{
    //   valor=this.textoBuscar
    // }
    
    console.log(valor);

  }
  setIdea(idea) {
    this.textoBuscar = idea;
   // this.buscar();
  }

}
