import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface RespuestaPerros {
  message: string[];
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class PerroService {
  private url = 'https://dog.ceo/api/breeds/image/random/6';

  constructor(private http: HttpClient) {}

  obtenerPerros(): Observable<RespuestaPerros> {
    return this.http.get<RespuestaPerros>(this.url);
  }
}