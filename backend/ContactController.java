package com.srimeenakshi.construction.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.srimeenakshi.construction.entity.Contact;
import com.srimeenakshi.construction.service.ContactService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "*")
public class ContactController {

    private final ContactService contactService;

    public ContactController(ContactService contactService) {
        this.contactService = contactService;
    }

    // CREATE
    @PostMapping
    public ResponseEntity<Contact> createContact(
            @Valid @RequestBody Contact contact) {

        Contact savedContact = contactService.saveContact(contact);

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(savedContact);
    }

    // GET ALL
    @GetMapping
    public ResponseEntity<List<Contact>> getAllContacts() {

        return ResponseEntity.ok(
                contactService.getAllContacts()
        );
    }

    // GET BY ID
    @GetMapping("/{id}")
    public ResponseEntity<Contact> getContactById(
            @PathVariable Long id) {

        Optional<Contact> contact =
                contactService.getContactById(id);

        if (contact.isPresent()) {
            return ResponseEntity.ok(contact.get());
        }

        return ResponseEntity.notFound().build();
    }

    // DELETE
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteContact(
            @PathVariable Long id) {

        boolean deleted =
                contactService.deleteContact(id);

        if (deleted) {
            return ResponseEntity.ok(
                    "Contact deleted successfully"
            );
        }

        return ResponseEntity
                .status(HttpStatus.NOT_FOUND)
                .body("Contact not found");
    }
}