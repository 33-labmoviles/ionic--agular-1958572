import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
})
export class ListaComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  alumnos = [
    {
      "Nombre": "Kevin",
      "Apellidos": "Gatica Vega",
      "Matricula": "1958572",
      "image": "assets/icon/paz.jpg"
      
    },
    {
      "Nombre": "Marcelo",
      "Apellidos": "Reyes",
      "Matricula": "1234567",
      "image": "assets/icon/paz.jpg"
      
    },
    {
      "Nombre": "Eric",
      "Apellidos": "Rodriguez",
      "Matricula": "7654321",
      "image": "assets/icon/paz.jpg"
      
    },
    {
      "Nombre": "Alberto",
      "Apellidos": "Flores",
      "Matricula": "11111111",
      "image": "assets/icon/paz.jpg"
      
    },
    {
      "Nombre": "Diego",
      "Apellidos": "Davila",
      "Matricula": "3331112",
      "image": "assets/icon/paz.jpg"
      
    },
    {
      "Nombre": "Luis",
      "Apellidos": "Otoñiel",
      "Matricula": "1671234",
      "image": "assets/icon/paz.jpg"
      
    },
    {
      "Nombre": "Emiliano",
      "Apellidos": "Zapata",
      "Matricula": "6666666",
      "image": "assets/icon/paz.jpg"
      
    },
    {
      "Nombre": "Mario",
      "Apellidos": "Bros",
      "Matricula": "1234512",
      "image": "assets/icon/paz.jpg"
      
    },
    {
      "Nombre": "Pana",
      "Apellidos": "Miguel",
      "Matricula": "3433321",
      "image": "assets/icon/paz.jpg"
      
    }
  ];

}
