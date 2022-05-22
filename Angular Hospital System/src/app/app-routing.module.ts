import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDoctorComponent } from './components/add-doctor/add-doctor.component';
import { AddPatientComponent } from './components/add-patient/add-patient.component';
import { DoctorDetailsComponent } from './components/doctor-details/doctor-details.component';
import { DoctorsListComponent } from './components/doctors-list/doctors-list.component';
import { PatientDetailsComponent } from './components/patient-details/patient-details.component';
import { PatientsListComponent } from './components/patients-list/patients-list.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'doctors', component: DoctorsListComponent },
  { path: 'patients', component: PatientsListComponent },
  { path: 'doctors/:id', component: DoctorDetailsComponent },
  { path: 'patients/:id', component: PatientDetailsComponent },
  { path: 'add/doctor', component: AddDoctorComponent },
  { path: 'add/patient', component: AddPatientComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
