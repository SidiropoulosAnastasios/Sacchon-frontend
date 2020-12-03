import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from 'src/app/Interfaces/Doctor/doctor';

@Injectable({
  providedIn: 'root'
})
export class ConsultationsTimeRangeService {

  constructor(private http: HttpClient) { }
  readonly baseUrl = 'http://localhost:9000/sacchon/reporter/doctors';
  
  getConsultationsTimeRange():Observable<Doctor[]>{
    return this.http.get<Doctor[]>(
      this.baseUrl+'1'+'/consultations-time-range',
      {headers:new HttpHeaders({'Authorization': 'Basic ' + btoa('Doctor1:doctor1')})}); //sessionStorage.getItem("credentials")
    }
  }

