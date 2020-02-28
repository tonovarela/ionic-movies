import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseMDB, MovieDetail, MovieCredits } from '../interfaces/interfaces';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  api = environment.apiKey;
  url = environment.url;

  private page: number = 1;
  constructor(private http: HttpClient) { }

  private ejecutaQuery<T>(query) {
    const url = `${this.url}${query}&language=es&include_image_language=es&api_key=${this.api}`;    
    return this.http.get<T>(url);
  }

  searchMovie(movie: string) {
    const url = `/search/movie?language=es&query=${movie}`;
    return this.ejecutaQuery<ResponseMDB>(url);
  }

  getPopulars() {
    const url = `/discover/movie?sort_by=popularity.desc&page=${++this.page}`;
    return this.ejecutaQuery<ResponseMDB>(url);
  }

  getFeatures() {
    const hoy = new Date();
    const ultimoDia = new Date(hoy.getFullYear(), hoy.getMonth() + 1, 0).getDate();
    let mes = hoy.getMonth() + 1;
    let mesString;
    if (mes < 10) {
      mesString = '0' + mes;
    } else {
      mesString = mes;
    }
    const inicio = `${hoy.getFullYear()}-${mesString}-01`;
    const fin = `${hoy.getFullYear()}-${mesString}-${ultimoDia}`;
    //console.log("Inicio--"+inicio);
    //console.log("Fin--"+fin);
    const url = `/discover/movie?primary_release_date.gte=${inicio}&primary_release_date.lte=${fin}`;
    return this.ejecutaQuery<ResponseMDB>(url);
  }

  getCredits(idMovie: string) {
    const url = `/movie/${idMovie}/credits?1=1`;
    return this.ejecutaQuery<MovieCredits>(url);
  }

  getDetail(idMovie: string) {
    const url = `/movie/${idMovie}?1=1`;
    return this.ejecutaQuery<MovieDetail>(url);
  }


}
