import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registerprof',
  templateUrl: './registerprof.component.html',
  styleUrls: ['./registerprof.component.scss']
})
export class RegisterprofComponent implements OnInit {
  form: FormGroup;
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {

    this.form = new FormGroup({
      nom: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+')]),
      prenom: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.pattern("^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$")]),
      role: new FormControl('Teacher', Validators.required)
    });

  }


  submit() {
    this.http.post('http://127.0.0.1:8000/api/register', this.form.value).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/admin/profs'])
      }, err => {
        console.log(err);
      }
    );

  }

}
