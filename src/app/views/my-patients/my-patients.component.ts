import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from 'src/app/interfaces/Patient/patient';
import { MyPatientsService } from './my-patients.service';

@Component({
  selector: 'app-my-patients',
  templateUrl: './my-patients.component.html',
  styleUrls: ['./my-patients.component.scss']
})
export class MyPatientsComponent implements OnInit {
  patients: Patient[];

  constructor(private myPatientsService:MyPatientsService,private router:Router) { }

  ngOnInit(): void {
   
    this.patients = [];

    this.myPatientsService.getPatients().subscribe(patient => {
      this.patients = patient;
      console.log(this.patients);
    });
}

}
