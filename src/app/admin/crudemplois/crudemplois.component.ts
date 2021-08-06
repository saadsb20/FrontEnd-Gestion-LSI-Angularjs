import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-crudemplois',
  templateUrl: './crudemplois.component.html',
  styleUrls: ['./crudemplois.component.scss']
})
export class CrudemploisComponent implements OnInit {
  currentSemestre: number;
  isActive = false;
  Modules: any;
  form: FormGroup;
  Seances: any[];
  Salle: string;
  Lundi: any[] = new Array(2);
  Mardi: any[] = new Array(2);
  Mercredi: any[] = new Array(2);
  Jeudi: any[] = new Array(2);
  Vendredi: any[] = new Array(2);
  LundiSeance: any[] = new Array(2);
  MardiSeance: any[] = new Array(2);
  MercrediSeance: any[] = new Array(2);
  JeudiSeance: any[] = new Array(2);
  VendrediSeance: any[] = new Array(2);
  isEdit = false;
  toEdit: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.currentSemestre = 1
    this.isActive = true;
    this.Salle = 'LSI 1';
    this.isEdit = false;
    this.init();
    this.getEmplois();
    this.getModule(this.currentSemestre);
    this.form = new FormGroup({
      jour: new FormControl('0'),
      id_module: new FormControl('0'),
      id_semestre: new FormControl('0'),
      temps: new FormControl('0'),
      salle: new FormControl('0')
    });

  }

  getEmplois() {
    this.http.get(`http://127.0.0.1:8000/api/Seance/${this.currentSemestre}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).subscribe(
      (res: any) => {
        this.Seances = res;
        this.sort();
        console.log(this.Seances);
      }, err => {
        console.log(err);
      }
    )
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
  init() {
    for (let i = 0; i < 2; i++) {
      this.Lundi[i] = "";
      this.Mardi[i] = "";
      this.Mercredi[i] = "";
      this.Jeudi[i] = "";
      this.Vendredi[i] = "";
    }
    for (let i = 0; i < 2; i++) {
      this.LundiSeance[i] = "";
      this.MardiSeance[i] = "";
      this.MercrediSeance[i] = "";
      this.JeudiSeance[i] = "";
      this.VendrediSeance[i] = "";
    }

  }
  semestre(int) {
    this.currentSemestre = int;
    this.isActive = true;
    if (int == 1 || int == 2)
      this.Salle = 'LSI 1';
    else if (int == 3 || int == 4)
      this.Salle = 'LSI 2';
    else
      this.Salle = 'LSI 3';
    this.init();
    this.getEmplois();
    this.getModule(this.currentSemestre);
  }
  sort() {
    for (let Seance of this.Seances) {
      if (Seance.jour == 'lundi') {
        if (Seance.temps == '0909:0808') {
          this.Lundi[0] = Seance.ModuleName[0].nom;
          this.LundiSeance[0] = Seance;

        }
        else if (Seance.temps == '0101:0808') {
          this.Lundi[1] = Seance.ModuleName[0].nom;
          this.LundiSeance[1] = Seance;
        }
      }
      else if (Seance.jour == 'mardi') {
        if (Seance.temps == '0909:0808') {
          this.Mardi[0] = Seance.ModuleName[0].nom;
          this.MardiSeance[0] = Seance;
        }
        else if (Seance.temps == '0101:0808') {
          this.Mardi[1] = Seance.ModuleName[0].nom;
          this.MardiSeance[1] = Seance;
        }

      }
      else if (Seance.jour == 'mercredi') {
        if (Seance.temps == '0909:0808') {
          this.Mercredi[0] = Seance.ModuleName[0].nom;
          this.MercrediSeance[0] = Seance;
        }
        else if (Seance.temps == '0101:0808') {
          this.Mercredi[1] = Seance.ModuleName[0].nom;
          this.MercrediSeance[1] = Seance;
        }

      }
      else if (Seance.jour == 'jeudi') {
        if (Seance.temps == '0909:0808') {
          this.Jeudi[0] = Seance.ModuleName[0].nom;
          this.JeudiSeance[0] = Seance;
        }
        else if (Seance.temps == '0101:0808') {
          this.Jeudi[1] = Seance.ModuleName[0].nom;
          this.JeudiSeance[1] = Seance;
        }
      }
      else if (Seance.jour == 'vendredi') {
        if (Seance.temps == '0909:0808') {
          this.Vendredi[0] = Seance.ModuleName[0].nom;
          this.VendrediSeance[0] = Seance;
        }
        else if (Seance.temps == '0101:0808') {
          this.Vendredi[1] = Seance.ModuleName[0].nom;
          this.VendrediSeance[1] = Seance;
        }

      }
    }
  }
  addSeance() {
    this.http.post('http://127.0.0.1:8000/api/Seance', this.form.value, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).subscribe(
      (res: any) => {
        console.log(res);
        this.getEmplois();
        this.form.reset();
      }, err => {
        console.log(err);
      }
    );
  }

  edit(Seance) {
    this.isEdit = true;
    this.toEdit = Seance.id;
    let temps;
    if (Seance.temps == '0909:0808')
      temps = '09:00';
    else if (Seance.temps == '0101:0808')
      temps = '13:00';
    this.form = new FormGroup({
      jour: new FormControl(Seance.jour),
      id_module: new FormControl(Seance.id_module),
      id_semestre: new FormControl(Seance.id_semestre),
      temps: new FormControl(temps),
      salle: new FormControl(Seance.salle)
    });
  }
  editSeance() {
    this.http.put(`http://127.0.0.1:8000/api/Seance/${this.toEdit}`, this.form.value, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).subscribe(
      res => {
        console.log(res);
        this.init();
        this.getEmplois();
        this.isEdit = false;
        this.form.reset();
      }, err => {
        console.log(err);
      }
    );
  }
  deleteSeance(Seance) {
    this.http.delete(`http://127.0.0.1:8000/api/Seance/${Seance.id}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).subscribe(
      res => {
        console.log(res);
        this.init();
        this.getEmplois();
      }, err => {
        console.log(err);
      }
    );
  }


}


