import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  constructor(private http: HttpClient) { }

  params = new HttpParams();

  responseOfAuth = new Subject<boolean>();

  readonly baseUrl = 'http://localhost:9000/sacchon';

  /* this for is being applied by patient, doctor and reporter,
    all that information are sent via those params back to the base of system
    which are saved and stored for the next login or register
  */
 
  authorization(values: FormGroup): Observable<any> {

    this.params.append('username', values.get('username').value);
    this.params.append('password', values.get('password').value);
    console.log(values.get('username').value + values.get('password').value);

    return this.http.post<any>(this.baseUrl + '/login', {"username":values.get('username').value, "password":values.get('password').value});
  }
}
