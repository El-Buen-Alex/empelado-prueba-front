import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Canton } from '../../interfaces/Canton.interface';

@Component({
  selector: 'app-canton',
  templateUrl: './canton.component.html',
  styleUrls: ['./canton.component.css']
})
export class CantonComponent implements OnInit {
  canton_id:number=0;
  @Input('cantones')cantones:Canton[]=[]
  @Output() sendSelection =new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  sendIdCanton(){
      this.sendSelection.emit(this.canton_id)
  }
}
