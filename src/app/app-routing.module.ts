import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './pages/employee-list/employee-list.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { DepartmentsComponent } from './pages/departments/departments.component';
import { DepartmentComponent } from './pages/department/department.component';
import { EmployeeStatsComponent } from './pages/dashboard/employee-stats/employee-stats.component';
import { ProjectDataComponent } from './pages/dashboard/project-data/project-data.component';
import { SalaryDataComponent } from './pages/dashboard/salary-data/salary-data.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard/employee-data', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'employee-data', component: EmployeeStatsComponent },
      { path: 'salary-data', component: SalaryDataComponent },
      { path: 'project-data', component: ProjectDataComponent },
    ]
  },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'employees/employee/:id', component: EmployeeComponent },
  { path: 'departments', component: DepartmentsComponent },
  { path: 'departments/department/:id', component: DepartmentComponent },
  { path: '**', component: DashboardComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
