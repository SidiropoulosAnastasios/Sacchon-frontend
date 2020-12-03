import { Component } from '@angular/core';
import { ConsultationsService } from './views/consultations/consultations.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {

  constructor(private ConsultationsService: ConsultationsService) {
  }

  ngOnInit(){
   // this.ConsultationsService.getConsultations().subscribe(data=>{});
  }
}
