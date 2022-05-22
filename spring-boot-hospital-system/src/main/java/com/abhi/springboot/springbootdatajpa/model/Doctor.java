package com.abhi.springboot.springbootdatajpa.model;

import javax.persistence.*;
@Entity
@Table(name = "doctors")
public class Doctor {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	@Column(name = "name")
	private String name;
	@Column(name = "age")
	private int age;
	@Column(name = "gender")
	private String gender;
	@Column(name = "specialistFields")
	private String specialistFields;
	public Doctor() {
	}
	public Doctor(long id, String name, int age, String gender, String specialistFields) {
		super();
		this.id = id;
		this.name = name;
		this.age = age;
		this.gender = gender;
		this.specialistFields = specialistFields;
	}
	public long getId() {
		return id;
	}
	public String getName() {
		return name;
	}
	public int getAge() {
		return age;
	}
	public String getGender() {
		return gender;
	}
	public String getSpecialistFields() {
		return specialistFields;
	}
	@Override
	public String toString() {
		return "Doctor [id=" + id + ", name=" + name + ", age=" + age + ", gender=" + gender + ", specialistFields="
				+ specialistFields + "]";
	}
	public void setId(long id) {
		this.id = id;
	}
	public void setName(String name) {
		this.name = name;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public void setSpecialistFields(String specialistFields) {
		this.specialistFields = specialistFields;
	}
	
}