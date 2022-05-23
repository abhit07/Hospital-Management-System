package com.abhi.springboot.springbootdatajpa.controller;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.abhi.springboot.springbootdatajpa.model.Doctor;
import com.abhi.springboot.springbootdatajpa.repository.DoctorRepository;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/")
public class DoctorController {
  @Autowired
  DoctorRepository doctorRepository;
  @GetMapping("/doctors")
  public ResponseEntity<List<Doctor>> getAllDoctors(@RequestParam(required = false) String name) {
    try {
      List<Doctor> doctors = new ArrayList<Doctor>();
      if (name == null)
    	  doctorRepository.findAll().forEach(doctors::add);
      else
    	  doctorRepository.findByName(name).forEach(doctors::add);
      if (doctors.isEmpty()) {
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
      }
      return new ResponseEntity<>(doctors, HttpStatus.OK);
    } catch (Exception e) {
      return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  @GetMapping("/doctors/{id}")
  public ResponseEntity<Doctor> getDoctorById(@PathVariable("id") long id) {
    Optional<Doctor> doctorData = doctorRepository.findById(id);
    if (doctorData.isPresent()) {
      return new ResponseEntity<>(doctorData.get(), HttpStatus.OK);
    } else {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
  }
  @PostMapping("/doctors")
  public ResponseEntity<Doctor> createDoctor(@RequestBody Doctor doctor) {
    try {
      Doctor _tutorial = doctorRepository
          .save(new Doctor(doctor.getId(), doctor.getName(), doctor.getAge(),doctor.getGender(),doctor.getSpecialistFields()));
      return new ResponseEntity<>(_tutorial, HttpStatus.CREATED);
    } catch (Exception e) {
      return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  @PutMapping("/doctors/{id}")
  public ResponseEntity<Doctor> updateDoctor(@PathVariable("id") long id, @RequestBody Doctor doctor) {
    Optional<Doctor> doctorData = doctorRepository.findById(id);
    if (doctorData.isPresent()) {
      Doctor _doctor = doctorData.get();
      _doctor.setName(doctor.getName());
      _doctor.setAge(doctor.getAge());
      _doctor.setGender(doctor.getGender());
      _doctor.setSpecialistFields(doctor.getSpecialistFields());
      return new ResponseEntity<>(doctorRepository.save(_doctor), HttpStatus.OK);
    } else {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
  }
  @DeleteMapping("/doctors/{id}")
  public ResponseEntity<HttpStatus> deleteDoctor(@PathVariable("id") long id) {
    try {
    	doctorRepository.deleteById(id);
      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    } catch (Exception e) {
      return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  @DeleteMapping("/doctors")
  public ResponseEntity<HttpStatus> deleteAllDoctors() {
    try {
    	doctorRepository.deleteAll();
      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    } catch (Exception e) {
      return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}