import { Component, OnInit } from '@angular/core';
import { BackendServiceService } from'../../servives/backend-service.service'
import{empPosted} from '../../components/card-emp-post/empPosted'
@Component({
  selector: 'app-posted-emp-page',
  templateUrl: './posted-emp-page.component.html',
  styleUrls: ['./posted-emp-page.component.css']
})
export class PostedEmpPageComponent implements OnInit {
  private backend = new BackendServiceService()
  empPosted :empPosted[] 
  constructor() { }

  async ngOnInit() {
  this.empPosted = await this.backend.getJobPosted()
  console.log(this.empPosted)
  }
  submit(){
    document.getElementById("submit").click()
  }
  addJob(JobTitle:string ,JobPrice:number ,e){
    this.backend.addJob(JobTitle,JobPrice);
    document.getElementById("close").click()
    
    
  }

}
