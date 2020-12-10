import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../services/peliculas.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.css']
})
export class ListadoPeliculasComponent implements OnInit {
  
  displayedColumns: string[] = ['title', 'episode_id', 'director', 'producer'];
  listadoPeliculas = new MatTableDataSource();

  constructor(private peliculasService: PeliculasService) { }

  ngOnInit(): void {
    this.peliculasService.getPeliculasList().subscribe(resp => {
      this.listadoPeliculas.data = resp.results;
    });
  }

}
