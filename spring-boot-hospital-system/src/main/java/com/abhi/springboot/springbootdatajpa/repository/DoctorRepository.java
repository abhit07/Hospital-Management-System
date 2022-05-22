package com.abhi.springboot.springbootdatajpa.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.abhi.springboot.springbootdatajpa.model.Doctor;

public interface DoctorRepository extends JpaRepository<Doctor, Long> {
	  List<Doctor> findByName(String name);
}
