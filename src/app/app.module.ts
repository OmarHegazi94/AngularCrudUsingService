import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { StudentAddComponent } from './student/student-add/student-add.component';
import { DepartmentListComponent } from './department/department-list/department-list.component';
import { DepartmentAddComponent } from './department/department-add/department-add.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StudentAddComponent,
    DepartmentListComponent,
    DepartmentAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
