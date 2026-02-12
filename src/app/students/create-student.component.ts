import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { CreateStudentPayload } from "../../models/student.model";
import { StudentsService } from "../../services/students/students.service";

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class CreateStudentComponent {
  private readonly studentsService = inject(StudentsService);
  private readonly fb = inject(FormBuilder);

  public studentForm: FormGroup;
  public isSubmitting = false;
  public successMessage = '';
  public errorMessage = '';

  constructor() {
    this.studentForm = this.fb.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required]],
      course: ['', [Validators.required]],
      year_level: ['', [Validators.required]],
      gpa: ['', [Validators.required]],
      enrollment_status: ['active', [Validators.required]]
    });
  }

  public async createStudent(): Promise<void> {
    if (this.studentForm.invalid) {
      this.errorMessage = 'Please fill in all required fields correctly.';
      return;
    }

    this.isSubmitting = true;
    this.successMessage = '';
    this.errorMessage = '';

    try {
      const payload: CreateStudentPayload = this.studentForm.value;
      await this.studentsService.createStudent(payload);
      this.successMessage = 'Student created successfully!';
      this.studentForm.reset({ enrollment_status: 'active' });
    } catch (error) {
      console.error('Error creating student:', error);
      this.errorMessage = 'Failed to create student. Please try again.';
    } finally {
      this.isSubmitting = false;
    }
  }

  get first_name() {
    return this.studentForm.get('first_name');
  }

  get last_name() {
    return this.studentForm.get('last_name');
  }

  get email() {
    return this.studentForm.get('email');
  }

  get age() {
    return this.studentForm.get('age');
  }

  get course() {
    return this.studentForm.get('course');
  }

  get year_level() {
    return this.studentForm.get('year_level');
  }

  get gpa() {
    return this.studentForm.get('gpa');
  }

  get enrollment_status() {
    return this.studentForm.get('enrollment_status');
  }
}
