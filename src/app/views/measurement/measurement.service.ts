import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Measurement } from 'src/app/Interfaces/Measurement/measurement';

@Injectable({
  providedIn: 'root'
})
export class MeasurementService {

  constructor(private http: HttpClient) { }

  readonly baseUrl = 'http://localhost:9000/sacchon/patients/';

  getMeasurement(mid): Observable<Measurement> {
    return this.http.get<Measurement>(
      this.baseUrl + sessionStorage.getItem('id') + '/measurements/' + mid,
      { headers: new HttpHeaders({ 'Authorization': 'Basic ' + btoa(sessionStorage.getItem("credentials")) }) });
    }

  editMeasurement(mid, measurement):Observable<any>{ 
    return this.http.put<any>(
      this.baseUrl + sessionStorage.getItem('id') + '/measurements/' + mid, measurement,
      { headers: new HttpHeaders({ 'Authorization': 'Basic ' + btoa(sessionStorage.getItem("credentials")) }) });
    }

  // removeMeasurement(mid) {
  //   return this.http.delete<any>(this.baseUrl + sessionStorage.getItem('id') + '/measurements/' + mid)
  // }

  // getMeasurementById(mid):Observable<any> {
  //   return this.http.get<any>(
  //     this.baseUrl + '1/measurements' + mid,
  //     { headers: new HttpHeaders({ 'Authorization': 'Basic ' + btoa(sessionStorage.getItem("credentials")) }) });
  // }
}
