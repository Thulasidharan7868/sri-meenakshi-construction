package com.srimeenakshi.construction.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.srimeenakshi.construction.entity.Contact;

public interface ContactRepository extends JpaRepository<Contact, Long> {

}