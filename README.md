# Sri Meenakshi Construction

A full-stack construction company website developed for **Sri Meenakshi Construction** using HTML, CSS, JavaScript, Java Spring Boot, and MySQL.

## Project Overview

Sri Meenakshi Construction is a responsive web application designed to showcase construction services, company information, completed projects, and provide a contact facility for customers.

The project consists of a frontend website and a Spring Boot backend with REST API and database integration.

## Features

* Responsive construction company website
* Company information and services
* Project showcase
* Professional navigation and user interface
* Contact form
* REST API for contact form submission
* Spring Boot backend
* MySQL database integration
* Contact information stored in the database
* Frontend and backend separated into independent modules

## Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript

### Backend

* Java
* Spring Boot
* Spring Data JPA
* REST API
* Maven

### Database

* MySQL

### Development Tools

* Eclipse IDE
* Git
* GitHub

## Project Structure

```text
sri-meenakshi-construction/
│
├── backend/
│   ├── ConstructionApplication.java
│   ├── Contact.java
│   ├── ContactController.java
│   ├── ContactRepository.java
│   ├── ContactService.java
│   └── pom.xml
│
├── frontend/
│   ├── SMC-Logo.png
│   ├── index.html
│   ├── script.js
│   └── style.css
│
└── README.md
```

## Backend Architecture

The Spring Boot backend follows a layered architecture:

```text
Client
  ↓
ContactController
  ↓
ContactService
  ↓
ContactRepository
  ↓
MySQL Database
```

### Main Backend Components

**ConstructionApplication.java**

Main Spring Boot application class responsible for starting the backend application.

**ContactController.java**

Provides REST API endpoints for handling contact form requests.

**ContactService.java**

Contains the business logic for processing contact information.

**ContactRepository.java**

Uses Spring Data JPA to communicate with the MySQL database.

**Contact.java**

Entity class representing contact information stored in the database.

## Frontend

The frontend provides the user interface for the construction company website.

Main files:

* `index.html` — Website structure
* `style.css` — Website styling and responsive design
* `script.js` — Client-side functionality and backend API communication
* `SMC-Logo.png` — Company logo

## Database

The backend uses **MySQL** to store contact form information.

Example configuration:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/sri_meenakshi_construction
spring.datasource.username=root
spring.datasource.password=YOUR_PASSWORD

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

> Replace `YOUR_PASSWORD` with your local MySQL password.

**Do not upload real database passwords or other credentials to a public GitHub repository.**

## How to Run

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/sri-meenakshi-construction.git
```

### 2. Open Backend

Open the `backend` project in Eclipse as a Maven project.

### 3. Configure MySQL

Create the required database in MySQL and update the database configuration in the Spring Boot application.

### 4. Run Spring Boot

Run:

```text
ConstructionApplication.java
```

The backend will start on:

```text
http://localhost:8080
```

### 5. Run Frontend

Open:

```text
frontend/index.html
```

in a web browser.

## API

The contact form communicates with the Spring Boot backend through a REST API.

Example:

```text
POST /api/contact
```

The API receives contact information from the frontend and stores it in the MySQL database.

## Purpose

This project demonstrates practical experience in:

* Java development
* Spring Boot
* REST API development
* MySQL database integration
* HTML/CSS/JavaScript
* Full-stack web development
* Git and GitHub

## Developer

**Thulasidharan M**

Electronics and Communication Engineering
Java Full Stack Developer | Embedded & IoT Enthusiast

## License

This project is created for educational and portfolio purposes.
