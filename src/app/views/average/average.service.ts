import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Average } from 'src/app/Interfaces/Average/average';

@Injectable({
  providedIn: 'root'
})
export class AverageService {

  constructor(private http:HttpClient) { }

  readonly baseUrl = 'http://localhost:9000/sacchon/patients/';

  getAverages(startDate,endDate): Observable<Average>{
    return this.http.get<Average>(
      this.baseUrl+ sessionStorage.getItem('id') + '/measurements/average/' + startDate + '/' + endDate,
      { headers: new HttpHeaders({ 'Authorization': 'Basic ' + btoa(sessionStorage.getItem("credentials")) }) });
  } 
}