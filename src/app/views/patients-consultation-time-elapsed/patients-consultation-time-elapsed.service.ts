import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patients } from 'src/app/interfaces/Patient/patient-list';

@Injectable({
  providedIn: 'root'
})

export class PatientsConsultationTimeElapsedService {

  constructor(private http: HttpClient) {}

  readonly baseUrl = 'http://localhost:9000/sacchon/reporter/';

  getPatientsConsultationTimeElapsed():Observable <Patients[]> {
    return this.http.get<Patients[]>(
        this.baseUrl + 'patients-waiting-consultation/',
        { headers: new HttpHeaders({ 'Authorization': 'Basic ' + btoa(sessionStorage.getItem("credentials")) }) });
    }
  
}