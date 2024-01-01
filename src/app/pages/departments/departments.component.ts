import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { ListData } from '../../models/listData.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrl: './departments.component.scss'
})
export class DepartmentsComponent implements OnInit {

  departments: ListData[];

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.employeeService.getDepartments().subscribe((departments) => {
      this.departments = departments.map(department => {
        return {
          id: department.id,
          title: department.name,
          image: 'assets/images/departments.png',
          columns: [
            {
              key: 'Team size',
              value: department.employee_count.toString()
            }, {
              key: 'Team lead',
              value: 'Team Leaderko'
            }
          ]
        }
      });
    });
  }

  onDepartmentClicked(item: ListData): void {
    this.router.navigate(['departments/department', item.id]);
  }

}
