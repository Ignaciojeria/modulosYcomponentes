import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';


//La llamada inicial cargará a este componente del enrutador asociado al modulo app.component
import { AppRuta2Component } from '../app-ruta2/app-ruta2.component';
import { ModuloAComponent } from './modulo-a.component';

export const ROUTER: Routes= [
    {path:'', redirectTo:'', component:ModuloAComponent, pathMatch: 'full' },
    {path:'', component:ModuloAComponent,
    children: [ {path:'ruta2', component: AppRuta2Component}
    ]}
] 

//export const ROUTES:ModuleWithProviders=RouterModule.forChild(ROUTER);

export const ROUTES:ModuleWithProviders=RouterModule.forChild(ROUTER);