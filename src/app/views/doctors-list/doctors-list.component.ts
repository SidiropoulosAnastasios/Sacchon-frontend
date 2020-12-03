import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/Interfaces/Doctor/doctor';
import { DoctorsListService } from './doctors-list.service';

@Component({
  selector: 'app-doctors-list',
  templateUrl: './doctors-list.component.html',
  styleUrls: ['./doctors-list.component.scss']
})

export class DoctorsListComponent implements OnInit {

  doctorsList: Doctor[];

  constructor(private router: Router, private doctorsListService: DoctorsListService) { }

  ngOnInit(): void {

    this.doctorsList = [];

    this.doctorsListService.getPatientsList().subscribe(doctor => {
      this.doctorsList = doctor;
    });
  }
}
