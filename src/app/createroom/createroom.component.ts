import { Component, HostListener } from '@angular/core';
import { NgModel } from '@angular/forms';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CommonModule, Location } from '@angular/common';
import { Router } from '@angular/router';
import { MaterialModule } from '../material.module';

@Component({
  selector: 'app-createroom',
  standalone: true,
  imports: [CommonModule, MaterialModule, FormsModule],
  templateUrl: './createroom.component.html',
  styleUrl: './createroom.component.css',
})
export class CreateroomComponent {
  randomValue: string;
  showCopyMessage = false;

  constructor(
    private location: Location,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.randomValue = '';
    this.generateRandomValue();
  }

  goBack(): void {
    this.location.back();
  }
  generateRandomValue(): void {
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const length = 6;
    let result = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
    this.randomValue = result;
  }

  copyToClipboard(): void {
    const inputElement = document.createElement('input');
    inputElement.value = this.randomValue;
    document.body.appendChild(inputElement);
    inputElement.select();
    document.execCommand('copy');
    document.body.removeChild(inputElement);
    this.openSnackBar('The ID has been copied to the clipboard!');
  }

  private openSnackBar(message: string): void {
    this.snackBar.open(message, 'Dismiss', {
      duration: 3000, // Adjust the duration as needed
      horizontalPosition: 'end', // Position the snackbar at the end (right)
      verticalPosition: 'top', // Position the snackbar at the top
    });
  }

  showCopyMessageOnFocus(): void {
    this.showCopyMessage = true;
  }

  hideCopyMessageOnBlur(): void {
    this.showCopyMessage = false;
  }

  @HostListener('document:keydown.escape', ['$event'])
  handleEscape(event: KeyboardEvent): void {
    this.goBack();
  }
}
