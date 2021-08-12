import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-cours',
  templateUrl: './student-cours.component.html',
  styleUrls: ['./student-cours.component.scss']
})
export class StudentCoursComponent implements OnInit {

  Cours: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getCours();
  }
  getCours() {
    this.http.get(`http://127.0.0.1:8000/api/getModule/${localStorage.getItem('semestre')}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).subscribe(
      res => {
        this.Cours = res;
      }, err => {
        console.log(err);
      }
    );
  }

}
