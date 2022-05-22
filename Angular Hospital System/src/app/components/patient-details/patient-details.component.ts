import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from 'src/app/models/patient.model';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {

  @Input() viewMode = false;
  @Input() currentPatient: Patient = {
    name: '',
    visitedDoctor: '',
    dateOfVisit: ''
  };
  message = '';
  constructor(
    private patientService: PatientService,
    private route: ActivatedRoute,
    private router: Router) { }
  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getPatient(this.route.snapshot.params["id"]);
    }
  }
  getPatient(id: string): void {
    this.patientService.get(id)
      .subscribe({
        next: (data) => {
          this.currentPatient = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  updateDateOfVisit(date: string): void {
    const data = {
      name: this.currentPatient.name,
      visitedDoctor: this.currentPatient.visitedDoctor,
      dateOfVisit: this.currentPatient.dateOfVisit
    };
    this.message = '';
    this.patientService.update(this.currentPatient.id, data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.currentPatient.dateOfVisit = date;
          this.message = res.message ? res.message : 'The date of visit field was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }
  updatePatient(): void {
    this.message = '';
    this.patientService.update(this.currentPatient.id, this.currentPatient)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This Patient was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }
  deletePatient(): void {
    this.patientService.delete(this.currentPatient.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/patients']);
        },
        error: (e) => console.error(e)
      });
  }
}