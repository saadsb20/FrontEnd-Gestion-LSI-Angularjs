import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CrudemploisComponent } from './admin/crudemplois/crudemplois.component';
import { CrudmoduleComponent } from './admin/crudmodule/crudmodule.component';
import { CrudpfeComponent } from './admin/crudpfe/crudpfe.component';
import { CrudprofComponent } from './admin/crudprof/crudprof.component';
import { CrudstudentsComponent } from './admin/crudstudents/crudstudents.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { EditmoduleComponent } from './admin/editmodule/editmodule.component';
import { EditprofComponent } from './admin/editprof/editprof.component';
import { EditstudentComponent } from './admin/editstudent/editstudent.component';
import { RegisterprofComponent } from './admin/registerprof/registerprof.component';
import { RegisterstudentComponent } from './admin/registerstudent/registerstudent.component';
import { CoursComponent } from './prof/cours/cours.component';
import { EmploisComponent } from './prof/emplois/emplois.component';
import { NotesComponent } from './prof/notes/notes.component';
import { ProfComponent } from './prof/prof.component';
import { ForbiddenComponent } from './public/forbidden/forbidden.component';
import { HomeComponent } from './public/home/home.component';
import { LoginComponent } from './public/login/login.component';
import { PublicComponent } from './public/public.component';
import { StudentCoursComponent } from './student/student-cours/student-cours.component';
import { StudentEmploisComponent } from './student/student-emplois/student-emplois.component';
import { StudentNotesComponent } from './student/student-notes/student-notes.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'forbidden', component: ForbiddenComponent }

    ]
  },
  {
    path: 'student',
    component: StudentComponent,
    children: [
      { path: 'studentEmplois', component: StudentEmploisComponent },
      { path: 'studentCours', component: StudentCoursComponent },
      { path: 'studentNotes', component: StudentNotesComponent }
    ],
  },
  {
    path: 'prof',
    component: ProfComponent,
    children: [
      { path: 'profEmplois', component: EmploisComponent },
      { path: 'cours', component: CoursComponent },
      { path: 'Notes', component: NotesComponent },

    ],
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'students', component: CrudstudentsComponent },
      { path: 'profs', component: CrudprofComponent },
      { path: 'addprof', component: RegisterprofComponent },
      { path: 'addstudent/:semestre', component: RegisterstudentComponent },
      { path: 'editprof/:idprof', component: EditprofComponent },
      { path: 'modules', component: CrudmoduleComponent },
      { path: 'emplois', component: CrudemploisComponent },
      { path: 'pfes', component: CrudpfeComponent },
      { path: 'editstudent/:idstudent', component: EditstudentComponent },
      { path: 'editmodule/:idmodule', component: EditmoduleComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
