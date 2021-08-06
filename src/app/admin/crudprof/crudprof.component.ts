import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crudprof',
  templateUrl: './crudprof.component.html',
  styleUrls: ['./crudprof.component.scss']
})
export class CrudprofComponent implements OnInit {

  profs: [];
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.http.get('http://localhost:8000/api/getpro', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).subscribe(
      (res: any) => {
        console.log(res);
        this.profs = res;
      }, err => {
        console.log(err);
      }
    )
  }
  getprofs() {
    this.http.get('http://localhost:8000/api/getpro', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).subscribe(
      (res: any) => {
        console.log(res);
        this.profs = res;
      }, err => {
        console.log(err);
      }
    )
  }
  delete(id) {
    this.http.delete(`http://localhost:8000/api/deleteuser/${id}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).subscribe(
      res => {
        console.log(res);
        this.getprofs();
      }, err => {
        console.log(err);
      }
    );
  }

}
