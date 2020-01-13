import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/_models/student';
import { StudentService } from 'src/app/_services/student.service';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.scss']
})
export class StudentAddComponent implements OnInit {

  student:Student=new Student(1,"",10); //must create new object reserve a place for the new object created in the html

  constructor(private studentService:StudentService) { }

  ngOnInit() {
  }

  addStd(){
    this.studentService.addStudent(this.student);
  }

}
