import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from 'src/app/Interfaces/Doctor/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorPageService {

  constructor(private http: HttpClient) {}
  readonly baseUrl ='http:// localhost:9000/sacchon/'


  getDoctors():Observable<Doctor[]>{ 
    return this.http.get<Doctor[]>(
        this.baseUrl+ '1' + '/doctors',  //sessionStorage.getId()
        {headers:new HttpHeaders({'Authorization': 'Basic ' + btoa('Doctor1:doctor1')})}); //sessionStorage.getItem("credentials")
    }


  public removeDoctor() {
    let endPoints = "/doctors/1"
    this.http.delete(this.baseUrl + endPoints).subscribe(data => {
      console.log(data);
    });
  }}
