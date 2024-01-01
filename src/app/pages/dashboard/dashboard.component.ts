import { Component } from '@angular/core';
import { ChartData, ChartTypes } from '../../models/chartData.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  subPages = [
    { label: 'Employees', route: '/dashboard/employee-data' },
    { label: 'Salaries', route: '/dashboard/salary-data' },
    { label: 'Projects', route: '/dashboard/project-data' }
  ];

  constructor() { }
}
