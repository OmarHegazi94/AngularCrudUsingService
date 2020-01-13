import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/_services/department.service';
import { Department } from 'src/app/_models/department';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.scss']
})
export class DepartmentListComponent implements OnInit {

  departments: Department[];

  constructor(private departmentService: DepartmentService) { }

  ngOnInit() {
    this.departments = this.departmentService.getAllDepartments();
  }

}
