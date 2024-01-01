import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { employeeReducer } from './store/employee.reducer';
import { EmployeeListComponent } from './pages/employee-list/employee-list.component';
import { EmployeeCardComponent } from './components/employee-card/employee-card.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { FormsModule } from '@angular/forms';
import { WorkCalendarComponent } from './components/work-calendar/work-calendar.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgChartsModule } from 'ng2-charts';
import { ChartComponent } from './components/chart/chart.component';
import { DepartmentsComponent } from './pages/departments/departments.component';
import { ListGroupComponent } from './components/list-group/list-group.component';
import { DepartmentComponent } from './pages/department/department.component';
import { EmployeeStatsComponent } from './pages/dashboard/employee-stats/employee-stats.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EmployeeCardComponent,
    EmployeeListComponent,
    DashboardComponent,
    EmployeeComponent,
    WorkCalendarComponent,
    ChartComponent,
    DepartmentsComponent,
    ListGroupComponent,
    DepartmentComponent,
    EmployeeStatsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgChartsModule,
    StoreModule.forRoot({ employees: employeeReducer }),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
