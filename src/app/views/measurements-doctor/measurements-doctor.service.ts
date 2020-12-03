import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Measurement } from 'src/app/Interfaces/Measurement/measurement';

@Injectable({
  providedIn: 'root'
})
export class MeasurementsDoctorService {

  constructor(private http:HttpClient) { }

  readonly baseUrl ='http://localhost:9000/sacchon/doctors/';

  getMeasurementsDoctor(pid):Observable <Measurement[]>{
      return this.http.get<Measurement[]>(
        this.baseUrl+ sessionStorage.getItem('id') + '/patients/' + pid + '/measurements',
        {headers: new HttpHeaders({ 'Authorization': 'Basic ' + btoa(sessionStorage.getItem("credentials")) }) });
    
    }

  addMeasurementsDoctor(doctorId,patientId,measurement):Observable<any>{
      return this.http.post<any>(
        this.baseUrl + doctorId + '/patients/' + patientId + '/measurements', measurement,
        {headers: new HttpHeaders({ 'Authorization': 'Basic ' + btoa(sessionStorage.getItem("credentials")) }) });
    
    }
    
  removeMeasurementDoctor() {
        let endPoints =  sessionStorage.getItem('id')+'/patients/1/measurements/id';
        this.http.delete(this.baseUrl + endPoints).subscribe(data => {
        console.log(data); });
    
    }
}
