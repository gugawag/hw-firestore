import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'primeiroNome'
})
export class PrimeiroNomePipe implements PipeTransform {

  transform(nome: string): string {
    nome = nome.trim()
    const indxPrimeiroEspaco = nome.indexOf(' ');
    if (indxPrimeiroEspaco > 0) {
      return nome.substring(0, indxPrimeiroEspaco);
    }
    return nome;
  }

}
