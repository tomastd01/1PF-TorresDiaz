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
      name: "Roberto",
      age: 40,
      email: "rob10@gmail.com",
      password: "asdihgk234234",
      isActive: true
    }
  ];

  addStudent(student: Student) {
    this.studentsArray.push(student)
  }
}
