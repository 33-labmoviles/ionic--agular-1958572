import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Alumno } from '../alumno';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {}


  Nombre: string ="";
  Apellidos: string ="";
  Matricula: string ="";

  modelo = new Alumno( this.Nombre, this.Apellidos, this.Matricula);

  onSubmit(agregarLista: NgForm) {
    //Algo aqui
    console.log("Submit")
    //AQUI VA EL REQUEST
  }
}
