import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Patient } from 'src/app/interfaces/Patient/patient';

@Injectable({
  providedIn: 'root'
})

export class AvailablePatientsService {

  constructor(private http: HttpClient) { }

  readonly baseUrl = 'http://localhost:9000/sacchon/doctors/';


  /* this method below is used to return all the available patient
     who use the application.  
  */
  getAvailablePatients():Observable <Patient[]> {
  return this.http.get<Patient[]>(
      this.baseUrl+ sessionStorage.getItem('id') + '/available-patients',
      { headers: new HttpHeaders({ 'Authorization': 'Basic ' + btoa(sessionStorage.getItem("credentials")) }) });
  }
  
}