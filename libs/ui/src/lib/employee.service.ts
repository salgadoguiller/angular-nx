import { Injectable } from '@angular/core';
import { Employee } from '@gacs/employee';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees$: Observable<Employee[]>;
  constructor() {
    this.employees$ = of([
      {id: 1, name: 'Guillermo'},
      {id: 2, name: 'Antonio'},
      {id: 3, name: 'Erick'},
      {id: 4, name: 'Javier'},
      {id: 5, name: 'Jose'}
    ]
    );
  }
}
