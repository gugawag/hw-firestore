export class Usuario {

    public id?: string;
    public nome?: string;
    public idade?: number;

    constructor(id?: string,
                usuario: Usuario = {}
    ) {
        this.id = id;
        this.nome = usuario.nome;
        this.idade = usuario.idade;
    }
}
