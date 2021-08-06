import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prof',
  templateUrl: './prof.component.html',
  styleUrls: ['./prof.component.scss']
})
export class ProfComponent implements OnInit {
  user;
  role;
  selected: number;
  isActive = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.user = localStorage.getItem('username');
    this.role = localStorage.getItem('role');
    if (this.role !== 'Teacher')
      this.router.navigate(['/forbidden']);
  }


  select(int) {
    this.selected = int;
    this.isActive = true;
  }

}
