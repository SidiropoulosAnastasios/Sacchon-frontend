import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Patient } from 'src/app/interfaces/Patient/patient';
import { PatientsNoActivityService } from './patients-no-activity.service';

@Component({
  selector: 'app-patients-no-activity',
  templateUrl: './patients-no-activity.component.html',
  styleUrls: ['./patients-no-activity.component.scss']
})
export class PatientsNoActivityComponent implements OnInit {

  calendarForm: FormGroup;
  startDate: Date;
  endDate: Date;
  patients: Patient[];

  constructor(private router:Router, private patientsNoActivityService:PatientsNoActivityService) { }

  ngOnInit(): void {
    if(sessionStorage.getItem("credentials") == null){
      this.router.navigate(['login'])
    }

    this.calendarForm = new FormGroup({
      startDate: new FormControl("",[Validators.required]),
      endDate: new FormControl("",[Validators.required]),
    })
   
    this.patients = [];  
  }

  adddates() {
    const startDate = this.calendarForm.get('startDate').value;
    const endDate = this.calendarForm.get('endDate').value;
    this.patientsNoActivityService.getPatientsNoActivity(startDate,endDate).subscribe(data => {
      this.patients = data;
      console.log(data);
      this.ngOnInit();
    });
  }
}