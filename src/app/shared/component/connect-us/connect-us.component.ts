import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-connect-us",
  templateUrl: "./connect-us.component.html",
  styleUrls: ["./connect-us.component.scss"]
})
export class ConnectUsComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl(""),
    email: new FormControl(""),
    message: new FormControl("")
  });
  constructor() {}

  ngOnInit(): void {}
  onSubmit() {
    console.log(this.form.value);
  }
}
