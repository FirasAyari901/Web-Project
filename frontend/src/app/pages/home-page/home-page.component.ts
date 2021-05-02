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
    title: "How Job Career Works for You",
    text: "Every day we index millions of jobs directly from employer websites. We’re committed to accurate, high-quality jobs so you won’t find old, duplicated, or spammy listings here.",
    image: "../../../assets/img/home1.svg",
    active:true,
    button:"",
    btnDis:true
  }, {
    id: 2,
    title: "Find the Right Job",
    text: "Organize and automate your job search while at home or on the go. We’ll deliver new, relevant jobs of interest straight to your inbox.",
    image: "../../../assets/img/home2.svg",
    active:false,
    button:"",
  btnDis:true
  }, {
    id: 3,
    title: "Apply To Jobs",
    text: "We want job seekers and employers to connect directly. After you find the right job, you’re sent straight to the employer’s site to apply. No signups. No fuss.",
    image: "../../../assets/img/home3.png",
    active:false,
    button:"",
  btnDis:true
  },
  {
    id: 4,
    title: "Find The Job That Fits Your Life",
    text: "Finding a job shouldn’t be a full-time job.",
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
