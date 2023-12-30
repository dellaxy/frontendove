import { createAction, props } from '@ngrx/store';
import { Employee } from '../models/employee.model';

export const LOAD_EMPLOYEES = '[Employee] Load Employees';
export const LOAD_EMPLOYEE = '[Employee] Load Employee';

export const loadEmployees = createAction(LOAD_EMPLOYEES, props<{ employees: Employee[] }>());
export const loadEmployee = createAction(LOAD_EMPLOYEE, props<{ employee: Employee }>());
