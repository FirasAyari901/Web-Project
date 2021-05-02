import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';
import {
  Component,
  OnInit
} from '@angular/core';
import {
  BreakpointObserver,
  BreakpointState
} from '@angular/cdk/layout';
import { BackendServiceService } from'../../servives/backend-service.service'
import { Field } from'../../components/field/field'
import { field } from'../serch-emp-page/field'


@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css'],
  animations: [
    trigger("openClose", [
      state('open', style({
        zIndex: 10,
        opacity: 1,

      })),
      state('closed', style({
        zIndex: 0,
        opacity: 0,

      })),
      transition('open => closed', [
        animate('1s ease-out')
      ]),
      transition('closed => open', [
        animate('1s ease-in')
      ]),
    ])

  ]
})
export class SignupPageComponent implements OnInit {
  private backend =  new BackendServiceService()
  public showContainer: boolean;
  slide1 :Boolean; 
  slide2 :Boolean; 
  slide3 :Boolean; 
  slide4 :Boolean; 
  fields: Field[] = [];
  allfields: field[];
  f :number[] = []
  routerlink:string

  recruteur:boolean
  constructor(public breakpointObserver: BreakpointObserver) {}
  async ngOnInit() {
this.allfields = await this.backend.getAllFields()

    document.getElementById("nav1").style.backgroundColor = "#1bbff4e1"
    this.breakpointObserver
      .observe(['(max-width: 1000px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.showContainer = true;
          this.slide1 = true
          this.slide2 = false
          this.slide3 = false
          this.slide4 = false

        } else {
          this.showContainer = false;
          this.slide1 = true
          this.slide2 = true
          this.slide3 = true
          this.slide4 = true
        }
        console.log(this.showContainer)
      });
  }
 
  hide = true;
  thisFileUpload() {
    document.getElementById("file").click();
  }
  async submit(firstname:string,lastname:string,phonenum:string,CIN:string,age:string,mail:string,pwd:string) {
    document.getElementById("submit").click();
    
const res = await this.backend.signup(mail,firstname,lastname,phonenum,CIN,age,pwd,"photo",this.recruteur)
   if (res.signup == true) {
    sessionStorage.emailuser = mail
    for (let i = 0; i < this.fields.length; i++) {
      this.backend.AddFA(mail,this.fields[i].idField)
      console.log(mail,this.fields[i].idField)

    }
    if (this.recruteur) {
      this.routerlink = '/postedoffers'
    }  
    else{
      this.routerlink = '/offers'
    }
 }
}
  submited(e : Event) {
    e.preventDefault()
  }
  addField(str: String) {
   let field = new Field;
    for (let i = 0; i < this.allfields.length; i++) {
      if (str == this.allfields[i].field) {
       field.idField = this.allfields[i].id_field; 
     field.Field = str;
     break
     }  
    }
   let ok =false
    for (let i = 0; i < this.fields.length; i++) {
      if ( this.fields[i].idField == field.idField) {
        ok = true
        break
      }
      
    }
    if (ok == false) {
      this.fields.push(field);
    }
    
  }
  delete(id: Number) {
    this.fields.forEach(f => {
      if (f.idField == id) {
        this.fields.splice(this.fields.indexOf(f), 1);
      }
    });
  }
  isRecruteur(rec :string){
    if (rec == 'recruteur') {
       this.recruteur = true     
    }else{
      this.recruteur = false     

    }

  }

  witch(id: Number) {
    const s1 = document.getElementById("slide-1")
    const s2 = document.getElementById("slide-2")
    const s3 = document.getElementById("slide-3")
    const s4 = document.getElementById("slide-4")
    const nav1 = document.getElementById("nav1")
    const nav2 = document.getElementById("nav2")
    const nav3 = document.getElementById("nav3")
    const nav4 = document.getElementById("nav4")


    switch (id) {

      case 1:
        s1.style.display = "none";
        s2.style.display = "initial";
        nav1.style.backgroundColor = "#ffffff"
        nav2.style.backgroundColor = "#1bbff4e1"
        this.slide1 = false
        this.slide2 = true
        break;
      case 2:
        s2.style.display = "none";
        s3.style.display = "initial";
        nav2.style.backgroundColor = "#ffffff"
        nav3.style.backgroundColor = "#1bbff4e1"
        this.slide2 = false
        this.slide3 = true
        break;
      case 3:
        s3.style.display = "none";
        s4.style.display = "initial";
        nav3.style.backgroundColor = "#ffffff"
        nav4.style.backgroundColor = "#1bbff4e1"
        this.slide3 = false
        this.slide4 = true
        break;

      default:
        break;
    }
  }

  private swipeCoord ? : [number, number];
  private swipeTime ? : number;

  swipe(e: TouchEvent, when: string, id: Number) {

    const coord: [number, number] = [e.changedTouches[0].clientX, e.changedTouches[0].clientY];
    const time = new Date().getTime();
    if (this.showContainer) {
      if (when === 'start') {
        this.swipeCoord = coord;
        this.swipeTime = time;

      } else if (when === 'end') {
        const direction = [coord[0] - this.swipeCoord[0], coord[1] - this.swipeCoord[1]];
        const duration = time - this.swipeTime;

        if (duration < 1000 //
          &&
          Math.abs(direction[0]) > 10 // Long enough
          &&
          Math.abs(direction[0]) > Math.abs(direction[1] * 3)) { // Horizontal enough
          const swipe = direction[0] < 0 ? 'next' : 'previous';
          // Do whatever you want with swipe
          this.witch(id)

        }
      }
    }
    
    

  }


}