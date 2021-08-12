import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-emplois',
  templateUrl: './student-emplois.component.html',
  styleUrls: ['./student-emplois.component.scss']
})
export class StudentEmploisComponent implements OnInit {
  currentSemestre: number;
  Seances: any;
  Salle: string;
  Lundi: any[] = new Array(2);
  Mardi: any[] = new Array(2);
  Mercredi: any[] = new Array(2);
  Jeudi: any[] = new Array(2);
  Vendredi: any[] = new Array(2);

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.currentSemestre = parseInt(localStorage.getItem('semestre'));
    this.getEmplois();
    if (this.currentSemestre == 1 || this.currentSemestre == 2) {
      this.Salle = 'LSI 1'
    }
    else if (this.currentSemestre == 3 || this.currentSemestre == 4) {
      this.Salle = 'LSI 2'
    }
    else {
      this.Salle = 'LSI 3'
    }
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
      }, err => {
        console.log(err);
      }
    )
  }
  sort() {
    for (let Seance of this.Seances) {
      if (Seance.jour == 'lundi') {
        if (Seance.temps == '0909:0808') {
          this.Lundi[0] = Seance.ModuleName[0].nom;

        }
        else if (Seance.temps == '0101:0808') {
          this.Lundi[1] = Seance.ModuleName[0].nom;
        }
      }
      else if (Seance.jour == 'mardi') {
        if (Seance.temps == '0909:0808') {
          this.Mardi[0] = Seance.ModuleName[0].nom;
        }
        else if (Seance.temps == '0101:0808') {
          this.Mardi[1] = Seance.ModuleName[0].nom;
        }

      }
      else if (Seance.jour == 'mercredi') {
        if (Seance.temps == '0909:0808') {
          this.Mercredi[0] = Seance.ModuleName[0].nom;
        }
        else if (Seance.temps == '0101:0808') {
          this.Mercredi[1] = Seance.ModuleName[0].nom;
        }

      }
      else if (Seance.jour == 'jeudi') {
        if (Seance.temps == '0909:0808') {
          this.Jeudi[0] = Seance.ModuleName[0].nom;
        }
        else if (Seance.temps == '0101:0808') {
          this.Jeudi[1] = Seance.ModuleName[0].nom;
        }
      }
      else if (Seance.jour == 'vendredi') {
        if (Seance.temps == '0909:0808') {
          this.Vendredi[0] = Seance.ModuleName[0].nom;
        }
        else if (Seance.temps == '0101:0808') {
          this.Vendredi[1] = Seance.ModuleName[0].nom;
        }

      }
    }
  }
}
