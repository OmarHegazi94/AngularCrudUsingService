import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/_services/student.service';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  students:Student[];

  constructor(private studentService:StudentService) { }

  ngOnInit() {
    this.students = this.studentService.getAllStudents();
  }

}
