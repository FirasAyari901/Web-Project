import { Component, OnInit } from '@angular/core';
import {
  Field
} from '../field/field';
@Component({
  selector: 'app-field2',
  templateUrl: './field2.component.html',
  styleUrls: ['./field2.component.css'],
  inputs: ['field']
})
export class Field2Component implements OnInit {
  public field: Field;
  constructor() { }

  ngOnInit(): void {
  }

}
