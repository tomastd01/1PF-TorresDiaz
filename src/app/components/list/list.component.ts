import { Component, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Student } from 'src/app/models/student.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() studentsList!: Array<Student>;

  dataSource: MatTableDataSource<Student> = new MatTableDataSource<Student>(this.studentsList!);
  displayedColumns: string[] = ['name', 'age', 'email', 'isActive']
}
