import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menuItems = [

    { route: '/dashboard', name: 'Dashboard' },
    { route: '/employees', name: 'Employees' },
  ];
  constructor() { }
}
