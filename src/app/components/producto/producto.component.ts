import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  //Variables categoria
  cat_id: string;
  cat_nombre: string;
  cat_descripcion: string;

  //Variables articulo
  ar_nombre: string;
  ar_descripcion: string;
  ar_precio: number;
  ar_cantidad: number;
  ar_descuento: number;
  categoria_id: string;
  ar_url: string;

  listaCategorias: any[] = [];

  listaArticulos: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  ingresarCategoria() {
    try {
      this.listaCategorias.push({ "id": this.cat_id, "nombre": this.cat_nombre, "descripcion": this.cat_descripcion });
      this.cat_id = "";
      this.cat_nombre = "";
      this.cat_descripcion = "";
    } catch{
      alert("Error");
    }
  } 

  removerCategoria(index){
    if(confirm("Desea eliminar la categoria?")){
      this.listaCategorias.splice(index, 1);
    }
  }

  ingresarArticulo() {
    try {
      this.listaArticulos.push({ "nombre": this.ar_nombre, "descripcion": this.ar_descripcion,
    "precio": this.ar_precio, "cantidad": this.ar_cantidad, "descuento": this.ar_descuento, 
    "categoria_id": this.categoria_id, "fecha": new Date() , "url": this.ar_url });
      this.ar_nombre = "";
      this.ar_descripcion = "";
      this.ar_precio = 0;
      this.ar_cantidad = 0;
      this.ar_descuento = 0;
      this.categoria_id = "";
      this.ar_url = "";
    } catch{
      alert("Error");
    }
  } 

  removerPaquete(index){
    if(confirm("Desea eliminar el articulo?")){
      this.listaArticulos.splice(index, 1);
    }
  }

}
