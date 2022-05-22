import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from 'src/app/models/doctor.model';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.css']
})
export class DoctorDetailsComponent implements OnInit {

  @Input() viewMode = false;
  @Input() currentDoctor: Doctor = {
    name: '',
    age: 0,
    gender: '',
    specialistFields:''
  };
  message = '';
  constructor(
    private doctorService: DoctorService,
    private route: ActivatedRoute,
    private router: Router) { }
  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getDoctor(this.route.snapshot.params["id"]);
    }
  }
  getDoctor(id: string): void {
    this.doctorService.get(id)
      .subscribe({
        next: (data) => {
          this.currentDoctor = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  updateSpecialistFields(fields: string): void {
    const data = {
      name: this.currentDoctor.name,
      age: this.currentDoctor.age,
      gender: this.currentDoctor.gender,
      specialistFields: this.currentDoctor.specialistFields
    };
    this.message = '';
    this.doctorService.update(this.currentDoctor.id, data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.currentDoctor.specialistFields = fields;
          this.message = res.message ? res.message : 'The specialist field was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }
  updateDoctor(): void {
    this.message = '';
    this.doctorService.update(this.currentDoctor.id, this.currentDoctor)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This tutorial was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }
  deleteDoctor(): void {
    this.doctorService.delete(this.currentDoctor.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/doctors']);
        },
        error: (e) => console.error(e)
      });
  }
}