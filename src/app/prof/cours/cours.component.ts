import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.scss']
})
export class CoursComponent implements OnInit {
  Modules: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(`http://127.0.0.1:8000/api/getMod/${localStorage.getItem('id_prof')}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).subscribe(
      res => {
        this.Modules = res;
        console.log(this.Modules);
      }
    );
  }

}
