import { Routes } from '@angular/router';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { ChooseoneComponent } from './chooseone/chooseone.component';

export const routes: Routes = [
  { path: '', component: FirstpageComponent },
  { path: 'chooseone', component: ChooseoneComponent },
];

export class AppRoutingModule {}
