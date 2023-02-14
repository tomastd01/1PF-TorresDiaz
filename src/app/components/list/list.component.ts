import { Component, Input, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Student } from 'src/app/models/student.model';
import StudentsData from '../../../assets/data.json';
import { EditStudentComponent } from '../edit-student/edit-student.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  constructor(private dialog: MatDialog) {
    
  }

  @Input() studentsArray!: Student[];
  studentsList: Student[] = StudentsData;

  dataSource: MatTableDataSource<Student> = new MatTableDataSource<Student>(this.studentsList);
  displayedColumns: string[] = ['name', 'age', 'email', 'isActive']

  openModal(student: Student) {
    const dialogRef = this.dialog.open(EditStudentComponent, {
      data: student
    });
  }
}
