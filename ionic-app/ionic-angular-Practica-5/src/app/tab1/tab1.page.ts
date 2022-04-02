import { Component, Input , OnChanges} from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

    alumnos = [
      {
        "Nombre": "Kevin",
        "Apellidos": "Gatica Vega",
        "Matricula": "1958572"
        
      },
      {
        "Nombre": "Marcelo",
        "Apellidos": "Reyes",
        "Matricula": "1234567"
        
      },
      {
        "Nombre": "Eric",
        "Apellidos": "Rodriguez",
        "Matricula": "7654321"
        
      },
      {
        "Nombre": "Alberto",
        "Apellidos": "Flores",
        "Matricula": "11111111"
        
      },
      {
        "Nombre": "Diego",
        "Apellidos": "Davila",
        "Matricula": "3331112"
        
      },
      {
        "Nombre": "Luis",
        "Apellidos": "Otoñiel",
        "Matricula": "1671234"
        
      },
      {
        "Nombre": "Emiliano",
        "Apellidos": "Zapata",
        "Matricula": "6666666"
        
      },
      {
        "Nombre": "Mario",
        "Apellidos": "Bros",
        "Matricula": "1234512"
        
      },
      {
        "Nombre": "Pana",
        "Apellidos": "Miguel",
        "Matricula": "3433321"
        
      }
    ];

    @Input() Nombre: string = "";
    @Input() Apellidos: string = "";
    @Input() Matricula: string = "";
  
    agregar_alumno(): void{
      var nuevoAlumno : any = {
        "Nombre": this.Nombre,
        "Apellidos": this.Apellidos,
        "Matricula": this.Matricula
      }
      this.alumnos.push(nuevoAlumno);
      this.alumnos.sort();
      console.log(this.alumnos);
      
    }
  

}
