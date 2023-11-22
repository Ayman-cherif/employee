import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
interface Employee{
  id : String,
  name : String,
  email : String,
  age : number,
  prvcode: String
}
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  link = "http://localhost:8080"

  GetEmployees(){
    return this.http.get(this.link +"/employees/get");
  }

  AddEmployee(employee : Employee){
    return this.http.post(this.link + "/employee/add", employee);
  }

  UpdateEmployee(employee : Employee){
    return this.http.put(this.link + "/employee/update", employee)
  }

  DeleteEmlpoyee(employeeid : String){
    this.http.delete(this.link + "/employee/delete/" + employeeid).subscribe(
      (err=>{
        console.log(err);
        
      })
    )
  }
}
