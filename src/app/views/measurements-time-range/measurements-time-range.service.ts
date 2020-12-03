import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Measurement } from 'src/app/Interfaces/Measurement/measurement';

@Injectable({
  providedIn: 'root'
})

export class MeasurementsTimeRangeService {

  constructor(private http: HttpClient) { }

  readonly baseUrl = 'http://localhost:9000/sacchon/reporter/patients';

  getMeasurementsTimeRange(): Observable<Measurement[]> {
    return this.http.get<Measurement[]>(
      this.baseUrl + '1' + '/measurements-time-range', //patient_id
      { headers: new HttpHeaders({ 'Authorization': 'Basic ' + btoa(sessionStorage.getItem("credentials")) }) });
  }

}
