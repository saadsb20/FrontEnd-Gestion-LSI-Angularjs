import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  template: '<app-child [parentApi]="getParentApi()"></app-child>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'gestionlsi';
  loggedin = false;
  user;
  role;
  student = false;
  prof = false;
  admin = false;
  guest = true;

  constructor(private http: HttpClient, private router: Router) { }
  ngOnInit(): void {
    this.loggedin = localStorage.getItem('token') !== null;
    this.role = localStorage.getItem('role');
    if (this.loggedin) {

      if (this.role == 'Admin') {
        this.admin = true;
        this.student = false;
        this.prof = false;
        this.guest = false;
      }
      else if (this.role == 'Student') {

        this.admin = false;
        this.student = true;
        this.prof = false;
        this.guest = false;
      }
      else if (this.role == 'Teacher') {
        this.admin = false;
        this.student = false;
        this.prof = true;
        this.guest = false;
      }
      this.user = localStorage.getItem('username');
    }
    else {
      this.user = 'Guest';
      this.admin = false;
      this.student = false;
      this.prof = false;
      this.guest = true;
    }
  }

  logout() {
    this.http.post('http://127.0.0.1:8000/api/logout', { token: localStorage.getItem('token') }).subscribe(
      res => {
        console.log(res);
        this.ngOnInit();
      }, error => {
        console.log(error);
      }
    );
    localStorage.removeItem('username');
    localStorage.removeItem('role');
    localStorage.removeItem('token');
    localStorage.removeItem('id_prof');
  }
}