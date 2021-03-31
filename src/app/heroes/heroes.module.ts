import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HeroesRoutingModule } from './heroes-routing.module';
import { EditarComponent } from './pages/editar/editar.component';
import { HeroeComponent } from './pages/heroe/heroe.component';



@NgModule({
  declarations: [AgregarComponent, HomeComponent, ListadoComponent, BuscarComponent, EditarComponent, HeroeComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }
