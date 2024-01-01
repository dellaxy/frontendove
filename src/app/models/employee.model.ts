import { Department } from "./department.model";

export interface Employee {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    dateOfBirth: Date;
    hireDate: Date;
    gender: string;
    address: string;
    phoneNumber: string;
    position: string;
    salary: number;
    department: Department;
}