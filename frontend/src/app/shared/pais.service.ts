import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pais } from '../pais';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private pais: Pais;
  private baseUri: string = 'http://localhost:8080';
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) {}

  crearPais(pais: Pais) {
    return this.http.post(this.baseUri + '/create', pais, {
      headers: this.headers,
    });
  }

  listarPaises() {
    return this.http.get(this.baseUri + '/read', {
      headers: this.headers,
    });
  }

  actualizarPais(pais: Pais) {
    return this.http.put(this.baseUri + '/update', pais, {
      headers: this.headers,
    });
  }

  eliminarPais(id: string) {
    return this.http.delete(this.baseUri + '/delete/' + id, {
      headers: this.headers,
    });
  }

  setter(pais: Pais) {
    this.pais = pais;
  }

  getter() {
    return this.pais;
  }
}
