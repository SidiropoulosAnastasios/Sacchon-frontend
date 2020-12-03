import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Consultation } from 'src/app/Interfaces/Consultation/consultation';


@Injectable({
  providedIn: 'root'
})
export class ConsultationService {

  constructor(private http:HttpClient) { }

  //Define the base url of your endpoints
  readonly baseUrl = 'http://localhost:9000/sacchon/consultations/';

  getConsultation():Observable <Consultation[]> {
  return this.http.get<Consultation[]>(
      this.baseUrl+ '1' + '/consultationId',  //sessionStorage.getId()
      {headers:new HttpHeaders({'Authorization': 'Basic ' + btoa('Doctor1:doctor1')})}); //sessionStorage.getItem("credentials")
  }
}