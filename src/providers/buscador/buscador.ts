import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../../config/url.servicios';


import { Observable } from 'rxjs/Observable';

@Injectable()
export class BuscadorProvider {


  constructor(private http:HttpClient) {
    console.log('Hello BuscadorProvider Provider');
  }
  buscar_huesped1(termino:string )
{
  let url = URL_SERVICIOS + "/prueba/obtener_huesped/" + termino;

   return this.http.get( url )


}

}

