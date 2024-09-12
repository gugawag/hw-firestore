import {Component} from '@angular/core';
import {Usuario} from "../../shared/model/usuario";
import {Router} from "@angular/router";
import {UsuarioRestService} from "../../shared/services/usuario-rest.service";
import {Observable, of} from "rxjs";
import {UsuarioFirestoreService} from "../../shared/services/usuario-firestore.service";
import {MensagemSweetService} from "../../shared/services/mensagem-sweet.service";

@Component({
    selector: 'app-listagem-usuario',
    templateUrl: './listagem-usuario.component.html',
    styleUrl: './listagem-usuario.component.scss'
})
export class ListagemUsuarioComponent {

    usuarios: Usuario[] = [];

    constructor(private roteador: Router, private usuarioService: UsuarioFirestoreService, private mensagemService: MensagemSweetService) {
        usuarioService.listar().subscribe(
            {
                next: usuariosRetornados => this.usuarios = usuariosRetornados,
                error: erro => console.error(erro)
            }
        );
    }

    remover(usuarioARemover: Usuario) {
        this.usuarioService.remover(usuarioARemover).subscribe(
            {
                next: () => {
                    this.mensagemService.sucesso('Usuário removido com sucesso!');
                    // this.usuarios = this.usuarios.filter(usuario => usuario.id != usuarioARemover.id);
                }
            }
        );
    }

    editar(usuarioAEditar: Usuario) {
        this.roteador.navigate(['edicao-usuario', usuarioAEditar.id]);
    }

    trataObservables() {
        this.observables().subscribe({
            next: valor => document.body.appendChild(document.createTextNode(" " + valor.toString())),
            error: erro => console.log(erro),
            complete: () => document.body.appendChild(document.createTextNode(" fim")),
            }
        );
    }

    observables(): Observable<number> {
        return of(10, 20, 30);
    }
}
