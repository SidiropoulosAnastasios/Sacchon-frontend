import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Doctor } from 'src/app/Interfaces/Doctor/doctor';

@Injectable({
    providedIn: 'root'
  })

  export class DoctorMenuService{
      httpClient: any;

      constructor(private http:HttpClient){ }

      params = new HttpParams();

      readonly baseUrl = 'http://localhost:4200/'

    getDoctors():Observable <Doctor[]>{
        let endPoints = '/doctors';
        return this.http.get<Doctor[]>(
            this.baseUrl + endPoints,
            {headers:new HttpHeaders}
        )
    }

    // getDoctorbyId(){
    //     let id: number;
    //     let endPoints = '/doctor/' +id ;
    //     return this.httpClient.get(this.baseUrl + endPoints).subscribe(date=> )
    // }

    // addDoctor(value:Doctor):Observable<any>{
    //     let endPoints='/doctor';
    //     return this.http.post(this.baseUrl + endPoints,
    //     values, 
    //     {headers: new HttpHeaders})
    // }

    // deleteDoctor(){
    //     let id:number;
    //     let endPoints='/doctor/' + id;
    //     return this.httpClient.delete(this.baseUrl+endPoints).subscribe(data=> )
    // }

    // updateDoctor(){
    //     let id:number;
    //     let endPoints = '/doctor/' +id;
    //     return this.httpClient.put(this.baseUrl + endPoints, postData).subscribe(data=>)
        
    // }
  }