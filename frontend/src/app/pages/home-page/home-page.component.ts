import {
  Component,
  OnInit
} from '@angular/core';
import {
  nav
} from 'src/app/components/nav';
import {
  slide
} from './slide';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  public nav :nav;
  public slides: slide[] = [{
      id: 1,
      title: "hello",
      text: "    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo repellendus quod possimus vero officia corporis numquam voluptatibus asperiores ab, totam repudiandae ducimus illum, repellat dolorem! Quam doloribus modi incidunt ex!",
      image: "../../../assets/img/home1.svg",
      active:true,
      button:"",
      btnDis:true
    }, {
      id: 2,
      title: "hello",
      text: "    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo repellendus quod possimus vero officia corporis numquam voluptatibus asperiores ab, totam repudiandae ducimus illum, repellat dolorem! Quam doloribus modi incidunt ex!",
      image: "../../../assets/img/home2.svg",
      active:false,
      button:"",
    btnDis:true
    }, {
      id: 3,
      title: "hello",
      text: "    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo repellendus quod possimus vero officia corporis numquam voluptatibus asperiores ab, totam repudiandae ducimus illum, repellat dolorem! Quam doloribus modi incidunt ex!",
      image: "../../../assets/img/home3.png",
      active:false,
      button:"",
    btnDis:true
    },
    {
      id: 4,
      title: "hello",
      text: "    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo repellendus quod possimus vero officia corporis numquam voluptatibus asperiores ab, totam repudiandae ducimus illum, repellat dolorem! Quam doloribus modi incidunt ex!",
      image: "../../../assets/img/home1.svg",
      active:false,
      button:"Login",
      btnDis:false
    }
  ]
  constructor() {}
  
  ngOnInit(): void {}
  navigation(nav: nav) {
    this.slides.forEach(element => {
      if (element.id == nav.id) {
        this.nav = nav
        element.active =true
      } else {
        element.active =false
      }
    });
  }

}
