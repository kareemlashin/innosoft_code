import { Component, OnInit } from "@angular/core";
import { OwlOptions } from "ngx-owl-carousel-o";

@Component({
  selector: "app-opportunities",
  templateUrl: "./opportunities.component.html",
  styleUrls: ["./opportunities.component.scss"]
})
export class OpportunitiesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    rtl: true,
    margin: 25,

    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 2
      },
      940: {
        items: 3
      }
    },
    nav: false
  };

  slides = [
    1,2,3,4,5
  ];
  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 2,
    rtl: true,
    infinite: true,
    nav: false,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1
        }
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };
}
