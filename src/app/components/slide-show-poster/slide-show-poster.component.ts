import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-slide-show-poster',
  templateUrl: './slide-show-poster.component.html',
  styleUrls: ['./slide-show-poster.component.scss'],
})
export class SlideShowPosterComponent implements OnInit {

 @Input() peliculas: Movie[];
 slideOpts = {
  slidesPerView : 3.3,
  freeMod: true
 };

  constructor() { }

  ngOnInit() {}

}
