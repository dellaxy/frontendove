import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectEmployees } from '../../store/employee.selectors';
import { Observable, map } from 'rxjs';
import { Employee } from '../../models/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss'
})
export class EmployeeListComponent {

  private employees$: Observable<Employee[]> = this.store.select(selectEmployees);
  filteredEmployees$: Observable<Employee[]>;
  searchTerm: string = '';
  private searchTimeout: any;

  constructor(private store: Store) {
    this.filteredEmployees$ = this.employees$;
  }

  onSearchChange() {
    clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(() => {
      this.filteredEmployees$ = this.employees$.pipe(
        map(employees =>
          employees.filter(employee =>
            this.checkFilterMatch(employee)
          )
        )
      );
    }, 500);
  }

  private checkFilterMatch(employee: Employee): boolean {
    const filterProperties = ['firstName', 'lastName', 'email'];
    return filterProperties.some(property => {
      return employee[property].toLowerCase()
        .includes(this.searchTerm.toLocaleLowerCase());
    });
  }


}
