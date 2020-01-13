import { Injectable } from '@angular/core';
import { Student } from '../_models/student';

@Injectable({
  providedIn: 'root'
})

export class StudentService {

  // student:Student;

  studentArray:Student[] =[
    new Student(1,"Omar",26),
    new Student(2,"koko",25),
    new Student(3,"bobo",24),
    new Student(4,"lolo",23),
    new Student(5,"soso",22)
  ];
  getAllStudents(): Student[]{
    return this.studentArray;
  }

  addStudent(student:Student){
    this.studentArray.push(student);
  }

  deleteStudent(id:number){
    for(let i=0; i<this.studentArray.length; i++){
      if(id === this.studentArray[i].Id){
        this.studentArray.splice(i, 1);
      }
    }
  }

  updateStudent(){

  }
  constructor() { }
}
