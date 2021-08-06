import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  user;
  role;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.user = localStorage.getItem('username');
    this.role = localStorage.getItem('role');
    if (this.role !== 'Student')
      this.router.navigate(['/forbidden']);
  }

}
