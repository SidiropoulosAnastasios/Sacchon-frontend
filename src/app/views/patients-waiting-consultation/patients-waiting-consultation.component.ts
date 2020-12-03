import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from 'src/app/interfaces/Patient/patient';
import { PatientsWaitingConsultationService } from './patients-waiting-consultation.service';

@Component({
  selector: 'app-patients-waiting-consultation',
  templateUrl: './patients-waiting-consultation.component.html',
  styleUrls: ['./patients-waiting-consultation.component.scss']
})

export class PatientsWaitingConsultationComponent implements OnInit {

  patientsWaitingConsultation: Patient[];

  constructor(private router:Router, private patientsWaitingConsultationService: PatientsWaitingConsultationService) { }

  ngOnInit(): void {
      this.patientsWaitingConsultation = [];

      this.patientsWaitingConsultationService.getPatientsWaitingConsultation().subscribe(patient => {
        this.patientsWaitingConsultation = patient;
    });
  }
}

