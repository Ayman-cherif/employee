import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { EMPTY } from 'rxjs';
interface Employee{
  id : String,
  name : String,
  email : String,
  age : number,
  prvcode: String
}
@Component({
  selector: 'app-afficher',
  templateUrl: './afficher.component.html',
  styleUrls: ['./afficher.component.css']
})

export class AfficherComponent implements OnInit{

  constructor(public service : EmployeeService) {
    
  }

  employees  : any

  employee = {
    id : "",
    name : "",
    email : "",
    age : 0,
    prvcode : ""
  }
  ngOnInit(): void {
      this.service.GetEmployees().subscribe(
        (data =>{
          this.employees = data;
        })
      );
  }

  Employee(employee : any){
    this.employee = employee;
  }

  addEmployee(){
    console.log(this.employee);
    this.service.AddEmployee(this.employee).subscribe(
      (err=>{
        console.log(err);
      })
    )
  }

  updateEmployee(){
    console.log(this.employee);
    this.service.UpdateEmployee(this.employee).subscribe(
      (err =>{
        console.log(err);
      })
    )
  }

  deleteEmployee(employeeid : String){
    this.service.DeleteEmlpoyee(employeeid)
  }
}
