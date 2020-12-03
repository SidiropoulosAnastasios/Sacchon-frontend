import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Consultation } from 'src/app/Interfaces/Consultation/consultation';
import { ConsultationDoctorService } from './consultation-doctor.service';

@Component({
  selector: 'app-consultation-doctor',
  templateUrl: './consultation-doctor.component.html',
  styleUrls: ['./consultation-doctor.component.scss']
})

export class ConsultationDoctorComponent implements OnInit {

  consultation: Consultation;
  editconsultationForm: FormGroup;
  cid: string;
  pid: string;
  subscribedParam = "initial value";
  
  constructor(private router: ActivatedRoute, private consultationDoctorService: ConsultationDoctorService) { }
  
  ngOnInit(): void {

    this.editconsultationForm = new FormGroup({
      date: new FormControl("",[Validators.required]),
      medication: new FormControl("",[Validators.required]),
      dosage: new FormControl("",[Validators.required]),
      extraInfo: new FormControl("",[Validators.required])
    })

      this.cid = this.router.snapshot.paramMap.get("cid");
      this.pid = this.router.snapshot.paramMap.get("pid");
      console.log(this.cid);
      console.log(this.pid);
    // this.router.params.subscribe(id => {
    //     this.getMeasurementId();
    // })
    this.consultationDoctorService.getConsultationDoctor(this.pid, this.cid).subscribe(consultation=> {
      console.log(consultation);
      this.consultation = consultation;
      
    this.router.paramMap.subscribe(params => {
      this.subscribedParam = params.get("cid");
      this.subscribedParam = params.get("pid");
    });
    });  
  }

  editconsultation() {
    const id = parseInt(this.cid);
    const date = this.editconsultationForm.get('date').value;
    const medication = this.editconsultationForm.get('medication').value;
    const dosage = this.editconsultationForm.get('dosage').value;
    const extraInfo = this.editconsultationForm.get('extraInfo').value;
    const patientId = parseInt(this.pid);
    const doctorId =  parseInt(sessionStorage.getItem('id'));
    let consultation: Consultation = {
      id:id,
      date:date,
      medication:medication,
      dosage:dosage,
      extraInfo:extraInfo,
      doctorId:doctorId,
      patientId:patientId
    }
    this.consultationDoctorService.editConsultation(patientId, id, consultation).subscribe( data => { 
      this.ngOnInit(); 
    });
  }

  removeconsultation() {
    const id = parseInt(this.cid);
    const date = this.editconsultationForm.get('date').value;
    const medication = this.editconsultationForm.get('medication').value;
    const dosage = this.editconsultationForm.get('dosage').value;
    const extraInfo = this.editconsultationForm.get('extraInfo').value;
    const patientId = parseInt(this.pid);
    const doctorId =  parseInt(sessionStorage.getItem('id'));
    let consultation: Consultation = {
      id:id,
      date:date,
      medication:medication,
      dosage:dosage,
      extraInfo:extraInfo,
      doctorId:doctorId,
      patientId:patientId
    }
    this.consultationDoctorService.removeConsultationDoctor(patientId, id);
    this.ngOnInit(); 
  }

}
