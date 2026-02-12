import { CommonModule } from "@angular/common";
import { Component, inject, OnInit, signal } from "@angular/core";
import { GetStudent } from "../../models/student.model"; // Make sure file name matches
import { StudentsService } from "../../services/students/students.service"; // Make sure path matches

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class StudentsComponent implements OnInit {
  private readonly studentsService = inject(StudentsService);

  public students = signal<GetStudent[]>([]); // Store the students data

  public async ngOnInit(): Promise<void> {
    try {
      const studentsData = await this.studentsService.getStudents();
      this.students.set(studentsData); // Update the signal with data from the service
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  }

  public async deleteStudent(studentId: string): Promise<void> {
    try {
      await this.studentsService.deleteStudent(studentId);
      // Remove the deleted student from the signal
      const updatedStudents = this.students().filter(student => student.id !== studentId);
      this.students.set(updatedStudents);
      console.log(`Student with ID ${studentId} has been deleted successfully.`);
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  }
}
