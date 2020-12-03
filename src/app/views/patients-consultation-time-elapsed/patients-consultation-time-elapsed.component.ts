import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patients } from 'src/app/interfaces/Patient/patient-list';
import { PatientsConsultationTimeElapsedService } from './patients-consultation-time-elapsed.service';

@Component({
  selector: 'app-patients-consultation-time-elapsed',
  templateUrl: './patients-consultation-time-elapsed.component.html',
  styleUrls: ['./patients-consultation-time-elapsed.component.scss']
})
export class PatientsConsultationTimeElapsedComponent implements OnInit {

  patientsConsultationTimeElapsed: Patients[];

  constructor(private router: Router, private patientsConsultationTimeElapsedService: PatientsConsultationTimeElapsedService) { }

  ngOnInit(): void {

    if (sessionStorage.getItem("credentials") == null && sessionStorage.getItem("role") != '1') {
      this.router.navigate(['login'])
    }

    this.patientsConsultationTimeElapsed = [];

    this.patientsConsultationTimeElapsedService.getPatientsConsultationTimeElapsed().subscribe(patient => {
      this.patientsConsultationTimeElapsed = patient;
      console.log(patient);

      
  });
}

}