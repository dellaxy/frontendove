import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { Department } from '../../models/department.model';
import { Store } from '@ngrx/store';
import { Employee } from '../../models/employee.model';
import { Observable } from 'rxjs';
import { ListData } from '../../models/listData.model';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrl: './department.component.scss'
})
export class DepartmentComponent implements OnInit {

  departmentId: number;
  departmentData: Department;
  departmentTeamLeader: any; //toto by bol jeden Employee z departmentEmployees$
  departmentEmployees: ListData[];
  departmentProjects: any[];

  constructor(private router: Router, private employeeService: EmployeeService, private activeRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.departmentId = +this.activeRouter.snapshot.params['id'];
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
        title: 'John Doe',
        image: this.getEmployeeImage('Male')
      },
      {
        id: 2,
        title: 'Bob Johnson',
        image: this.getEmployeeImage('Male')
      },
      {
        id: 3,
        title: 'Jane Doe',
        image: this.getEmployeeImage('Female')
      },
    ];
  }

  getEmployeeImage(gender: string): string {
    return this.employeeService.getEmployeeImage(gender);
  }

  openEmployee(item: ListData): void {
    this.router.navigate(['employees/employee', item.id]);
  }
}
