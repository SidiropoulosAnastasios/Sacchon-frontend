import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/Interfaces/Doctor/doctor';
import { ConsultationsTimeRangeService } from './consultations-time-range.service';


@Component({
  selector: 'app-consultations-time-range',
  templateUrl: './consultations-time-range.component.html',
  styleUrls: ['./consultations-time-range.component.scss']
})

export class ConsultationsTimeRangeComponent implements OnInit {

  doctors: Doctor[];

  constructor(private consultationsTimeRangeService:ConsultationsTimeRangeService,private router:Router) { }

  ngOnInit(): void {
    this.doctors = [];
    this.consultationsTimeRangeService.getConsultationsTimeRange().subscribe(consultationTimeRange=>{
      this.doctors = consultationTimeRange;
      console.log(this.doctors);
  });
}}
