import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-joinroom',
  standalone: true,
  imports: [],
  templateUrl: './joinroom.component.html',
  styleUrl: './joinroom.component.css',
})
export class JoinroomComponent {
  constructor(private location: Location, private router: Router) {}

  goBack(): void {
    this.location.back();
  }
}
