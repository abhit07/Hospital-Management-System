import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/models/doctor.model';
import { Patient } from 'src/app/models/patient.model';
import { DoctorService } from 'src/app/services/doctor.service';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {
  doctors?: Doctor[];
  patient: Patient = {
    name: '',
    visitedDoctor: '',
    dateOfVisit: ''
  };
  submitted = false;
  constructor(private patientService: PatientService,
              private doctorService: DoctorService) { }
  ngOnInit(): void {
    this.retrieveDoctors();
  }
  retrieveDoctors(): void {
    this.doctorService.getAll()
      .subscribe({
        next: (data) => {
          this.doctors = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  savePatient(): void {
    const data = {
      name: this.patient.name,
      visitedDoctor: this.patient.visitedDoctor,
      dateOfVisit: this.patient.dateOfVisit
    };
    this.patientService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }
  newPatient(): void {
    this.submitted = false;
    this.patient = {
      name: '',
      visitedDoctor: '',
      dateOfVisit: ''
    };
  }
}