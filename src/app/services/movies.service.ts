import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseMDB } from '../interfaces/interfaces';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  api =environment.apiKey;
  url=environment.url;
  constructor(private http: HttpClient) { }

  getFeatures() {        
    const hoy =new Date();
    const ultimoDia = new Date(hoy.getFullYear(),hoy.getMonth() + 1, 0).getDate();
    let mes = hoy.getMonth()+1;
    let mesString ;
    if (mes < 10){
      mesString='0'+mes;    
    }else {
      mesString =mes;
    }
    const inicio = `${hoy.getFullYear()}-${mesString}-01`;
    const fin =  `${hoy.getFullYear()}-${mesString}-${ultimoDia}`;
    //console.log("Inicio--"+inicio);
    //console.log("Fin--"+fin);
     const url=`/discover/movie?primary_release_date.gte=${inicio}&primary_release_date.lte=${fin}`;
     return this.ejecutaQuery<ResponseMDB>(url);    
  }

  private ejecutaQuery<T>(query){
    return this.http.get<T>(`${this.url}${query}&language=es&include_image_language=es&api_key=${this.api}`);
  }
}
