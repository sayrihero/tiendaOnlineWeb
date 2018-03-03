import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  email: string;
  nombre: string;
  apellido: string;
  password: string;
  telefono: string;
  direccion: string;
  rol: string;

  listaUsuarios: any[] = [];


  listaRoles: any[] = [
    {
      "id": 1,
      "rol": "Administrador"
    },
    {
      "id": 2,
      "rol": "Cajero"
    }
  ];


  constructor() { }

  ngOnInit() {
  }

  registrarUsuario(){
    this.listaUsuarios.push({"email": this.email, "nombre": this.nombre, "apellido": this.apellido,
    "password": this.password, "telefono": this.telefono, "direccion": this.direccion, "rol": this.rol});
    this.email = "";
    this.nombre = "";
    this.apellido = "";
    this.password = "";
    this.telefono = "";
    this.direccion = "";
    this.rol = "";
  }

  

}
