import { Component } from '@angular/core';
import { ChartData, ChartTypes } from '../../../models/chartData.model';

@Component({
  selector: 'app-employee-stats',
  templateUrl: './employee-stats.component.html',
  styleUrl: './employee-stats.component.scss'
})
export class EmployeeStatsComponent {
  employeeHiresDeparturesData: ChartData[] = [
    {
      chartType: ChartTypes.Bar,
      title: 'New Hires',
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      data: [
        1, 2, 0, 0, 2, 3, 6, 1, 0, 1, 0, 0
      ],
      color: '#3B85E4'
    },
    {
      chartType: ChartTypes.Bar,
      title: 'Departures',
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      data: [
        1, 0, 0, 0, 1, 1, 2, 0, 0, 0, 0, 4
      ],
      color: '#E43B3B'
    }
  ];
  employeesPerDepartmentData: ChartData[] = [
    {
      chartType: ChartTypes.Doughnut,
      title: 'Employees per Department',
      labels: ['Development', 'Marketing', 'Sales', 'Human Resources'],
      data: [
        10, 5, 3, 2
      ],
      color: ['#3B85E4', '#E43B3B', '#FFD600', '#4CAF50']
    }
  ];
}
