import { Component, OnInit } from '@angular/core';

import { FirebasebdService } from '../firebasebd.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss'],
})
export class AlumnosComponent implements OnInit {

  constructor(private db : FirebasebdService) { }

  ngOnInit() {
    this.cargarAlumnos();
  }

  alumnos: any = [];

  

  cargarAlumnos() {
    this.db.getAlumnos().subscribe(res => {
      this.alumnos = res;
    })
  }

}
