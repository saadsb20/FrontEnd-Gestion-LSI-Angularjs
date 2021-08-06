import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicComponent } from './public/public.component';
import { StudentComponent } from './student/student.component';
import { ProfComponent } from './prof/prof.component';
import { RouterModule } from '@angular/router';
import { PublicModule } from './public/public.module';
import { AdminModule } from './admin/admin.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AvatarModule } from 'ngx-avatar';
import { ProfModule } from './prof/prof.module';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PublicModule,
    AdminModule,
    ProfModule,
    RouterModule,
    AvatarModule,

    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
