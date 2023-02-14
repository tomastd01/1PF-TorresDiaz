import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Student } from 'src/app/models/student.model';
import StudentsData from '../../../assets/data.json';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  studentsList: Student[] = StudentsData;

  dataSource: MatTableDataSource<Student> = new MatTableDataSource<Student>(this.studentsList);
  displayedColumns: string[] = ['name', 'age', 'email', 'isActive']
}
