import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from 'src/app/Interfaces/Doctor/doctor';

@Injectable({
  providedIn: 'root'
})

export class DoctorsListService {

  constructor(private http: HttpClient) {}

  readonly baseUrl = 'http://localhost:9000/sacchon/reporter/';

  getPatientsList():Observable <Doctor[]> {
    return this.http.get<Doctor[]>(
      this.baseUrl + 'doctors',
      { headers: new HttpHeaders({ 'Authorization': 'Basic ' + btoa(sessionStorage.getItem("credentials")) }) });
  }
}
