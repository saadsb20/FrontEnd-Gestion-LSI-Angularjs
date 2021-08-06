import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editprof',
  templateUrl: './editprof.component.html',
  styleUrls: ['./editprof.component.scss']
})
export class EditprofComponent implements OnInit {
  form: FormGroup;
  id: number;
  prof: any;

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['idprof'];

    this.http.get(`http://127.0.0.1:8000/api/getoneuser/${this.id}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).subscribe(
      (res: any) => { this.prof = res; console.log(this.prof); }, err => { console.log(err); }
    );
    this.form = new FormGroup({
      nom: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+')]),
      prenom: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+')]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }


  submit() {
    this.http.put(`http://127.0.0.1:8000/api/updateuser/${this.id}`, this.form.value, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/admin/profs']);
      }, err => {
        console.log(err);
      }
    );

  }

}
