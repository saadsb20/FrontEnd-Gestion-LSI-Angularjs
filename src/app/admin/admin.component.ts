import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  user;
  role;
  isActive = false;
  selected = 1;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.isActive = true;
    this.router.navigate(['/admin']);
    this.user = localStorage.getItem('username');
    this.role = localStorage.getItem('role');
    if (this.role !== 'Admin')
      this.router.navigate(['/forbidden']);
  }

  select(int) {
    this.selected = int;
    this.isActive = true;
  }

}
