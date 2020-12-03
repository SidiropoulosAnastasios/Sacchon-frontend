import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from 'src/app/interfaces/Patient/patient';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  readonly baseUrl = 'http://localhost:9000/sacchon/patients/';

  getPatient():Observable <Patient> {
    return this.http.get<Patient>(
        this.baseUrl+ sessionStorage.getItem('id'),
        { headers: new HttpHeaders({ 'Authorization': 'Basic ' + btoa(sessionStorage.getItem("credentials")) }) });
    }
}
