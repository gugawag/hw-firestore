import {Component} from '@angular/core';
import {Usuario} from "../../shared/model/usuario";
import {ActivatedRoute, Router} from "@angular/router";
import {UsuarioService} from "../../shared/services/usuario.service";
import Swal from "sweetalert2";
import {MensagemSweetService} from "../../shared/services/mensagem-sweet.service";
import {UsuarioFirestoreService} from "../../shared/services/usuario-firestore.service";

@Component({
    selector: 'app-cadastro-usuario',
    templateUrl: './manter-usuario.component.html',
    styleUrl: './manter-usuario.component.scss'
})
export class ManterUsuarioComponent {

    usuario = new Usuario('1');
    modoEdicao = false;

    constructor(private roteador: Router, private rotaAtual: ActivatedRoute,
                private usuarioService: UsuarioFirestoreService, private mensagemService: MensagemSweetService) {
        const idParaEdicao = rotaAtual.snapshot.paramMap.get('id');
        if (idParaEdicao) {
          this.modoEdicao = true;
          const usuarioAEditar = usuarioService.pesquisarPorId(idParaEdicao).subscribe({
              next: usuario => this.usuario = usuario
          });
        }
    }

    inserir() {
        if (!this.modoEdicao) {
            this.usuarioService.inserir(this.usuario).subscribe(
                {
                    next: usuario => {
                        this.roteador.navigate(['listagem-usuarios']);
                        this.mensagemService.sucesso('Usuário cadastrado com sucesso.');
                    },
                    error: e => this.mensagemService.erro(e.message)
                }
            );
        }
    }
}
