 import {
  Component,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';
import {
  nav
} from '../nav';

@Component({
  selector: 'app-navs',
  templateUrl: './navs.component.html',
  styleUrls: ['./navs.component.css']
})
export class NavsComponent implements OnInit {
  @Output() nav = new EventEmitter < nav > ();
  out: nav;
  Nav: nav[] = [{
      id: 1,
      active: true
    },
    {
      id: 2,
      active: false
    },
    {
      id: 3,
      active: false
    },
    {
      id: 4,
      active: false
    }
  ]
  constructor() {}

  timeLeft: number = 12;
  interval;

  ngOnInit(): void {
    this.Nav.forEach(n => {
      if (n.id == 1) {
        n.active = true
        this.out = n
        this.nav.emit(this.out)
      }
    })
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      }
      switch (this.timeLeft) {
        case 9: {
          this.onChange(2)
          break;
        }
        case 6: {
          this.onChange(3)
          break;
        }
        case 3: {
          this.onChange(4)
          break;
        }
      }
    }, 1000)
  }

  onChange(id: number) {
    this.Nav.forEach(n => {
      if (id == n.id) {
        n.active = true
        this.out = n
        this.nav.emit(this.out)
      } else {
        n.active = false
      }
      if(id== 1){
        this.timeLeft = 12;
      }
    })

  }
  


}
