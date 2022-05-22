package com.abhi.springboot.springbootdatajpa.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.abhi.springboot.springbootdatajpa.model.Patient;

public interface PatientRepository extends JpaRepository<Patient, Long> {
	  List<Patient> findByName(String name);
}