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
  slide
} from '../../pages/home-page/slide'



@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css'],
  animations: [
    trigger("openClose", [
      state('open', style({
        zIndex:10,
        opacity: 1,
        
      })),
      state('closed', style({
        zIndex:0,
        opacity: 0,
        
      })),
      transition('open => closed', [
        animate('1s ease-out')
      ]),
      transition('closed => open', [
        animate('1s ease-in')
      ]),
    ])
  ],
  inputs: ['S']
})
export class SlideComponent implements OnInit {
  public S: slide;
  constructor() {}
  
  ngOnInit(): void {}

}
