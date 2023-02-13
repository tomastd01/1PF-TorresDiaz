import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent {
  loginForm: FormGroup;

  constructor() {
    let regExEmail: RegExp = /\S+@\S+\.\S+/;
    let regExUser: RegExp = /^[a-zA-Z]+[a-zA-Z0-9]+/;

    let controls: any = {
      name: new FormControl("", 
      [ 
        Validators.required, 
      ]),
      email: new FormControl("", [Validators.required, Validators.pattern(regExEmail)]),
      password: new FormControl("", [Validators.required, Validators.minLength(6)]),
      isActive: new FormControl(true, [])
    }

    this.loginForm = new FormGroup(controls)
  }

  login() {
    console.log(this.loginForm);
  }
}
