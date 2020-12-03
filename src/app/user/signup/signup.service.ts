import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { FormGroup } from '@angular/forms';



@Injectable({
  providedIn: 'root'
})

export class SignupService {
  constructor(private http: HttpClient) { }

  params = new HttpParams();

  readonly baseUrl = 'http://localhost:9000/sacchon/register';

  addUserPatient(name,dob,gender,diabetesType,dateDiagnosed,username,password): Observable<any> {
    return this.http.post<any>(
      this.baseUrl, {
        "username":username,
        "password":password,
        "name":name,
        "dob":dob,
        "gender":gender,
        "diabetesType":diabetesType,
        "dateDiagnosed":dateDiagnosed
      }
    );
  }
}
