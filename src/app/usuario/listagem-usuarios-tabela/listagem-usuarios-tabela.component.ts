import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Usuario} from "../../shared/model/usuario";
import {UsuarioService} from "../../shared/services/usuario.service";
import {UsuarioRestService} from "../../shared/services/usuario-rest.service";

@Component({
  selector: 'app-listagem-usuarios-tabela',
  templateUrl: './listagem-usuarios-tabela.component.html',
  styleUrl: './listagem-usuarios-tabela.component.scss'
})
export class ListagemUsuariosTabelaComponent implements OnInit{

  dataSourceUsuario: MatTableDataSource<Usuario>;
  colunasVisiveis: string[];

  constructor(private usuarioService: UsuarioRestService) {
    this.dataSourceUsuario = new MatTableDataSource<Usuario>();
    this.colunasVisiveis = ['nome', 'idade'];
  }

  ngOnInit() {
    this.usuarioService.listar().subscribe(
        {
          next: usuarios => this.dataSourceUsuario = new MatTableDataSource<Usuario>(usuarios)
        }
    );
  }

  filtrar(evento: Event) {
    const texto =  (evento.target as HTMLInputElement).value;
    this.dataSourceUsuario.filter = texto;
  }


}
