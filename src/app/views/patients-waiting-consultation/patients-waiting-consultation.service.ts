import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from 'src/app/interfaces/Patient/patient';

@Injectable({
  providedIn: 'root'
})

export class PatientsWaitingConsultationService {

  constructor(private http: HttpClient) {}

  /* the basic Url*/ 
  readonly baseUrl = 'http://localhost:9000/sacchon/doctors/';



  /* the method that shows the waiting consultation of the patient
     with the necessary path gets the informations from the backend
  */ 
  getPatientsWaitingConsultation():Observable <Patient[]> {
    return this.http.get<Patient[]>(
        this.baseUrl + sessionStorage.getItem('id') + '/patients-waiting-consultation', 
        { headers: new HttpHeaders({ 'Authorization': 'Basic ' + btoa(sessionStorage.getItem("credentials")) }) });
    }
}
