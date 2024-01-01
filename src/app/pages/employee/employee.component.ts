import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectEmployeeById } from '../../store/employee.selectors';
import { Observable, map } from 'rxjs';
import { Employee } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';
import { loadEmployee } from '../../store/employee.actions';
import { ChartData, ChartTypes } from '../../models/chartData.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss'
})
export class EmployeeComponent implements OnInit {

  employeeId: number;
  employee$: Observable<Employee>;
  calendarEvents: Observable<any>;
  workHoursPerMonth: ChartData;

  constructor(private router: ActivatedRoute, private store: Store, private EmployeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeId = +this.router.snapshot.params['id'];

    this.calendarEvents = this.EmployeeService.getEmployeeCalendar(this.employeeId)

    this.workHoursPerMonth = {
      chartType: ChartTypes.Bar,
      title: 'Work Hours per Month',
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      data: [160, 180, 150, 200, 170, 190],
    };

    this.employee$ = this.store.select(selectEmployeeById(this.employeeId));
    this.employee$.subscribe(employee => {
      const hasUndefinedValues = Object.values(employee).some(value => value === undefined || value === null);
      if (hasUndefinedValues) {
        this.EmployeeService.getDetailedEmployee(this.employeeId).subscribe(employee => {
          this.store.dispatch(loadEmployee({ employee }));
        });
      }
    }).unsubscribe();

    this.employee$.subscribe(employee => {
      console.log(employee);
    });
  }

  getEmployeeImage(gender: string): string {
    return this.EmployeeService.getEmployeeImage(gender);
  }
}
