import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';
import { map } from 'rxjs/operators';

// Import the 'Employee' type
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = 'http://localhost/employee_manager/';

  constructor(private http: HttpClient) { }

  getLightEmployees(): Observable<Employee[]> {
    return this.http.get<any[]>(`${this.baseUrl}getLightEmployees.php`).pipe(
      map(apiResponse => apiResponse.map(item => this.mapApiToEmployee(item)))
    );
  }

  getDetailedEmployee(employeeId: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.baseUrl}getEmployee.php?id=${employeeId}`).pipe(
      map(apiResponse => this.mapApiToEmployee(apiResponse))
    );
  }



  mapApiToEmployee(apiResponse: any): Employee {
    return {
      id: apiResponse.id,
      firstName: apiResponse.first_name,
      lastName: apiResponse.last_name,
      email: apiResponse.email,
      dateOfBirth: new Date(apiResponse.date_of_birth),
      hireDate: new Date(apiResponse.hire_date),
      gender: apiResponse.gender,
      address: apiResponse.address_street + ', ' + apiResponse.address_city + ', ' + apiResponse.address_state + ', ' + apiResponse.address_zip_code,
      phoneNumber: apiResponse.phone_number,
      department: apiResponse.department_id,
      position: apiResponse.position,
      salary: apiResponse.salary
    }
  }
}
