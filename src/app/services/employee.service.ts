import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';
import { map } from 'rxjs/operators';

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

  getEmployeeCalendar(employeeId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}getEmployeeCalendar.php?id=${employeeId}`);
  }

  getDepartments(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}getDepartments.php`);
  }

  getEmployeeImage(gender: string): string {
    if (gender === 'Male') {
      return 'assets/images/male_avatar.jpg'
    } else if (gender === 'Female') {
      return 'assets/images/female_avatar.jpg'
    }
    return 'assets/images/male_avatar.jpg'
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
      address: apiResponse.address_street + ', ' + apiResponse.address_city + ', ' + apiResponse.address_state + ' ' + apiResponse.address_zip,
      phoneNumber: apiResponse.phone_number,
      department: {
        id: apiResponse.department_id,
        name: apiResponse.name,
      },
      position: apiResponse.position,
      salary: apiResponse.salary
    }
  }
}
