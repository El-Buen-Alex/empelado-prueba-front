import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Provincia } from '../../interfaces/Provincia.interface';

@Component({
  selector: 'app-provincia',
  templateUrl: './provincia.component.html',
  styleUrls: ['./provincia.component.css']
})
export class ProvinciaComponent implements OnInit {
  provincia_id: number = 0
  @Input('provincias')provincias:Provincia[]=[]
  @Output() refrezarCantones = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  refreshCanton(){
    this.refrezarCantones.emit(this.provincia_id)
  }
  
}
