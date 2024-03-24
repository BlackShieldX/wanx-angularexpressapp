import {Component, NgModule} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {MatButtonModule} from "@angular/material/button";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatOption} from "@angular/material/autocomplete";
import {MatSelect} from "@angular/material/select";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule, RouterLinkActive, RouterLink, MatFormField, MatLabel, MatInputModule, MatOption, MatSelect],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'wanx-angularexpressapp';
  email: any;
  password: any;
  selectedClient: any;

  constructor() {
  }

  login() {}

  signup() {}

  logOut() {}
}
