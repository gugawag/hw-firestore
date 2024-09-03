import {Component} from '@angular/core';
import {Usuario} from "../../shared/model/usuario";
import {Router} from "@angular/router";
import {UsuarioRestService} from "../../shared/services/usuario-rest.service";
import {Observable, of} from "rxjs";

@Component({
    selector: 'app-listagem-usuario',
    templateUrl: './listagem-usuario.component.html',
    styleUrl: './listagem-usuario.component.scss'
})
export class ListagemUsuarioComponent {

    usuarios: Usuario[] = [];

    constructor(private roteador: Router, private usuarioService: UsuarioRestService) {
        usuarioService.listar().subscribe(
            {
                next: usuariosRetornados => this.usuarios = usuariosRetornados,
                error: erro => console.error(erro)
            }
        );
    }

    remover(usuarioARemover: Usuario) {
        // this.usuarioService.remover(usuarioARemover);
        // this.usuarios = this.usuarios.filter(usuario => usuario.id != usuarioARemover.id);
        // this.roteador.navigate(['listagem-usuarios']);
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
