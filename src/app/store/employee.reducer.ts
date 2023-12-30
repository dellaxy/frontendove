import { createReducer, on } from '@ngrx/store';
import { loadEmployees, loadEmployee } from './employee.actions';
import { Employee } from '../models/employee.model';

export interface EmployeeState {
    employees: Employee[];
}

export const initialState: EmployeeState = {
    employees: [],
};

export const employeeReducer = createReducer(
    initialState,
    on(loadEmployees, (state, { employees }) => {
        return { ...state, employees: [...state.employees, ...employees] };
    }),
    on(loadEmployee, (state, { employee }) => {
        const updatedEmployees = state.employees.map(emp =>
            emp.id === employee.id ? { ...emp, ...employee } : emp
        );
        return { ...state, employees: updatedEmployees };
    })
);
