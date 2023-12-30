import { Routes } from '@angular/router';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { ChooseoneComponent } from './chooseone/chooseone.component';
import { JoinroomComponent } from './joinroom/joinroom.component';
import { CreateroomComponent } from './createroom/createroom.component';
export const routes: Routes = [
  { path: '', component: FirstpageComponent },
  { path: 'chooseone', component: ChooseoneComponent },
  { path: 'joinroom', component: JoinroomComponent },
  { path: 'createroom', component: CreateroomComponent },
];
