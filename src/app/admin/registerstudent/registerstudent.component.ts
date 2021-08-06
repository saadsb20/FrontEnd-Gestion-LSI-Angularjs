import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-registerstudent',
  templateUrl: './registerstudent.component.html',
  styleUrls: ['./registerstudent.component.scss']
})
export class RegisterstudentComponent implements OnInit {
  id_semestre = this.route.snapshot.params['semestre'];
  form: FormGroup;
  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      nom: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+')]),
      prenom: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.pattern("^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$")]),
      role: new FormControl('Student'),
      date_n: new FormControl('', Validators.required),
      CIN: new FormControl('', Validators.required),
      CNE: new FormControl('', Validators.required),
      id_semestre: new FormControl(this.id_semestre)
    });
  }

  submit() {
    this.http.post('http://127.0.0.1:8000/api/register', this.form.value).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/admin/students'])
      }, err => {
        console.log(err);
      }
    );
  }

}
