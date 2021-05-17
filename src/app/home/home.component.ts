import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HomeService } from './home.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private homeService:HomeService, private http:HttpClient) { }

  ngOnInit(): void {

    // this.http.get('http://3.7.91.114/landing-page').subscribe(date=>this.)


  }
  title = 'Nand Kishor Mukutwala';
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    // touchDrag: false,
    // pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 3
      },
      740: {
        items: 4
      },
      940: {
        items: 5
      },
    },
    nav: true,
  }


  onButtonClick(){
    this.homeService.getName()
  }

}
