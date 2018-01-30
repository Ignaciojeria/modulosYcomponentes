import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import{AppComponent} from './app.component';

//La llamada inicial cargará a estos 2 componentes del enrutador asociado al modulo app.component
import { AppRuta1Component } from './app-ruta1/app-ruta1.component';
import { AppRuta2Component } from './app-ruta2/app-ruta2.component';
export const ROUTER: Routes= [
{path:'', redirectTo:'', pathMatch:'full'},
{path:'ruta1', component:AppRuta1Component},
//El modulo A tiene su propio enrutamiento.
{path:'moduloA', loadChildren: './modulo-a/modulo-a.module#ModuloAModule'},
]

//export const ROUTES:ModuleWithProviders=RouterModule.forChild(ROUTER);

export const ROUTES:ModuleWithProviders=RouterModule.forRoot(ROUTER);
