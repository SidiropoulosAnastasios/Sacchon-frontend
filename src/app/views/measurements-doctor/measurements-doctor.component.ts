import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Measurement } from 'src/app/Interfaces/Measurement/measurement';
import { MeasurementsDoctorService } from './measurements-doctor.service';

@Component({
  selector: 'app-measurements-doctor',
  templateUrl: './measurements-doctor.component.html',
  styleUrls: ['./measurements-doctor.component.scss']
})
export class MeasurementsDoctorComponent implements OnInit {

  measurements: Measurement[];
  pid: string;
  subscribedParam = "initial value";

  constructor(private router: Router, private route: ActivatedRoute, private measurementsDoctorService:MeasurementsDoctorService) { }

  ngOnInit(): void {

    if(sessionStorage.getItem("credentials") == null){
      this.router.navigate(['login'])
    }

    this.measurements = [];

    
    this.pid = this.route.snapshot.paramMap.get("pid");
    this.route.paramMap.subscribe(params => {
      this.subscribedParam = params.get("pid");
    });

    this.measurementsDoctorService.getMeasurementsDoctor(this.pid).subscribe(data => {
      this.measurements = data;
      console.log(this.measurements);
    });

  }
}
