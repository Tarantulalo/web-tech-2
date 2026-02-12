import { Routes } from '@angular/router';
import { PrelimExam } from './prelim-exam/prelim-exam';
import { StudentsComponent } from './students/students.component';
import { CreateStudentComponent } from './students/create-student.component';

export const routes: Routes = [
  { path: 'prelim-exam', component: PrelimExam },
  { path: 'students', component: StudentsComponent },
  { path: 'create-student', component: CreateStudentComponent },
  { path: '', redirectTo: 'prelim-exam', pathMatch: 'full' }
];
