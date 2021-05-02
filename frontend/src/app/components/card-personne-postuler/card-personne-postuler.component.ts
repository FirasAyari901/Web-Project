import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  perpos
} from './perpos';
import {
  BackendServiceService
} from '../../servives/backend-service.service'

@Component({
  selector: 'app-card-personne-postuler',
  templateUrl: './card-personne-postuler.component.html',
  styleUrls: ['./card-personne-postuler.component.css']
})
export class CardPersonnePostulerComponent implements OnInit {
  @Input() personne: perpos
  private backend = new BackendServiceService()

  idbtn = ""
  constructor() {}

  ngOnInit(): void {}
  popUp() {
    this.idbtn = "ok"
  }
  popout() {
    this.idbtn = ""
  }
  response(ch: string) {
    if (ch == "Accept") {
      ch ="accepted"
      document.getElementById("close").click()
    }
    else{
      ch="refused"
    }
    this.backend.changeResponse(this.personne.mail,ch)
    document.getElementById("close").click()

  }

}