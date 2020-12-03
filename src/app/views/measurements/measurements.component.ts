import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Measurement } from 'src/app/Interfaces/Measurement/measurement';
import { MeasurementsService } from './measurements.service';
 
@Component({
  selector: 'app-measurements',
  templateUrl: './measurements.component.html',
  styleUrls: ['./measurements.component.scss']
})

export class MeasurementsComponent implements OnInit {

  measurements: Measurement[];
  addmeasurementForm: FormGroup;
  
  constructor(private router: Router, private measurementsService: MeasurementsService) { }


  /** when that ngOnInti starts, it shows 3 required 
   * field which must be applied by the patient, he have to insert
   * date glucose level and carb intake
   */
  ngOnInit(): void {
    
    if(sessionStorage.getItem("credentials") == null){
      this.router.navigate(['login'])
    }

    this.addmeasurementForm = new FormGroup({
      date: new FormControl("",[Validators.required]),
      glucoseLevel: new FormControl("",[Validators.required]),
      carbIntake: new FormControl("",[Validators.required])
    })

    this.measurements = [];

    this.measurementsService.getMeasurements().subscribe(measurement => {
      this.measurements = measurement;
    });
  }

  /**
   * when this addmeasurement executed, it saves the instert values
   * which have been given by the patient and saved in Measurement list
   * 
   * that method takes 4 attributesm, date glucose level carb intake and
   * patient id.
   */

  addmeasurement() {
    const date = this.addmeasurementForm.get('date').value;
    const glucoseLevel = parseInt(this.addmeasurementForm.get('glucoseLevel').value);
    const carbIntake = parseInt(this.addmeasurementForm.get('carbIntake').value);
    const patientId =  parseInt(sessionStorage.getItem('id'));
    let measurement: Measurement = {
      id:null,
      date:date,
      glucoseLevel:glucoseLevel,
      carbIntake:carbIntake,
      patientId:patientId
    }
    this.measurementsService.addMeasurement(patientId, measurement).subscribe( data => {
      this.ngOnInit();
    });
  }

}

