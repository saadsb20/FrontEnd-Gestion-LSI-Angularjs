import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editmodule',
  templateUrl: './editmodule.component.html',
  styleUrls: ['./editmodule.component.scss']
})
export class EditmoduleComponent implements OnInit {
  Profs: any;
  form: FormGroup;
  id: number;
  Module: any;
  profname: any;
  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['idmodule'];
    this.getOneModule();
    this.getProf();
    this.form = new FormGroup({
      nom: new FormControl(''),
      id_prof: new FormControl(''),
      id_semestre: new FormControl('')
    });
  }
  getOneModule() {
    this.http.get(`http://127.0.0.1:8000/api/Modules/${this.id}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).subscribe(
      (res: any) => {
        this.Module = res;
        this.profname = res.ProfName[0].prenom + ' ' + res.ProfName[0].nom;
        this.form = new FormGroup({
          nom: new FormControl(this.Module.nom),
          id_prof: new FormControl(this.profname),
          id_semestre: new FormControl(this.Module.id_semestre)
        });
      }, err => { console.log(err); }
    );
  }

  getProf() {
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

  editModule() {
    this.http.put(`http://127.0.0.1:8000/api/Modules/${this.id}`, this.form.value, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/admin/modules']);
      }, err => {
        console.log(err);
      }
    );

  }

}
