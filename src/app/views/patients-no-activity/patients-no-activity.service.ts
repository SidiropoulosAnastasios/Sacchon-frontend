import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from 'src/app/interfaces/Patient/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientsNoActivityService {

 
  constructor(private http: HttpClient) {}

  readonly baseUrl = 'http://localhost:9000/sacchon/reporter/';

  
  /* the method that shows the patients with no activity and
     with the necessary path gets the informations from the backend
  */ 
  getPatientsNoActivity(startDate,endDate):Observable <Patient[]> {
  return this.http.get<Patient[]>(
      this.baseUrl + 'patients-with-no-activity/' + startDate + '/' + endDate,
      {headers:new HttpHeaders({'Authorization': 'Basic ' + btoa(sessionStorage.getItem("credentials")) }) });
  }
}
