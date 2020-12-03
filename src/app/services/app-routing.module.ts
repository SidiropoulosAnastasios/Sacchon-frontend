import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from '../user/signin/signin.component';
import { SignupComponent } from '../user/signup/signup.component';
import { AvailablePatientsComponent } from '../views/available-patients/available-patients.component';
import { AverageComponent } from '../views/average/average.component';
import { ConsultationDoctorComponent } from '../views/consultation-doctor/consultation-doctor.component';
import { ConsultationComponent } from '../views/consultation/consultation.component';
import { ConsultationsDoctorComponent } from '../views/consultations-doctor/consultations-doctor.component';
import { ConsultationsTimeRangeComponent } from '../views/consultations-time-range/consultations-time-range.component';
import { ConsultationsComponent } from '../views/consultations/consultations.component';
import { DoctorPageComponent } from '../views/doctor-page/doctor-page.component';
import { DoctorsListComponent } from '../views/doctors-list/doctors-list.component';
import { DoctorsNoActivityComponent } from '../views/doctors-no-activity/doctors-no-activity.component';
import { HomeDoctorComponent } from '../views/home-doctor/home-doctor.component';
import { HomeReporterComponent } from '../views/home-reporter/home-reporter.component';
import { HomeComponent } from '../views/home/home.component';
import { MeasurementComponent } from '../views/measurement/measurement.component';
import { MeasurementsDoctorComponent } from '../views/measurements-doctor/measurements-doctor.component';
import { MeasurementsTimeRangeComponent } from '../views/measurements-time-range/measurements-time-range.component';
import { MeasurementsComponent } from '../views/measurements/measurements.component';
import { MyPatientsComponent } from '../views/my-patients/my-patients.component';
import { PatientPageComponent } from '../views/patient-page/patient-page.component';
import { PatientsConsultationTimeElapsedComponent } from '../views/patients-consultation-time-elapsed/patients-consultation-time-elapsed.component';
import { PatientsListComponent } from '../views/patients-list/patients-list.component';
import { PatientsNoActivityComponent } from '../views/patients-no-activity/patients-no-activity.component';
import { PatientsWaitingConsultationComponent } from '../views/patients-waiting-consultation/patients-waiting-consultation.component';
import { ReporterPageComponent } from '../views/reporter-page/reporter-page.component';


export const routes: Routes = [

  {
    path: 'signup', //register
    component: SignupComponent
  },
  {
    path: "signin", //login
    component: SigninComponent
  },
  {
    path: 'patients', //patients/id
    component: PatientPageComponent,
    children: [
      {
        path: 'home', //home
        component: HomeComponent
      },
      {
        path: 'measurements', //patients/pid/mesurements
        component: MeasurementsComponent,
      },
      {
        path: 'measurement/:mid', //patients/pid/mesurements/mid
        component: MeasurementComponent,
      },
      {
        path: 'measurements/average', //patients/pid/mesurements/average
        component: AverageComponent,
      },
      {
        path: 'consultations', //patients/pid/consultations
        component: ConsultationsComponent,
      }
    ]
  },
  {
    path: 'doctors', //doctors/did
    component: DoctorPageComponent,
    children: [
      {
        path: 'home-doctor', //home
        component: HomeDoctorComponent
      },
      {
        path: 'my-patients', //doctors/did/my-patients
        component: MyPatientsComponent,
      },
      {
        path: 'available-patients', //doctors/available-patients
        component: AvailablePatientsComponent
      },
      {
        path: 'patients-waiting-consultation', //doctors/patients-waiting-consultation
        component: PatientsWaitingConsultationComponent
      },
      {
        path: 'measurements-doctor/:pid', //doctors/did/patients/pid/measurements
        component: MeasurementsDoctorComponent
      },
      {
        path: 'consultations-doctor/:pid', //doctors/did/patients/pid/consultations
        component: ConsultationsDoctorComponent,
      },
      {
        path: 'consultation-doctor/:cid', //patients/pid/consultations/cid    patients/:pid/
        component: ConsultationDoctorComponent
      },
    ]
  },
  {
    path: 'reporter', //reporter
    component: ReporterPageComponent,
    children: [
      {
        path: 'home-reporter', //home
        component: HomeReporterComponent
      },
      {
        path: 'patients', //reporter/patients
        component: PatientsListComponent,
        children: [
          {
            path: 'measurements-time-range', //reporter/patients/pid/mesurements-time-range
            component: MeasurementsTimeRangeComponent,
          },
        ]
      },
      {
        path: 'patients-consultation-time-elapsed',
        component: PatientsConsultationTimeElapsedComponent
      },
      {
        path: 'patients-with-no-activity', //reporter/patients-no-activity
        component: PatientsNoActivityComponent
      },
      {
        path: 'doctors', //reporter/doctors
        component: DoctorsListComponent,
        children: [
          {
            path: 'consultations-time-range', //reporter/doctors/did/consultations-time-range
            component: ConsultationsTimeRangeComponent,
          },
        ]
      },
      {
        path: 'doctors-with-no-activity', //reporter/doctors-no-activity
        component: DoctorsNoActivityComponent
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




/* 
the main routes which are used by the 
patient,user and doctor for the necessary choice 
every path has got it owns parents and childrens

*/