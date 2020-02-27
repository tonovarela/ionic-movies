import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/interfaces/interfaces';

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
  constructor() { }

  ngOnInit() {}

}
