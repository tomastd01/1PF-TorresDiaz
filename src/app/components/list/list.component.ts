import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Student } from 'src/app/models/student.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
  @Input() studentsList!: Array<Student>;

  dataSource = new MatTableDataSource<Student>();
  displayedColumns: string[] = ['name', 'age', 'email', 'isActive']

  ngOnInit() {
    this.getStudentsData();
  }

  getStudentsData() {
    let array = [...this.studentsList];
    this.dataSource.data = [...array]
  }
}
