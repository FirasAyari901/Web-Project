import { Component, OnInit,Input  } from '@angular/core';
import{empCard} from './card-emplois'
import { BackendServiceService } from'../../servives/backend-service.service'


@Component({
  selector: 'app-card-empois',
  templateUrl: './card-empois.component.html',
  styleUrls: ['./card-empois.component.css']
})
export class CardEmpoisComponent implements OnInit {
  @Input() item: empCard;
 backend = new BackendServiceService()
 popup:string=""
  constructor() {
   }
  
  ngOnInit(): void {
    
  }
  postuler(des:string ,e){
    e.preventDefault();
    this.backend.postuler(des,this.item.id_emploi)
    
  }
  popUp(){  
    this.popup = "ok"
  }
  popout(){  
    this.popup = ""
  }

}
