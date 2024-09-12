import { Injectable } from '@angular/core';
import {Usuario} from "../model/usuario";
import {HttpClient} from "@angular/common/http";
import {Observable, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsuarioRestService {

  URL_USUARIOS = 'http://localhost:3000/usuarios';
  // URL_USUARIOS = 'https://firestore.googleapis.com/v1beta1/projects/pw20241/databases/(default)/documents/usuarios/';
  constructor(private httpClient: HttpClient) { }

  listar(): Observable<Usuario[]> {
    // return throwError(() => new Error('Erro de teste!'));
    return this.httpClient.get<Usuario[]>(this.URL_USUARIOS);
  }
}
