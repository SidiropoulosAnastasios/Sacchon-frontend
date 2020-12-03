import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Patient } from 'src/app/interfaces/Patient/patient';

@Injectable({
  providedIn: 'root'
})

export class PatientsListService {

  constructor(private http: HttpClient) { }
  
  /* the main url of for the patient list*/
  readonly baseUrl = 'http://localhost:9000/sacchon/reporter/';



  /* this method returns the patients list into 
  the reporter's UI */
  getPatientsList():Observable <Patient[]> {
    return this.http.get<Patient[]>(
      this.baseUrl + 'patients',
      { headers: new HttpHeaders({ 'Authorization': 'Basic ' + btoa(sessionStorage.getItem("credentials")) }) });
  }

}