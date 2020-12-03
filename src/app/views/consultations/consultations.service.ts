import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Consultation } from 'src/app/Interfaces/Consultation/consultation';


@Injectable({
  providedIn: 'root'
})

export class ConsultationsService {

  constructor(private http: HttpClient){}
  
  readonly baseUrl = 'http://localhost:9000/sacchon/patients/';

  getConsultations(): Observable<Consultation[]> {
    return this.http.get<Consultation[]>(
      this.baseUrl + sessionStorage.getItem('id') + '/consultations',
      { headers: new HttpHeaders({ 'Authorization': 'Basic ' + btoa(sessionStorage.getItem("credentials")) }) });
  }

}
