import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from 'src/app/interfaces/Patient/patient';
import { AvailablePatientsService } from './available-patients.service';

@Component({
  selector: 'app-available-patients',
  templateUrl: './available-patients.component.html',
  styleUrls: ['./available-patients.component.scss']
})

export class AvailablePatientsComponent implements OnInit {
  
  patients: Patient[];

  constructor(private availablePatientsService:AvailablePatientsService,private router:Router) { }

  ngOnInit(): void {
      this.patients = [];
  
      this.availablePatientsService.getAvailablePatients().subscribe(patient => {
      this.patients = patient;
    });
  }
}
