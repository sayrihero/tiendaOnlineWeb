import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductoComponent } from './components/producto/producto.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { StockComponent } from './components/stock/stock.component';
import { ComprasRealizadasComponent } from './components/compras-realizadas/compras-realizadas.component';
import { routes } from './app.routes';
import { IngresoComponent } from './components/ingreso/ingreso.component';
import { FormsModule} from '@angular/forms';
import { HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ProductoComponent,
    SigninComponent,
    SignupComponent,
    StockComponent,
    ComprasRealizadasComponent,
    IngresoComponent
  ],
  imports: [
    BrowserModule,
    routes,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
