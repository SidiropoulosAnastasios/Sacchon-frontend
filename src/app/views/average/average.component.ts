import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Average } from 'src/app/Interfaces/Average/average';
import { AverageService } from './average.service';

@Component({
  selector: 'app-average',
  templateUrl: './average.component.html',
  styleUrls: ['./average.component.scss']
})
export class AverageComponent implements OnInit {

  calendarForm: FormGroup;
  startDate: Date;
  endDate: Date;
  averages: Average;

  constructor(private router:Router, private averageService:AverageService) { }

  ngOnInit(): void {

    if(sessionStorage.getItem("credentials") == null){
      this.router.navigate(['login'])
    }
    this.calendarForm = new FormGroup({
      startDate: new FormControl("",[Validators.required]),
      endDate: new FormControl("",[Validators.required]),
    })
  }
  
  // ngOnChanges(): void {
  //   this.averageService.getAverages().subscribe(average=> {
  //     this.averages = average;
  //     console.log(this.averages);
  //   });
  // }

    /*
    the method below can accept the dates(start/end) which 
    have been choosen by the patient of average measurements.
  */
  adddates() {
    const startDate = this.calendarForm.get('startDate').value;
    const endDate = this.calendarForm.get('endDate').value;
    console.log(startDate,endDate);
    this.averageService.getAverages(startDate,endDate).subscribe( data => {
      console.log(data);  
      this.averages=data;
      this.ngOnInit();
    });
  }
}
