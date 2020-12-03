import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/Interfaces/Doctor/doctor';
import { DoctorMenuComponent } from 'src/app/menus/doctor-menu/doctor-menu.component';
import { DoctorPageService } from './doctor-page.service';


@Component({
  selector: 'app-doctor-page',
  templateUrl: './doctor-page.component.html',
  styleUrls: ['./doctor-page.component.scss']
})
export class DoctorPageComponent implements OnInit {
  doctors: Doctor[];

  constructor(private doctorPageService:DoctorPageService, private router:Router) { }

  ngOnInit(): void {
    this.doctors =[];
    this.doctorPageService.getDoctors().subscribe(doctorPage=>{
     this.doctors = doctorPage;
     console.log(this.doctors);
    });
    
    declarations: [
      DoctorMenuComponent
    ]
}}


