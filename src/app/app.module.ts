import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './services/app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './user/signin/signin.component';
import { SignupComponent } from './user/signup/signup.component';
import { PatientPageComponent } from './views/patient-page/patient-page.component';
import { DoctorPageComponent } from './views/doctor-page/doctor-page.component';
import { ReporterPageComponent } from './views/reporter-page/reporter-page.component';
import { HeaderComponent } from './layout/header/header.component';
import { PatientsNoActivityComponent } from './views/patients-no-activity/patients-no-activity.component';
import { MyPatientsComponent } from './views/my-patients/my-patients.component';
import { AvailablePatientsComponent } from './views/available-patients/available-patients.component';
import { DoctorsNoActivityComponent } from './views/doctors-no-activity/doctors-no-activity.component';
import { PatientsWaitingConsultationComponent } from './views/patients-waiting-consultation/patients-waiting-consultation.component';
import { MeasurementsComponent } from './views/measurements/measurements.component';
import { AverageComponent } from './views/average/average.component';
import { ConsultationsComponent } from './views/consultations/consultations.component';
import { FooterComponent } from './layout/footer/footer.component';
import { DoctorMenuComponent } from './menus/doctor-menu/doctor-menu.component';
import { PatientMenuComponent } from './menus/patient-menu/patient-menu.component';
import { ReporterMenuComponent } from './menus/reporter-menu/reporter-menu.component';
import { PatientsListComponent } from './views/patients-list/patients-list.component';
import { DoctorsListComponent } from './views/doctors-list/doctors-list.component';
import { HttpClientModule } from '@angular/common/http'; 
import { ConsultationsService } from './views/consultations/consultations.service';
import { MeasurementComponent } from './views/measurement/measurement.component';
import { ConsultationComponent } from './views/consultation/consultation.component';
import { MeasurementsTimeRangeComponent } from './views/measurements-time-range/measurements-time-range.component';
import { ConsultationsTimeRangeComponent } from './views/consultations-time-range/consultations-time-range.component';
import { PatientsConsultationTimeElapsedComponent } from './views/patients-consultation-time-elapsed/patients-consultation-time-elapsed.component';
import { MeasurementsDoctorComponent } from './views/measurements-doctor/measurements-doctor.component';
import { ConsultationsDoctorComponent } from './views/consultations-doctor/consultations-doctor.component';
import { ConsultationDoctorComponent } from './views/consultation-doctor/consultation-doctor.component';
import { HomeComponent } from './views/home/home.component';
import { HomeReporterComponent } from './views/home-reporter/home-reporter.component';
import { HomeDoctorComponent } from './views/home-doctor/home-doctor.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SignupComponent,
    PatientPageComponent,
    DoctorPageComponent,
    ReporterPageComponent,
    PatientsNoActivityComponent,
    MyPatientsComponent,
    AvailablePatientsComponent,
    DoctorsNoActivityComponent,
    PatientsWaitingConsultationComponent,
    MeasurementsComponent,
    AverageComponent,
    ConsultationsComponent,
    DoctorMenuComponent,
    PatientMenuComponent,
    ReporterMenuComponent,
    PatientsListComponent,
    DoctorsListComponent,
    SigninComponent,
    MeasurementComponent,
    ConsultationComponent,
    MeasurementsTimeRangeComponent,
    ConsultationsTimeRangeComponent,
    PatientsConsultationTimeElapsedComponent,
    MeasurementsDoctorComponent,
    ConsultationsDoctorComponent,
    ConsultationDoctorComponent,
    HomeComponent,
    HomeReporterComponent,
    HomeDoctorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ConsultationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }



/* all the necessary Module, Components
   have been insert in the main app.module.ts 
   for the correct execution
*/