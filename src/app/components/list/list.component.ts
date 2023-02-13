import { Component, Input } from '@angular/core';
import { Student } from 'src/app/models/student.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() studentsList!: Array<Student>;
}
