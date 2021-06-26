import { ViewportScroller } from "@angular/common";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  logo: string = `assets/images/logo.png`;
  active: string = `header`;

  constructor(private _ViewportScroller: ViewportScroller) {}

  ngOnInit(): void {}

  scrollTo(anchor: string): void {
    this._ViewportScroller.scrollToAnchor(anchor);
    this.active = anchor;
  }
}
