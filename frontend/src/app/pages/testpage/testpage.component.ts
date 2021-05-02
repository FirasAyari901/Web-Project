import {
  Component,
  OnInit
} from '@angular/core';
import {
  Field
} from '../../components/field/field';
@Component({
  selector: 'app-testpage',
  templateUrl: './testpage.component.html',
  styleUrls: ['./testpage.component.css']
})
export class TestpageComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}
  fields: Field[] = [];
  

  addField(str :String) {
    let field = new Field;
    field.idField = 1;
    field.Field = str;
    this.fields.push(field);
    
  }
  delete(id:Number){
    this.fields.forEach(f => {
      if (f.idField == id) {
        this.fields.splice(this.fields.indexOf(f),1) ;       
      }
    });
  }

}
