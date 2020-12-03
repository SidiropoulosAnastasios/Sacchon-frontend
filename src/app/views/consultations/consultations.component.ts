import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Consultation } from 'src/app/Interfaces/Consultation/consultation';
import { ConsultationsService } from './consultations.service';

@Component({
  selector: 'app-consultations',
  templateUrl: './consultations.component.html',
  styleUrls: ['./consultations.component.scss']
})
export class ConsultationsComponent implements OnInit {

  consultations: Consultation[];

  addconsultationForm: FormGroup;
  date:Date;
  medication:String;
  dosage:String;
  extraInfo:String;

  constructor(private router: Router, private consultationsService: ConsultationsService) { }

  

  ngOnInit(): void {

    this.addconsultationForm = new FormGroup({
      date: new FormControl("",[Validators.required]),
      glucoseLevel: new FormControl("",[Validators.required]),
      carbIntake: new FormControl("",[Validators.required]),
      dosage: new FormControl("",[Validators.required]),
      extraInfo: new FormControl("",[Validators.required])
    })

    this.consultations = [];

    this.consultationsService.getConsultations().subscribe(consultation => {
      this.consultations = consultation;
    });
  }

  // addconsultation() {
  //   const date = this.addmeasurementForm.get('date').value;
  //   const glucoseLevel = this.addmeasurementForm.get('glucoseLevel').value;
  //   const carbIntake = this.addmeasurementForm.get('carbIntake').value;
  //   const patientId =  sessionStorage.getItem('id');
  //   this.measurementsService.addMeasurement(date, glucoseLevel, carbIntake, patientId);
  // }


}
