import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crudmodule',
  templateUrl: './crudmodule.component.html',
  styleUrls: ['./crudmodule.component.scss']
})
export class CrudmoduleComponent implements OnInit {
  Modules: any;
  Prof: any;
  form: FormGroup;
  currentSemestre: number;
  isActive = false;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.getModule(1);
    this.getProf();
    this.currentSemestre = 1;
    this.isActive = true;
    this.form = new FormGroup({
      nom: new FormControl(''),
      id_prof: new FormControl('0'),
      id_semestre: new FormControl('0')
    });
  }

  semestre(int) {
    this.currentSemestre = int;
    this.isActive = true;
    this.getModule(this.currentSemestre);
  }


  getModule(int) {
    this.http.get(`http://localhost:8000/api/getModule/${int}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).subscribe(
      (res: any) => {
        this.Modules = res.sort(res.id_semestre);
        console.log(this.Modules);

      }, err => {
        console.log(err);
      }
    );

  }
  getProf() {
    this.http.get('http://localhost:8000/api/getpro', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).subscribe(
      (res: any) => {
        this.Prof = res;
        console.log(this.Prof);

      }, err => {
        console.log(err);
      }
    );

  }
  addModule() {
    this.http.post('http://localhost:8000/api/Modules', this.form.value, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).subscribe(
      (res: any) => {
        console.log(res);
        this.getModule(this.currentSemestre);
        this.form = new FormGroup({
          nom: new FormControl(''),
          id_prof: new FormControl('0'),
          id_semestre: new FormControl('0')
        });
      }, err => {
        console.log(err);
      }
    );

  }

  delete(id) {
    this.http.delete(`http://localhost:8000/api/Modules/${id}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).subscribe(
      (res: any) => {
        console.log(res);
        this.getModule(this.currentSemestre);
      }, err => {
        console.log(err);
      }
    );
  }

}
