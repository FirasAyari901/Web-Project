import { Component, OnInit } from '@angular/core';
import { BackendServiceService } from'../../servives/backend-service.service'
import{empCard} from '../../components/card-empois/card-emplois'
import{field} from './field'

@Component({
  selector: 'app-serch-emp-page',
  templateUrl: './serch-emp-page.component.html',
  styleUrls: ['./serch-emp-page.component.css']
})
export class SerchEmpPageComponent implements OnInit {

  constructor() { }
  emps :empCard[]
  fields :field[]
  test :any
  
  private backend =  new BackendServiceService()
  async ngOnInit() {
  this.emps = await this.backend.alloffers()
  this.fields = await this.backend.getFields()
  
  }
  async getEmpField(id_field){
    this.emps = await this.backend.getEmpF(id_field)
  }
 

}
