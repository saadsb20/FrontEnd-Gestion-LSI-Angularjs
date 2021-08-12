import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('token') !== null) {
      if (localStorage.getItem('role') == 'Admin')
        this.router.navigate(['/admin']);
      else if (localStorage.getItem('role') == 'Student')
        this.router.navigate(['/student']);
      else if (localStorage.getItem('role') == 'Teacher')
        this.router.navigate(['/prof']);
    }
    else {
      this.form = this.fb.group({
        email: '',
        password: ''
      });
    }
  }
  submit() {
    const formData = this.form.getRawValue();
    const data = {
      email: formData.email,
      password: formData.password
    }

    this.http.post('http://127.0.0.1:8000/api/login', data).subscribe(
      (res: any) => {
        console.log(res);
        localStorage.setItem('token', res.access_token)
        localStorage.setItem('role', res.role)
        if (res.role == 'Admin') {
          this.router.navigate(['/admin']);
          localStorage.setItem('username', res.user.prenom)
        }
        else if (res.role == 'Student') {
          this.router.navigate(['/student']);
          localStorage.setItem('username', res.user.nom + ' ' + res.user.prenom);
          localStorage.setItem('semestre', res.user.id_semestre)
          localStorage.setItem('id', res.user.id)
        }
        else if (res.role == 'Teacher') {
          this.router.navigate(['/prof']);
          localStorage.setItem('username', res.user.nom + ' ' + res.user.prenom);
          localStorage.setItem('id_prof', res.user.id);

        }
      }, error => {
        console.log(error);
      }

    );

  }

}
