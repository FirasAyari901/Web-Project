import { Component, OnInit,Input } from '@angular/core';
import { postulation } from './postulation';

@Component({
  selector: 'app-card-postulation',
  templateUrl: './card-postulation.component.html',
  styleUrls: ['./card-postulation.component.css']
})
export class CardPostulationComponent implements OnInit {
  @Input() p: postulation;
  popup=""
  constructor() { }
  
  ngOnInit(): void {
  }
  popUp(){  
    this.popup = "ok"
    
  }
  popout(){  
    this.popup = ""
  }

}
