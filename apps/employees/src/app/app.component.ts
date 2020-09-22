import { Component } from '@angular/core';
import { EmployeeService } from '@gacs/ui';

@Component({
  selector: 'gacs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public employeeService: EmployeeService) {}
}
