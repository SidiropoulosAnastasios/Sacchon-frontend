import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from 'src/app/Interfaces/Doctor/doctor';

@Injectable({
  providedIn: 'root'
})
export class HomeDoctorService {

  constructor(private http: HttpClient) { }
  
  readonly baseUrl = 'http://localhost:9000/sacchon/doctors/';

  getDoctor():Observable <Doctor> {
    return this.http.get<Doctor>(
        this.baseUrl+ sessionStorage.getItem('id'),
        { headers: new HttpHeaders({ 'Authorization': 'Basic ' + btoa(sessionStorage.getItem("credentials")) }) });
    }
}