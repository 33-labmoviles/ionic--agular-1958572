import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-alumno-detalle',
  templateUrl: './alumno-detalle.component.html',
  styleUrls: ['./alumno-detalle.component.scss'],
})
export class AlumnoDetalleComponent implements OnInit {

  constructor(private ruta: ActivatedRoute) { }

  ngOnInit() {
    this.obtenerDetalleAlumno(this.Matricula);
  }

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

  alumnoDetalle:  any={};
  Matricula: string = this.ruta.snapshot.params.id;
  obtenerDetalleAlumno(Matricula: string): any{
    console.log(Matricula);

  for(let i=0; i<this.alumnos.length;i++){
    if(Matricula==this.alumnos[i].Matricula){
      this.alumnoDetalle=this.alumnos[i];
      }
    }

    return this.alumnoDetalle;
  }

}
