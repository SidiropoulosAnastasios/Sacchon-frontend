import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from 'src/app/interfaces/Patient/patient';
import { PatientsListService } from './patients-list.service';

@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.scss']
})

export class PatientsListComponent implements OnInit {

  patientsList: Patient[];

  constructor(private router: Router, private patientsListService: PatientsListService) { }

  ngOnInit(): void {

    /* that method takes the informations which have been given
    and it checkes if it doesn't be  (role) != 1*,continue to login */
    if (sessionStorage.getItem("credentials") == null && sessionStorage.getItem("role") != '1') {
      this.router.navigate(['login'])
    }

    this.patientsList = [];

    this.patientsListService.getPatientsList().subscribe(patient => {
      this.patientsList = patient;
    });
  }
}


