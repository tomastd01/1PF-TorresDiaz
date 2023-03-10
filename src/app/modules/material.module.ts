import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog'


@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatTableModule,
    MatDialogModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatTableModule,
    MatDialogModule
  ]
})
export class MaterialModule { }
