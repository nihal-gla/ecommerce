import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-related-product',
  templateUrl: './related-product.component.html',
  styleUrls: ['./related-product.component.css']
})
export class RelatedProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  customOptions02: OwlOptions = {
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

}
