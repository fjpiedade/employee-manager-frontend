import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Employee } from "./employee";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "src/environments/environments";


@Injectable({
    providedIn: 'root'
})

export class EmployeeService{
    private apiServeUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient){ }

    public getEmployees(): Observable<Employee[]>{
        return this.http.get<Employee[]>(`${this.apiServeUrl}/employee/`)
    }

    public addEmployee(employee: Employee): Observable<Employee>{
        return this.http.post<Employee>(`${this.apiServeUrl}/employee/`,employee)
    }

    public updateEmployee(employee: Employee): Observable<Employee>{
        return this.http.put<Employee>(`${this.apiServeUrl}/employee/`,employee)
    }

    public deleteEmployee(employeeId: number): Observable<void>{
        return this.http.delete<void>(`${this.apiServeUrl}/employee/${employeeId}`)
    }
}