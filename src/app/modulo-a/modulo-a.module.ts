import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ModuloAComponent } from './modulo-a.component';
import { ROUTES } from './modulo-a.router';

import { AppRuta2Component } from '../app-ruta2/app-ruta2.component';


@NgModule({
  declarations: [
    ModuloAComponent,
    AppRuta2Component,

  ],
  imports: [ROUTES],
  providers: [],
  bootstrap: [ModuloAComponent]
})
export class ModuloAModule { }
