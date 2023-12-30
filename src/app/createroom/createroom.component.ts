import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createroom',
  standalone: true,
  imports: [],
  templateUrl: './createroom.component.html',
  styleUrl: './createroom.component.css',
})
export class CreateroomComponent {
  constructor(private location: Location, private router: Router) {}

  goBack(): void {
    this.location.back();
  }
}
