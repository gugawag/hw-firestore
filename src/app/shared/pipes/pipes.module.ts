import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeiroNomePipe } from './primeiro-nome.pipe';



@NgModule({
  declarations: [
    PrimeiroNomePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
      PrimeiroNomePipe
  ]
})
export class PipesModule { }
