import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectEmployeeById } from '../../store/employee.selectors';
import { Observable, map } from 'rxjs';
import { Employee } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';
import { loadEmployee } from '../../store/employee.actions';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss'
})
export class EmployeeComponent implements OnInit {

  employeeId: number;
  employee$: Observable<Employee>;
  calendarEvents: Observable<any>;

  constructor(private router: ActivatedRoute, private store: Store, private EmployeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeId = +this.router.snapshot.params['id'];

    this.calendarEvents = this.EmployeeService.getEmployeeCalendar(this.employeeId)

    this.employee$ = this.store.select(selectEmployeeById(this.employeeId));
    this.employee$.subscribe(employee => {
      const hasUndefinedValues = Object.values(employee).some(value => value === undefined || value === null);
      if (hasUndefinedValues) {
        this.EmployeeService.getDetailedEmployee(this.employeeId).subscribe(employee => {
          this.store.dispatch(loadEmployee({ employee }));
        });
      }
    }).unsubscribe();
  }

  getEmployeeImage(gender: string): string {
    if (gender === 'Male') {
      return 'assets/images/male_avatar.jpg'
    } else if (gender === 'Female') {
      return 'assets/images/female_avatar.jpg'
    }
    return 'assets/images/male_avatar.jpg'
  }

}
