import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectEmployees } from '../../store/employee.selectors';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss'
})
export class EmployeeListComponent {

  employees$ = this.store.select(selectEmployees);

  constructor(private store: Store) { }
}
