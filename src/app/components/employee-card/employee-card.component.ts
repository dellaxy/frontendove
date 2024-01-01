import { Component, Input } from '@angular/core';
import { Employee } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrl: './employee-card.component.scss'
})
export class EmployeeCardComponent {

  @Input({ required: true }) employee: Employee;

  constructor(private EmployeeService: EmployeeService) { }

  getEmployeeImage(gender: string): string {
    return this.EmployeeService.getEmployeeImage(gender);
  }
}
