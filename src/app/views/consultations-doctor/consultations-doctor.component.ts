import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Consultation } from 'src/app/Interfaces/Consultation/consultation';
import { ConsultationsDoctorService } from './consultations-doctor.service';

@Component({
  selector: 'app-consultations-doctor',
  templateUrl: './consultations-doctor.component.html',
  styleUrls: ['./consultations-doctor.component.scss']
})
export class ConsultationsDoctorComponent implements OnInit {

  consultations: Consultation[];
  addconsultationForm: FormGroup;
  pid: string;
  subscribedParam = "initial value";

  constructor(private router: Router, private route: ActivatedRoute, private consultationsDoctorService: ConsultationsDoctorService) { }

  ngOnInit(): void {

    if(sessionStorage.getItem("credentials") == null){
      this.router.navigate(['login'])
    }

    this.addconsultationForm = new FormGroup({
      date: new FormControl("",[Validators.required]),
      medication: new FormControl("",[Validators.required]),
      dosage: new FormControl("",[Validators.required]),
      extraInfo: new FormControl("",[Validators.required])
    })

    this.consultations = [];

    this.pid = this.route.snapshot.paramMap.get("pid");
    this.route.paramMap.subscribe(params => {
      this.subscribedParam = params.get("pid");
      console.log( this.subscribedParam);
    });
  
    this.consultationsDoctorService.getConsultationsDoctor(this.pid).subscribe(data=> {
      this.consultations = data;
      console.log(this.consultations);
    });

  
  }
  
  addconsultation() {
    const date = this.addconsultationForm.get('date').value;
    const medication = this.addconsultationForm.get('medication').value;
    const dosage = this.addconsultationForm.get('dosage').value;
    const extraInfo = this.addconsultationForm.get('extraInfo').value;
    const patientId = parseInt(this.pid);
    const doctorId =  parseInt(sessionStorage.getItem('id'));
    let consultation: Consultation = {
      id:null,
      date:date,
      medication:medication,
      dosage:dosage,
      extraInfo:extraInfo,
      doctorId:doctorId,
      patientId:patientId
    }
    this.consultationsDoctorService.addConsultation(doctorId, patientId, consultation).subscribe( data => { 
      this.ngOnInit(); 
    });
  }

}