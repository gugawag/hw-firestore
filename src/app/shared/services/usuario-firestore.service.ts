import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import {Usuario} from "../model/usuario";
import {from, map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsuarioFirestoreService {

  colecaoUsuarios: AngularFirestoreCollection<Usuario>;
  NOME_COLECAO = 'usuarios';

  constructor(private afs: AngularFirestore) {
    this.colecaoUsuarios = afs.collection(this.NOME_COLECAO);
  }

  listar(): Observable<Usuario[]> {
    return this.colecaoUsuarios.valueChanges({idField: 'id'});
  }

  inserir(usuario:Usuario): Observable<Usuario> {
    delete usuario.id;
    return from(this.colecaoUsuarios.add({...usuario}));
  }

  remover(usuarioARemover: Usuario): Observable<any> {
    return from(this.colecaoUsuarios.doc(usuarioARemover.id).delete());
  }

  pesquisarPorId(id: string): Observable<Usuario> {
    return this.colecaoUsuarios.doc(id).get().pipe(map(documento => new Usuario(id,documento.data())));
  }


}
