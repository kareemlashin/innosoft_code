import { Component, OnInit } from "@angular/core";
import { OwlOptions } from "ngx-owl-carousel-o";

@Component({
  selector: "app-partnerships",
  templateUrl: "./partnerships.component.html",
  styleUrls: ["./partnerships.component.scss"]
})
export class PartnershipsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    rtl: true,
    margin: 10,
    responsive: {
      0: {
        items: 3
      },
      400: {
        items: 3
      },
      740: {
        items: 5
      },
      940: {
        items: 5
      }
    },
    nav: false
  };
}
