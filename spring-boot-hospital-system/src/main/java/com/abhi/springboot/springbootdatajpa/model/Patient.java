package com.abhi.springboot.springbootdatajpa.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name = "patients")
public class Patient {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	@Column(name = "name")
	private String name;
	@Column(name = "visitedDoctor")
	private String visitedDoctor;
	@Column(name = "dateOfVisit")
	private String dateOfVisit;

	public Patient() {
	}

	public Patient(long id, String name, String visitedDoctor, String dateOfVisit) {
		super();
		this.id = id;
		this.name = name;
		this.visitedDoctor = visitedDoctor;
		this.dateOfVisit = dateOfVisit;
	}

	public long getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public String getVisitedDoctor() {
		return visitedDoctor;
	}

	public String getDateOfVisit() {
		return dateOfVisit;
	}

	@Override
	public String toString() {
		return "Patient [id=" + id + ", name=" + name + ", visitedDoctor=" + visitedDoctor + ", dateOfVisit="
				+ dateOfVisit + "]";
	}

	public void setId(long id) {
		this.id = id;
	}

	public void setName(String name) {
		this.name = name;
	}

	public void setVisitedDoctor(String visitedDoctor) {
		this.visitedDoctor = visitedDoctor;
	}

	public void setDateOfVisit(String dateOfVisit) {
		this.dateOfVisit = dateOfVisit;
	}
	
}