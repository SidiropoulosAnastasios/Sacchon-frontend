import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Consultation } from 'src/app/Interfaces/Consultation/consultation';
import { ConsultationService } from './consultation.service';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.scss']
})
export class ConsultationComponent implements OnInit {

  consultationId: Consultation[];

  constructor(private availablePatientsService:ConsultationService,private router:Router) { }

  ngOnInit(): void {
   
      this.consultationId = [];
  
      this.availablePatientsService.getConsultation().subscribe(consultation => {
        this.consultationId = consultation;
        console.log(this.consultationId);

      });
  }
}