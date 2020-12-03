import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Measurement } from 'src/app/Interfaces/Measurement/measurement';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MeasurementsService {

  constructor(private http: HttpClient) { }

  readonly baseUrl = 'http://localhost:9000/sacchon/patients/';

  getMeasurements(): Observable<Measurement[]> {
    return this.http.get<Measurement[]>(
      this.baseUrl + sessionStorage.getItem('id') + '/measurements',
      { headers: new HttpHeaders({ 'Authorization': 'Basic ' + btoa(sessionStorage.getItem("credentials")) }) });
  }

  addMeasurement(patientId, measurement): Observable<any> {
    return this.http.post<any>(   
      this.baseUrl + patientId + '/measurements', measurement,
    { headers: new HttpHeaders({ 'Authorization': 'Basic ' + btoa(sessionStorage.getItem("credentials")) }) });
  }

}
