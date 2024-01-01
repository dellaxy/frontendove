import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EmployeeState } from './employee.reducer';

export const selectEmployeeState = createFeatureSelector<EmployeeState>('employees');

export const selectEmployees = createSelector(
    selectEmployeeState,
    (state: EmployeeState) => state.employees
);

export const selectEmployeeById = (employeeId: number) => createSelector(
    selectEmployees,
    (employees) => employees.find(employee => employee.id === employeeId)
);

export const selectEmployeesByDepartment = (departmentId: number) => createSelector(
    selectEmployees,
    (employees) => employees.filter(employee => employee.department.id === departmentId)
);

