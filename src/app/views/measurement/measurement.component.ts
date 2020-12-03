
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Measurement } from 'src/app/Interfaces/Measurement/measurement';
import { MeasurementService } from './measurement.service';

@Component({
  selector: 'app-measurement',
  templateUrl: './measurement.component.html',
  styleUrls: ['./measurement.component.scss']
})
export class MeasurementComponent implements OnInit {

  measurement: Measurement;
  editmeasurementForm: FormGroup;
  mid: string;
  subscribedParam = "initial value";

  constructor(private router: ActivatedRoute, private measurementService: MeasurementService) { }

  ngOnInit(): void {
    this.editmeasurementForm = new FormGroup({
      date: new FormControl("",[Validators.required]),
      glucoseLevel: new FormControl("",[Validators.required]),
      carbIntake: new FormControl("",[Validators.required])
    })

    this.mid = this.router.snapshot.paramMap.get("mid");
    this.router.paramMap.subscribe(params => {
      this.subscribedParam = params.get("mid");
    });

    this.measurementService.getMeasurement(this.mid).subscribe(measurement => {
      this.measurement = measurement;
    });
  }

  // getMeasurementId() {
  //     this.router.params.subscribe(id => {
  //     this.measurementService.getMeasurementById(id.mid);
  //   })
  // }

  /**
   * when this editmeasurement executed, it changes the values
   * which have already been given by the patient and saved again in Measurement list
   * 
   * that method has 4 attributes, date glucose level carb intake and
   * patient id.
   */
  editmeasurement() {
    const id = parseInt(this.mid);
    const date = this.editmeasurementForm.get('date').value;
    const glucoseLevel = this.editmeasurementForm.get('glucoseLevel').value;
    const carbIntake = this.editmeasurementForm.get('carbIntake').value;
    const patientId =  parseInt(sessionStorage.getItem('id'));
    let measurement: Measurement = {
      id:id,
      date:date,
      glucoseLevel:glucoseLevel,
      carbIntake:carbIntake,
      patientId:patientId
    }
    this.measurementService.editMeasurement(id, measurement).subscribe( data => {
      this.ngOnInit();
    });
  }

  // removemeasurement(mid) {
  //   this.measurementService.removeMeasurement(mid);
  // }

}
