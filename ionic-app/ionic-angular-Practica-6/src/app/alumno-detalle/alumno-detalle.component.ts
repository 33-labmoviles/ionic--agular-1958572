import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-alumno-detalle',
  templateUrl: './alumno-detalle.component.html',
  styleUrls: ['./alumno-detalle.component.scss'],
})
export class AlumnoDetalleComponent implements OnInit {

  constructor(
    private ruta: ActivatedRoute,
    public actionSheetC: ActionSheetController) { }
  

  ngOnInit() {
    this.obtenerDetalleAlumno(this.Matricula);
  }

  alumnos = [
    {
      "Nombre": "Kevin",
      "Apellidos": "Gatica Vega",
      "Matricula": "1958572",
      "image": "assets/icon/logo.png"
      
    },
    {
      "Nombre": "Marcelo",
      "Apellidos": "Reyes",
      "Matricula": "1234567",
      "image": "assets/icon/logo.png"
      
    },
    {
      "Nombre": "Eric",
      "Apellidos": "Rodriguez",
      "Matricula": "7654321",
      "image": "assets/icon/logo.png"
      
    },
    {
      "Nombre": "Alberto",
      "Apellidos": "Flores",
      "Matricula": "11111111",
      "image": "assets/icon/logo.png"
      
    },
    {
      "Nombre": "Diego",
      "Apellidos": "Davila",
      "Matricula": "3331112",
      "image": "assets/icon/logo.png"
      
    },
    {
      "Nombre": "Luis",
      "Apellidos": "Otoñiel",
      "Matricula": "1671234",
      "image": "assets/icon/logo.png"
      
    },
    {
      "Nombre": "Emiliano",
      "Apellidos": "Zapata",
      "Matricula": "6666666",
      "image": "assets/icon/logo.png"
      
    },
    {
      "Nombre": "Mario",
      "Apellidos": "Bros",
      "Matricula": "1234512",
      "image": "assets/icon/logo.png"
      
    },
    {
      "Nombre": "Pana",
      "Apellidos": "Miguel",
      "Matricula": "3433321",
      "image": "assets/icon/logo.png"
      
    }
  ];

  alumnoDetalle: any = {}
  Matricula: string = this.ruta.snapshot.params.id;
  
  obtenerDetalleAlumno(Matricula: string): any {
    console.log(Matricula);
    

    //AQUI BUSCA EN EL ARREGLO EL ALUMNO CON LA MATRICULA
    for(let i = 0; i < this.alumnos.length; i++){
      if(Matricula == this.alumnos[i].Matricula){
        this.alumnoDetalle = this.alumnos[i];
      }
    }

    return this.alumnoDetalle;
  }


  async mostrarActionSheet() {
    const actionSheet = await this.actionSheetC.create({
      header: 'Opciones',
      cssClass: 'mi-primer-action-sheet',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        id: 'delete-button',
        data: {
          type: 'delete'
        },
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: 'share',
        data: 10,
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Play (open modal)',
        icon: 'caret-forward-circle',
        data: 'Data value',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();

    const { role, data } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role and data', role, data);
  }
}