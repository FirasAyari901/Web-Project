import { Component, OnInit } from '@angular/core';
import { BackendServiceService } from'../../servives/backend-service.service'
import { postulation } from'../../components/card-postulation/postulation'

@Component({
  selector: 'app-postulation-page',
  templateUrl: './postulation-page.component.html',
  styleUrls: ['./postulation-page.component.css']
})
export class PostulationPageComponent implements OnInit {
  private backend =  new BackendServiceService()

  constructor() { }

  postulations :postulation[]
  async ngOnInit() {
    this.backend.getPostulations()
    this.postulations = await this.backend.getPostulations()
    console.log(this.postulations);
    
    
  }
  

}
