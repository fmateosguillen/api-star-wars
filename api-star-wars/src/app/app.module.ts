import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListadoPeliculasComponent } from './listado-peliculas/listado-peliculas.component';
import {HttpClientModule} from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { PeliculasService } from './services/peliculas.service';

@NgModule({
  declarations: [
    AppComponent,
    ListadoPeliculasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [PeliculasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
