import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Student } from '../../models/student.model';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent {
  @Output() outputStudentEvent: EventEmitter<Student> = new EventEmitter<Student>;
  loginForm: FormGroup;

  constructor() {
    let regExEmail: RegExp = /\S+@\S+\.\S+/;
    let regExUser: RegExp = /^[a-zA-Z]+[a-zA-Z0-9]+/;
    let regExAge: RegExp = /\d/

    let controls: any = {
      name: new FormControl("", 
      [ 
        Validators.required, 
      ]),
      age: new FormControl("", 
      [
        Validators.required,
        Validators.min(18),
        Validators.max(120),
        Validators.pattern(regExAge)
      ]),
      email: new FormControl("", [Validators.required, Validators.pattern(regExEmail)]),
      password: new FormControl("", [Validators.required, Validators.minLength(6)]),
      isActive: new FormControl(false, [])
    }

    this.loginForm = new FormGroup(controls)
  }

  name!:string;
  age!:number;
  email!:string;
  password!:string;
  isActive!:boolean;

  addStudent() {
    let student: Student = {
      name: this.name,
      age: Number(this.age),
      password: this.password,
      email: this.email,
      isActive: this.isActive 
    }
    console.log("agrenango alumno", student);
    this.outputStudentEvent.emit(student);
  }

  login() {
    console.log(this.loginForm);
  }
}
