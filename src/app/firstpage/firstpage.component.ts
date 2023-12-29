import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-firstpage',
  standalone: true,
  imports: [],
  templateUrl: './firstpage.component.html',
  styleUrl: './firstpage.component.css',
})
export class FirstpageComponent implements OnInit {
  constructor(private router: Router) {}

  redirectToChooseOne(): void {
    this.router.navigate(['/chooseone']); // Adjust the route based on your actual route configuration
  }

  ngOnInit(): void {
    // Use setTimeout to navigate after 2 seconds
    setTimeout(() => {
      this.router.navigate(['/chooseone']);
    }, 5000);
  }
}
