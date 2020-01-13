import { Injectable } from '@angular/core';
import { Department } from '../_models/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  department:Department;

  departmentsArray:Department[]=[
    new Department(1, "Mean Stack"),
    new Department(2, "Full Stack"),
    new Department(3, "half Stack"),
    new Department(4, "No Stack"),
    new Department(5, "Zero Stack"),
  ];

  getAllDepartments(){
    return this.departmentsArray;
  }

  addDepartment(){
    this.departmentsArray.push(new Department(this.department.Id,this.department.DepartmentName))
  }

  deleteDepartment(id) {
    for(let i=0; i<this.departmentsArray.length; i++){
      if(id === this.departmentsArray[i].Id){
        this.departmentsArray.splice(i,1);
      }
    }
  }

  updateDepartment(){}


  constructor() { }
}
