import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/Interfaces/Doctor/doctor';
import { HomeDoctorService } from './home-doctor.service';

@Component({
  selector: 'app-home-doctor',
  templateUrl: './home-doctor.component.html',
  styleUrls: ['./home-doctor.component.scss']
})
export class HomeDoctorComponent implements OnInit {

  doctor: Doctor;

  constructor(private homeDoctorService: HomeDoctorService) { }

  ngOnInit(): void {
    this.homeDoctorService.getDoctor().subscribe(data => {
      this.doctor = data;
    });
  }

}
