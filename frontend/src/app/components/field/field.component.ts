import {
  Component,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';
import {
  Field
} from './field';
@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css'],
  inputs: ['field']
})
export class FieldComponent implements OnInit {
  @Output() deleted = new EventEmitter < Number > ();
  fieldDeleted: Number;
  public field: Field;
  constructor() {}

  ngOnInit(): void {
    
    
  }

  delete(id: Number) {
    this.fieldDeleted = id;
    this.deleted.emit(this.fieldDeleted)
  }
}
