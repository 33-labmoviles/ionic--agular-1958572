import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

    Alumnos = [
      {
        "Nombre": "Kevin",
        "Apellidos": "Gatica Vega",
        "Matricula": "1958572",
        "Image": "assets/icon/gato.jpng"
      },
      {
        "Nombre": "Marcelo",
        "Apellidos": "Reyes",
        "Matricula": "1234567",
        "Image": "assets/icon/paz.jpng"
      },
      {
        "Nombre": "Eric",
        "Apellidos": "Rodriguez",
        "Matricula": "7654321",
        "Image": "assets/icon/perry.png"
      },
      {
        "Nombre": "Alberto",
        "Apellidos": "Flores",
        "Matricula": "11111111",
        "Image": "assets/icon/reloj.png"
      },
      {
        "Nombre": "Diego",
        "Apellidos": "Davila",
        "Matricula": "3331112",
        "Image": "assets/icon/gato.png"
      },
      {
        "Nombre": "Luis",
        "Apellidos": "Otoñiel",
        "Matricula": "1671234",
        "Image": "assets/icon/perry.png"
      },
      {
        "Nombre": "Emiliano",
        "Apellidos": "Zapata",
        "Matricula": "6666666",
        "Image": "assets/icon/reloj.png"
      },
      {
        "Nombre": "Mario",
        "Apellidos": "Bros",
        "Matricula": "1234512",
        "Image": "assets/icon/paz.png"
      },
      {
        "Nombre": "Pana",
        "Apellidos": "Miguel",
        "Matricula": "3433321",
        "Image": "assets/icon/paz.png"
      }
    ];




}
