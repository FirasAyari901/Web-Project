import { Component, OnInit,Input  } from '@angular/core';
import{empPosted} from './empPosted'
import { BackendServiceService } from'../../servives/backend-service.service'


@Component({
  selector: 'app-card-emp-post',
  templateUrl: './card-emp-post.component.html',
  styleUrls: ['./card-emp-post.component.css']
})
export class CardEmpPostComponent implements OnInit {
  @Input() emp :empPosted
  private backend = new BackendServiceService()
  constructor() { }
  
  ngOnInit(): void {
  }

  initIdJob(){
    sessionStorage.empid = this.emp.id_emploi
  }

}
