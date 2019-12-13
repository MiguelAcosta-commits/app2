import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../../config/url.servicios';


@Injectable()
export class TodosProvider {

  constructor(public http: HttpClient) {
    console.log('Hello TodosProvider Provider');
  }

  obtener_huespedes()
{
  let url1 = URL_SERVICIOS + "prueba/obtener_todos_los_huespedes/"
  return this.http.get(url1)

}

}
