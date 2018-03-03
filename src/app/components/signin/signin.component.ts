import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  email: string;
  password: string;

  listaUsuarios: any[] = [
    {
      "email": "sayri.c.m@gmail.com",
      "password": "123456789"
    },
    {
      "email": "admin@gmail.com",
      "password": "123456789"
    }
  ];


  constructor() { }

  ngOnInit() {
  }

  loginUsuario() {

    for (let usuario of this.listaUsuarios) {
      if (this.email == usuario.email && this.password == usuario.password) {
        this.email = "";
        this.password = "";
    
        alert("Bienvenido " + usuario.email); 
        break; 
      }
      else{
        alert("Usuario incorrecto");  
        break;
      }
    }
  }

}
