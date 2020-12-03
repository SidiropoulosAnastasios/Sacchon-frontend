import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Measurement } from 'src/app/Interfaces/Measurement/measurement';
import { MeasurementsTimeRangeService } from './measurements-time-range.service';

@Component({
  selector: 'app-measurements-time-range',
  templateUrl: './measurements-time-range.component.html',
  styleUrls: ['./measurements-time-range.component.scss']
})

export class MeasurementsTimeRangeComponent implements OnInit {

  measurements: Measurement[];

  addDateRangeForm: FormGroup;
  startDate: Date;
  endDate: Date;

  constructor(private router: Router, private measurementsTimeRangeService: MeasurementsTimeRangeService) { }

  ngOnInit(): void {
    if(sessionStorage.getItem("credentials") == null){
      this.router.navigate(['login'])
    }

    /**
     * the fields of (startDate/endDate) are required to be 
     * applied, for the correct function of the app.
     */
    this.addDateRangeForm = new FormGroup({
      startDate: new FormControl("",[Validators.required]),
      endDate: new FormControl("",[Validators.required])
    })
  }

  /**
   * that form has been created to receive the (startDate/endDate)
   * by the reporter, who want to see, the measurement of the patient
   */
  adddates() {
    this.startDate = this.addDateRangeForm.get('startDate').value;
    this.endDate = this.addDateRangeForm.get('endDate').value;
  }

}
