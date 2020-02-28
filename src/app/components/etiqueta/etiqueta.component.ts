import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-etiqueta',
  templateUrl: './etiqueta.component.html',
  styleUrls: ['./etiqueta.component.scss'],
})
export class EtiquetaComponent implements OnInit {

  @Input() texto: string 
  constructor() { }

  ngOnInit() {}

}
