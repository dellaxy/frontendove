import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './services/employee.service';
import { Store } from '@ngrx/store';
import { loadEmployees } from './store/employee.actions';
import { selectEmployees } from './store/employee.selectors';
import { isEmpty, take } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'frontendove';

  constructor(private employeeService: EmployeeService, private store: Store) { }

  ngOnInit(): void {
    this.store.select(selectEmployees).subscribe((employees) => {
      if (employees.length === 0) {
        this.employeeService.getLightEmployees().subscribe((employees) => {
          this.store.dispatch(loadEmployees({ employees }));
        });
      }
    }).unsubscribe();
  }
}
