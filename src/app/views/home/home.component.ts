import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/interfaces/Patient/patient';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  patient: Patient;

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
      this.homeService.getPatient().subscribe(data => {
      this.patient = data;
    });
  }
}
