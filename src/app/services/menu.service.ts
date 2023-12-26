import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menuItems = [
    { route: '/dashboard', icon: 'assets/img/home.svg', name: 'Dashboard' },
    { route: '/employees', icon: 'assets/img/employee.svg', name: 'Employees' },
  ];
  constructor() { }
}
