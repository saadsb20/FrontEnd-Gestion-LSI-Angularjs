import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-notes',
  templateUrl: './student-notes.component.html',
  styleUrls: ['./student-notes.component.scss']
})
export class StudentNotesComponent implements OnInit {

  Notes: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getNotes();
  }
  getNotes() {
    this.http.get(`http://127.0.0.1:8000/api/Getnote/${localStorage.getItem('id')}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).subscribe(
      res => {
        this.Notes = res;
      }, err => {
        console.log(err);
      }
    );
  }

}
