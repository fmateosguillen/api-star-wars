import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PeliculasResponse } from '../interfaces/peliculas-response.interface';

const peliculasBaseUrl = 'https://swapi.dev/api/films/';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private http: HttpClient) { }

  public getPeliculasList(): Observable<PeliculasResponse>{
    return this.http.get<PeliculasResponse>(peliculasBaseUrl);
  }
}
