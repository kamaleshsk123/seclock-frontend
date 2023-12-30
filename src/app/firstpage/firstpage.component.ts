import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChooseoneComponent } from '../chooseone/chooseone.component';

@Component({
  selector: 'app-firstpage',
  standalone: true,
  templateUrl: './firstpage.component.html',
  styleUrl: './firstpage.component.css',
  imports: [ChooseoneComponent],
})
export class FirstpageComponent implements OnInit {
  constructor(private router: Router) {}

  redirectToChooseOne(): void {
    this.router.navigate(['/chooseone']); // Adjust the route based on your actual route configuration
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['/chooseone']);
    }, 5000);
  }
}

// Use setTimeout to navigate after 2 seconds
