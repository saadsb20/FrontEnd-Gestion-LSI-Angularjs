import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CrudstudentsComponent } from './crudstudents/crudstudents.component';
import { CrudprofComponent } from './crudprof/crudprof.component';
import { RegisterprofComponent } from './registerprof/registerprof.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditprofComponent } from './editprof/editprof.component';
import { RegisterstudentComponent } from './registerstudent/registerstudent.component';
import { EditstudentComponent } from './editstudent/editstudent.component';
import { CrudmoduleComponent } from './crudmodule/crudmodule.component';
import { EditmoduleComponent } from './editmodule/editmodule.component';
import { CrudemploisComponent } from './crudemplois/crudemplois.component';
import { CrudpfeComponent } from './crudpfe/crudpfe.component';



@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    CrudstudentsComponent,
    CrudprofComponent,
    RegisterprofComponent,
    EditprofComponent,
    RegisterstudentComponent,
    EditstudentComponent,
    CrudmoduleComponent,
    EditmoduleComponent,
    CrudemploisComponent,
    CrudpfeComponent
  ],

  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ]
})
export class AdminModule { }
