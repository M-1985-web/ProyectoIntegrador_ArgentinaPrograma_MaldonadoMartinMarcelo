import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root',
})
export class EducacionService {
  //aca va la url de heroku
  //URL = 'https://heroku-backendmgb.herokuapp.com/educacion/';

  //url por defecto, es de forma local, lo traemos del back /educacion
  URL = 'http://localhost:8080/educacion/';

  constructor(private httpClient: HttpClient) {}

  //como es una lista hacemos un array []
  //nos trae este metodo toda la lista completa
  public lista(): Observable<Educacion[]> {
    return this.httpClient.get<Educacion[]>(this.URL + 'lista');
  }



  public detail(id: number): Observable<Educacion> {
    return this.httpClient.get<Educacion>(this.URL + `detail/${id}`);
  }



  public save(educacion: Educacion): Observable<any> {
    return this.httpClient.post<any>(this.URL + 'create', educacion);
  }



  //Educacion es el objeto
  public update(id: number, educacion: Educacion): Observable<any> {
    return this.httpClient.put<any>(this.URL + `update/${id}`, educacion);
  }



  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }


}
