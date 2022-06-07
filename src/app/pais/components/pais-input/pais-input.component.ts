import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';
import { Country } from '../../interfaces/pais.interface';
@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit {

  @Input() placeholder: string = "Buscale papito sin miedo";
  @Output() onEnter: EventEmitter<string> = new EventEmitter<string>();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter<string>();
  
  debounce: Subject<string> = new Subject<string>();
  
  termino: string = '';
  
  constructor() { }

  ngOnInit(): void {
    this.debounce.pipe(
      debounceTime(500)
    ).subscribe(termino => this.onDebounce.emit(termino));
  }
  buscar(){
    //console.log(this.termino);
    this.onEnter.emit(this.termino);
  }
  teclaPresionada(){
    this.debounce.next(this.termino);
  }
}
