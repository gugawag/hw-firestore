import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {firebaseConfig} from "../../../../firebase.config";
import {AngularFireModule} from "@angular/fire/compat";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ]
})
export class FirestoreModule { }
