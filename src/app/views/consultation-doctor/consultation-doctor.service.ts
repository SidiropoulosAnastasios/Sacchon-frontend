import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Consultation } from 'src/app/Interfaces/Consultation/consultation';

@Injectable({
  providedIn: 'root'
})

export class ConsultationDoctorService {

  constructor(private http: HttpClient) { }

  readonly baseUrl ='http://localhost:9000/sacchon/patients/';

  getConsultationDoctor(pid, cid): Observable<Consultation> {
    return this.http.get<Consultation>(
      this.baseUrl + pid +'/consultations/' + cid, 
      { headers: new HttpHeaders({ 'Authorization': 'Basic ' + btoa(sessionStorage.getItem("credentials")) }) });
    }

  editConsultation(pid, cid, consultation):Observable<any>{ 
    return this.http.put<any>(
      this.baseUrl + pid + '/consultations/' + cid, consultation,
      { headers: new HttpHeaders({ 'Authorization': 'Basic ' + btoa(sessionStorage.getItem("credentials")) }) });
    }

  removeConsultationDoctor(pid, cid) {
    this.http.delete(  this.baseUrl + pid +'/consultations/' + cid ).subscribe(data => {
    });
  }
}
