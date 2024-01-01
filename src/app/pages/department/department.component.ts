import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { Department } from '../../models/department.model';
import { Store } from '@ngrx/store';
import { Employee } from '../../models/employee.model';
import { Observable } from 'rxjs';
import { ListData } from '../../models/listData.model';
import { ChartData, ChartTypes } from '../../models/chartData.model';

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
  teamRevenueChart: ChartData;

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
      firstName: 'John',
      lastName: 'Doe',
      email: 'teamleaderko@email.com',
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

    this.teamRevenueChart = {
      chartType: ChartTypes.Line,
      title: 'Team Half-Yearly Sales Revenue Over the Years',
      labels: [
        'H1 2018', 'H2 2018',
        'H1 2019', 'H2 2019',
        'H1 2020', 'H2 2020',
        'H1 2021', 'H2 2021',
        'H1 2022', 'H2 2022',
        'H1 2023', 'H2 2023'
      ],
      data: [
        120000, 150000,
        110000, 130000,
        140000, 160000,
        105000, 120000,
        130000, 145000,
        100000, 125000
      ],
      fill: true
    };

    this.departmentProjects = [
      {
        id: 1,
        title: 'Project 1',
      },
      {
        id: 2,
        title: 'Project 2',
      },
      {
        id: 3,
        title: 'Project 3',
      },
      {
        id: 4,
        title: 'Project 4',
      }
    ];
  }

  getEmployeeImage(gender: string): string {
    return this.employeeService.getEmployeeImage(gender);
  }

  openEmployee(item: ListData): void {
    this.router.navigate(['employees/employee', item.id]);
  }
}
