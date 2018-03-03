import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core/core";
import {HomeComponent} from "./components/home/home.component";
import { ComprasRealizadasComponent } from "./components/compras-realizadas/compras-realizadas.component";
import { IngresoComponent } from "./components/ingreso/ingreso.component";
import { ProductoComponent } from "./components/producto/producto.component";
import { SigninComponent } from "./components/signin/signin.component";
import { SignupComponent } from "./components/signup/signup.component";
import { StockComponent } from "./components/stock/stock.component";

//Estructura de paths y posibles modulos
export const router: Routes = [
{
    path: '',
    redirectTo: 'home',
    pathMatch:'full'
},
{
    path: 'home',
    component: HomeComponent
},
{
    path: 'compras-realizadas',
    component: ComprasRealizadasComponent
},
{
    path: 'ingreso',
    component: IngresoComponent
},
{
    path: 'producto',
    component: ProductoComponent
},
{
    path: 'signin',
    component: SigninComponent
},
{
    path: 'signup',
    component: SignupComponent
},
{
    path: 'stock',
    component: StockComponent
}
];

//Exportamos la ruta 
export const routes: ModuleWithProviders = RouterModule.forRoot(router);