import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Consultation } from 'src/app/Interfaces/Consultation/consultation';

@Injectable({
  providedIn: 'root'
})

export class ConsultationsDoctorService {

  constructor(private http:HttpClient) { }

  readonly baseUrl ='http://localhost:9000/sacchon/doctors/';

  getConsultationsDoctor(patientId):Observable <Consultation[]>{
    return this.http.get<Consultation[]>(
      this.baseUrl + sessionStorage.getItem('id') + '/patients/'+ patientId + '/consultations',
      { headers: new HttpHeaders({ 'Authorization': 'Basic ' + btoa(sessionStorage.getItem("credentials")) }) });
    }

  addConsultation(doctorId, patientId, consultation):Observable<any>{ 
    console.log(this.baseUrl + doctorId + '/patients/' + patientId + '/consultations', consultation)
    return this.http.post<any>(
      this.baseUrl + doctorId + '/patients/' + patientId + '/consultations', consultation,
      { headers: new HttpHeaders({ 'Authorization': 'Basic ' + btoa(sessionStorage.getItem("credentials")) }) });
    }
    
}