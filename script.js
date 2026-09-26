/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", function () {

        navMenu.classList.toggle("active");

        const icon = menuBtn.querySelector("i");

        if (icon) {

            if (navMenu.classList.contains("active")) {

                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");

            } else {

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        }

    });


    /* Close menu after clicking a link */

    const navLinks = document.querySelectorAll(".nav-menu a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navMenu.classList.remove("active");

            const icon = menuBtn.querySelector("i");

            if (icon) {

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        });

    });

}


/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(".reveal");


function revealOnScroll() {

    const windowHeight =
        window.innerHeight;

    revealElements.forEach(function (element) {

        const elementTop =
            element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {

            element.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    revealOnScroll
);

window.addEventListener(
    "load",
    revealOnScroll
);


/* =========================
   PROJECT COUNTERS
========================= */

const counters =
    document.querySelectorAll(".counter");

let countersStarted = false;


function startCounters() {

    if (countersStarted) {
        return;
    }

    const statsSection =
        document.querySelector(".project-stats");

    if (!statsSection) {
        return;
    }

    const sectionTop =
        statsSection.getBoundingClientRect().top;

    if (sectionTop < window.innerHeight - 100) {

        countersStarted = true;

        counters.forEach(function (counter) {

            const target =
                Number(
                    counter.getAttribute("data-target")
                );

            let current = 0;

            const increment =
                Math.max(
                    1,
                    Math.ceil(target / 50)
                );

            const timer =
                setInterval(function () {

                    current += increment;

                    if (current >= target) {

                        current = target;

                        clearInterval(timer);

                    }

                    counter.textContent =
                        current + "+";

                }, 30);

        });

    }

}


window.addEventListener(
    "scroll",
    startCounters
);

window.addEventListener(
    "load",
    startCounters
);


/* =========================
   SHOW MORE PROJECTS
========================= */

const showMoreBtn =
    document.getElementById("showMoreBtn");

const hiddenProjects =
    document.querySelectorAll(".hidden-project");


if (showMoreBtn && hiddenProjects.length > 0) {

    showMoreBtn.addEventListener(
        "click",
        function () {

            const isHidden =
                hiddenProjects[0].style.display === "" ||
                hiddenProjects[0].style.display === "none";


            hiddenProjects.forEach(
                function (project) {

                    if (isHidden) {

                        project.style.display =
                            "block";

                    } else {

                        project.style.display =
                            "none";

                    }

                }
            );


            if (isHidden) {

                showMoreBtn.innerHTML =
                    'Show Less Projects <i class="fas fa-chevron-up"></i>';

            } else {

                showMoreBtn.innerHTML =
                    'Show More Projects <i class="fas fa-chevron-down"></i>';

            }

        }
    );

}


/* =========================
   CONTACT FORM
========================= */

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


if (contactForm && formMessage) {

    contactForm.addEventListener(
        "submit",
        async function (event) {

            event.preventDefault();


            /* Get form values */

            const formData = {

                name:
                    document
                        .getElementById("name")
                        .value
                        .trim(),

                email:
                    document
                        .getElementById("email")
                        .value
                        .trim(),

                phone:
                    document
                        .getElementById("phone")
                        .value
                        .trim(),

                message:
                    document
                        .getElementById("message")
                        .value
                        .trim()

            };


            /* Show sending message */

            formMessage.textContent =
                "Sending message...";

            formMessage.style.color =
                "rgb(124, 58, 237)";


            try {

                /* Send data to Railway Spring Boot */

                const response =
                    await fetch(
                        "https://sri-meenakshi-construction-production.up.railway.app/api/contact",
                        {
                            method: "POST",

                            headers: {
                                "Content-Type":
                                    "application/json"
                            },

                            body:
                                JSON.stringify(formData)
                        }
                    );


                /* Read server response */

                const responseText =
                    await response.text();


                console.log(
                    "Server Status:",
                    response.status
                );

                console.log(
                    "Server Response:",
                    responseText
                );


                /* Check HTTP status */

                if (!response.ok) {

                    throw new Error(
                        `Server error ${response.status}: ${responseText}`
                    );

                }


                /* Success */

                formMessage.textContent =
                    "Message sent successfully!";

                formMessage.style.color =
                    "rgb(22, 163, 74)";


                /* Clear form */

                contactForm.reset();


            } catch (error) {

                console.error(
                    "Contact form error:",
                    error
                );


                /* Show actual error */

                formMessage.textContent =
                    "Unable to send message. Please try again.";

                formMessage.style.color =
                    "rgb(220, 38, 38)";

            }

        }
    );

}


/* =========================
   NAVBAR SCROLL EFFECT
========================= */

const navbar =
    document.querySelector(".navbar");


if (navbar) {

    window.addEventListener(
        "scroll",
        function () {

            if (window.scrollY > 50) {

                navbar.style.boxShadow =
                    "0 8px 25px rgba(33, 24, 45, 0.08)";

            } else {

                navbar.style.boxShadow =
                    "none";

            }

        }
    );

}