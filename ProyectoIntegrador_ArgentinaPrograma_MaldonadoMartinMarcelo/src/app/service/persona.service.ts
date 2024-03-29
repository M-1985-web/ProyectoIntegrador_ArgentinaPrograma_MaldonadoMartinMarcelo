import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  //cree la variable URL que llama del front al back, es generico
  URL = 'http://localhost:8080/personas/';

  constructor(private http: HttpClient) { }

  //<>corchangulo, observable lo usa angular para peticiones asincronas
  public getPersona(): Observable<persona> {
    //importo desde el back algo especifico
    return this.http.get<persona>(this.URL + 'traer/perfil');
  }
}
