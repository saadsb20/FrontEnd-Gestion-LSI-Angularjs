import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmploisComponent } from './emplois/emplois.component';
import { ProfComponent } from './prof.component';
import { RouterModule } from '@angular/router';
import { CoursComponent } from './cours/cours.component';
import { NotesComponent } from './notes/notes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ProfComponent, EmploisComponent, CoursComponent, NotesComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ProfModule { }
