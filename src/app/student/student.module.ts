import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StudentEmploisComponent } from './student-emplois/student-emplois.component';
import { StudentCoursComponent } from './student-cours/student-cours.component';
import { StudentNotesComponent } from './student-notes/student-notes.component';



@NgModule({
  declarations: [StudentEmploisComponent, StudentCoursComponent, StudentNotesComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class StudentModule { }
