import { Routes } from '@angular/router';
import { PrelimExam } from './prelim-exam/prelim-exam';

export const routes: Routes = [
  { path: 'prelim-exam', component: PrelimExam },
  { path: '', redirectTo: 'prelim-exam', pathMatch: 'full' } // optional default route
];
