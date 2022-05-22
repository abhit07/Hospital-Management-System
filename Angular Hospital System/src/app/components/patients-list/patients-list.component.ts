import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/models/patient.model';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.css']
})
export class PatientsListComponent implements OnInit {
  patients?: Patient[];
  currentPatient: Patient = {};
  currentIndex = -1;
  name = '';
  constructor(private patientService: PatientService) { }
  ngOnInit(): void {
    this.retrievePatients();
  }
  retrievePatients(): void {
    this.patientService.getAll()
      .subscribe({
        next: (data) => {
          this.patients = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  refreshList(): void {
    this.retrievePatients();
    this.currentPatient = {};
    this.currentIndex = -1;
  }
  setActivePatient(patient: Patient, index: number): void {
    this.currentPatient = patient;
    this.currentIndex = index;
  }
  removeAllPatients(): void {
    this.patientService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }
  searchName(): void {
    this.currentPatient = {};
    this.currentIndex = -1;
    this.patientService.findByName(this.name)
      .subscribe({
        next: (data) => {
          this.patients = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
}
