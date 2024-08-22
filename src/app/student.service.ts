import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private apiServerUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  // Get all students
  public getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(
      `${this.apiServerUrl}/api/v1/students/allStudents`
    );
  }

  // Get student by ID
  public getStudentById(studentId: number): Observable<Student> {
    return this.http.get<Student>(
      `${this.apiServerUrl}/api/v1/students/student/${studentId}`
    );
  }

  // Add a new student
  public addStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(
      `${this.apiServerUrl}/api/v1/students/addStudent`,
      student
    );
  }

  // Update an existing student
  public updateStudent(
    studentId: number,
    student: Student
  ): Observable<Student> {
    return this.http.put<Student>(
      `${this.apiServerUrl}/api/v1/students/student/${studentId}`,
      student
    );
  }

  // Delete a student by ID
  public deleteStudent(studentId: number): Observable<void> {
    return this.http.delete<void>(
      `${this.apiServerUrl}/api/v1/students/student/${studentId}`
    );
  }
}
