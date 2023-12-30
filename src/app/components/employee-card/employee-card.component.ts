import { Component, Input } from '@angular/core';
import { Employee } from '../../models/employee.model';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrl: './employee-card.component.scss'
})
export class EmployeeCardComponent {

  @Input({ required: true }) employee!: Employee;

  constructor() { }

  getEmployeeImage(gender: string): string {
    if (gender === 'Male') {
      return 'assets/images/male_avatar.jpg'
    } else if (gender === 'Female') {
      return 'assets/images/female_avatar.jpg'
    }
    return 'assets/images/male_avatar.jpg'
  }
}
