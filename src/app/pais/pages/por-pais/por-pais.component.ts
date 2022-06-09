import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent implements OnInit {

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarSugerencias: boolean = false;

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscar(termino: string){
    this.hayError = false;
    this.mostrarSugerencias = false;
    this.termino = termino;
    console.log(this.termino)
    this.paisService.buscarPais(this.termino).subscribe(paises  =>{
this.paises = paises;
    },(error) =>{
      this.hayError = true;
      this.paises = []
    });
  }
 sugerencias(termino: string){
   this.hayError=false;
   this.mostrarSugerencias = true;
   this.termino = termino;
    this.paisService.buscarPais(this.termino).subscribe(paises =>{
      this.paisesSugeridos = paises;

    },(error) =>{
      this.hayError = true;
      this.paisesSugeridos = []
   console.log(this.termino);
    });
 }
 buscarSugerido(termino:string){
   this.buscar(termino);
 }

}
