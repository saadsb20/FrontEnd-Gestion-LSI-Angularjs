import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  currentModule: number;
  Modules: any;
  isActive = false;
  semestre: number;
  notes: any;
  form: FormGroup;
  Etudiants: any;
  isEdit = false;
  NoteId: number;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getModule();
    this.isEdit = false;
    this.form = new FormGroup({
      id_module: new FormControl(this.currentModule),
      id_etudiant: new FormControl('0'),
      valeur: new FormControl('')
    });
  }

  getModule() {
    this.http.get(`http://127.0.0.1:8000/api/getMod/${localStorage.getItem('id_prof')}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).subscribe(
      (res: any) => {
        this.currentModule = res[0].id;
        this.Modules = res;
      }
    );
  }
  Notes(int, sem) {
    this.isActive = true;
    this.semestre = sem;
    this.currentModule = int;
    this.form = new FormGroup({
      id_module: new FormControl(this.currentModule),
      id_etudiant: new FormControl('0'),
      valeur: new FormControl('')
    });
    this.getNote();
    this.getEtudiants();
  }
  getNote() {
    this.http.get(`http://127.0.0.1:8000/api/Note/${this.currentModule}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).subscribe(
      res => {
        this.notes = res;

        console.log(this.notes);

      }, err => {
        console.log(err);
      }
    );
  }
  getEtudiants() {
    this.http.get(`http://127.0.0.1:8000/api/getstu/${this.semestre}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).subscribe(
      res => {
        this.Etudiants = res;
        console.log(this.Etudiants);
      }
    )
  }
  edit(note) {
    this.isEdit = true;
    this.NoteId = note.id;
    this.form = new FormGroup({
      id_module: new FormControl(note.id_module),
      id_etudiant: new FormControl(note.id_etudiant),
      valeur: new FormControl(note.valeur)
    });
  }
  addNote() {
    console.log(this.form.value);
    this.http.post('http://127.0.0.1:8000/api/Note', this.form.value, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).subscribe(
      res => {
        console.log(res);
        this.getNote();
        this.ngOnInit();
      }, err => {
        console.log(err);
      }
    );

  }
  editNote() {
    this.http.put(`http://127.0.0.1:8000/api/Note/${this.NoteId}`, this.form.value, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).subscribe(
      res => {
        console.log(res);
        this.getNote();
        this.ngOnInit();
      }, err => {
        console.log(err);
      }
    );
  }
  delete(note) {
    this.http.delete(`http://127.0.0.1:8000/api/Note/${note}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).subscribe(
      res => {
        console.log(res);
        this.getNote();
      }, err => {
        console.log(err);
      }
    );
  }

}

