import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  profs: any;
  Students: any;
  Modules: any;
  reload = true;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.http.get('http://localhost:8000/api/getpro', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).subscribe(
      (res: any) => {
        this.profs = res.length;
        console.log(this.profs);
      }, err => {
        console.log(err);
      }
    );
    this.http.get('http://localhost:8000/api/getstu', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).subscribe(
      (res: any) => {
        this.Students = res.length;
        console.log(this.Students);

      }, err => {
        console.log(err);
      }
    );
    this.http.get('http://localhost:8000/api/Modules', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).subscribe(
      (res: any) => {
        this.Modules = res.length;
        console.log(this.Modules);

      }, err => {
        console.log(err);
      }
    );
  }

}
