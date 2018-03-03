import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  articulos: any[] = [
    {
      "nombre": "Nombre del producto 1",
      "descripcion": "descripcion",
      "precio": 25,
      "cantidad": 5,
      "descuento": 0,
      "url": "http://www.soloepis.com/media/catalog/category/ropa-de-alta-visibilidad-reflectante-cat.jpg"
    },
    {
      "nombre": "Nombre del producto 2",
      "descripcion": "descripcion",
      "precio": 25,
      "cantidad": 5,
      "descuento": 0,
      "url": "http://www.soloepis.com/media/catalog/category/ropa-de-alta-visibilidad-reflectante-cat.jpg"
    },
    {
      "nombre": "Nombre del producto 3",
      "descripcion": "descripcion",
      "precio": 25,
      "cantidad": 5,
      "descuento": 0,
      "url": "http://www.soloepis.com/media/catalog/category/ropa-de-alta-visibilidad-reflectante-cat.jpg"
    } ,
    {
      "nombre": "Nombre del producto 4",
      "descripcion": "descripcion",
      "precio": 25,
      "cantidad": 5,
      "descuento": 0,
      "url": "http://www.soloepis.com/media/catalog/category/ropa-de-alta-visibilidad-reflectante-cat.jpg"
    },
    {
      "nombre": "Nombre del producto 5",
      "descripcion": "descripcion",
      "precio": 25,
      "cantidad": 5,
      "descuento": 0,
      "url": "http://www.soloepis.com/media/catalog/category/ropa-de-alta-visibilidad-reflectante-cat.jpg"
    } 
  ]


  constructor() { }

  ngOnInit() {
  }




}
