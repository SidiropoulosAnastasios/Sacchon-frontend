import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from 'src/app/Interfaces/Doctor/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorsNoActivityService {

  constructor(private http: HttpClient) {}

  readonly baseUrl = 'http://localhost:9000/sacchon/reporter/';

  getDoctorsNoActivity(startDate,endDate):Observable<Doctor[]>{
    return this.http.get<Doctor[]>(
      this.baseUrl + 'doctors-with-no-activity/' + startDate + '/' + endDate,
      {headers:new HttpHeaders({'Authorization': 'Basic ' +  btoa(sessionStorage.getItem("credentials")) }) });
    }
  }
