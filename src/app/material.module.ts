import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  exports: [
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule,
    // Add other Angular Material modules as needed
  ],
})
export class MaterialModule {}
