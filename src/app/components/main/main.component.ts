import { Component } from '@angular/core';
import { Student } from '../../models/student.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  studentsArray: Array<Student> = [
    {
      name: "Benji",
      age: 20,
      password: "asdihgk234234",
      email: "benji1@gmail.com",
      isActive: false
    },
    {
      name: "Tomas",
      age: 21,
      password: "khu4gi87s",
      email: "tomas@gmail.com",
      isActive: true
    }
    ,
    {
      name: "Oliver",
      age: 18,
      password: "kju3hg4534",
      email: "atom10@hotmail.com",
      isActive: true
    },
    {
      name: "Lionel",
      age: 35,
      password: "345lkjibh",
      email: "messi10@gmail.com",
      isActive: true
    },
    {
      name: "Yosoy",
      age: 40,
      password: "kjihu4jhg",
      email: "batman@yahoo.com",
      isActive: false
    }
  ];

  addStudent(student: Student) {
    this.studentsArray.push(student)
  }
}
