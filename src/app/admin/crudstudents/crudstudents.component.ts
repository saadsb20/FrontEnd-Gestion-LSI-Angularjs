import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crudstudents',
  templateUrl: './crudstudents.component.html',
  styleUrls: ['./crudstudents.component.scss']
})
export class CrudstudentsComponent implements OnInit {
  isActive = false;
  currentSemestre = 1;
  etudiants: any;
  empty = true;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getstudents();

  }
  semestre(int) {
    this.currentSemestre = int;
    this.isActive = true;
    this.http.get(`http://127.0.0.1:8000/api/getstu/${this.currentSemestre}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).subscribe(
      (res: any) => {
        if (res.length != 0) {
          this.etudiants = res;
          this.empty = false;
          console.log(this.empty)
          console.log(this.etudiants);
        } else if (res.length == 0) {
          this.empty = true;
          console.log(this.empty)
        }
      }, error => {
        console.log(error)
      }
    );

  }

  getstudents() {
    this.http.get(`http://127.0.0.1:8000/api/getstu/${this.currentSemestre}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).subscribe(
      (res: any) => {
        this.isActive = true;
        if (res.length != 0) {
          this.etudiants = res;
          this.empty = false;
          console.log(this.empty)
          console.log(this.etudiants);
        } else if (res.length == 0) {
          this.empty = true;
          console.log(this.empty)
        }
      }, error => {
        console.log(error)
      }
    );
  }
  delete(id) {
    this.http.delete(`http://localhost:8000/api/deleteuser/${id}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).subscribe(
      res => {
        console.log(res);
        this.getstudents();
      }, err => {
        console.log(err);
      }
    );
  }


}
