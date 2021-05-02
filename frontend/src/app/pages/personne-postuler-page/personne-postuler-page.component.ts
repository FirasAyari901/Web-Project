import { Component, OnInit } from '@angular/core';
import { perpos } from '../../components/card-personne-postuler/perpos';
import { BackendServiceService } from'../../servives/backend-service.service'

@Component({
  selector: 'app-personne-postuler-page',
  templateUrl: './personne-postuler-page.component.html',
  styleUrls: ['./personne-postuler-page.component.css']
})
export class PersonnePostulerPageComponent implements OnInit {
  personnes : perpos[]
  private backend =  new BackendServiceService()

  constructor() { }

  async ngOnInit(){
    this.personnes =await this.backend.getPerPos()
    
    
    
  }

}
