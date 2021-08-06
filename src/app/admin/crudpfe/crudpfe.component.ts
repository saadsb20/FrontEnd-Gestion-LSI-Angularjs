import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-crudpfe',
  templateUrl: './crudpfe.component.html',
  styleUrls: ['./crudpfe.component.scss']
})
export class CrudpfeComponent implements OnInit {
  Pfes: any;
  toEdit: any;
  isEdit = false;
  etudiants: any;
  Profs: any;
  form: FormGroup;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getPfe();
    this.getStudents();
    this.getProfs();
    this.isEdit = false;
    this.form = new FormGroup({
      Sujet: new FormControl(''),
      id_prof: new FormControl('0'),
      id_etudiant: new FormControl('0'),
    });
  }

  getPfe() {
    this.http.get('http://127.0.0.1:8000/api/Pfe', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).subscribe(
      (res: any) => {
        this.Pfes = res;
        console.log(this.Pfes);
      }, err => {
        console.log(err);
      }
    );
  }
  getStudents() {
    this.http.get('http://127.0.0.1:8000/api/getstu/6', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).subscribe(
      (res: any) => {
        this.etudiants = res;
        console.log(this.etudiants);
      }, error => {
        console.log(error)
      }
    );

  }
  getProfs() {
    this.http.get('http://localhost:8000/api/getpro', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).subscribe(
      (res: any) => {
        this.Profs = res;
        console.log(this.Profs);

      }, err => {
        console.log(err);
      }
    );

  }

  delete(pfe) {
    this.http.delete(`http://127.0.0.1:8000/api/Pfe/${pfe}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).subscribe(
      res => {
        console.log(res);
        this.getPfe();
      }, err => {
        console.log(err);
      }
    );

  }
  edit(pfe) {
    this.isEdit = true;
    this.toEdit = pfe.id_etudiant;
    this.form = new FormGroup({
      Sujet: new FormControl(pfe.Sujet),
      id_prof: new FormControl(pfe.id_prof),
      id_etudiant: new FormControl(pfe.id_etudiant),
    });

  }
  editPfe() {
    this.http.put(`http://127.0.0.1:8000/api/Pfe/${this.toEdit}`, this.form.value, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).subscribe(
      res => {
        console.log(res);
        this.getPfe();
        this.isEdit = false;
        this.form.reset();
      }, err => {
        console.log(err);
      }
    );

  }

  addPfe() {
    this.http.post('http://localhost:8000/api/Pfe', this.form.value, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).subscribe(
      (res: any) => {
        console.log(res);
        this.getPfe();
        this.ngOnInit();
      }, err => {
        console.log(err);
      }
    );
  }

}
