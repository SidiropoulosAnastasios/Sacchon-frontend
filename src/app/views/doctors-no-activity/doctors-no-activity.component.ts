import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/Interfaces/Doctor/doctor';
import { DoctorsNoActivityService } from './doctors-no-activity.service';

@Component({
  selector: 'app-doctors-no-activity',
  templateUrl: './doctors-no-activity.component.html',
  styleUrls: ['./doctors-no-activity.component.scss']
})
export class DoctorsNoActivityComponent implements OnInit {

  calendarForm: FormGroup;
  startDate: Date;
  endDate: Date;
  doctors: Doctor[];

  constructor(private router:Router, private doctorsNoActivityService: DoctorsNoActivityService) { }

  ngOnInit(): void {

    if(sessionStorage.getItem("credentials") == null){
      this.router.navigate(['login'])
    }

    this.calendarForm = new FormGroup({
      startDate: new FormControl("",[Validators.required]),
      endDate: new FormControl("",[Validators.required]),
    })

    this.doctors = [];
 }

  adddates() {
    const startDate = this.calendarForm.get('startDate').value;
    const endDate = this.calendarForm.get('endDate').value;
    this.doctorsNoActivityService.getDoctorsNoActivity(startDate,endDate).subscribe(data => {
      this.doctors = data;
      console.log(data);
      this.ngOnInit();
    });
  }
}