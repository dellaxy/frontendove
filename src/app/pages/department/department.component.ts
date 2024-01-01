import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { Department } from '../../models/department.model';
import { Store } from '@ngrx/store';
import { Employee } from '../../models/employee.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrl: './department.component.scss'
})
export class DepartmentComponent implements OnInit {

  departmentId: number;
  departmentData: Department;
  departmentTeamLeader: any; //toto by bol jeden Employee z departmentEmployees$
  departmentEmployees: Employee[];
  departmentProjects: any[];

  constructor(private router: ActivatedRoute, private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.departmentId = +this.router.snapshot.params['id'];
    //nejaký request na store/db na získanie dát, ktoré sú mapované na interface Department
    this.departmentData = {
      id: this.departmentId,
      name: 'Development',

    };
    this.departmentTeamLeader = {
      id: 1,
      firstName: 'Team',
      lastName: 'Leaderko',
      email: 'teamleaderko@gmail.com',
      gender: 'Male'
    };
    this.departmentEmployees = [
      {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@email.com',
        dateOfBirth: new Date(2020, 3, 1),
        hireDate: new Date(2020, 3, 1),
        gender: 'Male',
        address: 'undefined, undefined, undefined undefined',
        phoneNumber: undefined,
        department: { id: undefined, name: 'Development' },
        position: undefined,
        salary: undefined
      },
      {
        id: 2,
        firstName: 'Bob',
        lastName: 'Doe',
        email: 'john.doe@email.com',
        dateOfBirth: new Date(2020, 3, 1),
        hireDate: new Date(2020, 3, 1),
        gender: 'Male',
        address: 'undefined, undefined, undefined undefined',
        phoneNumber: undefined,
        department: { id: undefined, name: 'Development' },
        position: undefined,
        salary: undefined
      },
      {
        id: 2,
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'john.doe@email.com',
        dateOfBirth: new Date(2020, 3, 1),
        hireDate: new Date(2020, 3, 1),
        gender: 'Female',
        address: 'undefined, undefined, undefined undefined',
        phoneNumber: undefined,
        department: { id: undefined, name: 'Development' },
        position: undefined,
        salary: undefined
      },
    ];
  }

  getEmployeeImage(gender: string): string {
    return this.employeeService.getEmployeeImage(gender);
  }
}
