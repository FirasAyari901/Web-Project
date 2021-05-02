import { Component, OnInit } from '@angular/core';
import { BackendServiceService } from'../../servives/backend-service.service'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  constructor() { }
  routerlink :string
  private backend =  new BackendServiceService()
  ngOnInit(): void {
    sessionStorage.clear()
    localStorage.clear()
  }
  log(mail:string ,pwd:string,e){
    e.preventDefault();
    
    
    this.backend.login(mail ,pwd)
    console.log(sessionStorage.routerlink);
   
          this.routerlink = sessionStorage.routerlink
          document.getElementById("a").click()}
        
        
  
}
