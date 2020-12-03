import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ReporterService {

    url: string;

    constructor(private httpClient: HttpClient) {  }
    readonly baseUrl = 'http://localhost:9000/sacchon/reporter/';
    
    public getPatientMeasurements(){
      let endPoints=""
        this.httpClient.get(this.url+endPoints).subscribe(data => {
        console.log(data);
      });
      
    }
    public getDoctorConsultations(){
        let endPoints=""
          this.httpClient.get(this.url+endPoints).subscribe(data => {
          console.log(data);
        });
    }
    public getPatientsWaitingConsultation(){
        let endPoints=""
          this.httpClient.get(this.url+endPoints).subscribe(data => {
          console.log(data);
        });
    }
    public getPatientsNoAcitvity(){
        let endPoints=""
          this.httpClient.get(this.url+endPoints).subscribe(data => {
          console.log(data);
        });
    }
    public getDoctorsNoActivity(){
            let endPoints=""
              this.httpClient.get(this.url+endPoints).subscribe(data => {
              console.log(data);
            });
  
    } 
}

  