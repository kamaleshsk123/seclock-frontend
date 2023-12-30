import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chooseone',
  standalone: true,
  imports: [],
  templateUrl: './chooseone.component.html',
  styleUrl: './chooseone.component.css',
})
export class ChooseoneComponent {
  constructor(private location: Location, private router: Router) {}

  goBack(): void {
    this.location.back();
  }

  goToJoinRoom(): void {
    this.router.navigate(['/joinroom']); // Adjust the route based on your actual route configuration
  }

  goToCreateRoom(): void {
    this.router.navigate(['/createroom']); // Adjust the route based on your actual route configuration
  }
}
