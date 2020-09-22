import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '@gacs/employee';
@Component({
  selector: 'gacs-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  @Input() employees: Employee[];
  constructor() { }

  ngOnInit() {}

  public trackById(employee: Employee) {
    return employee ? employee.id : null;
  }
}
