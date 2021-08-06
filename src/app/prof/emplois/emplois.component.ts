import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emplois',
  templateUrl: './emplois.component.html',
  styleUrls: ['./emplois.component.scss']
})
export class EmploisComponent implements OnInit {
  Modules: any;
  Seances: any;
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
  currentModule: number;
  semestre: number;
  Salle: string;
  isActive = false;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.isActive = true;
    this.getModule();
    this.getEmplois();
  }
  getEmplois() {
    this.http.get(`http://127.0.0.1:8000/api/MesSeances/${this.currentModule}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).subscribe(
      (res: any) => {
        this.Seances = res;
        //  this.semestre = res[0].id_semestre;
        this.sort();
      }, err => {
        console.log(err);
      }
    )
  }
  getModule() {
    this.http.get(`http://127.0.0.1:8000/api/getMod/${localStorage.getItem('id_prof')}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).subscribe(
      res => {
        this.currentModule = res[0].id;
        this.semestre = res[0].id_semestre;
        this.Modules = res;
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
  emplois(int, sem) {
    this.currentModule = int;
    this.semestre = sem;
    this.isActive = true;
    this.init();
    this.getEmplois();
    if (this.semestre == 1 || this.semestre == 2)
      this.Salle = 'LSI 1';
    else if (this.semestre == 3 || this.semestre == 4)
      this.Salle = 'LSI 2';
    else
      this.Salle = 'LSI 3';
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

}
