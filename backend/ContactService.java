package com.srimeenakshi.construction.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.srimeenakshi.construction.entity.Contact;
import com.srimeenakshi.construction.repository.ContactRepository;

@Service
public class ContactService {

    private final ContactRepository repository;
    private final EmailService emailService;

    public ContactService(
            ContactRepository repository,
            EmailService emailService) {

        this.repository = repository;
        this.emailService = emailService;
    }

    // CREATE
    public Contact saveContact(Contact contact) {

        Contact savedContact = repository.save(contact);

        emailService.sendContactEmail(savedContact);

        return savedContact;
    }

    // GET ALL
    public List<Contact> getAllContacts() {

        return repository.findAll();
    }

    // GET BY ID
    public Optional<Contact> getContactById(Long id) {

        return repository.findById(id);
    }

    // DELETE
    public boolean deleteContact(Long id) {

        if (repository.existsById(id)) {

            repository.deleteById(id);

            return true;
        }

        return false;
    }
}