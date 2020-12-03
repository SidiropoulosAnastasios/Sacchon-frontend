import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from 'src/app/interfaces/Patient/patient';

@Injectable({
  providedIn: 'root'
})
export class MyPatientsService {

  constructor(private http:HttpClient) { }

  readonly baseUrl = 'http://localhost:9000/sacchon/doctors/';

  /* the method that shows the waiting consultation of the patient
     with the necessary path gets the informations from the backend
  */ 
  getPatients():Observable <Patient[]> {
    return this.http.get<Patient[]>(
        this.baseUrl+ sessionStorage.getItem('id') + '/my-patients',
        { headers: new HttpHeaders({ 'Authorization': 'Basic ' + btoa(sessionStorage.getItem("credentials")) }) });
    }
}
