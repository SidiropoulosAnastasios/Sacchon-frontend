import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Patient } from 'src/app/Interfaces/Patient/patient';


@Injectable({
    providedIn: 'root'    
})
export class PatientMenuService{
    httpClient: any;

    constructor(private http:HttpClient){ } 

    readonly baseUrl = 'http://localhost:4200/';

    
//  getPatients():Observable <Patient[]>{
//      let endPoints = '/patiends';
//      return this.http.get<Patient[]>(
//          this.baseUrl + endPoints,
//          {headers:new HttpHeaders}
//      )
//  }

//  getPatientbyId(){
//      let id:number;
//      let endPoints = '/patient' + id;
//      return this.httpClient.get(this.baseUrl + endPoints).subscribe(date=>)
//  }

//  addPatient(value:Patient):Observable<any>{
//      let endPoint = '/patient'
//      return this.httpClient.post(this.baseUrl + endPoint,
//         value,
//         {Headers: new HttpHeaders})
//  }
 
//  deletePatient(){
//      let id:number;
//      let endPoint ='/patient'+ id;
//      return this.http.delete(this.baseUrl+endPoint)
//  }
}