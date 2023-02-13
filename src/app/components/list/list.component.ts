import { Component } from '@angular/core';
import { Student } from 'src/app/models/student.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  studentsList: Array<Student> = [
    {
      name: "Martin",
      age: 31,
      email: "martin@gmail.com",
      isActive: true
    },
    {
      name: "Tomas",
      age: 20,
      email: "tomas@gmail.com",
      isActive: false
    },
    {
      name: "Robert",
      age: 28,
      email: "robert@gmail.com",
      isActive: true
    },
    {
      name: "Pepe",
      age: 18,
      email: "pepe@gmail.com",
      isActive: true
    },
    {
      name: "Bob",
      age: 40,
      email: "bob@gmail.com",
      isActive: false
    }
  ]
}
